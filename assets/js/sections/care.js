/* ==========================================================================
   sections/care.js — responsibility boundary: platform vs hospital
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  var li = function (x, ok) {
    return '<li>' + JY.data.icon(ok ? 'check' : 'check', ok ? 'y' : 'n') + '<span>' + esc(x) + '</span></li>';
  };

  JY.registerSection('care', function (el) {
    var us = t('care.us').map(function (x) { return li(x, true); }).join('');
    var hosp = t('care.hosp').map(function (x) { return li(x, true); }).join('');

    el.innerHTML =
      '<section class="section" id="care">' +
        '<div class="u-wrap">' +
          '<header class="sec-head reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('care.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('care.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('care.sub')) + '</p>' +
          '</header>' +

          '<div class="vs reveal">' +
            '<div class="vs__col vs__col--us">' +
              '<div class="vs__head">' + JY.data.icon('handshake', '') + esc(t('care.usT')) + '</div>' +
              '<ul class="vs__list">' + us + '</ul>' +
            '</div>' +
            '<div class="vs__col">' +
              '<div class="vs__head">' + JY.data.icon('hospital', '') + esc(t('care.hospT')) + '</div>' +
              '<ul class="vs__list">' + hosp + '</ul>' +
            '</div>' +
          '</div>' +

          '<div class="note note--info reveal" style="margin-top:26px">' +
            JY.data.icon('shieldCheck', '') +
            '<div>' + esc(t('care.note')) + '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  });
})();
