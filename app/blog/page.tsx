import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Blog - Sunware Technologies | Tech Insights & Articles",
  description: "Read the latest insights on AI, data engineering, cloud solutions and digital transformation from the Sunware Technologies team.",
  alternates: { canonical: "https://sunwaretechnologies.com/blog/" },
};

export default function BlogPage() {
  return <BlogClient />;
}

