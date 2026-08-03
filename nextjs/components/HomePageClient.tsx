"use client";
import { useEffect, useRef } from "react";

export default function HomePageClient({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Re-init WOW.js
    if ((window as any).WOW) new (window as any).WOW().init();

    // Industries tab navigation
    const navItems = ref.current.querySelectorAll<HTMLElement>(".industry-nav-item");
    const contents = ref.current.querySelectorAll<HTMLElement>(".industry-detail-content");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((n) => n.classList.remove("active"));
        item.classList.add("active");
        const target = item.getAttribute("data-target");
        contents.forEach((c) => {
          c.classList.toggle("active", c.id === target);
          c.classList.toggle("d-none", c.id !== target);
        });
      });
    });

    // Brand slider
    if ((window as any).Swiper) {
      new (window as any).Swiper(".brand_slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        speed: 3000,
        autoplay: { delay: 0, disableOnInteraction: false },
        breakpoints: { 320: { slidesPerView: 2 }, 768: { slidesPerView: 4 }, 1200: { slidesPerView: 6 } },
      });

      // Team/Tech slider
      new (window as any).Swiper(".team_slider", {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        speed: 800,
        autoplay: { delay: 3000 },
        breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 4 } },
      });
    }

    // Hero slideshow
    const slides = [
      { h1: "Advanced Data & AI Solutions Tailored to Your Needs", h3: "Data. Intelligence. Engineered.", btn: "Get Started", href: "/about", img: "/about hero.png" },
      { h1: "Real-Time Edge Intelligence for a Smarter World", h3: "Process. Analyze. Act - at the Edge.", btn: "Explore EdgeData360", href: "/edgedata360", img: "/ed logo.png" },
    ];
    let idx = 0;
    const h1El = document.getElementById("hero-h1");
    const h3El = document.getElementById("hero-h3");
    const btnEl = document.getElementById("hero-btn") as HTMLAnchorElement | null;
    const imgEl = document.getElementById("hero-img") as HTMLImageElement | null;

    function showSlide(i: number) {
      idx = i % 2;
      const s = slides[idx];
      if (!h1El || !imgEl) return;
      h1El.style.opacity = "0"; h3El!.style.opacity = "0"; imgEl.style.opacity = "0"; imgEl.style.transform = "scale(0.95)";
      setTimeout(() => {
        h1El.textContent = s.h1; h3El!.textContent = s.h3;
        if (btnEl) { btnEl.textContent = s.btn; btnEl.href = s.href; }
        imgEl.src = s.img;
        h1El.style.opacity = "1"; h3El!.style.opacity = "1"; imgEl.style.opacity = "1"; imgEl.style.transform = "scale(1)";
      }, 500);
      // Update dots
      document.querySelectorAll(".hero-dot").forEach((dot, di) => {
        (dot as HTMLElement).style.width = di === idx ? "32px" : "12px";
        (dot as HTMLElement).style.borderRadius = di === idx ? "6px" : "50%";
        (dot as HTMLElement).style.background = di === idx ? "#EF7F1A" : "#ccc";
      });
    }

    const timer = setInterval(() => showSlide(idx + 1), 6000);
    document.querySelectorAll(".hero-dot").forEach((dot, i) => {
      dot.addEventListener("click", () => { showSlide(i); });
    });

    return () => clearInterval(timer);
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: content }} />;
}
