/* ==========================================================================
   core/i18n.js — translation registry + DOM application
   Usage in markup:
     <h2 data-i18n="hero.title"></h2>
     <div data-i18n-html="hero.titleHtml"></div>
     <input data-i18n-attr="placeholder:form.name|aria-label:form.nameAria">
   Missing keys fall back to English, then to the key itself (with a warning).
   ========================================================================== */
(function () {
  'use strict';
  var JY = (window.JY = window.JY || {});
  var d = JY.dom;

  var DEFAULT = 'en';
  var STORE_KEY = 'jy.locale';
  var REGION_KEY = 'jy.region';

  var state = {
    codes: [],
    meta: {},
    dicts: {},
    current: DEFAULT,
    listeners: [],
    warned: {}
  };

  function get(obj, path) {
    var parts = String(path).split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object') return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function t(path, vars) {
    var v = get(state.dicts[state.current], path);
    if (v === undefined && state.current !== DEFAULT) v = get(state.dicts[DEFAULT], path);
    if (v === undefined) {
      if (!state.warned[path]) { state.warned[path] = 1; console.warn('[i18n] missing key:', path); }
      return path;
    }
    return fmt(v, vars);
  }

  function fmt(v, vars) {
    if (!vars) return v;
    if (typeof v === 'string') {
      return v.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : '{' + k + '}'; });
    }
    return v;
  }

  function register(code, meta, dict) {
    if (state.codes.indexOf(code) === -1) state.codes.push(code);
    state.meta[code] = meta;
    state.dicts[code] = dict;
  }

  function applyStatic(root) {
    var scope = root || document;

    d.qsa('[data-i18n]', scope).forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      el.textContent = typeof v === 'object' ? JSON.stringify(v) : v;
    });

    d.qsa('[data-i18n-html]', scope).forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    d.qsa('[data-i18n-attr]', scope).forEach(function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 1) return;
        var attr = pair.slice(0, i).trim();
        var key = pair.slice(i + 1).trim();
        el.setAttribute(attr, String(t(key)));
      });
    });
  }

  function applyMeta() {
    var meta = state.meta[state.current] || {};
    var html = document.documentElement;
    html.setAttribute('lang', meta.tag || state.current);
    html.setAttribute('dir', meta.dir || 'ltr');
    document.title = t('meta.title');
    var descEl = d.qs('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', t('meta.description'));
    var ogEl = d.qs('meta[property="og:description"]');
    if (ogEl) ogEl.setAttribute('content', t('meta.ogDescription'));
    var themeEl = d.qs('meta[name="theme-color"]');
    if (themeEl && JY.theme) themeEl.setAttribute('content', JY.theme.color());
  }

  function setLocale(code, opts) {
    opts = opts || {};
    if (!state.dicts[code]) code = DEFAULT;
    state.current = code;
    if (opts.persist !== false) d.store.set(STORE_KEY, code);

    var meta = state.meta[code];
    if (opts.setRegion !== false && meta && meta.region && JY.theme) {
      JY.theme.setRegion(meta.region, { persist: !!opts.persistRegion });
    }

    applyMeta();
    applyStatic();
    JY.render();

    state.listeners.forEach(function (fn) { fn(code); });
    return code;
  }

  JY.i18n = {
    register: register,
    t: t,
    fmt: fmt,
    get: function (path, vars) { return t(path, vars); },
    list: function () { return state.codes.slice(); },
    metaOf: function (code) { return state.meta[code] || {}; },
    current: function () { return state.current; },
    setLocale: setLocale,
    applyStatic: applyStatic,
    onChange: function (fn) { state.listeners.push(fn); },
    storeKey: STORE_KEY,
    regionKey: REGION_KEY
  };
})();
