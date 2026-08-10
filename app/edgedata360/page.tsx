import type { Metadata } from "next";
import EdgeDataClient from "@/components/EdgeDataClient";

export const metadata: Metadata = {
  title: "EdgeData360 - Data Unified. AI Unleashed. | Sunware Technologies",
  description: "EdgeData360 by Sunware Technologies - the enterprise platform with 250+ connectors, AI-ready pipelines in 10 minutes, and real-time agentic AI for industrial operations.",
  keywords: "EdgeData360, edge intelligence platform, real-time data platform, IoT data platform, AI edge computing, data unification, Sunware Technologies product",
  openGraph: {
    title: "EdgeData360 - Data Unified. AI Unleashed. | Sunware Technologies",
    description: "Enterprise platform with 250+ connectors, AI-ready pipelines in 10 minutes, and real-time agentic AI for industrial operations.",
    url: "https://sunwaretechnologies.com/edgedata360",
    images: [{ url: "https://sunwaretechnologies.com/images/edlogo.png" }],
  },
  alternates: { canonical: "https://sunwaretechnologies.com/edgedata360/" },
};

export default function EdgeData360Page() {
  return <EdgeDataClient />;
}

