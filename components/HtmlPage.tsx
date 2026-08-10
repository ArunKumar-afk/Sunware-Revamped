"use client";
import { useEffect, useRef } from "react";

export default function HtmlPage({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Re-initialize WOW.js animations
    setTimeout(() => {
      if ((window as any).WOW) new (window as any).WOW().init();
    }, 200);

    // Re-initialize any Swipers on the page
    setTimeout(() => {
      if ((window as any).Swiper) {
        ref.current?.querySelectorAll(".swiper:not(.swiper-initialized)").forEach((el) => {
          new (window as any).Swiper(el, {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 800,
            autoplay: { delay: 3000 },
            breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
          });
        });
      }
    }, 500);

    // Handle iframe resizing for careers
    const iframe = ref.current.querySelector<HTMLIFrameElement>(".careers-iframe, iframe");
    if (iframe) {
      const resizeIframe = () => {
        if (iframe.contentWindow) {
          try { iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px"; } catch {}
        }
      };
      iframe.addEventListener("load", resizeIframe);
      window.addEventListener("resize", () => { iframe.style.width = "100%"; });
    }

    // Execute inline scripts in the content
    ref.current.querySelectorAll("script").forEach((script) => {
      const newScript = document.createElement("script");
      if (script.src) { newScript.src = script.src; }
      else { newScript.textContent = script.textContent; }
      script.parentNode?.replaceChild(newScript, script);
    });

    // Domain-aware office ordering (About page)
    const officesRow = ref.current.querySelector<HTMLElement>("#offices-row");
    if (officesRow) {
      const host = window.location.hostname.toLowerCase();
      const isIndia = host.endsWith(".in");
      if (isIndia) {
        const india = officesRow.querySelector<HTMLElement>('[data-country="india"]');
        if (india) officesRow.insertBefore(india, officesRow.firstChild);
      }
      // .com / other: USA already first by default
    }

  }, [content]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: content }} />;
}
