"use client";
import { useEffect } from "react";

/**
 * BreadcrumbLD — injects a BreadcrumbList JSON-LD script into <head> on the client.
 * Using useEffect keeps it out of the SSR tree, preventing React hydration mismatches
 * that occur when <script> tags are rendered as siblings of client components in
 * Next.js App Router page fragments.
 *
 * Googlebot executes JavaScript so the schema is still picked up for SEO.
 */
export default function BreadcrumbLD({ items }: { items: { name: string; url: string }[] }) {
  useEffect(() => {
    const id = "breadcrumb-ld";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const ld = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => { document.getElementById(id)?.remove(); };
  }, [items]);

  return null; // renders nothing — no SSR output, no hydration diff
}
