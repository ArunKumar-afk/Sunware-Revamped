import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "About Us - Sunware Technologies | AI & Engineering Company",
  description: "Learn about Sunware Technologies - a global technology company delivering AI, Data Engineering, Cloud and Digital Transformation services from USA, UAE & India.",
  keywords: "Sunware Technologies about, AI company USA, data engineering company, cloud solutions provider, technology consulting firm",
  openGraph: {
    title: "About Us - Sunware Technologies | AI & Engineering Company",
    description: "Learn about Sunware Technologies - a global technology company delivering AI, Data Engineering, Cloud and Digital Transformation services.",
    url: "https://sunwaretechnologies.com/about/",
    images: [{ url: "https://sunwaretechnologies.com/hero.png", width: 1200, height: 630, alt: "About Sunware Technologies — AI & Engineering Company" }],
    type: "website",
    siteName: "Sunware Technologies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Sunware Technologies | AI & Engineering Company",
    description: "Learn about Sunware Technologies - a global technology company delivering AI, Data Engineering, Cloud and Digital Transformation services.",
    images: ["https://sunwaretechnologies.com/hero.png"],
    site: "@sunwaretechnologies",
  },
  alternates: { canonical: "https://sunwaretechnologies.com/about/" },
};

export default function AboutPage() {
  const htmlPath = path.join(process.cwd(), "public", "partials", "about.html");
  const content = fs.readFileSync(htmlPath, "utf-8");
  return <HtmlPage content={content} />;
}

