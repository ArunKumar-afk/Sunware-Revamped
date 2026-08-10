"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Scripts() {
  useEffect(() => {
    // Lenis smooth scroll - butter smooth
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger if available
    lenis.on('scroll', () => {
      if ((window as any).ScrollTrigger) (window as any).ScrollTrigger.update();
    });

    // Initialize WOW.js after mount
    const initWow = () => {
      if ((window as any).WOW) {
        new (window as any).WOW().init();
      }
    };
    // Nav overlay logic
    const initNav = () => {
      const menuBtns = document.querySelectorAll<HTMLButtonElement>(".js-menu");
      const nav = document.querySelector<HTMLElement>(".js-nav");
      const items = document.querySelectorAll<HTMLElement>(".js-nav .nav-item");
      if (!menuBtns.length || !nav) return;
      let isOpen = false;
      menuBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          isOpen = !isOpen;
          btn.classList.toggle("active", isOpen);
          nav.classList.toggle("active", isOpen);
          document.body.style.overflow = isOpen ? "hidden" : "";
          items.forEach((item, i) => {
            if (isOpen) {
              setTimeout(() => { item.style.opacity = "1"; item.style.transform = "translateY(0)"; }, 80 + i * 60);
            } else {
              item.style.opacity = "0"; item.style.transform = "translateY(20px)";
            }
          });
        });
      });
      // Close nav on link click (but not sub-menu toggles)
      document.querySelectorAll<HTMLAnchorElement>(".js-nav a").forEach((link) => {
        link.addEventListener("click", function (e) {
          // Don't close if this has toggleNavSub onclick or is inside a sub-menu toggle
          if (this.getAttribute("onclick") || this.closest(".nav-sub-title")) return;
          // Don't close for sub-menu parent links (has-sub)
          if (this.closest(".nav-item.has-sub") && this.parentElement?.classList.contains("has-sub")) return;
          const href = this.getAttribute("href");
          if (!href || href === "#") return;
          if (isOpen) menuBtns[0].click();
        });
      });
    };

    // Footer reveal — always relative, no margin-bottom gap
    const initFooterReveal = () => {
      const footer = document.querySelector<HTMLElement>(".site-footer");
      const mainWrapper = document.querySelector<HTMLElement>(".main-content-wrapper");
      if (!footer || !mainWrapper) return;
      footer.style.position = "relative";
      footer.style.visibility = "visible";
      mainWrapper.style.marginBottom = "0";
    };

    // Sticky header - hide on scroll down, show on scroll up (desktop only)
    const initStickyHeader = () => {
      const header = document.querySelector<HTMLElement>(".header__area");
      if (!header) return;
      let lastScroll = 0;
      let ticking = false;
      
      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currentScroll = window.scrollY;
            // On mobile/tablet, don't hide header
            if (window.innerWidth <= 1199) {
              if (currentScroll > 10) header.classList.add("sticky");
              else header.classList.remove("sticky");
              ticking = false;
              lastScroll = currentScroll;
              return;
            }
            // Desktop behavior
            if (currentScroll <= 10) {
              header.classList.remove("sticky", "header-hidden");
            } else if (currentScroll > lastScroll && currentScroll > 80) {
              header.classList.add("sticky", "header-hidden");
            } else {
              header.classList.add("sticky");
              header.classList.remove("header-hidden");
            }
            lastScroll = currentScroll;
            ticking = false;
          });
          ticking = true;
        }
      });
    };

    // Custom cursor - only shows on data-cursor-text elements
    const initCursor = () => {
      const cursorBall = document.getElementById("cursor-ball");
      if (!cursorBall) return;

      let isHovering = false;

      document.addEventListener("mousemove", (e) => {
        if (isHovering) {
          cursorBall.style.left = e.clientX + "px";
          cursorBall.style.top = e.clientY + "px";
        }
      });

      document.querySelectorAll("[data-cursor-text]").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          isHovering = true;
          const text = el.getAttribute("data-cursor-text") || "Drag";
          cursorBall.textContent = text;
          cursorBall.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
          isHovering = false;
          cursorBall.classList.remove("active");
          cursorBall.textContent = "";
        });
      });
    };

    // Desktop dropdown - click to open/close
    const initDesktopDropdowns = () => {
      const dropdownItems = document.querySelectorAll<HTMLElement>(".header__area-menubar-center-menu ul > li.has-dropdown > a");
      dropdownItems.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const li = link.parentElement!;
          const isOpen = li.classList.contains("dropdown-open");
          // Close all other dropdowns
          document.querySelectorAll(".has-dropdown.dropdown-open").forEach((el) => el.classList.remove("dropdown-open"));
          // Toggle this one
          if (!isOpen) li.classList.add("dropdown-open");
        });
      });
      // Close on click outside
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".has-dropdown")) {
          document.querySelectorAll(".has-dropdown.dropdown-open").forEach((el) => el.classList.remove("dropdown-open"));
        }
      });

      // Category accordion inside dropdowns - use event delegation
      document.addEventListener("click", (e) => {
        const title = (e.target as HTMLElement).closest(".services-category-title") as HTMLElement;
        if (!title) return;
        e.stopPropagation();
        const cat = title.parentElement!;
        const isOpen = cat.classList.contains("cat-open");
        // Close siblings
        cat.parentElement?.querySelectorAll(".services-category.cat-open").forEach((el) => el.classList.remove("cat-open"));
        if (!isOpen) cat.classList.add("cat-open");
      });
    };

    setTimeout(() => { initWow(); initNav(); initFooterReveal(); initStickyHeader(); initCursor(); initDesktopDropdowns(); }, 300);
    // Re-init nav on any navigation (SPA)
    setTimeout(() => { initNav(); initDesktopDropdowns(); }, 1000);
  }, []);

  return null;
}
