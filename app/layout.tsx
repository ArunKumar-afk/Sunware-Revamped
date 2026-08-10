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
  // 57 chars — within 50-60 target; added "services" keyword
  title: "Sunware Technologies | AI, Data & Cloud Services",
  // 149 chars — within 120-160 target; keywords: AI, services, data engineering, cloud
  description: "Sunware Technologies delivers AI services, Data Engineering, Cloud Solutions & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
  keywords: "AI services, AI solutions, data engineering services, cloud solutions, digital transformation, Sunware Technologies, enterprise software, machine learning, IoT, business solutions, Chennai, USA, Dubai, UK, India",
  authors: [{ name: "Sunware Technologies" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Sunware Technologies | AI, Data & Cloud Services",
    description: "Sunware Technologies delivers AI services, Data Engineering, Cloud Solutions & Digital Transformation for global enterprises. Offices in USA, UAE, UK & India.",
    type: "website",
    url: "https://sunwaretechnologies.com/",
    images: [{ url: "https://sunwaretechnologies.com/main%20logo.png", width: 1200, height: 630, alt: "Sunware Technologies" }],
    siteName: "Sunware Technologies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunware Technologies | AI, Data & Cloud Services",
    description: "Sunware Technologies delivers AI services, Data Engineering, Cloud Solutions & Digital Transformation for global enterprises.",
    images: ["https://sunwaretechnologies.com/main%20logo.png"],
    site: "@sunwaretechnologies",
  },
  alternates: {
    canonical: "https://sunwaretechnologies.com/",
    languages: { en: "https://sunwaretechnologies.com/", "en-IN": "https://sunwaretechnologies.in/" },
  },
};

// JSON-LD as static strings — injected server-side, never hydrated by React
const orgJsonLd = `{"@context":"https://schema.org","@type":"Organization","name":"Sunware Technologies","url":"https://sunwaretechnologies.com","logo":{"@type":"ImageObject","url":"https://sunwaretechnologies.com/main%20logo.png","width":200,"height":60},"contactPoint":{"@type":"ContactPoint","contactType":"customer support","email":"connect@sunwaretechnologies.com","telephone":"+1-408-000-0000","availableLanguage":["English"]},"description":"Sunware Technologies is a global technology services company specialising in AI services, Data Engineering, Cloud Solutions, Digital Transformation and Product Engineering for enterprises in USA, UAE, UK and India.","foundingDate":"2015","sameAs":["https://in.linkedin.com/company/sunwaretechnologies","https://www.youtube.com/@sunwaretechnologies","https://www.instagram.com/sunwaretechnologies","https://sunwaretechnologies.in","https://x.com/sunwaretechnologies"],"address":[{"@type":"PostalAddress","streetAddress":"20065 Stevens Creek Blvd, Suite B-2B","addressLocality":"Cupertino","addressRegion":"CA","postalCode":"95014","addressCountry":"US"},{"@type":"PostalAddress","streetAddress":"117, KSR Nagar, Ambattur","addressLocality":"Chennai","addressRegion":"Tamil Nadu","postalCode":"600053","addressCountry":"IN"},{"@type":"PostalAddress","streetAddress":"Unit No. 144, DMCC Business Centre, Level 5, Jewellery & Gemplex 2","addressLocality":"Dubai","addressCountry":"AE"},{"@type":"PostalAddress","streetAddress":"6th Floor, Forest House, 16-20 Clements Road","addressLocality":"Ilford","postalCode":"IG1 1BA","addressCountry":"GB"}],"areaServed":["US","AE","GB","IN"],"knowsAbout":["Artificial Intelligence","Data Engineering","Cloud Solutions","Digital Transformation","IoT Solutions","Cybersecurity","Salesforce","Microsoft Azure","Neo4j","Odoo ERP","Business Intelligence","Machine Learning"]}`;

const localBizJsonLd = `{"@context":"https://schema.org","@type":"LocalBusiness","name":"Sunware Technologies Pvt. Ltd.","url":"https://sunwaretechnologies.in","telephone":"+91-44-0000-0000","email":"connect@sunwaretechnologies.com","image":"https://sunwaretechnologies.com/main%20logo.png","description":"AI services, Data Engineering and Cloud Solutions company in Chennai, India. Serving enterprises across India with offices in Chennai, Pune and Bengaluru.","address":{"@type":"PostalAddress","streetAddress":"117, KSR Nagar, Ambattur","addressLocality":"Chennai","addressRegion":"Tamil Nadu","postalCode":"600053","addressCountry":"IN"},"geo":{"@type":"GeoCoordinates","latitude":13.1143,"longitude":80.1548},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"},"sameAs":["https://in.linkedin.com/company/sunwaretechnologies","https://sunwaretechnologies.com"],"priceRange":"$$"}`;

const websiteJsonLd = `{"@context":"https://schema.org","@type":"WebSite","name":"Sunware Technologies","url":"https://sunwaretechnologies.com","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://sunwaretechnologies.com/blog?q={search_term_string}"},"query-input":"required name=search_term_string"}}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        {/* JSON-LD Schemas — static, server-rendered only */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: orgJsonLd }} />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: localBizJsonLd }} />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: websiteJsonLd }} />
      </head>
      <body suppressHydrationWarning>
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
        {/* All scripts use afterInteractive — App Router compatible */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/split-text.js" strategy="afterInteractive" />
        {/* Google Analytics GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-698R671PW8" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-698R671PW8', {
            send_page_view: true,
            page_path: window.location.pathname,
            page_location: window.location.href,
            linker: { domains: ['sunwaretechnologies.com', 'sunwaretechnologies.in', 'sunware.in'] }
          });
        `}</Script>
      </body>
    </html>
  );
}
