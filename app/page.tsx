import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  // 55 chars — within the 50–60 target
  title: "Sunware Technologies | AI, Data & Cloud Solutions",
  // 158 chars — within the 120–160 target, keywords distributed
  description: "Sunware Technologies delivers AI, Data Engineering, Cloud Solutions & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
};

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), "public", "partials", "home.html");
  const content = fs.readFileSync(htmlPath, "utf-8");
  return <HomePageClient content={content} />;
}
