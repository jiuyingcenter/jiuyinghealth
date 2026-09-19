/* ==========================================================================
   sections/trust.js — headline figures strip (uses data/site.js STATS)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  JY.registerSection('trust', function (el) {
    var stats = JY.data.stats;
    var cells = stats.map(function (s, i) {
      var raw = (s.prefix || '') + s.value;
      var m = raw.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
      var pre = m ? m[1] : '';
      var num = m ? m[2] : raw;
      var post = m ? m[3] : '';
      return '<div class="stat' + (i < stats.length - 1 ? ' trustbar__div' : '') + '">' +
        '<div class="stat__num">' + esc(pre) + '<span data-count="' + esc(num) + '">' + esc(num) + '</span>' + esc(post) + '</div>' +
        '<div class="stat__label">' + esc(t('trust.' + s.id)) + '</div>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div class="u-wrap">' +
        '<div class="trustbar reveal">' + cells + '</div>' +
      '</div>';
  });
})();
