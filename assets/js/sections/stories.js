/* ==========================================================================
   sections/stories.js — anonymised patient experiences
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  JY.registerSection('stories', function (el) {
    var items = t('stories.items');

    var cards = items.map(function (s, i) {
      var initial = (s.name || '?').trim().charAt(0);
      return '<article class="story reveal" style="--rd:' + i * 90 + 'ms">' +
        '<span class="story__mark" aria-hidden="true">&ldquo;</span>' +
        '<p class="story__text">' + esc(s.text) + '</p>' +
        '<div class="story__foot">' +
          '<span class="story__av">' + esc(initial) + '</span>' +
          '<div><div class="story__n">' + esc(s.name) + '</div>' +
          '<div class="story__m">' + esc(s.meta) + '</div></div>' +
        '</div>' +
      '</article>';
    }).join('');

    el.innerHTML =
      '<section class="section" id="stories">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('stories.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('stories.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('stories.sub')) + '</p>' +
          '</header>' +
          '<div class="grid g-3">' + cards + '</div>' +
        '</div>' +
      '</section>';
  });
})();
