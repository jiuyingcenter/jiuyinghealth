/* ==========================================================================
   sections/pain.js — "How we help": the six patient pain points and the fix,
   followed by a full-width reassurance band.
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  JY.registerSection('pain', function (el) {
    var items = t('help.items');

    var cards = items.map(function (it, i) {
      return '<article class="card card--hover reveal" style="--rd:' + (i % 3) * 80 + 'ms">' +
        '<div class="card__icon">' + JY.data.icon('alert', '') + '</div>' +
        '<h3 class="card__title">' + esc(it.t) + '</h3>' +
        '<p class="card__text" style="opacity:.8">' + esc(it.d) + '</p>' +
        '<div style="margin-top:16px;padding-top:16px;border-top:1px dashed var(--c-line)">' +
          '<div style="display:flex;gap:8px;align-items:flex-start">' +
            '<span style="color:var(--c-primary);flex:none;margin-top:3px">' + JY.data.icon('checkCircle', '') + '</span>' +
            '<p class="card__text">' + esc(it.s) + '</p>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    el.innerHTML =
      '<section class="section" id="help">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('help.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('help.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('help.sub')) + '</p>' +
          '</header>' +
          '<div class="grid g-3">' + cards + '</div>' +
        '</div>' +

        '<div class="u-wrap" style="margin-top:clamp(36px,4vw,56px)">' +
          '<div class="cta-band reveal">' +
            '<div class="cta-band__in">' +
              '<h3 class="t-h3 t-balance">' + esc(t('help.bandTitle')) + '</h3>' +
              '<p class="t-pretty">' + esc(t('help.bandText')) + '</p>' +
              '<a class="btn btn--light btn--lg" href="mailto:' + esc(JY.data.contact.email) +
                '?subject=' + encodeURIComponent('Free case review request') + '">' +
                JY.data.icon('mail', '') + esc(t('help.bandBtn')) +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  });
})();
