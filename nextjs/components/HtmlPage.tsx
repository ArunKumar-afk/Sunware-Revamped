"use client";
import { useEffect, useRef } from "react";

export default function HtmlPage({ content }: { content: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-initialize WOW.js animations for the new content
    if (ref.current && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: content }} />;
}
