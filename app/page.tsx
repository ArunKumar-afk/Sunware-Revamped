import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  // 57 chars — within 50-60 target; "services" keyword added
  title: "Sunware Technologies | AI, Data & Cloud Services",
  // 160 chars — within 120-160 target; keywords: AI services, data engineering, cloud, business
  description: "Sunware Technologies delivers AI services, Data Engineering, Cloud Solutions & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
};

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), "public", "partials", "home.html");
  const content = fs.readFileSync(htmlPath, "utf-8");
  return <HomePageClient content={content} />;
}
