import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Banking and Financial Services - Sunware Technologies",
  description: "Technology solutions for banking and financial services from Sunware Technologies. Fintech, risk analytics and digital banking.",
  alternates: { canonical: "https://sunwaretechnologies.com/banking-finance" },
};

const content = `<!-- Page Hero Start -->
        <section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.7), rgba(10,15,30,0.8)), url('images/Industries/Sunware_Industries_Banking_and_Financial_Services_Banner.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
                <div class="container text-center">
                        <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                <a href="index.html" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay=".4s">
                                <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Banking &amp; Financial Services</h1>
                        </div>
                        <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Empowering institutions to thrive in an era of digital-first finance.</p>
                </div>
        </section>
        <!-- Page Hero End -->

        <!-- Intro Section -->
        <section class="section-padding" style="background: #fff;">
                <div class="container">
                        <div class="row al-center">
                                <div class="col-lg-6 wow fadeInLeft">
                                        <span class="subtitle">Industry Overview</span>
                                        <h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Banking Redefined for the Digital Age</h2>
                                        <p style="font-size: 18px; line-height: 1.8; color: #555;">In today's fast-paced digital world, where 80% of financial transactions are now conducted online, the banking and financial services industry is experiencing a profound transformation. We empower banks and financial institutions to embrace this digital revolution and thrive in the new financial landscape.</p>
                                </div>
                                <div class="col-lg-6 wow fadeInRight">
                                        <img src="images/Industries/Sunware_Industries_Banking-and-Financial_Services_Our_Tailored_Solutions.png" alt="Banking Transformation" style="width:100%; border-radius: 24px;">
                                </div>
                        </div>
                </div>
        </section>

        <!-- Partner With Us -->
        <section class="section-padding" style="background: #f8faff;">
                <div class="container">
                        <div class="section-title t-center mb-60 wow fadeInUp">
                                <span class="subtitle">Partner With Us To</span>
                                <h2 style="font-weight: 800;">What We Help You Achieve</h2>
                        </div>
                        <div class="row">
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".1s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-cogs"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Enhance Operational Efficiency</h4>
                                                <p style="color:#666;">Streamline your processes and reduce operational costs by up to <strong>25%</strong> with our advanced automation solutions. From loan processing to account reconciliation, we help you optimize efficiency and redirect resources toward innovation and growth.</p>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".2s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-user-check"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Elevate Customer Experience</h4>
                                                <p style="color:#666;">Deliver seamless and personalized digital experiences that drive customer satisfaction and loyalty. Our solutions enable you to offer 24/7 access to banking services, intuitive mobile applications, and personalized financial advice.</p>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-shield-alt"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Fortify Security &amp; Compliance</h4>
                                                <p style="color:#666;">Safeguard your sensitive financial data and customer information with our robust cybersecurity solutions. We ensure your systems adhere to stringent regulatory requirements, mitigating the risk of costly breaches and ensuring customer trust.</p>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-lightbulb"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Drive Innovation</h4>
                                                <p style="color:#666;">Stay ahead of the curve with cutting-edge technologies such as artificial intelligence, machine learning, and blockchain. We help you unlock new revenue streams, create innovative financial products, and deliver personalized customer experiences.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Tailored Solutions -->
        <section class="section-padding" style="background: #fff;">
                <div class="container">
                        <div class="section-title t-center mb-60 wow fadeInUp">
                                <span class="subtitle">Our Expertise</span>
                                <h2 style="color:#0a0f1e; font-weight:800;">Tailored Solutions for Banking &amp; Financial Services</h2>
                        </div>
                        <div class="row">
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".1s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-university"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Core Banking System Modernization</h4>
                                                <p style="color:#666;">Upgrade your legacy systems to agile, scalable, and cloud-based platforms that drive efficiency and enable rapid innovation.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".2s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-map-signs"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Digital Transformation Consulting</h4>
                                                <p style="color:#666;">Develop a comprehensive roadmap for your digital transformation journey, aligned with your strategic goals and customer needs.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-mobile-alt"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Mobile Banking &amp; Payment Solutions</h4>
                                                <p style="color:#666;">Create user-friendly mobile applications and seamless payment experiences that enhance customer engagement and convenience.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-search-dollar"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Risk Management &amp; Fraud Detection</h4>
                                                <p style="color:#666;">Implement advanced analytics and machine learning models to proactively identify and mitigate risks, ensuring the security of your operations.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".5s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-handshake"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Customer Relationship Management (CRM)</h4>
                                                <p style="color:#666;">Build stronger customer relationships by leveraging data-driven insights to personalize interactions and offer targeted financial solutions.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        
        <!-- Why Organizations Choose Us -->
        <section style="padding: 80px 0; background: #f8faff;">
                <div class="container">
                        <div class="section-title t-center mb-60 wow fadeInUp">
                                <span class="subtitle">Why Choose Sunware</span>
                                <h2 style="font-weight: 800;">Why Organizations Choose Us</h2>
                                <p style="max-width: 700px; margin: 15px auto 0; color: #666; font-size: 17px;">Three core strengths that make Sunware Technologies the partner of choice.</p>
                        </div>
                        <div class="row">
                                <div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".1s">
                                        <div class="culture-card" style="height:100%; text-align:center;">
                                                <div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fal fa-microscope" style="font-size:28px; color:#EF7F1A;"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Deep Industry Expertise</h4>
                                                <p style="color:#666;">We understand the nuances of your industry landscape ? delivering tailored solutions that address your specific technical and regulatory challenges with precision.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".2s">
                                        <div class="culture-card" style="height:100%; text-align:center;">
                                                <div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fal fa-trophy" style="font-size:28px; color:#EF7F1A;"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Proven Track Record</h4>
                                                <p style="color:#666;">Our team has a successful history of delivering innovative IT solutions for leading organizations across research, operations, and commercial functions.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="culture-card" style="height:100%; text-align:center;">
                                                <div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fal fa-handshake" style="font-size:28px; color:#EF7F1A;"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Client-Centric Approach</h4>
                                                <p style="color:#666;">We prioritize your goals and work collaboratively to develop solutions that align perfectly with your unique vision ? acting as a true technology partner, not just a vendor.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Footer CTA Area Start -->
        <div class="container">
                <div class="row">
                        <div class="col-xl-12">
                                <div class="footer__cta-area mb-60">
                                        <div class="row al-center">
                                                <div class="col-xl-6 col-lg-7 lg-mb-40">
                                                        <div class="footer__cta-area-left lg-t-center">
                                                                <h2>Accelerate Your Financial Digital Journey</h2>
                                                        </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-5">
                                                        <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
                                                                <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Today<i class="flaticon-right-up"></i></a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <!-- Footer CTA Area End -->
        </div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}