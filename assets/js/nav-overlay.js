/**
 * Sunware Technologies — Fullscreen Nav
 * Slide-in from right — anime.js timeline
 */

document.addEventListener('DOMContentLoaded', function () {

  const menuBtns = document.querySelectorAll('.js-menu');
  const nav      = document.querySelector('.js-nav');
  const items    = document.querySelectorAll('.js-nav .nav-item');

  if (menuBtns.length === 0 || !nav) {
    console.warn('[nav] .js-menu or .js-nav not found in DOM');
    return;
  }

  let isOpen = false;

  menuBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      isOpen = !isOpen;
      
      // Update ALL menu buttons to active state
      menuBtns.forEach(b => b.classList.toggle('active', isOpen));
      
      document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      nav.style.display = 'flex';
      nav.style.pointerEvents = 'auto';

      // OPEN: slide panel in from right, then stagger items up
      anime.timeline()
        .add({
          targets: nav,
          translateX: ['100%', '0%'],
          duration: 400,
          easing: 'easeOutCubic'
        })
        .add({
          targets: items,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(40),
          duration: 250,
          easing: 'easeOutExpo'
        }, '-=150');

    } else {
      // CLOSE: fade items out fast, then slide panel off to the right
      anime.timeline()
        .add({
          targets: items,
          opacity: [1, 0],
          translateY: [0, 15],
          delay: anime.stagger(20),
          duration: 150,
          easing: 'easeInExpo'
        })
        .add({
          targets: nav,
          translateX: ['0%', '100%'],
          duration: 300,
          easing: 'easeInOutCubic',
          complete: function () {
            nav.style.display = 'none';
            nav.style.pointerEvents = 'none';
          }
        }, '-=50');
    }
    }); // end click listener
  }); // end forEach menuBtns

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) menuBtns[0].click();
  });

  // Close when a nav link is clicked
  document.querySelectorAll('.js-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (isOpen) menuBtns[0].click();
    });
  });

  // Industries Megamenu Hover Image Swap
  const megamenuItems = document.querySelectorAll('.has-megamenu .megamenu-item');
  megamenuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const newImg = this.getAttribute('data-image');
      const previewImg = this.closest('.megamenu-content').querySelector('.megamenu-preview-img');
      if (newImg && previewImg) {
        // Simple swap with a fast fade effect handled by CSS
        previewImg.classList.remove('active');
        setTimeout(() => {
          previewImg.src = newImg;
          previewImg.classList.add('active');
        }, 50);
      }
    });
  });

});
