"use client";
import { useEffect } from "react";

interface FaqItem {
  q: string;
  a: string;
}

/**
 * FaqLD — injects FAQPage JSON-LD into <head> on the client.
 * Helps Google AI Overviews, featured snippets, Perplexity, ChatGPT search,
 * and voice assistants extract accurate Q&A from the page.
 */
export default function FaqLD({ items }: { items: FaqItem[] }) {
  useEffect(() => {
    const id = "faq-ld";
    document.getElementById(id)?.remove();

    const ld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => { document.getElementById(id)?.remove(); };
  }, [items]);

  return null;
}
