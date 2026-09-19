/* ==========================================================================
   sections/hospitals.js — the hospital network, filterable by city.
   To update the network, edit HOSPITALS / CITIES in assets/js/data/site.js.

   Two switches live in assets/js/data/site.js:
     showAllCityTab — false hides the "All cities" tab (other provinces are not
                      open yet); the first city in CITIES is preselected instead.
     hospitalPage   — how many cards stay visible before "Show more" appears.
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom, esc = d.esc, t = JY.i18n.t;

  function nameOf(h) {
    var code = JY.i18n.current();
    if (h.name[code]) return h.name[code];
    if (code === 'zh-CN' && h.name.zh) return h.name.zh;
    if (code === 'zh-TW' && h.name.tw) return h.name.tw;
    return h.name.en;
  }

  function cardHTML(h) {
    var city = t('city.' + h.city);
    var tags = h.tags.map(function (k) {
      return '<span class="pill">' + esc(t('tag.' + k)) + '</span>';
    }).join('');

    return '<article class="hosp' + (h.first ? ' is-first' : '') + '" data-city="' + esc(h.city) + '">' +
      '<div class="hosp__logo">' + JY.data.icon(h.first ? 'award' : 'hospital', '') + '</div>' +
      '<div style="min-width:0">' +
        '<h3 class="hosp__name">' + esc(nameOf(h)) + '</h3>' +
        '<div class="hosp__meta">' +
          '<span class="hosp__city">' + JY.data.icon('mapPin', '') + ' ' + esc(city) + '</span>' +
          '<span class="badge badge--line">' + esc(t('hospitals.level')) + '</span>' +
          (h.first ? '<span class="badge badge--accent">' + JY.data.icon('star', '') + esc(t('hospitals.firstTag')) + '</span>' : '') +
        '</div>' +
        '<div class="pill-list">' + tags + '</div>' +
      '</div>' +
    '</article>';
  }

  JY.registerSection('hospitals', function (el) {
    var list = JY.data.hospitals;
    var cities = JY.data.cities.filter(function (c) {
      return list.some(function (h) { return h.city === c; });
    });
    var showAll = JY.data.showAllCityTab === true;
    var page = JY.data.hospitalPage || { narrow: 6, wide: 12, narrowMax: 900 };

    var tabs = (showAll
      ? '<button class="tab is-active" data-city="all">' + esc(t('hospitals.tabAll')) +
          '<span class="tab__count">' + list.length + '</span></button>'
      : '') +
      cities.map(function (c, i) {
        var n = list.filter(function (h) { return h.city === c; }).length;
        return '<button class="tab' + (showAll ? '' : (i === 0 ? ' is-active' : '')) + '" data-city="' + esc(c) + '">' +
          esc(t('city.' + c)) + '<span class="tab__count">' + n + '</span></button>';
      }).join('');

    var cards = list.map(cardHTML).join('');

    el.innerHTML =
      '<section class="section section--tint" id="hospitals">' +
        '<div class="u-wrap">' +
          '<header class="sec-head reveal">' +
            '<span class="sec-head__eyebrow">' + esc(t('hospitals.eyebrow')) + '</span>' +
            '<h2 class="t-h2 sec-head__title t-balance">' + esc(t('hospitals.title')) + '</h2>' +
            '<p class="sec-head__sub t-pretty">' + esc(t('hospitals.sub')) + '</p>' +
          '</header>' +

          '<div class="tabs reveal" id="cityTabs" role="tablist">' + tabs + '</div>' +
          '<div class="grid g-auto-lg reveal" id="hospGrid">' + cards + '</div>' +
          '<div class="u-center hosp-more reveal" id="hospMoreWrap" hidden>' +
            '<button class="btn btn--ghost" id="hospMore" type="button" aria-expanded="false" aria-controls="hospGrid">' +
              '<span id="hospMoreLabel"></span><span class="hosp-more__count" id="hospMoreCount"></span>' +
            '</button>' +
          '</div>' +

          '<div class="note note--info reveal" style="margin-top:28px">' +
            JY.data.icon('info', '') +
            '<div>' + esc(t('hospitals.note')) + '</div>' +
          '</div>' +
        '</div>' +
      '</section>';

    var grid = d.qs('#hospGrid', el);
    var all = d.qsa('.hosp', grid);
    var wrap = d.qs('#hospMoreWrap', el);
    var btn = d.qs('#hospMore', el);
    var label = d.qs('#hospMoreLabel', el);
    var count = d.qs('#hospMoreCount', el);
    var empty = null;

    var city = showAll ? 'all' : cities[0];
    var expanded = false;

    function step() {
      var w = window.innerWidth || document.documentElement.clientWidth || 1024;
      return w <= page.narrowMax ? page.narrow : page.wide;
    }

    function matches(c) {
      return city === 'all' || c.getAttribute('data-city') === city;
    }

    function apply() {
      var vis = all.filter(matches);
      var base = step();
      var limit = expanded ? vis.length : base;

      all.forEach(function (c) { c.style.display = matches(c) ? '' : 'none'; });
      vis.slice(limit).forEach(function (c) { c.style.display = 'none'; });

      /* the "show more" control only earns its place when it has something to hide,
         but it must stay put once expanded so the user can collapse again */
      if (vis.length > base) {
        wrap.hidden = false;
        label.textContent = expanded ? t('hospitals.less') : t('hospitals.more');
        count.textContent = expanded ? '' : '+' + (vis.length - limit);
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      } else {
        wrap.hidden = true;
      }

      if (!vis.length) {
        if (!empty) {
          empty = document.createElement('p');
          empty.id = 'hospEmpty';
          empty.className = 't-small u-center';
          empty.style.padding = '30px';
          grid.parentNode.insertBefore(empty, grid.nextSibling);
        }
        empty.textContent = t('hospitals.empty');
      } else if (empty) { empty.remove(); empty = null; }
    }

    d.delegate(d.qs('#cityTabs', el), 'click', '.tab', function (e, b) {
      city = b.getAttribute('data-city');
      expanded = false;
      d.qsa('.tab', el).forEach(function (x) { x.classList.toggle('is-active', x === b); });
      apply();
    });

    d.on(btn, 'click', function () {
      expanded = !expanded;
      apply();
      if (!expanded) {
        /* collapsing from far down the list would otherwise leave the user adrift */
        var top = grid.getBoundingClientRect().top;
        if (top < 0) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    apply();
  });
})();
