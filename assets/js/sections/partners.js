/* ==========================================================================
   sections/partners.js — channel partnership offer for overseas organisations
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  function block(titleKey, listKey, icon, accent) {
    var items = t(listKey);
    return '<div class="card card--hover reveal">' +
      '<div class="card__icon' + (accent ? ' card__icon--accent' : '') + '">' + JY.data.icon(icon, '') + '</div>' +
      '<h3 class="card__title">' + esc(t(titleKey)) + '</h3>' +
      '<ul class="card__list">' +
        items.map(function (x) { return '<li>' + JY.data.icon('check', '') + '<span>' + esc(x) + '</span></li>'; }).join('') +
      '</ul>' +
    '</div>';
  }

  JY.registerSection('partners', function (el) {
    el.innerHTML =
      '<section class="section section--ink" id="partners">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('partners.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance" style="color:#fff">' + esc(t('partners.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('partners.sub')) + '</p>' +
          '</header>' +

          '<div class="grid g-4">' +
            block('partners.whoT', 'partners.who', 'users', false) +
            block('partners.doT', 'partners.dos', 'target', false) +
            block('partners.earnT', 'partners.earn', 'money', true) +
            block('partners.boundT', 'partners.bound', 'shield', true) +
          '</div>' +

          '<div class="reveal u-center" style="margin-top:34px">' +
            '<a class="btn btn--light btn--lg" href="mailto:' + esc(JY.data.contact.email) +
              '?subject=' + encodeURIComponent('Partnership enquiry') + '">' +
              JY.data.icon('handshake', '') + esc(t('partners.cta')) +
            '</a>' +
          '</div>' +
        '</div>' +
      '</section>';
  });
})();
