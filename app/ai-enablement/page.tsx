import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "AI Enablement Services - Sunware Technologies",
  description: "Accelerate your AI journey with Sunware Technologies AI enablement services. Strategy, implementation and scaling of AI solutions.",
  alternates: { canonical: "https://sunwaretechnologies.com/ai-enablement" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
                                <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                        <a href="index.html" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid var(--primary-color-1); color: var(--primary-color-1);"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                                </div>
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">AI Enablement</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Unlock the Power of AI with Sunware Technologies</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Building a Smarter Business</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies empowers businesses with comprehensive AI Enablement services. By crafting winning strategies, implementing custom AI applications, and optimizing models for continuous improvement.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="AI Enablement">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>AI Strategy</h4><p>Crafting a roadmap for AI adoption tailored to your business goals.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>AI Applications</h4><p>Building custom AI solutions for various business functions.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Model Optimization</h4><p>Enhancing performance and accuracy through continuous learning.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Seamless Integration</h4><p>Ensuring AI solutions integrate with your existing systems.</p></div></div>
    </div></div></section>

	<section style="padding:100px 0;background:#fff;">
		<div class="container">
			<div class="text-center mb-60">
				<p style="font-size:16px;color:#EF7F1A;font-weight:600;margin-bottom:10px;">Who is this service for?</p>
				<h2 style="font-size:42px;font-weight:700;">Perfect For</h2>
			</div>
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-robot" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Automation</h4>
						<p>Businesses with manual processes seeking automation.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-search" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Insights</h4>
						<p>Businesses struggling with data analysis.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-trophy" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Differentiation</h4>
						<p>Businesses in competitive industries seeking an edge.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Supercharge Your Business with AI</h2>
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
					</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}