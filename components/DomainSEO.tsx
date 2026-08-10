"use client";
import { useEffect } from "react";

export default function DomainSEO() {
  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    const isIndia = host.endsWith(".in");

    if (isIndia) {
      // Title
      document.title = "Sunware Technologies | AI & Data Engineering in India";

      // Meta description
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", "Sunware Technologies delivers AI, Data Engineering and Cloud Solutions to enterprises across India. Offices in Chennai, Pune and Bengaluru. Serving Banking, Healthcare, Retail & Media sectors.");

      // OG tags (no canonical manipulation — Next.js owns that)
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", "https://sunwaretechnologies.in/");
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", "Sunware Technologies | AI & Engineering Company in India");
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", "AI, Data Engineering and Cloud solutions company in Chennai, India. Offices in Chennai, Pune and Bengaluru.");
    }
    // .com / .co.in keep default metadata from layout.tsx
  }, []);

  return null;
}
