"use client";
import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const loader = document.querySelector(".theme-loader") as HTMLElement;
    if (loader) {
      const timer = setTimeout(() => {
        loader.classList.add("loaded");
        setTimeout(() => loader.remove(), 700);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="theme-loader">
      <img src="/favicon.png" alt="Sunware" className="loader-logo" />
    </div>
  );
}
