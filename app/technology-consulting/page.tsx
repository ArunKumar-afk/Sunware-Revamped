import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Technology Consulting - Sunware Technologies",
  description: "Strategic technology consulting from Sunware Technologies. Digital strategy, architecture advisory and technology roadmap planning.",
  alternates: { canonical: "https://sunwaretechnologies.com/technology-consulting" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Technology Consulting</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Powering Your Digital Transformation</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Fast-Track Your Digital Transformation</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware helps businesses unlock the potential of cutting-edge technology. From ideation to deployment, our comprehensive consulting services leverage AI and advanced analytics to accelerate your digital transformation.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Technology Consulting">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Comprehensive Ideation</h4><p>Technology ideation and validation through feasibility studies.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>AI Integration</h4><p>Advanced analytics and AI integration into your business processes.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>End-to-End Engineering</h4><p>Complete solution design, engineering, and deployment support.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Ongoing Optimization</h4><p>Continuous maintenance and optimization for sustained performance.</p></div></div>
    </div></div></section>

	<section style="padding:100px 0;background:#fff;">
		<div class="container">
			<div class="text-center mb-60">
				<p style="font-size:16px;color:#EF7F1A;font-weight:600;margin-bottom:10px;">Who is this service for?</p>
				<h2 style="font-size:42px;font-weight:700;">Ideal For</h2>
			</div>
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-chart-line" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Optimizers</h4>
						<p>Organizations seeking to leverage advanced technology for operational excellence.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-lightbulb" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Innovators</h4>
						<p>Those seeking to enhance business processes and drive innovation.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-sync-alt" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Transformers</h4>
						<p>Businesses undergoing digital transformation journeys.</p>
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
								<h2>Fast-Track Your Digital Transformation</h2>
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
	</div>
					</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}