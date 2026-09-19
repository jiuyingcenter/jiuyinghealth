/* ==========================================================================
   sections/faq.js — accordion of the questions patients ask most
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  function bindAccordion(root) {
    var acc = d.qs('.acc', root);
    if (!acc) return;

    d.delegate(acc, 'click', '.acc__btn', function (e, btn) {
      var panel = btn.nextElementSibling;
      var open = btn.getAttribute('aria-expanded') === 'true';

      /* close siblings */
      d.qsa('.acc__btn[aria-expanded="true"]', acc).forEach(function (b) {
        if (b === btn) return;
        b.setAttribute('aria-expanded', 'false');
        var p = b.nextElementSibling;
        if (p) { p.style.height = p.scrollHeight + 'px'; requestAnimationFrame(function () { p.style.height = '0px'; }); }
      });

      if (open) {
        btn.setAttribute('aria-expanded', 'false');
        panel.style.height = panel.scrollHeight + 'px';
        requestAnimationFrame(function () { panel.style.height = '0px'; });
      } else {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.height = panel.scrollHeight + 'px';
        panel.addEventListener('transitionend', function onEnd(ev) {
          if (ev.propertyName !== 'height') return;
          panel.style.height = 'auto';
          panel.removeEventListener('transitionend', onEnd);
        });
      }
    });

    d.on(window, 'resize', function () {
      d.qsa('.acc__btn[aria-expanded="true"]', acc).forEach(function (b) {
        var p = b.nextElementSibling;
        if (p) p.style.height = 'auto';
      });
    });
  }

  JY.registerSection('faq', function (el) {
    var items = t('faq.items');

    var rows = items.map(function (it, i) {
      return '<div class="acc__item">' +
        '<button class="acc__btn" aria-expanded="false" aria-controls="faq-p-' + i + '">' +
          '<span class="acc__q"><span class="acc__idx">' + (i + 1) + '</span>' + esc(it.q) + '</span>' +
          JY.data.icon('chevronDown', 'acc__chev') +
        '</button>' +
        '<div class="acc__panel" id="faq-p-' + i + '" role="region"><div class="acc__inner">' + esc(it.a) + '</div></div>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<section class="section section--tint" id="faq">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('faq.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('faq.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('faq.sub')) + '</p>' +
          '</header>' +

          '<div class="acc reveal">' + rows + '</div>' +

          '<div class="card card--flat reveal u-center" style="margin-top:26px;padding:30px">' +
            '<h3 class="t-h4">' + esc(t('faq.moreTitle')) + '</h3>' +
            '<p class="t-body" style="margin-top:8px;max-width:56ch;margin-inline:auto">' + esc(t('faq.moreText')) + '</p>' +
            '<a class="btn btn--primary" style="margin-top:18px" href="mailto:' + esc(JY.data.contact.email) +
              '?subject=' + encodeURIComponent('Question about treatment in China') + '">' +
              JY.data.icon('mail', '') + esc(t('faq.moreBtn')) +
            '</a>' +
          '</div>' +
        '</div>' +
      '</section>';

    bindAccordion(el);
  });
})();
