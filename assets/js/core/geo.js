/* ==========================================================================
   core/geo.js — resolve the visitor's country from their IP (client side)
   Multiple public endpoints are tried in order; everything degrades gracefully
   to the browser language, then to the regional default, then to English.
   ========================================================================== */
(function () {
  'use strict';
  var JY = (window.JY = window.JY || {});
  var d = JY.dom;

  var ENDPOINTS = [
    { url: 'https://ipwho.is/', pick: function (o) { return o && o.country_code; } },
    { url: 'https://ipapi.co/json/', pick: function (o) { return o && o.country_code; } },
    { url: 'https://get.geojs.io/v1/ip/country.json', pick: function (o) { return o && o.country; } },
    { url: 'https://ip-api.com/json/', pick: function (o) { return o && o.countryCode; } }
  ];

  var TOTAL_BUDGET = 6000;   // ms for the whole detection
  var PER_REQ = 2600;        // ms per endpoint

  function fetchJSON(url, ms) {
    return new Promise(function (resolve, reject) {
      var ctl = typeof AbortController === 'function' ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctl) ctl.abort(); reject(new Error('timeout')); }, ms);
      var opts = { cache: 'no-store' };
      if (ctl) opts.signal = ctl.signal;
      fetch(url, opts)
        .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
        .then(function (j) { clearTimeout(timer); resolve(j); })
        .catch(function (e) { clearTimeout(timer); reject(e); });
    });
  }

  function raceTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise(function (_, rej) { setTimeout(function () { rej(new Error('budget')); }, ms); })
    ]);
  }

  function ipCountry() {
    var chain = ENDPOINTS.reduce(function (prev, ep) {
      return prev.catch(function () { return fetchJSON(ep.url, PER_REQ).then(ep.pick); });
    }, Promise.reject(new Error('start')));

    return raceTimeout(chain, TOTAL_BUDGET).then(function (code) {
      return code ? String(code).toUpperCase() : null;
    }).catch(function () { return null; });
  }

  /* ---- resolution: country -> region -> locale ---- */
  function resolve(countryCode) {
    var map = (JY.data && JY.data.countryMap) || {};
    var regions = (JY.data && JY.data.regions) || {};
    var cc = (countryCode || '').toUpperCase();

    var hit = map[cc];
    var region = (hit && hit.region) || 'sea';
    var locale = (hit && hit.locale) || (regions[region] && regions[region].defaultLocale) || 'en';

    // A locale is "exact" only when the visitor's own country language is served.
    var exact = !!(hit && hit.locale && JY.i18n.list().indexOf(hit.locale) > -1);

    return { country: cc || null, region: region, locale: locale, exact: exact };
  }

  /* ---- browser-language based fallback (no network involved) ---- */
  function fromBrowser() {
    var langs = [];
    if (navigator.languages) langs = langs.concat(navigator.languages);
    if (navigator.language) langs.push(navigator.language);
    var served = JY.i18n.list();

    for (var i = 0; i < langs.length; i++) {
      var raw = String(langs[i] || '');
      var low = raw.toLowerCase();
      if (low.indexOf('zh') === 0) {
        // Traditional markers: TW, HK, MO, or the -Hant script subtag
        if (/hant|tw|hk|mo/.test(low)) return { locale: 'zh-TW', region: 'eas', exact: true };
        return { locale: 'zh-CN', region: 'eas', exact: true };
      }
      var base = low.split('-')[0];
      if (served.indexOf(base) > -1) {
        var meta = JY.i18n.metaOf(base);
        return { locale: base, region: meta.region || 'sea', exact: true };
      }
    }
    return null;
  }

  function detect() {
    var cached = d.store.get(JY.i18n.regionKey);
    return ipCountry().then(function (cc) {
      if (cc) return resolve(cc);
      var fromB = fromBrowser();
      if (fromB) { fromB.country = null; fromB.from = 'browser'; return fromB; }
      return { country: null, region: cached || 'sea', locale: 'en', exact: false, from: 'default' };
    });
  }

  JY.geo = {
    detect: detect,
    resolve: resolve,
    fromBrowser: fromBrowser,
    ipCountry: ipCountry
  };
})();
