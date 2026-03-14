/* ==========================================================================
   LUXE Global — Theme JavaScript
   Minimal JS: mobile menu drawer
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Menu Drawer ---------- */
  function initMenuDrawer() {
    var toggleBtns = document.querySelectorAll('[data-menu-toggle]');
    var drawer = document.querySelector('[data-menu-drawer]');
    var closeBtns = document.querySelectorAll('[data-menu-close]');

    if (!drawer) return;

    function open() {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    toggleBtns.forEach(function (btn) {
      btn.addEventListener('click', open);
    });

    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', close);
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initMenuDrawer();
  });
})();
