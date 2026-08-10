import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Cloud Services - Sunware Technologies",
  description: "Comprehensive cloud management, optimisation and migration across AWS, Azure and GCP with Sunware Technologies cloud services.",
  alternates: { canonical: "https://sunwaretechnologies.com/cloud-services/" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Cloud Services</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Comprehensive cloud management, optimisation and migration across AWS, Azure and GCP.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Cloud</div>
					<h2>Cloud Excellence, Delivered End-to-End</h2>
					<p>The cloud is no longer a destination — it is the foundation of modern business. Sunware's Cloud Services practice helps organisations design, migrate, operate and continuously optimise their cloud environments across AWS, Microsoft Azure and Google Cloud Platform.</p>
					<p>Whether you are planning your first cloud migration, rationalising a multi-cloud estate, or looking to eliminate runaway cloud spend, our certified cloud architects and engineers bring the expertise and discipline to make your cloud work harder for your business.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Cloud Architect <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&fit=crop" alt="Cloud Services">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-cloud"></i></div>
						<div class="hc-badge-text">
							<strong>AWS · Azure · GCP</strong>
							<span>Multi-cloud certified</span>
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
				<h2>What Cloud Excellence Delivers<br>for Your Organisation</h2>
				<p>Four outcomes our clients consistently achieve through our cloud services.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-dollar-sign"></i></div>
					<h4>30–40% Cost Reduction</h4>
					<p>Through rightsizing, reserved instance planning, spot instance strategies and automated scaling policies, our FinOps practice consistently delivers significant cloud cost reductions within the first 90 days.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Faster Deployments</h4>
					<p>Infrastructure as code, automated CI/CD pipelines and containerised workloads reduce deployment cycles from days to minutes — giving your development teams the speed to iterate and innovate.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-shield-check"></i></div>
					<h4>Enterprise Security</h4>
					<p>We implement cloud security architectures aligned to CIS Benchmarks, SOC 2 and ISO 27001 — with identity governance, encryption, network segmentation and continuous compliance monitoring built in.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-expand-arrows-alt"></i></div>
					<h4>Auto-Scaling</h4>
					<p>Cloud-native architectures with auto-scaling ensure your applications handle peak traffic and seasonal demand spikes without over-provisioning — delivering performance when it matters and savings when it doesn't.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Cloud Services<br>Capabilities</h2>
				<p>End-to-end cloud services across strategy, migration, management and security.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-map"></i></div>
					<h4>Cloud Strategy &amp; Assessment</h4>
					<p>We assess your current application portfolio, infrastructure and workload profiles to develop a cloud strategy and migration roadmap that minimises risk, maximises ROI and aligns with your business objectives.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-cloud-upload"></i></div>
					<h4>Cloud Migration</h4>
					<p>We execute lift-and-shift, replatform and refactor migrations with zero-downtime methodologies — covering applications, databases, data warehouses and legacy on-premise systems across all major cloud providers.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-cogs"></i></div>
					<h4>Managed Cloud Services</h4>
					<p>Our 24/7 managed cloud operations team handles monitoring, incident response, patching, backup management and continuous optimisation — letting your internal teams focus on business priorities.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-dollar-sign"></i></div>
					<h4>FinOps &amp; Cost Optimisation</h4>
					<p>We implement FinOps frameworks with tagging strategies, cost allocation dashboards, budget alerts and automated optimisation — giving your finance and engineering teams complete visibility and control over cloud spend.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-lock"></i></div>
					<h4>Cloud Security</h4>
					<p>We design and implement cloud security posture management, identity and access governance, data encryption, network security groups and continuous compliance monitoring across your entire cloud estate.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-cloud">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-cloud">Why Organisations Trust Us with Their Cloud</h2>
				<p>Three strengths that define our Cloud Services practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-certificate"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Certified Multi-Cloud Team</h3>
					<p>Our engineers hold AWS, Azure and GCP certifications at Solutions Architect and DevOps Engineer levels — bringing verified expertise across the three major cloud platforms to every engagement.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-chart-line"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>FinOps Discipline</h3>
					<p>Cost management is not an afterthought — it is embedded in our delivery methodology. We track, report and optimise cloud spend from day one, ensuring your cloud investment delivers clear financial returns.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-headset"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>24/7 Managed Operations</h3>
					<p>Our follow-the-sun managed services model provides round-the-clock monitoring, incident response and operational support — with defined SLAs, escalation paths and transparent reporting.</p>
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
								<h2>Start Your Cloud Journey</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Get a Cloud Assessment <i class="flaticon-right-up"></i></a>
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
