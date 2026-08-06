"use client";
import { useEffect } from "react";

export default function DomainSEO() {
  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    const isIndia = host.endsWith(".in");

    // Update document title based on domain
    if (isIndia) {
      document.title = "Sunware Technologies - AI & Data Engineering Company in Chennai, India";
      // Update meta description
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", "Sunware Technologies is a Chennai-based AI, Data Engineering and Cloud solutions company. Serving enterprises across India with offices in Chennai, Pune and Bengaluru.");
      // Update canonical
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", "https://sunwaretechnologies.in/");
      // Update OG
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", "https://sunwaretechnologies.in/");
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", "Sunware Technologies - AI & Engineering Company in Chennai");
    }
    // .com and .co.in keep the default US-focused metadata (set in layout.tsx)
  }, []);

  return null;
}
