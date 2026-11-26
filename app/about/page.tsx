import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";
import fs from "fs";
import path from "path";

import FaqLD from "@/components/FaqLD";

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
  return (
    <>
      <FaqLD items={[
        { q: "What is Sunware Technologies?", a: "Sunware Technologies is a global B2B technology services company founded in 2015, headquartered in San Jose, California. The company delivers AI services, Data Engineering, Cloud Solutions, Digital Transformation, and IoT services to enterprises in the USA, UAE, and India." },
        { q: "Where is Sunware Technologies headquartered?", a: "Sunware Technologies is headquartered at 4880 Stevens Creek Blvd, Suite 202, San Jose, California 95129, USA. The company also has offices in Dubai (UAE) and development centres in Chennai and Pune, India." },
        { q: "How many offices does Sunware Technologies have?", a: "Sunware Technologies has offices in San Jose (USA), Dubai (UAE), Chennai (India), and Pune (India). The company operates onshore teams in the US and UAE, with delivery centres in India." },
        { q: "What industries does Sunware Technologies serve?", a: "Sunware Technologies serves enterprises in Healthcare and Life Sciences, Banking and Financial Services, Retail and E-Commerce, Media and Entertainment, Manufacturing, and Energy and Utilities." },
        { q: "What is Relim.ai?", a: "Relim.ai (formerly EdgeData360) is a proprietary enterprise platform by Sunware Technologies for real-time edge intelligence. It connects 250+ data sources, enables AI-ready pipelines in 10 minutes, and deploys agentic AI at the edge." },
      ]} />
      <HtmlPage content={content} />
    </>
  );
}

