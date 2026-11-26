import type { Metadata } from "next";
import EdgeDataClient from "@/components/EdgeDataClient";
import BreadcrumbLD from "@/components/BreadcrumbLD";
import FaqLD from "@/components/FaqLD";

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
      <FaqLD items={[
        { q: "What is Relim.ai?", a: "Relim.ai (formerly EdgeData360) is an enterprise real-time edge intelligence platform by Sunware Technologies. It connects 250+ industrial and enterprise data sources without custom code and deploys agentic AI directly at the edge, enabling AI-ready pipelines in under 10 minutes." },
        { q: "What was Relim.ai previously called?", a: "Relim.ai was formerly known as EdgeData360. It was rebranded in 2026. The platform, capabilities, and team behind it remain the same under Sunware Technologies." },
        { q: "What industries use Relim.ai?", a: "Relim.ai is used in smart manufacturing, industrial operations, oil and gas, utilities, healthcare operations, and any industry requiring real-time edge data processing and AI inferencing." },
        { q: "How many data connectors does Relim.ai support?", a: "Relim.ai supports 250+ pre-built data connectors including PLCs, Historian systems, databases, REST APIs, MQTT/Sparkplug servers, and industrial protocols — all without writing custom integration code." },
      ]} />
      <BreadcrumbLD items={[
        { name: "Home", url: "https://sunwaretechnologies.com" },
        { name: "Relim.ai", url: "https://sunwaretechnologies.com/relim-ai/" },
      ]} />
      <EdgeDataClient />
    </>
  );
}
