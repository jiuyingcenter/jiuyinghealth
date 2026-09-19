/* ==========================================================================
   sections/cost.js — cost transparency: principles, what we never do, flow
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  var ICONS = ['money', 'receipt', 'handshake', 'file'];

  JY.registerSection('cost', function (el) {
    var items = t('cost.items');
    var flow = t('cost.flow');

    var cards = items.map(function (it, i) {
      return '<article class="card card--hover reveal" style="--rd:' + (i % 4) * 70 + 'ms">' +
        '<div class="card__icon' + (i % 2 ? ' card__icon--accent' : '') + '">' + JY.data.icon(ICONS[i % ICONS.length], '') + '</div>' +
        '<h3 class="card__title">' + esc(it.t) + '</h3>' +
        '<p class="card__text">' + esc(it.d) + '</p>' +
      '</article>';
    }).join('');

    var steps = flow.map(function (x, i) {
      return '<div class="step"><span class="step__n">' + (i + 1) + '</span><span class="step__b">' + esc(x) + '</span></div>';
    }).join('');

    el.innerHTML =
      '<section class="section section--tint" id="cost">' +
        '<div class="u-wrap">' +
          '<header class="sec-head reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('cost.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('cost.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('cost.sub')) + '</p>' +
          '</header>' +

          '<div class="grid g-4">' + cards + '</div>' +

          '<div class="grid g-2 reveal" style="margin-top:26px">' +
            '<div class="note">' +
              JY.data.icon('alert', '') +
              '<div><b>' + esc(t('cost.noteTitle')) + '</b><br>' + esc(t('cost.noteText')) + '</div>' +
            '</div>' +
            '<div class="card card--flat">' +
              '<h3 class="t-h4" style="margin-bottom:14px">' + esc(t('cost.flowTitle')) + '</h3>' +
              '<div class="steps">' + steps + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  });
})();
