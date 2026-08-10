import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Digital Transformation Services - Sunware Technologies",
  description: "Reimagine how your organisation operates, serves customers and competes in the digital era with Sunware Technologies digital transformation services.",
  alternates: { canonical: "https://sunwaretechnologies.com/digital-transformation" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Digital Transformation</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Reimagining how your organisation operates, serves customers and competes in the digital era.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Digital Transformation</div>
					<h2>Beyond Technology — Transforming How You Work</h2>
					<p>Digital transformation is not about installing new software — it is about fundamentally reimagining how your organisation creates value. Sunware's Digital Transformation practice combines strategic thinking, process expertise, technology delivery and human change management to drive transformations that actually stick.</p>
					<p>We partner with leadership teams to define the ambition, identify the highest-value opportunities, build new digital capabilities and bring your people along on the journey — turning transformation strategy into measurable business outcomes.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Transformation Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&fit=crop" alt="Digital Transformation">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-rocket"></i></div>
						<div class="hc-badge-text">
							<strong>End-to-End Transformation</strong>
							<span>Strategy to execution</span>
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
				<h2>What Digital Transformation Delivers<br>for Your Organisation</h2>
				<p>Four strategic outcomes that define a successful digital transformation.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-bolt"></i></div>
					<h4>Operational Speed</h4>
					<p>Digitised, automated processes eliminate manual steps and approval bottlenecks — dramatically reducing cycle times across order management, HR, finance, procurement and customer service workflows.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-smile"></i></div>
					<h4>Customer Experience</h4>
					<p>Unified customer data, omnichannel capabilities and personalised digital journeys increase satisfaction scores, reduce churn and create the differentiated experiences that build long-term loyalty.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-chart-line"></i></div>
					<h4>New Revenue Streams</h4>
					<p>Digital capabilities open the door to new business models — platform plays, digital products, data monetisation and service-as-a-product offerings that create entirely new revenue lines.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-shield-check"></i></div>
					<h4>Future Resilience</h4>
					<p>Organisations with modern digital foundations adapt faster to market disruptions, competitive threats and regulatory changes — building the organisational agility to navigate an uncertain future.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Digital Transformation<br>Capabilities</h2>
				<p>From strategy to execution — a complete transformation partner.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-map"></i></div>
					<h4>Digital Strategy &amp; Roadmap</h4>
					<p>We work with your leadership team to define a clear digital vision, identify the highest-value transformation opportunities and build a prioritised, investment-justified roadmap with measurable milestones.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-project-diagram"></i></div>
					<h4>Process Reengineering</h4>
					<p>We analyse your current processes using value stream mapping and process mining, then redesign them digitally — eliminating waste, automating handoffs and embedding quality controls that drive efficiency gains.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-sync"></i></div>
					<h4>Legacy Modernisation</h4>
					<p>We modernise legacy systems through phased migration, microservices decomposition and API-first architectures — preserving business continuity while incrementally replacing the technical debt that slows you down.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-smile"></i></div>
					<h4>Customer Experience Design</h4>
					<p>We apply design thinking, journey mapping and rapid prototyping to redesign customer-facing digital experiences — creating intuitive, personalised interactions that increase conversion, satisfaction and lifetime value.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-users"></i></div>
					<h4>Change Management</h4>
					<p>We embed organisational change management throughout every transformation — stakeholder engagement, communication planning, training programmes and adoption measurement — because technology without people change fails.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-dt">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-dt">Why Leaders Choose Us as Their Transformation Partner</h2>
				<p>Three strengths that define our Digital Transformation practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-th-large"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Holistic Approach</h3>
					<p>We address strategy, process, technology and people in an integrated way — recognising that transformation fails when any of these four dimensions is neglected in favour of the others.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-chart-line"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Business-Outcomes Focus</h3>
					<p>Every initiative we recommend is tied to a specific business outcome — revenue growth, cost reduction, speed improvement or customer satisfaction. We measure what matters, not activity.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-trophy"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Proven Transformation Track Record</h3>
					<p>Our team has led transformations across banking, retail, manufacturing and public sector — delivering measurable results and building client capability so the transformation continues after our engagement ends.</p>
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
								<h2>Lead Your Digital Transformation</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start the Conversation <i class="flaticon-right-up"></i></a>
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
