import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "AI Enablement Services - Sunware Technologies",
  description: "Accelerate your AI journey with Sunware Technologies AI enablement services. Strategy, implementation and scaling of AI solutions.",
  alternates: { canonical: "https://sunwaretechnologies.com/ai-enablement" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">AI Enablement</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Unlocking enterprise AI potential through strategy, implementation and continuous optimisation.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / AI Enablement</div>
					<h2>From AI Strategy to Production Reality</h2>
					<p>Sunware's AI Enablement practice helps enterprises move beyond pilots and proof-of-concepts to deploy AI that creates measurable business value. We combine deep technical expertise with change management and governance frameworks to ensure your AI investments deliver lasting competitive advantage.</p>
					<p>Whether you are just beginning your AI journey or looking to scale existing capabilities, our team of data scientists, ML engineers and AI strategists work alongside your teams to design, build and operationalise AI solutions that fit your organisation's unique context.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to an AI Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&fit=crop" alt="AI Enablement">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-brain"></i></div>
						<div class="hc-badge-text">
							<strong>Generative AI Ready</strong>
							<span>Strategy to production</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="hc-benefits">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Why Partner With Us</div>
				<h2>What AI Enablement Delivers<br>for Your Organisation</h2>
				<p>Four powerful outcomes that move the needle on real business performance.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Faster Time to Value</h4>
					<p>Our proven AI delivery framework takes you from business problem to production AI in weeks, not months — with structured sprints, rapid prototyping and continuous validation at each stage.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-shield-check"></i></div>
					<h4>Responsible AI</h4>
					<p>Every AI solution we build is governed by ethics, explainability and regulatory compliance frameworks — so you can deploy with confidence and maintain stakeholder trust.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-users"></i></div>
					<h4>Organisation Readiness</h4>
					<p>We upskill your teams, embed AI champions and redesign workflows so that AI adoption sticks — turning technology investments into lasting organisational capability.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-chart-line"></i></div>
					<h4>Measurable ROI</h4>
					<p>We define success metrics upfront and track them rigorously — linking every AI initiative to cost savings, revenue uplift or risk reduction that your leadership can see and quantify.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>End-to-End AI Enablement<br>Capabilities</h2>
				<p>From strategic assessment to deployed, monitored AI — we cover the full lifecycle.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-search"></i></div>
					<h4>AI Readiness Assessment</h4>
					<p>We evaluate your data maturity, infrastructure, talent and cultural readiness to determine the most impactful AI entry points and surface quick wins that build internal momentum.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-map"></i></div>
					<h4>AI Strategy &amp; Roadmap</h4>
					<p>We co-create a prioritised AI roadmap aligned to your business strategy, identifying high-value use cases, required capabilities and investment milestones across a 12–36 month horizon.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-brain"></i></div>
					<h4>Custom AI Model Development</h4>
					<p>Our data scientists build, train and validate bespoke machine learning and deep learning models tailored to your proprietary data — from classification and forecasting to computer vision and NLP.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-robot"></i></div>
					<h4>Generative AI &amp; LLM Integration</h4>
					<p>We design and deploy production-grade GenAI solutions — RAG pipelines, fine-tuned LLMs, AI agents and copilots — integrated securely into your existing enterprise applications and workflows.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-balance-scale"></i></div>
					<h4>AI Governance &amp; Ethics Framework</h4>
					<p>We establish policies, model documentation standards, bias testing protocols and audit trails that keep your AI transparent, fair and compliant with evolving global regulations.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
					<div class="hc-sol-num">06 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-building"></i></div>
					<h4>AI Centre of Excellence</h4>
					<p>We help you build an internal AI CoE — defining operating models, talent structures, tooling standards and best-practice playbooks so your organisation can sustain and scale AI independently.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-ai">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-ai">Why Enterprises Choose Us for AI</h2>
				<p>Three core strengths that set our AI Enablement practice apart.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-cogs"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>End-to-End Ownership</h3>
					<p>We take full ownership from strategy through to production deployment and ongoing model monitoring — so you never face a handoff gap between consultants, data scientists and engineers.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-shield-check"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Responsible AI First</h3>
					<p>Governance, explainability and ethics are not afterthoughts — they are embedded into our delivery methodology from day one, protecting your organisation and your customers.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-trophy"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Proven Enterprise Delivery</h3>
					<p>Our team has delivered AI solutions across financial services, healthcare, retail and manufacturing — with a track record of measurable outcomes and successful knowledge transfer.</p>
				</article>

			</div>
		</div>
	</section>

	<div class="container" style="padding:80px 15px;">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Ready to Unlock Enterprise AI?</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start Your AI Journey <i class="flaticon-right-up"></i></a>
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
