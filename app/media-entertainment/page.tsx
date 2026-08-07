import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Media and Entertainment - Sunware Technologies",
  description: "Technology solutions for media and entertainment from Sunware Technologies. Content delivery, streaming platforms and audience analytics.",
  alternates: { canonical: "https://sunwaretechnologies.com/media-entertainment" },
};

const content = `<!-- Page Hero Start -->
        <section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.3), rgba(10,15,30,0.6)), url('images/Industries/Sunware_Industries_Media-and-Entertainment_Banner.png'); background-size: cover; background-position: center top; min-height: 380px; padding: 80px 0 100px 0;">
                <div class="container text-center">
                        <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                <a href="index.html" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay=".4s">
                                <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Media &amp; Entertainment</h1>
                        </div>
                        <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Building the future of entertainment through interactive, high-reach digital solutions.</p>
                </div>
        </section>
        <!-- Page Hero End -->

        <!-- Intro Section -->
        <section class="section-padding" style="background: #fff;">
                <div class="container">
                        <div class="row al-center">
                                <div class="col-lg-6 wow fadeInLeft">
                                        <span class="subtitle">Industry Overview</span>
                                        <h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">The Digital Revolution of Engagement</h2>
                                        <p style="font-size: 18px; line-height: 1.8; color: #555;">In the fast-paced and ever-evolving world of media and entertainment, staying ahead of the curve is essential for success. With over 70% of consumers now preferring streaming services to traditional television, and social media engagement driving 50% of content discovery, the industry is undergoing a digital revolution. We empower media and entertainment companies to harness these trends and thrive in the digital age.</p>
                                </div>
                                <div class="col-lg-6 wow fadeInRight">
                                        <img src="images/Industries/Sunware_Industries_Media-and-Entertainment_Our_Tailored_Solutions.png" alt="Media Transformation" style="width:100%; border-radius: 24px;">
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
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-film"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Enhance Content Creation &amp; Distribution</h4>
                                                <p style="color:#666;">Streamline your production workflows, optimize content delivery across multiple platforms, and reach wider audiences. Our solutions can lead to a <strong>30% increase in content production efficiency</strong> and a <strong>40% expansion in audience reach</strong>.</p>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".2s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-users"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Drive Audience Engagement</h4>
                                                <p style="color:#666;">Create immersive and interactive experiences that captivate viewers and build lasting relationships. Increase engagement by up to <strong>50%</strong> through personalized content recommendations, live events, and social media integration.</p>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-dollar-sign"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Monetize Your Content</h4>
                                                <p style="color:#666;">Implement effective monetization strategies including subscription models, advertising, and pay-per-view options. Maximize revenue potential by leveraging our expertise in data analytics and audience segmentation.</p>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div class="culture-card" style="height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-shield-alt"></i></div>
                                                <h4 style="font-weight:800; margin-bottom:15px;">Protect Your Intellectual Property</h4>
                                                <p style="color:#666;">Safeguard your valuable content from piracy and unauthorized distribution. Our robust security measures ensure the integrity and protection of your intellectual property.</p>
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
                                <h2 style="color:#0a0f1e; font-weight:800;">Tailored Solutions for Media &amp; Entertainment</h2>
                        </div>
                        <div class="row">
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".1s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-database"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Content Management Systems (CMS)</h4>
                                                <p style="color:#666;">Manage your content library efficiently, streamline workflows, and publish content across multiple platforms seamlessly.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".2s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-play-circle"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">OTT Platform Development</h4>
                                                <p style="color:#666;">Create your own branded streaming platform to deliver content directly to consumers and control your revenue streams.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-chart-bar"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Audience Analytics &amp; Insight</h4>
                                                <p style="color:#666;">Gain valuable insights into viewer behavior, preferences, and engagement patterns to inform content creation and marketing strategies.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fab fa-instagram"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Social Media Management &amp; Engagement</h4>
                                                <p style="color:#666;">Build a strong social media presence, interact with your audience, and promote your content effectively.</p>
                                        </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-40 wow fadeInUp" data-wow-delay=".5s">
                                        <div class="culture-card" style="background: #f8faff; border: 1px solid #edf0f3; height:100%;">
                                                <div style="font-size: 32px; color:#EF7F1A; margin-bottom: 20px;"><i class="fas fa-lock"></i></div>
                                                <h4 style="color:var(--primary-color-1); font-weight:800; margin-bottom:15px;">Digital Rights Management (DRM)</h4>
                                                <p style="color:#666;">Protect your content from unauthorized access and distribution, ensuring you receive fair compensation for your creative work.</p>
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
                                                <p style="color:#666;">We understand the nuances of your industry landscape - delivering tailored solutions that address your specific technical and regulatory challenges with precision.</p>
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
                                                <p style="color:#666;">We prioritize your goals and work collaboratively to develop solutions that align perfectly with your unique vision - acting as a true technology partner, not just a vendor.</p>
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
                                                                <h2>Power the Future of Digital Entertainment</h2>
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