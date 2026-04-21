export const initSiteScripts = () => {
  // 1. WOW.js Initialization
  if (typeof window.WOW === 'function') {
    new window.WOW().init();
  }

  // 2. Lenis Smooth Scroll Initialization
  const lenis = new window.Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // 3. Mobile Nav Toggle Logic
  const menuBtn = document.querySelector('.js-menu');
  const navOverlay = document.querySelector('.js-nav');
  const body = document.body;

  const toggleMenu = () => {
    menuBtn?.classList.toggle('active');
    navOverlay?.classList.toggle('active');
    if (navOverlay?.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  };

  menuBtn?.addEventListener('click', toggleMenu);

  // 4. Preloader Handling
  const loader = document.querySelector('.theme-loader');
  if (loader) {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }

  // 5. Shared Footer Positioning Logic
  const handleFooterLayout = () => {
    const f = document.querySelector('.site-footer');
    const w = document.querySelector('.main-content-wrapper');
    if (!f || !w) return;
    const h = f.offsetHeight;
    if (window.innerWidth < 992) {
      f.style.position = 'relative';
      f.style.visibility = 'visible';
      w.style.marginBottom = '0';
    } else {
      f.style.position = 'fixed';
      f.style.visibility = 'visible';
      w.style.marginBottom = h + 'px';
    }
  };

  window.addEventListener('resize', handleFooterLayout);
  handleFooterLayout();

  // Cleanup function
  return () => {
    lenis.destroy();
    window.removeEventListener('resize', handleFooterLayout);
    menuBtn?.removeEventListener('click', toggleMenu);
    body.style.overflow = '';
  };
};
