/* ==========================================================================
   sections/contact.js — enquiry form (no backend: builds a mailto: draft),
   direct contact details and "what happens next".
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  var okHooked = false;

  JY.registerSection('contact', function (el) {
    var c = JY.data.contact;
    var opts = t('contact.fTypeOpts');
    var steps = t('contact.steps');

    var ways = [
      { icon: 'mail', k: 'contact.wayEmail', v: c.email, href: 'mailto:' + c.email },
      { icon: 'clock', k: 'contact.wayHours', v: t('contact.wayHoursV') },
      { icon: 'chat', k: 'contact.waySpeed', v: t('contact.waySpeedV') },
      { icon: 'mapPin', k: 'contact.wayBase', v: t('contact.wayBaseV') }
    ].map(function (w) {
      var value = w.href ? '<a href="' + esc(w.href) + '">' + esc(w.v) + '</a>' : esc(w.v);
      return '<div class="contact-way">' +
        '<span class="contact-way__icon">' + JY.data.icon(w.icon, '') + '</span>' +
        '<div><div class="contact-way__t">' + esc(t(w.k)) + '</div>' +
        '<div class="contact-way__v">' + value + '</div></div>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<section class="section" id="contact">' +
        '<div class="u-wrap">' +
          '<header class="sec-head sec-head--center reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('contact.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('contact.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('contact.sub')) + '</p>' +
          '</header>' +

          '<div class="contact-grid">' +
            '<div class="reveal">' +
              '<div class="card card--flat" style="padding:0;background:transparent;border:0">' + ways + '</div>' +
              '<div class="card card--flat reveal" style="margin-top:22px">' +
                '<h3 class="t-h4" style="margin-bottom:14px">' + esc(t('contact.stepsTitle')) + '</h3>' +
                '<div class="steps">' +
                  steps.map(function (x, i) {
                    return '<div class="step"><span class="step__n">' + (i + 1) + '</span>' +
                      '<span class="step__b">' + esc(x) + '</span></div>';
                  }).join('') +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="contact-card reveal" style="--rd:120ms">' +
              '<h3 class="t-h3" style="margin-bottom:6px">' + esc(t('contact.formTitle')) + '</h3>' +
              '<p class="t-small" style="margin-bottom:20px">' + esc(t('contact.sub')) + '</p>' +

              '<form class="form" id="enquiryForm" novalidate>' +
                '<div class="form__row">' +
                  '<div class="field">' +
                    '<label class="field__label" for="fName">' + esc(t('contact.fName')) + ' <span>*</span></label>' +
                    '<input class="field__ctrl" id="fName" name="name" required placeholder="' + esc(t('contact.fNamePh')) + '">' +
                  '</div>' +
                  '<div class="field">' +
                    '<label class="field__label" for="fCountry">' + esc(t('contact.fCountry')) + '</label>' +
                    '<input class="field__ctrl" id="fCountry" name="country" placeholder="' + esc(t('contact.fCountryPh')) + '">' +
                  '</div>' +
                '</div>' +

                '<div class="form__row">' +
                  '<div class="field">' +
                    '<label class="field__label" for="fContact">' + esc(t('contact.fContact')) + ' <span>*</span></label>' +
                    '<input class="field__ctrl" id="fContact" name="contact" required placeholder="name@example.com">' +
                  '</div>' +
                  '<div class="field">' +
                    '<label class="field__label" for="fType">' + esc(t('contact.fType')) + '</label>' +
                    '<select class="field__ctrl" id="fType" name="type">' +
                      opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') +
                    '</select>' +
                  '</div>' +
                '</div>' +

                '<div class="field">' +
                  '<label class="field__label" for="fMessage">' + esc(t('contact.fMessage')) + '</label>' +
                  '<textarea class="field__ctrl" id="fMessage" name="message" placeholder="' + esc(t('contact.fMessagePh')) + '"></textarea>' +
                '</div>' +

                '<button class="btn btn--primary btn--lg btn--block" type="submit">' +
                  JY.data.icon('mail', '') + esc(t('contact.fSubmit')) +
                '</button>' +
                '<p class="form__note">' + esc(t('contact.fNote')) + '</p>' +
                '<div class="form__ok" id="formOk">' + JY.data.icon('checkCircle', '') +
                  '<div><b>' + esc(t('contact.fOkTitle')) + '</b><br>' + esc(t('contact.fOkText')) + '</div>' +
                '</div>' +
              '</form>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';

    bindForm(el);
  });

  function bindForm(root) {
    var form = d.qs('#enquiryForm', root);
    if (!form) return;

    d.on(form, 'submit', function (e) {
      e.preventDefault();
      /* read fields by id — "form.name" would collide with the form's own name attribute */
      var f = {
        name: form.querySelector('#fName'),
        country: form.querySelector('#fCountry'),
        contact: form.querySelector('#fContact'),
        type: form.querySelector('#fType'),
        message: form.querySelector('#fMessage')
      };

      var name = f.name.value.trim();
      var contact = f.contact.value.trim();
      if (!name || !contact) {
        var first = !name ? f.name : f.contact;
        first.focus();
        first.style.borderColor = 'var(--c-accent)';
        return;
      }

      var lines = [
        'Name: ' + name,
        'Country / region: ' + (f.country.value.trim() || '-'),
        'Contact: ' + contact,
        'Need: ' + f.type.value,
        '',
        f.message.value.trim()
      ];

      var typeLabel = f.type.value;
      var subject = 'Medical enquiry - ' + name + ' (' + typeLabel + ')';
      var mailto = 'mailto:' + JY.data.contact.email +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));

      d.qs('#formOk', form).classList.add('is-on');
      window.location.href = mailto;
    });
  }
})();
