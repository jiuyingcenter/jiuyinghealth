/* ==========================================================================
   main.js — bootstrap: resolve locale + region, render everything, then
   (only when the visitor has not chosen a language yet) refine from their IP.
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom;

  /* --------------------------- render pipeline --------------------------- */
  JY.render = function () {
    d.qsa('[data-slot]').forEach(function (el) {
      var id = el.getAttribute('data-slot');
      var fn = JY.sections[id];
      if (typeof fn === 'function') {
        try { fn(el); }
        catch (err) { console.error('[render] section "' + id + '" failed:', err); }
      }
    });
    d.observeReveal(document);
    d.observeCount(document);
  };

  /* ------------------------------ bootstrap ------------------------------ */
  function boot() {
    var savedLocale = d.store.get(JY.i18n.storeKey);
    var savedRegion = d.store.get(JY.i18n.regionKey);

    /* 1. region first — drives the palette from the very first paint */
    JY.theme.setRegion(savedRegion || 'sea');

    /* 2. locale: saved choice > browser language > English */
    var start = savedLocale;
    if (!start || JY.i18n.list().indexOf(start) === -1) {
      var fromB = JY.geo.fromBrowser();
      start = fromB ? fromB.locale : 'en';
      if (fromB && !savedRegion) JY.theme.setRegion(fromB.region);
    }

    JY.i18n.setLocale(start, {
      persist: !!savedLocale,
      setRegion: false            // keep the region we just resolved
    });

    JY.chrome.renderChrome();
    JY.chrome.renderFab();
    JY.render();

    /* 3. refine from IP only when the visitor has not picked a language */
    if (!savedLocale) {
      refineFromIP(start);
    }
  }

  function refineFromIP(currentLocale) {
    JY.geo.detect().then(function (info) {
      if (!info) return;
      if (info.region) JY.theme.setRegion(info.region);

      var target = info.locale;
      if (!target || JY.i18n.list().indexOf(target) === -1) return;
      if (target === currentLocale) return;

      JY.i18n.setLocale(target, { persist: false, setRegion: false });
      JY.chrome.renderChrome();
      JY.render();
      JY.chrome.showToast(info);
    }).catch(function () { /* offline or blocked — keep the current choice */ });
  }

  /* ------------------ keep chrome in sync on locale change ------------------ */
  JY.i18n.onChange(function () {
    var drawer = d.qs('#drawer');
    if (drawer && drawer.classList.contains('is-open')) JY.chrome.closeDrawer();
  });

  d.ready(boot);
})();
