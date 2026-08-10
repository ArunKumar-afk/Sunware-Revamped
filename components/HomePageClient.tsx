"use client";
import { useEffect, useRef } from "react";

export default function HomePageClient({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Wait for external scripts to load then initialize
    function waitForSwiper(cb: () => void, retries = 20) {
      if ((window as any).Swiper) { cb(); return; }
      if (retries > 0) setTimeout(() => waitForSwiper(cb, retries - 1), 200);
    }

    // Re-init WOW.js
    setTimeout(() => { if ((window as any).WOW) new (window as any).WOW().init(); }, 300);

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

    // Initialize Swipers when ready
    waitForSwiper(() => {
      const Swiper = (window as any).Swiper;
      new Swiper(".brand_slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        speed: 3000,
        autoplay: { delay: 0, disableOnInteraction: false },
        breakpoints: { 320: { slidesPerView: 2 }, 768: { slidesPerView: 4 }, 1200: { slidesPerView: 6 } },
      });
      new Swiper(".team_slider", {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        speed: 800,
        grabCursor: true,
        centeredSlides: false,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: ".team-slider-pagination", clickable: true },
        breakpoints: { 320: { slidesPerView: 1, centeredSlides: true, spaceBetween: 20 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1200: { slidesPerView: 4, spaceBetween: 25 } },
      });
    });

    // Mobile stack cards carousel (only on mobile)
    function initStackCarousel() {
      if (window.innerWidth >= 992) return;
      const container = document.getElementById("stack-cards-container");
      if (!container) return;

      const cards = container.querySelectorAll<HTMLElement>(".stack-card");
      if (cards.length === 0) return;
      let current = 0;

      function goTo(idx: number) {
        current = idx;
        cards[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        container!.querySelectorAll(".stack-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
      }

      // Add nav buttons if not already present
      if (!container.querySelector(".stack-nav-prev")) {
        const prev = document.createElement("button");
        prev.className = "stack-nav-btn stack-nav-prev";
        prev.innerHTML = '<i class="fal fa-chevron-left"></i>';
        const next = document.createElement("button");
        next.className = "stack-nav-btn stack-nav-next";
        next.innerHTML = '<i class="fal fa-chevron-right"></i>';
        prev.addEventListener("click", () => goTo((current - 1 + cards.length) % cards.length));
        next.addEventListener("click", () => goTo((current + 1) % cards.length));
        container.appendChild(prev);
        container.appendChild(next);

        // Dots
        const dotsEl = document.createElement("div");
        dotsEl.className = "stack-dots";
        cards.forEach((_, i) => {
          const dot = document.createElement("button");
          dot.className = "stack-dot" + (i === 0 ? " active" : "");
          dot.addEventListener("click", () => goTo(i));
          dotsEl.appendChild(dot);
        });
        container.parentElement?.appendChild(dotsEl);
      }

      // Touch swipe support
      let startX = 0;
      container.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
      container.addEventListener("touchend", (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? (current + 1) % cards.length : (current - 1 + cards.length) % cards.length);
      });
    }

    setTimeout(() => initStackCarousel(), 500);

    // Blog feed from Blogger via JSONP
    function loadBlogFeed() {
      const container = document.getElementById("blogger-landing-posts");
      if (!container) return;

      // Use JSONP approach (Blogger blocks CORS on alt=json)
      const callbackName = "bloggerCallback_" + Date.now();
      (window as any)[callbackName] = function(data: any) {
        const entries = data.feed.entry || [];
        let html = "";
        if (entries.length === 0) { container.innerHTML = '<div class="swiper-slide text-center"><p>No articles found.</p></div>'; return; }
        entries.forEach(function (entry: any) {
          const title = entry.title.$t;
          const link = entry.link.find((l: any) => l.rel === "alternate")?.href || "#";
          let thumb = "/assets/img/blog/blog-1.jpg";
          if (entry.content && entry.content.$t.includes("<img")) {
            const match = entry.content.$t.match(/<img[^>]+src="([^">]+)"/);
            if (match) thumb = match[1];
          } else if (entry.media$thumbnail) { thumb = entry.media$thumbnail.url; }
          thumb = thumb.replace(/\/s[0-9]+.*?\/|\/w[0-9]+.*?\//, "/s1600/");
          html += '<div class="blog__one-item swiper-slide"><div class="blog__one-item-image" style="margin-bottom:25px;"><a href="/blog?post=' + encodeURIComponent(link) + '"><img src="' + thumb + '" alt="' + title.replace(/"/g, '') + '" style="height:250px;width:100%;object-fit:cover;border-radius:16px;" loading="lazy"></a></div><div class="blog__one-item-content"><h5><a href="/blog?post=' + encodeURIComponent(link) + '">' + title + '</a></h5><a class="more_btn" href="/blog?post=' + encodeURIComponent(link) + '">Read More<i class="flaticon flaticon-right-up"></i></a></div></div>';
        });
        container.innerHTML = html;
        setTimeout(() => {
          waitForSwiper(() => {
            new (window as any).Swiper(".blog_slider", { slidesPerView: 3, spaceBetween: 30, loop: true, speed: 1000, grabCursor: true, pagination: { el: ".blog-pagination", clickable: true }, breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } } });
          });
        }, 300);
        // Cleanup
        delete (window as any)[callbackName];
      };

      const script = document.createElement("script");
      script.src = "https://sunwaretechnologies.blogspot.com/feeds/posts/default?alt=json-in-script&callback=" + callbackName;
      document.body.appendChild(script);
    }

    setTimeout(() => loadBlogFeed(), 800);
    const slides = [
      { h1: "Advanced Data & AI Solutions Tailored to Your Needs", h3: "Data. Intelligence. Engineered.", btn: "Get Started", href: "/about/", img: "/about hero.png" },
      { h1: "Real-Time Edge Intelligence for a Smarter World", h3: "Process. Analyze. Act - at the Edge.", btn: "Explore EdgeData360", href: "/edgedata360/", img: "/ed logo.png" },
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
