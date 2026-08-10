import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullscreenNav from "@/components/FullscreenNav";
import Preloader from "@/components/Preloader";
import EnquireModal from "@/components/EnquireModal";
import Scripts from "@/components/Scripts";
import DomainSEO from "@/components/DomainSEO";

export const metadata: Metadata = {
  // 55 chars — within the 50–60 target
  title: "Sunware Technologies | AI & Data Engineering",
  description: "AI, Data Engineering, Cloud & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
  keywords: "Sunware Technologies, AI services, data engineering, cloud solutions, product engineering, digital transformation, enterprise software, USA, Dubai, UK, India, Chennai",
  authors: [{ name: "Sunware Technologies" }],
  robots: "index, follow",
  openGraph: {
    title: "Sunware Technologies | AI & Data Engineering",
    description: "AI, Data Engineering, Cloud & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
    type: "website",
    url: "https://sunwaretechnologies.com/",
    images: [{ url: "https://sunwaretechnologies.com/main%20logo.png" }],
    siteName: "Sunware Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunware Technologies | AI & Data Engineering",
    description: "AI, Data Engineering, Cloud & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
    images: ["https://sunwaretechnologies.com/main%20logo.png"],
  },
  alternates: {
    // Single canonical — the DomainSEO component handles .in domain swap client-side
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
        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sunware Technologies",
          "url": "https://sunwaretechnologies.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sunwaretechnologies.com/main%20logo.png",
            "width": 200,
            "height": 60
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "connect@sunwaretechnologies.com",
            "availableLanguage": ["English"]
          },
          "description": "Sunware Technologies is a global technology services company specialising in Artificial Intelligence, Data Engineering, Cloud Solutions, Digital Transformation and Product Engineering.",
          "foundingLocation": "Cupertino, California, USA",
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50, "maxValue": 500 },
          "sameAs": [
            "https://in.linkedin.com/company/sunwaretechnologies",
            "https://www.youtube.com/@sunwaretechnologies",
            "https://www.instagram.com/sunwaretechnologies",
            "https://sunwaretechnologies.in"
          ],
          "address": [
            {"@type":"PostalAddress","streetAddress":"20065 Stevens Creek Blvd, Suite B-2B","addressLocality":"Cupertino","addressRegion":"CA","postalCode":"95014","addressCountry":"US"},
            {"@type":"PostalAddress","streetAddress":"Unit No. 144, DMCC Business Centre, Level 5, Jewellery & Gemplex 2","addressLocality":"Dubai","addressCountry":"AE"},
            {"@type":"PostalAddress","streetAddress":"6th Floor, Forest House, 16-20 Clements Road","addressLocality":"Ilford","postalCode":"IG1 1BA","addressCountry":"GB"},
            {"@type":"PostalAddress","streetAddress":"117, KSR Nagar, Ambattur","addressLocality":"Chennai","addressRegion":"Tamil Nadu","postalCode":"600053","addressCountry":"IN"}
          ],
          "areaServed": ["US","AE","GB","IN"],
          "knowsAbout": ["Artificial Intelligence","Data Engineering","Cloud Computing","Digital Transformation","Product Engineering","IoT Solutions","Cybersecurity","Salesforce","Microsoft Azure","Neo4j","Odoo ERP"]
        })}} />
        {/* LocalBusiness Schema — Chennai HQ (India) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sunware Technologies Pvt. Ltd.",
          "url": "https://sunwaretechnologies.in",
          "image": "https://sunwaretechnologies.com/main%20logo.png",
          "description": "AI, Data Engineering and Cloud Solutions company in Chennai, India.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "117, KSR Nagar, Ambattur",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600053",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.1143,
            "longitude": 80.1548
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": ["https://in.linkedin.com/company/sunwaretechnologies"]
        })}} />
        {/* WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sunware Technologies",
          "url": "https://sunwaretechnologies.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://sunwaretechnologies.com/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}} />
      </head>
      <body>
        <DomainSEO />
        <Preloader />
        <div className="cursor">
          <div className="hide"><div id="cursor-ball"></div></div>
          <div id="cursor-text"></div>
        </div>
        <FullscreenNav />
        <div className="main-content-wrapper">
          <Header />
          {children}
        </div>
        <Footer />
        <EnquireModal />
        <Scripts />
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/split-text.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
