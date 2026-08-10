import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "About Us - Sunware Technologies | AI & Engineering Company",
  description: "Learn about Sunware Technologies - a global technology company delivering AI, Data Engineering, Cloud and Digital Transformation services from USA, UAE, UK and India.",
  keywords: "Sunware Technologies about, AI company USA, data engineering company, cloud solutions provider, technology consulting firm",
  openGraph: {
    title: "About Us - Sunware Technologies | AI & Engineering Company",
    description: "Learn about Sunware Technologies - a global technology company delivering AI, Data Engineering, Cloud and Digital Transformation services.",
    url: "https://sunwaretechnologies.com/about",
    images: [{ url: "https://sunwaretechnologies.com/main logo.png" }],
  },
  alternates: { canonical: "https://sunwaretechnologies.com/about/" },
};

export default function AboutPage() {
  const htmlPath = path.join(process.cwd(), "public", "partials", "about.html");
  const content = fs.readFileSync(htmlPath, "utf-8");
  return <HtmlPage content={content} />;
}

