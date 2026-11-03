import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Blog - Sunware Technologies | Tech Insights & Articles",
  description: "Read the latest insights on AI, data engineering, cloud solutions and digital transformation from the Sunware Technologies team.",
  keywords: "Sunware Technologies blog, tech insights, AI articles, data engineering blog, cloud technology, digital transformation news",
  openGraph: {
    title: "Blog - Sunware Technologies | Tech Insights & Articles",
    description: "Read the latest insights on AI, data engineering, cloud solutions and digital transformation from the Sunware Technologies team.",
    url: "https://sunwaretechnologies.com/blog/",
    images: [{ url: "https://sunwaretechnologies.com/hero.png", width: 1200, height: 630, alt: "Blog — Sunware Technologies" }],
    type: "website",
    siteName: "Sunware Technologies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Sunware Technologies | Tech Insights & Articles",
    description: "Read the latest insights on AI, data engineering, cloud solutions and digital transformation from the Sunware Technologies team.",
    images: ["https://sunwaretechnologies.com/hero.png"],
    site: "@sunwaretechnologies",
  },
  alternates: { canonical: "https://sunwaretechnologies.com/blog/" },
};

export default function BlogPage() {
  return <BlogClient />;
}

