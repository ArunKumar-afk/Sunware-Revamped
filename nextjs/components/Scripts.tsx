"use client";
import Script from "next/script";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Scripts() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({ duration: 1.5 });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

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
        link.addEventListener("click", function () {
          if (this.getAttribute("onclick") || this.closest(".nav-sub-title")) return;
          const href = this.getAttribute("href");
          if (!href || href === "#") return;
          if (isOpen) menuBtns[0].click();
        });
      });
    };

    // Footer reveal
    const initFooterReveal = () => {
      const footer = document.querySelector<HTMLElement>(".site-footer");
      const mainWrapper = document.querySelector<HTMLElement>(".main-content-wrapper");
      if (!footer || !mainWrapper) return;
      const adjust = () => {
        const h = footer.offsetHeight;
        if (window.innerWidth < 992) {
          footer.style.position = "relative"; footer.style.visibility = "visible"; mainWrapper.style.marginBottom = "0";
        } else {
          footer.style.position = "fixed"; footer.style.visibility = "visible"; mainWrapper.style.marginBottom = h + "px";
        }
      };
      adjust();
      window.addEventListener("resize", adjust);
    };

    // Sticky header
    const initStickyHeader = () => {
      const header = document.querySelector<HTMLElement>(".header__area");
      if (!header) return;
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) header.classList.add("sticky");
        else header.classList.remove("sticky");
      });
    };

    // Custom cursor with "Drag" text
    const initCursor = () => {
      const cursorText = document.getElementById("cursor-text");
      const cursorBall = document.getElementById("cursor-ball");
      if (!cursorText && !cursorBall) return;

      document.addEventListener("mousemove", (e) => {
        if (cursorBall) { cursorBall.style.left = e.clientX + "px"; cursorBall.style.top = e.clientY + "px"; }
        if (cursorText) { cursorText.style.left = e.clientX + "px"; cursorText.style.top = e.clientY + "px"; }
      });

      document.querySelectorAll("[data-cursor-text]").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.getAttribute("data-cursor-text") || "";
          if (cursorText) { cursorText.textContent = text; cursorText.classList.add("active"); }
        });
        el.addEventListener("mouseleave", () => {
          if (cursorText) { cursorText.textContent = ""; cursorText.classList.remove("active"); }
        });
      });
    };

    setTimeout(() => { initWow(); initNav(); initFooterReveal(); initStickyHeader(); initCursor(); }, 100);
  }, []);

  return (
    <>
      <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
      <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/split-text.js" strategy="afterInteractive" />
    </>
  );
}
