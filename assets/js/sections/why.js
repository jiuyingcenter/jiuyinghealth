/* ==========================================================================
   sections/why.js — "Why China" : six structural advantages
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  var ICONS = ['pulse', 'users', 'clock', 'receipt', 'leaf', 'globe'];

  JY.registerSection('why', function (el) {
    var items = t('why.items');

    var cards = items.map(function (it, i) {
      return '<article class="card card--glass card--hover reveal" style="--rd:' + (i % 3) * 80 + 'ms">' +
        '<div class="card__icon" style="background:rgba(255,255,255,.12);color:#fff">' +
          JY.data.icon(ICONS[i % ICONS.length], '') +
        '</div>' +
        '<h3 class="card__title" style="color:#fff">' + esc(it.t) + '</h3>' +
        '<p class="card__text" style="color:rgba(255,255,255,.78)">' + esc(it.d) + '</p>' +
      '</article>';
    }).join('');

    el.innerHTML =
      '<section class="section section--ink" id="why">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('why.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance" style="color:#fff">' + esc(t('why.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('why.sub')) + '</p>' +
          '</header>' +
          '<div class="grid g-3">' + cards + '</div>' +
        '</div>' +
      '</section>';
  });
})();
