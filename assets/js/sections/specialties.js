/* ==========================================================================
   sections/specialties.js — clinical focus areas (grid of specialty cards)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  JY.registerSection('specialties', function (el) {
    var cards = JY.data.specialties.map(function (s, i) {
      var spec = t('spec.' + s.id);
      var badge = t(s.badge);
      return '<article class="card card--hover reveal" style="--rd:' + (i % 4) * 70 + 'ms">' +
        '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">' +
          '<div class="card__icon">' + JY.data.icon(s.icon, '') + '</div>' +
          '<span class="badge badge--accent">' + esc(badge) + '</span>' +
        '</div>' +
        '<h3 class="card__title">' + esc(spec.t) + '</h3>' +
        '<p class="card__text">' + esc(spec.d) + '</p>' +
        '<ul class="card__list">' +
          [spec.l1, spec.l2, spec.l3].map(function (x) {
            return '<li>' + JY.data.icon('check', '') + '<span>' + esc(x) + '</span></li>';
          }).join('') +
        '</ul>' +
      '</article>';
    }).join('');

    el.innerHTML =
      '<section class="section" id="specialties">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('spec.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('spec.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('spec.sub')) + '</p>' +
          '</header>' +
          '<div class="grid g-4">' + cards + '</div>' +
        '</div>' +
      '</section>';
  });
})();
