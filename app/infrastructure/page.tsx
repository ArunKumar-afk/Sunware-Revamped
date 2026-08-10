import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Infrastructure Solutions - Sunware Technologies",
  description: "Resilient, scalable and secure IT infrastructure that keeps your business running at peak performance with Sunware Technologies.",
  alternates: { canonical: "https://sunwaretechnologies.com/infrastructure" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Infrastructure Solutions</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Resilient, scalable and secure IT infrastructure that keeps your business running at peak performance.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Infrastructure</div>
					<h2>The Backbone of Your Digital Operations</h2>
					<p>Every digital capability your business depends on — applications, data, communications and security — runs on infrastructure. Sunware's Infrastructure Solutions practice designs, deploys and manages the IT foundations that power modern enterprise operations with the reliability, performance and security your business demands.</p>
					<p>From on-premise data centre optimisation to hybrid cloud architectures and full cloud migration, our certified infrastructure engineers build and operate environments that deliver consistent performance, predictable costs and the resilience to withstand disruption.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to an Infrastructure Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop" alt="Infrastructure Solutions">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-server"></i></div>
						<div class="hc-badge-text">
							<strong>99.99% Uptime SLA</strong>
							<span>Always-on infrastructure</span>
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
				<h2>What Modern Infrastructure Delivers<br>for Your Organisation</h2>
				<p>Four foundational outcomes from infrastructure built to enterprise standards.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Peak Performance</h4>
					<p>Properly sized, tuned and monitored infrastructure ensures your applications consistently deliver the speed and responsiveness your users expect — eliminating the slow performance that erodes productivity and customer experience.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-shield-check"></i></div>
					<h4>Zero-Trust Security</h4>
					<p>We implement zero-trust network architectures, microsegmentation, privileged access management and continuous threat monitoring — hardening your infrastructure against both external attacks and insider threats.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-dollar-sign"></i></div>
					<h4>Cost Optimisation</h4>
					<p>Infrastructure rationalisation, virtualisation, rightsizing and reserved capacity planning routinely deliver 20-35% reductions in infrastructure spend — freeing budget for strategic IT investments.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-expand-arrows-alt"></i></div>
					<h4>Elastic Scalability</h4>
					<p>Hybrid and cloud-native infrastructure scales dynamically with demand — accommodating growth, seasonal spikes and new workloads without disruptive re-architecture or capital investment cycles.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Infrastructure<br>Capabilities</h2>
				<p>End-to-end infrastructure services from assessment through to managed operations.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-search"></i></div>
					<h4>Infrastructure Assessment</h4>
					<p>We conduct comprehensive assessments of your existing infrastructure — evaluating performance, capacity, security posture, resilience and cost efficiency — and deliver a prioritised improvement roadmap.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-cloud"></i></div>
					<h4>Cloud &amp; Hybrid Infrastructure</h4>
					<p>We design and implement cloud-native, on-premise and hybrid infrastructures that align with your workload profiles, compliance requirements and cost targets — across VMware, AWS, Azure and GCP.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-network-wired"></i></div>
					<h4>Network Design &amp; Management</h4>
					<p>We design and manage enterprise networks — SD-WAN, MPLS, wireless and zero-trust network access — delivering high availability, security and the performance your distributed workforce and applications require.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-life-ring"></i></div>
					<h4>Disaster Recovery</h4>
					<p>We design, implement and regularly test disaster recovery solutions with defined RTO and RPO objectives — combining replication, failover automation and documented runbooks to ensure business continuity when the unexpected happens.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-robot"></i></div>
					<h4>Infrastructure Automation</h4>
					<p>We implement infrastructure as code using Terraform, Ansible and Pulumi — automating provisioning, configuration management and compliance enforcement to eliminate manual errors and accelerate deployments.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-infra">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-infra">Why IT Leaders Choose Us</h2>
				<p>Three strengths that define our Infrastructure Solutions practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-certificate"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Certified Infrastructure Team</h3>
					<p>Our engineers hold certifications across VMware, Cisco, AWS, Azure and GCP — bringing verified expertise in virtualisation, networking, cloud and security to every infrastructure engagement.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-eye"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Proactive Monitoring</h3>
					<p>Our 24/7 NOC monitors your infrastructure with intelligent alerting and automated remediation — identifying and resolving emerging issues before they impact your users and business operations.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-balance-scale"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Vendor-Agnostic Approach</h3>
					<p>We recommend the right technology for your requirements, not the technology that benefits us commercially — working across all major vendors and platforms to deliver the best outcome for your organisation.</p>
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
								<h2>Build a Future-Proof IT Foundation</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Get an Infrastructure Assessment <i class="flaticon-right-up"></i></a>
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
