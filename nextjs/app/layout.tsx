import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullscreenNav from "@/components/FullscreenNav";
import Preloader from "@/components/Preloader";
import EnquireModal from "@/components/EnquireModal";
import Scripts from "@/components/Scripts";

export const metadata: Metadata = {
  title: "Sunware Technologies - AI, Data Engineering & Product Engineering Services",
  description: "Sunware Technologies delivers AI, Data Engineering, Cloud Solutions and Digital Transformation services to global enterprises. Offices in USA, UAE, UK and India.",
  keywords: "Sunware Technologies, AI services, data engineering, cloud solutions, product engineering, digital transformation, enterprise software, USA, Dubai, UK, India, Chennai",
  authors: [{ name: "Sunware Technologies" }],
  robots: "index, follow",
  openGraph: {
    title: "Sunware Technologies - AI, Data & Product Engineering",
    description: "End-to-end technology services: Data Science & AI, Cloud, Digital Transformation and Operational Support for global enterprises.",
    type: "website",
    url: "https://sunwaretechnologies.com/",
    images: [{ url: "https://sunwaretechnologies.com/main logo.png" }],
    siteName: "Sunware Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunware Technologies - AI, Data & Product Engineering",
    description: "End-to-end technology services: Data Science & AI, Cloud, Digital Transformation and Operational Support for global enterprises.",
    images: ["https://sunwaretechnologies.com/main logo.png"],
  },
  alternates: {
    canonical: "https://sunwaretechnologies.com/",
    languages: {
      en: "https://sunwaretechnologies.com/",
      "en-IN": "https://sunwaretechnologies.in/",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/font/flaticon_flexitype.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <Preloader />
        <FullscreenNav />
        <div className="main-content-wrapper">
          <Header />
          {children}
        </div>
        <Footer />
        <EnquireModal />
        <Scripts />
      </body>
    </html>
  );
}
