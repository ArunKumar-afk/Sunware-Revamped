import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Technology Consulting - Sunware Technologies",
  description: "Strategic technology advisory that aligns your IT investments with business outcomes with Sunware Technologies technology consulting.",
  alternates: { canonical: "https://sunwaretechnologies.com/technology-consulting/" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Technology Consulting</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Strategic technology advisory that aligns your IT investments with business outcomes.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Consulting</div>
					<h2>Your Trusted Technology Advisor</h2>
					<p>Technology decisions made without strategic clarity are expensive mistakes waiting to happen. Sunware's Technology Consulting practice provides the independent, experienced advisory that helps organisations make smarter technology investments — aligning every IT decision to clear business objectives and measurable outcomes.</p>
					<p>Our senior consultants bring CTO-level strategic thinking combined with deep practical delivery experience. We don't just tell you what to do — we work alongside your leadership team to understand your context, challenge assumptions and co-develop strategies that your organisation can actually execute.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Technology Advisor <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop" alt="Technology Consulting">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-lightbulb"></i></div>
						<div class="hc-badge-text">
							<strong>CTO-as-a-Service</strong>
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
				<h2>What Strategic Technology Consulting<br>Delivers for Your Organisation</h2>
				<p>Four outcomes from having the right technology advisory at your side.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-map"></i></div>
					<h4>Clear Technology Roadmap</h4>
					<p>Replace the reactive, ad hoc IT decision-making that wastes budget and creates complexity with a coherent, prioritised technology roadmap that gives your entire organisation a clear direction and a shared plan.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-bolt"></i></div>
					<h4>Faster Innovation</h4>
					<p>Strategic clarity eliminates the analysis paralysis that slows decision-making — enabling your teams to move faster on the technology initiatives that will drive competitive differentiation and growth.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-dollar-sign"></i></div>
					<h4>Optimised IT Spend</h4>
					<p>Technology portfolio rationalisation, licence optimisation and investment prioritisation routinely identify 15-25% savings in IT spend — redirecting budget from maintenance to strategic capability building.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-shield-check"></i></div>
					<h4>Reduced Technology Risk</h4>
					<p>Independent assessment of your technology landscape surfaces security vulnerabilities, architectural risks, vendor dependencies and technical debt — before they become costly crises that disrupt your business.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Technology Consulting<br>Capabilities</h2>
				<p>Strategic advisory services across the full technology landscape.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-search"></i></div>
					<h4>Technology Assessment &amp; Audit</h4>
					<p>We conduct structured assessments of your technology portfolio, architecture, security posture and operational maturity — delivering an objective view of strengths, gaps and the highest-priority improvement opportunities.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-map"></i></div>
					<h4>IT Strategy &amp; Roadmap</h4>
					<p>We facilitate strategic planning workshops with your leadership team to define IT vision, identify the highest-value technology initiatives and build an investment-justified roadmap with clear milestones and success metrics.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-sitemap"></i></div>
					<h4>Architecture Advisory</h4>
					<p>Our senior architects review proposed designs, challenge technical decisions and provide expert guidance on cloud architecture, integration patterns, security architecture and data platform design — before costly mistakes are made.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-handshake"></i></div>
					<h4>Vendor Selection &amp; Management</h4>
					<p>We run structured vendor evaluation processes — requirements definition, RFP management, proof-of-concept facilitation and commercial negotiation support — ensuring you select the right technology partners on the best possible terms.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-rocket"></i></div>
					<h4>Digital Innovation Consulting</h4>
					<p>We help you identify, evaluate and pilot emerging technologies — AI, IoT, blockchain, edge computing and beyond — with structured innovation frameworks that distinguish genuine opportunity from hype and build the business case for strategic investment.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-tc">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-tc">Why Leaders Choose Us as Their Technology Advisor</h2>
				<p>Three strengths that define our Technology Consulting practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-bridge"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Business-Technology Bridge</h3>
					<p>We translate business objectives into technology strategy and technology possibilities into business value — acting as the bridge between your commercial leadership and technical teams to align priorities and accelerate decision-making.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-balance-scale"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Vendor-Agnostic Advice</h3>
					<p>Our consulting practice operates independently of our delivery and reseller relationships — ensuring the advice you receive is genuinely objective and driven by your best interests, not by commercial incentives to sell particular products.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-user-tie"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Seasoned CTO-Level Expertise</h3>
					<p>Our consulting team comprises former CTOs, technology directors and enterprise architects with decades of combined experience — providing the strategic depth and practical wisdom that comes only from having built and run technology at scale.</p>
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
								<h2>Get Expert Technology Guidance</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Book a Strategy Session <i class="flaticon-right-up"></i></a>
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
