/* ==========================================================================
   sections/hero.js — hero + headline + the "your plan" visual card
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  JY.registerSection('hero', function (el) {
    var p = 'hero.plan.';
    var steps = [
      { t: t(p + 's1t'), d: t(p + 's1d'), done: true },
      { t: t(p + 's2t'), d: t(p + 's2d'), done: true },
      { t: t(p + 's3t'), d: t(p + 's3d'), done: false },
      { t: t(p + 's4t'), d: t(p + 's4d'), done: false }
    ];

    var proof = t('hero.proof').map(function (x) {
      return '<li>' + JY.data.icon('checkCircle', '') + esc(x) + '</li>';
    }).join('');

    el.innerHTML =
      '<section class="hero" id="hero">' +
        '<div class="u-wrap hero__in">' +
          '<div class="hero__copy reveal">' +
            '<div class="hero__badge"><b>' + esc(t('hero.badgeTag')) + '</b>' + esc(t('hero.badgeText')) + '</div>' +
            '<h1 class="t-display hero__title t-balance">' +
              esc(t('hero.titleBefore')) + ' <em>' + esc(t('hero.titleEm')) + '</em>' +
            '</h1>' +
            '<p class="hero__sub t-pretty">' + esc(t('hero.sub')) + '</p>' +
            '<div class="hero__cta">' +
              '<a class="btn btn--primary btn--lg" href="#contact">' + JY.data.icon('clipboard', '') + esc(t('hero.ctaPrimary')) + '</a>' +
              '<a class="btn btn--ghost btn--lg" href="#process">' + JY.data.icon('arrowRight', '') + esc(t('hero.ctaSecondary')) + '</a>' +
            '</div>' +
            '<ul class="hero__proof">' + proof + '</ul>' +
          '</div>' +

          '<div class="hero__art reveal" style="--rd:120ms">' +
            '<div class="plancard">' +
              '<div class="plancard__top">' +
                '<div class="plancard__title">' + esc(t(p + 'title')) + '</div>' +
                '<div class="plancard__tag">' + esc(t(p + 'tag')) + '</div>' +
              '</div>' +
              '<div class="plancard__steps">' +
                steps.map(function (s, i) {
                  return '<div class="plancard__step' + (s.done ? ' is-done' : '') + '">' +
                    '<span class="plancard__num">' + (i + 1) + '</span>' +
                    '<div><div class="plancard__st">' + esc(s.t) + '</div>' +
                    '<div class="plancard__sd">' + esc(s.d) + '</div></div>' +
                  '</div>';
                }).join('') +
              '</div>' +
              '<div class="plancard__foot">' +
                '<div class="plancard__kv"><b>' + esc(t(p + 'k1v')) + '</b><span>' + esc(t(p + 'k1l')) + '</span></div>' +
                '<div class="plancard__kv"><b>' + esc(t(p + 'k2v')) + '</b><span>' + esc(t(p + 'k2l')) + '</span></div>' +
              '</div>' +
            '</div>' +
            '<div class="hero__chip hero__chip--a">' + JY.data.icon('shieldCheck', '') + esc(t('hero.chipA')) + '</div>' +
            '<div class="hero__chip hero__chip--b">' + JY.data.icon('languages', '') + esc(t('hero.chipB')) + '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  });
})();
