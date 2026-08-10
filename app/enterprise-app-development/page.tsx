import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Enterprise App Development - Sunware Technologies",
  description: "Bespoke enterprise applications built for scale, security and long-term business value by Sunware Technologies.",
  alternates: { canonical: "https://sunwaretechnologies.com/enterprise-app-development/" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Enterprise App Development</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Bespoke enterprise applications built for scale, security and long-term business value.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Enterprise Apps</div>
					<h2>Custom Software That Fits Your Business Perfectly</h2>
					<p>Off-the-shelf software is rarely a perfect fit for complex enterprise needs. Sunware's Enterprise App Development practice designs and builds custom applications that align precisely with your business processes, integration requirements and security standards — giving you a genuine competitive capability rather than a generic tool.</p>
					<p>From greenfield platforms to modernising decade-old legacy systems, our full-stack teams work in close partnership with your business and technical stakeholders to deliver software that users actually want to use and that your IT teams can maintain with confidence.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Solutions Architect <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&fit=crop" alt="Enterprise App Development">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-code"></i></div>
						<div class="hc-badge-text">
							<strong>Agile Delivery</strong>
							<span>From MVP to enterprise scale</span>
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
				<h2>What Custom Development Delivers<br>for Your Organisation</h2>
				<p>Four outcomes that justify the investment in purpose-built software.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-expand-arrows-alt"></i></div>
					<h4>Built to Scale</h4>
					<p>We architect applications for the scale your business will reach, not just where it is today — using microservices, event-driven patterns and cloud-native infrastructure that grow with your ambitions.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-shield-check"></i></div>
					<h4>Enterprise Security</h4>
					<p>Security is engineered in from the first line of code — OWASP secure coding practices, role-based access control, data encryption, audit trails and penetration testing before every major release.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Faster Time to Market</h4>
					<p>Agile delivery with two-week sprints, continuous integration and automated testing accelerates time to production — with working software in your hands in weeks, not the months typical of waterfall projects.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-dollar-sign"></i></div>
					<h4>Lower Total Cost of Ownership</h4>
					<p>Clean architecture, comprehensive documentation and knowledge transfer eliminate the hidden costs of vendor dependency, expensive customisations and the technical debt that accumulates in poorly built systems.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Enterprise App Development<br>Capabilities</h2>
				<p>Full-cycle application development from discovery through to live operations.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-search"></i></div>
					<h4>Discovery &amp; Architecture</h4>
					<p>We run structured discovery workshops to deeply understand your requirements, then produce architecture blueprints, data models and technical specifications that align all stakeholders before a line of code is written.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-globe"></i></div>
					<h4>Full-Stack Web Development</h4>
					<p>We build performant, accessible web applications using React, Next.js, Vue, Node.js, .NET, Java and Python — with a focus on clean code, comprehensive test coverage and outstanding user experience.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-plug"></i></div>
					<h4>API &amp; Integration Layer</h4>
					<p>We design and build RESTful and GraphQL APIs, event-driven integrations and enterprise middleware that connect your new application to your existing ERP, CRM, data warehouse and third-party systems.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-mobile-alt"></i></div>
					<h4>Enterprise Mobile Apps</h4>
					<p>We develop native iOS, Android and cross-platform React Native and Flutter applications for field teams, customer portals and employee-facing tools — optimised for performance, offline capability and security.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-vial"></i></div>
					<h4>Quality Assurance &amp; Testing</h4>
					<p>Our QA engineers implement automated test suites covering unit, integration, end-to-end and performance testing — with load testing, security scanning and accessibility validation before every deployment.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
					<div class="hc-sol-num">06 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-infinity"></i></div>
					<h4>DevOps &amp; Deployment</h4>
					<p>We set up fully automated CI/CD pipelines, containerised deployments on Kubernetes, infrastructure as code and observability stacks — enabling safe, frequent releases and rapid incident response.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-ead">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-ead">Why Enterprises Build With Us</h2>
				<p>Three differentiators that define our Enterprise App Development practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-sitemap"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Domain-Driven Design</h3>
					<p>We model software around your business domain, not generic patterns — creating architectures that naturally align with how your organisation thinks and operates, making future changes faster and cheaper.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-eye"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Agile &amp; Transparent</h3>
					<p>Fortnightly sprint demos, shared project boards, weekly status reports and a dedicated delivery manager keep you fully informed and in control throughout the entire development lifecycle.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-handshake"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Long-Term Partnership</h3>
					<p>We build with the future in mind and offer post-launch support, enhancement and managed services — ensuring the applications we deliver continue to evolve alongside your business for years to come.</p>
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
								<h2>Build Your Enterprise Application</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start with Discovery <i class="flaticon-right-up"></i></a>
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
