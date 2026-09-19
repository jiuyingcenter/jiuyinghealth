/* ==========================================================================
   core/dom.js — tiny DOM helpers, reveal-on-scroll, number count-up
   No dependencies, works from file://
   ========================================================================== */
(function () {
  'use strict';
  var JY = (window.JY = window.JY || {});

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function on(target, type, handler, opts) {
    if (!target) return function () {};
    target.addEventListener(type, handler, opts);
    return function () { target.removeEventListener(type, handler, opts); };
  }

  /* delegate: on(root, 'click', '.sel', fn) */
  function delegate(root, type, selector, fn) {
    return on(root, type, function (e) {
      var t = e.target;
      while (t && t !== root) {
        if (t.matches && t.matches(selector)) { fn.call(t, e, t); return; }
        t = t.parentNode;
      }
    });
  }

  var revealIO = null;
  function observeReveal(root) {
    var nodes = qsa('.reveal', root || document);
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    }
    nodes.forEach(function (n) { revealIO.observe(n); });
  }

  /* animate numbers like "40+", "3,000+", "<4" */
  function countUp(el) {
    var raw = el.getAttribute('data-count');
    if (!raw || el.dataset.counted) return;
    el.dataset.counted = '1';
    var m = String(raw).match(/^([^0-9]*)([0-9][0-9,.]*)(.*)$/);
    if (!m) { el.textContent = raw; return; }
    var pre = m[1], num = parseFloat(m[2].replace(/,/g, '')), post = m[3];
    var useComma = m[2].indexOf(',') > -1;
    var dur = 1100, start = null;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = pre + (useComma ? num.toLocaleString('en-US') : num) + post; return;
    }
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = Math.round(num * eased);
      el.textContent = pre + (useComma ? v.toLocaleString('en-US') : v) + post;
      if (p < 1) requestAnimationFrame(frame);
    }
    el.textContent = pre + '0' + post;
    requestAnimationFrame(frame);
  }

  var countIO = null;
  function observeCount(root) {
    var nodes = qsa('[data-count]', root || document);
    if (!('IntersectionObserver' in window)) { nodes.forEach(countUp); return; }
    if (!countIO) {
      countIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); countIO.unobserve(en.target); } });
      }, { threshold: 0.4 });
    }
    nodes.forEach(function (n) { countIO.observe(n); });
  }

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  /* localStorage that never throws (private mode, file://) */
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { window.localStorage.removeItem(k); } catch (e) {} }
  };

  JY.dom = {
    esc: esc, qs: qs, qsa: qsa, on: on, delegate: delegate,
    observeReveal: observeReveal, observeCount: observeCount,
    ready: ready, store: store
  };
})();
