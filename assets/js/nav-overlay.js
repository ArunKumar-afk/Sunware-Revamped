/**
 * Sunware Technologies — Fullscreen Nav
 * Slide-in from right — anime.js timeline
 */

document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.querySelector('.js-menu');
  const nav     = document.querySelector('.js-nav');
  const items   = document.querySelectorAll('.js-nav .nav-item');

  if (!menuBtn || !nav) {
    console.warn('[nav] .js-menu or .js-nav not found in DOM');
    return;
  }

  let isOpen = false;

  menuBtn.addEventListener('click', function () {
    isOpen = !isOpen;
    menuBtn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      nav.style.display = 'flex';
      nav.style.pointerEvents = 'auto';

      // OPEN: slide panel in from right, then stagger items up
      anime.timeline()
        .add({
          targets: nav,
          translateX: ['100%', '0%'],
          duration: 550,
          easing: 'easeInOutExpo'
        })
        .add({
          targets: items,
          opacity: [0, 1],
          translateY: [40, 0],
          delay: anime.stagger(80),
          duration: 500,
          easing: 'easeOutExpo'
        }, '-=250');

    } else {
      // CLOSE: fade items out fast, then slide panel off to the right
      anime.timeline()
        .add({
          targets: items,
          opacity: [1, 0],
          translateY: [0, 30],
          delay: anime.stagger(40),
          duration: 200,
          easing: 'easeInExpo'
        })
        .add({
          targets: nav,
          translateX: ['0%', '100%'],
          duration: 450,
          easing: 'easeInOutExpo',
          complete: function () {
            nav.style.display = 'none';
            nav.style.pointerEvents = 'none';
          }
        }, '-=100');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) menuBtn.click();
  });

  // Close when a nav link is clicked
  document.querySelectorAll('.js-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (isOpen) menuBtn.click();
    });
  });

});
