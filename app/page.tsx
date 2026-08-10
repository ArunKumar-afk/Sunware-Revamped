import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Sunware Technologies | AI & Data Engineering",
  description: "AI, Data Engineering, Cloud & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
};

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), "public", "partials", "home.html");
  const content = fs.readFileSync(htmlPath, "utf-8");
  return <HomePageClient content={content} />;
}
