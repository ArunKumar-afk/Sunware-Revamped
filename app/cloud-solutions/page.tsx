import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Cloud Solutions - Sunware Technologies",
  description: "End-to-end cloud solutions from Sunware Technologies. Multi-cloud strategy, migration and cloud-native development.",
  alternates: { canonical: "https://sunwaretechnologies.com/cloud-solutions" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
				<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
					<a href="index.html" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid var(--primary-color-1); color: var(--primary-color-1);">
						<i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home
					</a>
				</div>
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Cloud Solutions Expertise</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Scalability, security, and efficiency through tailored cloud strategies.</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Strategic Cloud Mastery</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware offers a full spectrum of cloud services, from strategy and planning to deployment and ongoing management. Collaborating with top cloud providers like AWS, Azure, and Google Cloud, Sunware tailors high-performance solutions to your unique business needs.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Cloud Transformation">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Cloud Consulting</h4><p>Strategic roadmaps for modern infrastructure.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Cloud Engineering</h4><p>High-performance system architecture.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>DevOps</h4><p>Automated deployment and elastic scaling.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Security</h4><p>Cloud-native protection for your data.</p></div></div>
    </div></div></section>

	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Scale with Confidence in the Cloud</h2>
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