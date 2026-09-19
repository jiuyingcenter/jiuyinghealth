/* ==========================================================================
   sections/chrome.js — topbar, header + nav, language switcher, mobile drawer,
   footer, geo toast and floating buttons.
   Also owns the tiny section registry used by every other section module.
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;
  var d = JY.dom;
  var esc = d.esc;

  /* ------------------------- section registry ------------------------- */
  JY.sections = JY.sections || {};
  JY.registerSection = function (id, fn) { JY.sections[id] = fn; };

  var NAV = [
    { id: 'help', href: '#help' },
    { id: 'hospitals', href: '#hospitals' },
    { id: 'specialties', href: '#specialties' },
    { id: 'process', href: '#process' },
    { id: 'cost', href: '#cost' },
    { id: 'faq', href: '#faq' },
    { id: 'partners', href: '#partners' },
    { id: 'contact', href: '#contact' }
  ];

  /* ============================== topbar ============================== */
  function renderTopbar() {
    var el = d.qs('#topbar');
    if (!el) return;
    var c = JY.data.contact;
    el.innerHTML =
      '<div class="u-wrap topbar__in">' +
        '<div class="topbar__msg">' +
          '<span class="topbar__dot"></span>' + esc(JY.i18n.t('topbar.promo')) +
        '</div>' +
        '<div class="topbar__meta">' +
          '<span>' + JY.data.icon('clock', '') + ' ' + esc(JY.i18n.t('topbar.hours')) + '</span>' +
          '<a href="mailto:' + esc(c.email) + '">' + JY.data.icon('mail', '') + ' ' + esc(c.email) + '</a>' +
        '</div>' +
      '</div>';
  }

  /* ============================== header ============================== */
  function langMenuHTML() {
    var cur = JY.i18n.current();
    return JY.i18n.list().map(function (code) {
      var meta = JY.i18n.metaOf(code);
      return '<button class="lang__opt' + (code === cur ? ' is-on' : '') + '" role="option" data-lang="' + esc(code) + '" aria-selected="' + (code === cur) + '">' +
        '<span>' + esc(meta.native || code) + '<small>' + esc(meta.english || '') + '</small></span>' +
        JY.data.icon('check', 'lang__check') +
      '</button>';
    }).join('');
  }

  function renderHeader() {
    var el = d.qs('#header');
    if (!el) return;
    var cur = JY.i18n.current();
    var meta = JY.i18n.metaOf(cur);

    el.innerHTML =
      '<div class="u-wrap header__in">' +
        '<a class="brand" href="#main" aria-label="' + esc(JY.i18n.t('brand.name')) + '">' +
          '<span class="brand__mark">' + JY.data.icon('pulse', '') + '</span>' +
          '<span class="brand__text">' +
            '<span class="brand__name">' + esc(JY.i18n.t('brand.short')) + '</span>' +
            '<span class="brand__sub">' + esc(JY.i18n.t('brand.sub')) + '</span>' +
          '</span>' +
        '</a>' +

        '<nav class="nav" id="nav" aria-label="' + esc(JY.i18n.t('common.menu')) + '">' +
          NAV.map(function (n) {
            return '<a class="nav__link" href="' + n.href + '" data-nav="' + n.id + '">' + esc(JY.i18n.t('nav.' + n.id)) + '</a>';
          }).join('') +
        '</nav>' +

        '<div class="header__actions">' +
          '<div class="lang">' +
            '<button class="lang__btn" id="langBtn" aria-haspopup="listbox" aria-expanded="false" aria-label="' + esc(JY.i18n.t('common.langLabel')) + '">' +
              JY.data.icon('languages', '') + '<span id="langLabel">' + esc(meta.native) + '</span>' +
              JY.data.icon('chevronDown', 'lang__chev') +
            '</button>' +
            '<div class="lang__menu" id="langMenu" role="listbox" aria-label="' + esc(JY.i18n.t('common.langHint')) + '">' +
              langMenuHTML() +
            '</div>' +
          '</div>' +
          '<a class="btn btn--primary btn--sm" href="#contact">' + esc(JY.i18n.t('nav.cta')) + '</a>' +
          '<button class="burger" id="burger" aria-label="' + esc(JY.i18n.t('common.menu')) + '" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div>';

    bindHeader(el);
  }

  var docBound = false;
  var drawerBound = false;
  var lockY = 0;

  function releaseLock() {
    if (document.body.style.position !== 'fixed') return;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, lockY);
  }

  function closeDrawer() {
    var drawer = d.qs('#drawer');
    if (!drawer || !drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    var burger = d.qs('#burger');
    if (burger) {
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    releaseLock();
  }

  function bindHeader(el) {
    var langBtn = d.qs('#langBtn', el);
    var menu = d.qs('#langMenu', el);

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    d.on(langBtn, 'click', function (e) {
      e.stopPropagation();
      setOpen(!menu.classList.contains('is-open'));
    });

    d.delegate(menu, 'click', '.lang__opt', function (e, btn) {
      var code = btn.getAttribute('data-lang');
      setOpen(false);
      JY.i18n.setLocale(code, { persist: true, setRegion: true, persistRegion: true });
      JY.chrome.renderChrome();
      JY.chrome.hideToast();
    });

    /* document-level handlers are attached only once, even across re-renders */
    if (!docBound) {
      docBound = true;
      d.on(document, 'click', function (e) {
        var m = d.qs('#langMenu');
        var h = d.qs('#header');
        if (m && m.classList.contains('is-open') && h && !h.contains(e.target)) {
          m.classList.remove('is-open');
          var b = d.qs('#langBtn');
          if (b) b.setAttribute('aria-expanded', 'false');
        }
      });
      d.on(document, 'keydown', function (e) {
        if (e.key !== 'Escape') return;
        var m = d.qs('#langMenu');
        if (m && m.classList.contains('is-open')) {
          m.classList.remove('is-open');
          var b = d.qs('#langBtn');
          if (b) { b.setAttribute('aria-expanded', 'false'); b.focus(); }
          return;
        }
        var dw = d.qs('#drawer');
        if (dw && dw.classList.contains('is-open')) {
          closeDrawer();
          var bg = d.qs('#burger');
          if (bg) bg.focus();
        }
      });
    }

    /* mobile drawer — the burger is re-created on every render, so it is
       rebound each time; the drawer element itself is only bound once. */
    var burger = d.qs('#burger', el);
    var drawer = ensureDrawer();

    d.on(burger, 'click', function () {
      var open = drawer.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.classList.toggle('drawer-open', open);
      if (open) {
        /* iOS ignores body{overflow:hidden}; pinning is the reliable lock */
        lockY = window.scrollY || window.pageYOffset || 0;
        document.body.style.position = 'fixed';
        document.body.style.top = -lockY + 'px';
        document.body.style.left = '0';
        document.body.style.right = '0';
        var closeBtn = d.qs('.drawer__close', drawer);
        if (closeBtn) closeBtn.focus();
      } else {
        releaseLock();
      }
    });

    if (!drawerBound) {
      drawerBound = true;
      d.on(document, 'click', function (e) {
        var dw = d.qs('#drawer');
        if (dw && dw.classList.contains('is-open') && e.target === dw) closeDrawer();
      });
      /* tapping a link must dismiss the drawer, otherwise it stays over the page */
      d.delegate(drawer, 'click', '.drawer__link', function () { closeDrawer(); });
    }

    d.on(d.qs('.drawer__close', drawer), 'click', closeDrawer);

    var drawerLang = d.qs('#drawerLang', drawer);
    d.on(drawerLang, 'change', function () {
      JY.i18n.setLocale(drawerLang.value, { persist: true, setRegion: true, persistRegion: true });
      JY.chrome.renderChrome();
      JY.chrome.hideToast();
    });

    JY.chrome.closeDrawer = closeDrawer;
  }

  function ensureDrawer() {
    var drawer = d.qs('#drawer');
    if (drawer) { drawer.innerHTML = drawerInner(); return drawer; }
    drawer = document.createElement('div');
    drawer.className = 'drawer';
    drawer.id = 'drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = drawerInner();
    document.body.appendChild(drawer);
    return drawer;
  }

  function drawerInner() {
    var cur = JY.i18n.current();
    /* the panel wrapper carries the white surface, width and slide-in —
       without it the links sit directly on the dimmed backdrop */
    return '<div class="drawer__panel" role="dialog" aria-modal="true" aria-label="' + esc(JY.i18n.t('common.menu')) + '">' +
      '<button class="drawer__close" aria-label="' + esc(JY.i18n.t('common.close')) + '">' + JY.data.icon('x', '') + '</button>' +
      NAV.map(function (n) {
        return '<a class="drawer__link" href="' + n.href + '">' + esc(JY.i18n.t('nav.' + n.id)) + '</a>';
      }).join('') +
      '<div style="margin-top:24px">' +
        '<div class="field"><label class="field__label" for="drawerLang">' + esc(JY.i18n.t('common.langHint')) + '</label>' +
        '<select class="field__ctrl" id="drawerLang">' +
          JY.i18n.list().map(function (code) {
            var m = JY.i18n.metaOf(code);
            return '<option value="' + esc(code) + '"' + (code === cur ? ' selected' : '') + '>' + esc(m.native) + '</option>';
          }).join('') +
        '</select></div>' +
        '<a class="btn btn--primary btn--block" style="margin-top:14px" href="mailto:' + esc(JY.data.contact.email) + '">' +
          JY.data.icon('mail', '') + esc(JY.data.contact.email) +
        '</a>' +
      '</div>' +
    '</div>';
  }

  /* ============================== footer ============================== */
  function renderFooter() {
    var el = d.qs('#footer');
    if (!el) return;
    var c = JY.data.contact;
    var company = c.company[JY.i18n.current()] || c.company.en;
    var year = new Date().getFullYear();

    var link = function (id) {
      return '<li><a href="#' + id + '">' + esc(JY.i18n.t('nav.' + id)) + '</a></li>';
    };

    el.innerHTML =
      '<div class="u-wrap">' +
        '<div class="footer__grid">' +
          '<div class="footer__brand">' +
            '<a class="brand" href="#main" style="color:#fff">' +
              '<span class="brand__mark">' + JY.data.icon('pulse', '') + '</span>' +
              '<span class="brand__text">' +
                '<span class="brand__name">' + esc(JY.i18n.t('brand.short')) + '</span>' +
                '<span class="brand__sub" style="opacity:.7">' + esc(JY.i18n.t('brand.sub')) + '</span>' +
              '</span>' +
            '</a>' +
            '<p class="footer__about">' + esc(JY.i18n.t('footer.about')) + '</p>' +
            '<p class="footer__about" style="opacity:.75">' + esc(JY.i18n.t('footer.regions')) + '</p>' +
          '</div>' +

          '<div>' +
            '<h4 class="footer__h">' + esc(JY.i18n.t('footer.exploreT')) + '</h4>' +
            '<ul class="footer__list">' +
              NAV.map(function (n) { return link(n.id); }).join('') +
            '</ul>' +
          '</div>' +

          '<div>' +
            '<h4 class="footer__h">' + esc(JY.i18n.t('footer.servicesT')) + '</h4>' +
            '<ul class="footer__list">' +
              JY.i18n.t('footer.services').map(function (s) {
                return '<li><a href="#specialties">' + esc(s) + '</a></li>';
              }).join('') +
            '</ul>' +
          '</div>' +

          '<div>' +
            '<h4 class="footer__h">' + esc(JY.i18n.t('footer.contactT')) + '</h4>' +
            '<div class="footer__contact">' +
              '<a class="footer__mail" href="mailto:' + esc(c.email) + '">' + JY.data.icon('mail', '') + esc(c.email) + '</a>' +
              '<span>' + esc(company) + '</span>' +
              '<span>' + esc(c.city[JY.i18n.current()] || c.city.en) + '</span>' +
              '<span>' + esc(JY.i18n.t('topbar.hours')) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="footer__legal">' + esc(JY.i18n.t('footer.legal')) + '</div>' +

        '<div class="footer__bottom">' +
          '<span>' + esc(company) + ' · ' + year + ' ' + esc(JY.i18n.t('footer.rights')) + '</span>' +
          '<span>' + JY.data.icon('globe', '') + ' ' + esc(JY.theme.name()) + '</span>' +
        '</div>' +
      '</div>';
  }

  /* ============================ geo toast ============================ */
  function showToast(info) {
    var el = d.qs('#geoToast');
    if (!el) return;
    var meta = JY.i18n.metaOf(info.locale);
    el.innerHTML =
      '<button class="geo-toast__close" aria-label="' + esc(JY.i18n.t('common.close')) + '">' + JY.data.icon('x', '') + '</button>' +
      '<div class="geo-toast__row">' +
        '<span class="geo-toast__icon">' + JY.data.icon('globe', '') + '</span>' +
        '<div>' +
          '<div class="geo-toast__t">' + esc(JY.i18n.t('toast.title')) + '</div>' +
          '<div class="geo-toast__d">' + esc(JY.i18n.t('toast.body', { lang: meta.native })) + '</div>' +
          '<div class="geo-toast__actions">' +
            '<button class="btn btn--primary btn--sm" data-toast="keep">' + esc(JY.i18n.t('toast.keep')) + '</button>' +
            '<button class="btn btn--ghost btn--sm" data-toast="change">' + esc(JY.i18n.t('toast.change')) + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    el.hidden = false;
    /* the toast and the floating buttons both live in the bottom corners —
       on phones they overlap, so stand the FAB down while the toast is up */
    document.body.classList.add('has-toast');

    d.on(d.qs('.geo-toast__close', el), 'click', hideToast);
    d.on(d.qs('[data-toast="keep"]', el), 'click', hideToast);
    d.on(d.qs('[data-toast="change"]', el), 'click', function () {
      hideToast();
      var btn = d.qs('#langBtn');
      if (btn) { btn.click(); btn.focus(); }
    });

    setTimeout(hideToast, 12000);
  }

  function hideToast() {
    var el = d.qs('#geoToast');
    if (el) el.hidden = true;
    document.body.classList.remove('has-toast');
  }

  /* =============================== fab =============================== */
  function renderFab() {
    var el = d.qs('#fab');
    if (!el) return;
    var c = JY.data.contact;
    el.innerHTML =
      '<a class="fab__btn" href="mailto:' + esc(c.email) + '?subject=' + encodeURIComponent('Medical enquiry') + '" aria-label="' + esc(c.email) + '">' +
        JY.data.icon('mail', '') + '</a>' +
      '<button class="fab__btn fab__btn--main" id="toTop" aria-label="' + esc(JY.i18n.t('common.top')) + '">' +
        JY.data.icon('arrowUp', '') + '</button>';
    el.hidden = false;
    d.on(d.qs('#toTop', el), 'click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================== scroll behaviour =========================== */
  function bindScroll() {
    var header = d.qs('#header');
    var links = d.qsa('[data-nav]');
    var sections = NAV.map(function (n) { return d.qs(n.href); });

    function onScroll() {
      if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
      var y = window.scrollY + 140;
      var active = -1;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i] && sections[i].offsetTop <= y) active = i;
      }
      links.forEach(function (a) { a.classList.remove('is-active'); });
      if (active > -1 && links[active]) links[active].classList.add('is-active');
    }
    var raf = null;
    d.on(window, 'scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = null; onScroll(); });
    }, { passive: true });
    onScroll();
  }

  /* ============================== exports ============================== */
  JY.chrome = {
    renderTopbar: renderTopbar,
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    renderFab: renderFab,
    renderChrome: function () {
      renderTopbar();
      renderHeader();
      renderFooter();
      JY.i18n.applyStatic();
      bindScroll();
    },
    showToast: showToast,
    hideToast: hideToast,
    bindScroll: bindScroll,
    navItems: NAV
  };
})();
