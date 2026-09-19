/* ==========================================================================
   core/theme.js — regional colour palettes driven by <html data-region>
   ========================================================================== */
(function () {
  'use strict';
  var JY = (window.JY = window.JY || {});
  var d = JY.dom;

  var REGIONS = {
    sea: { name: 'Southeast Asia', color: '#0D8A6A' },
    eas: { name: 'East Asia', color: '#1A5F8F' },
    eur: { name: 'Europe', color: '#17365D' },
    ame: { name: 'Americas', color: '#0B58B8' },
    mea: { name: 'Middle East & North Africa', color: '#0B5340' },
    sas: { name: 'South Asia', color: '#17556B' },
    afr: { name: 'Africa', color: '#2F6F4E' },
    oce: { name: 'Oceania', color: '#0A6E8F' }
  };

  var current = 'sea';

  function setRegion(region, opts) {
    opts = opts || {};
    if (!REGIONS[region]) region = 'sea';
    current = region;
    document.documentElement.setAttribute('data-region', region);
    if (opts.persist) d.store.set(JY.i18n.regionKey, region);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', REGIONS[region].color);
  }

  JY.theme = {
    regions: REGIONS,
    setRegion: setRegion,
    get: function () { return current; },
    color: function () { return (REGIONS[current] || REGIONS.sea).color; },
    name: function () { return (REGIONS[current] || REGIONS.sea).name; }
  };
})();
