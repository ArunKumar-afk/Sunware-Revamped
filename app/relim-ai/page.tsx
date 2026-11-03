import type { Metadata } from "next";
import EdgeDataClient from "@/components/EdgeDataClient";
import BreadcrumbLD from "@/components/BreadcrumbLD";

export const metadata: Metadata = {
  title: "Relim.ai - Data Unified. AI Unleashed. | Sunware Technologies",
  description: "Relim.ai by Sunware Technologies (formerly EdgeData360) — the enterprise platform with 250+ connectors, AI-ready pipelines in 10 minutes, and real-time agentic AI for industrial operations.",
  keywords: "Relim.ai, relim ai, EdgeData360, edge intelligence platform, real-time data platform, IoT data platform, AI edge computing, data unification, Sunware Technologies product",
  openGraph: {
    title: "Relim.ai - Data Unified. AI Unleashed. | Sunware Technologies",
    description: "Enterprise platform with 250+ connectors, AI-ready pipelines in 10 minutes, and real-time agentic AI for industrial operations. Formerly EdgeData360.",
    url: "https://sunwaretechnologies.com/relim-ai/",
    images: [{ url: "https://sunwaretechnologies.com/hero.png", width: 1200, height: 630, alt: "Relim.ai by Sunware Technologies" }],
    type: "website",
    siteName: "Sunware Technologies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relim.ai - Data Unified. AI Unleashed. | Sunware Technologies",
    description: "Enterprise platform with 250+ connectors, AI-ready pipelines in 10 minutes, and real-time agentic AI. Formerly EdgeData360.",
    images: ["https://sunwaretechnologies.com/hero.png"],
    site: "@sunwaretechnologies",
    creator: "@sunwaretechnologies",
  },
  alternates: { canonical: "https://sunwaretechnologies.com/relim-ai/" },
};

export default function RelimAIPage() {
  return (
    <>
      <BreadcrumbLD items={[
        { name: "Home", url: "https://sunwaretechnologies.com" },
        { name: "Relim.ai", url: "https://sunwaretechnologies.com/relim-ai/" },
      ]} />
      <EdgeDataClient />
    </>
  );
}
