/* ==========================================================================
   sections/process.js — the six-step patient pathway
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  JY.registerSection('process', function (el) {
    var steps = t('process.steps');

    var items = steps.map(function (s, i) {
      return '<div class="tl__item reveal" style="--rd:' + (i % 3) * 90 + 'ms">' +
        '<div class="tl__num">' + (i + 1) + '</div>' +
        '<span class="tl__dur">' + esc(s.dur) + '</span>' +
        '<h3 class="tl__title">' + esc(s.t) + '</h3>' +
        '<p class="tl__text">' + esc(s.d) + '</p>' +
        '<div class="tl__who">' + JY.data.icon('user', '') + ' ' + esc(s.who) + '</div>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<section class="section section--tint" id="process">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('process.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('process.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('process.sub')) + '</p>' +
          '</header>' +
          '<div class="tl tl--6">' + items + '</div>' +
          '<div class="note reveal" style="margin-top:26px">' +
            JY.data.icon('clock', '') +
            '<div>' + esc(t('process.note')) + '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  });
})();
