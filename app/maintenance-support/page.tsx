import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Maintenance & Support - Sunware Technologies",
  description: "Proactive, 24/7 application support that maximises uptime and protects your technology investment with Sunware Technologies.",
  alternates: { canonical: "https://sunwaretechnologies.com/maintenance-support" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Maintenance &amp; Support</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Proactive, 24/7 application support that maximises uptime and protects your technology investment.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Support</div>
					<h2>Always-On Support for Your Critical Systems</h2>
					<p>Your applications and infrastructure are the lifeblood of your business — and when they are not performing, neither is your organisation. Sunware's Maintenance &amp; Support practice provides the proactive monitoring, rapid incident response and continuous improvement services that keep your critical systems running reliably, around the clock.</p>
					<p>We move beyond the traditional break-fix model to deliver proactive support that anticipates and prevents issues before they impact your users — protecting your technology investment and freeing your internal teams to focus on strategic priorities rather than firefighting.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Support Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop" alt="Maintenance and Support">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-headset"></i></div>
						<div class="hc-badge-text">
							<strong>24/7 SOC &amp; Helpdesk</strong>
							<span>SLA-backed support</span>
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
				<h2>What Managed Support Delivers<br>for Your Organisation</h2>
				<p>Four operational outcomes from truly proactive application support.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Maximum Uptime</h4>
					<p>24/7 monitoring with automated alerting, intelligent incident triage and defined escalation paths ensure issues are caught and resolved before they cascade into major outages that impact your business and customers.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-shield-check"></i></div>
					<h4>Proactive Issue Prevention</h4>
					<p>Trend analysis, capacity planning and performance baseline monitoring identify degradation patterns early — allowing us to intervene and resolve underlying issues before they trigger incidents or user complaints.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-dollar-sign"></i></div>
					<h4>Predictable Costs</h4>
					<p>Fixed-fee managed support contracts replace unpredictable emergency break-fix costs with predictable monthly expenses — making IT operations easier to budget and eliminating unpleasant financial surprises.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-chart-line"></i></div>
					<h4>Continuous Improvement</h4>
					<p>Monthly service reviews, root cause analysis and improvement recommendations mean your systems and processes get steadily better over time — not just maintained at their current state.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Maintenance &amp; Support<br>Capabilities</h2>
				<p>Comprehensive managed support services across applications and infrastructure.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-eye"></i></div>
					<h4>24/7 Monitoring &amp; Alerting</h4>
					<p>We implement comprehensive observability stacks — APM, log aggregation, infrastructure monitoring and synthetic testing — with intelligent alert routing and on-call management that ensures no issue goes unnoticed.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-headset"></i></div>
					<h4>Help Desk &amp; Incident Management</h4>
					<p>Our tiered help desk provides L1, L2 and L3 support across voice, email and chat channels — with ITIL-aligned incident management processes, documented escalation paths and SLA-measured response and resolution times.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Performance Optimisation</h4>
					<p>We continuously tune application and infrastructure performance — identifying slow queries, memory leaks, configuration issues and architectural bottlenecks — keeping response times fast as your user base and data volumes grow.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-shield-check"></i></div>
					<h4>Patch &amp; Update Management</h4>
					<p>We manage OS, middleware and application patching on a defined cadence — testing updates in staging environments, scheduling deployments to minimise disruption and maintaining complete patch compliance records.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-file-chart-line"></i></div>
					<h4>SLA Reporting &amp; Analytics</h4>
					<p>Monthly service reports covering availability, incident volumes, response times, problem trends and improvement actions give you full visibility into support performance and a clear basis for continuous service improvement.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-ms">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-ms">Why Organisations Trust Us with Their Operations</h2>
				<p>Three strengths that define our Maintenance &amp; Support practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-shield-check"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Proactive Not Reactive</h3>
					<p>We invest in monitoring, analytics and automation to catch and resolve issues before they impact users — shifting the support model from expensive emergency response to intelligent prevention.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-users"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Dedicated Support Teams</h3>
					<p>You get a named support team that learns your systems inside and out — not a rotating pool of unfamiliar engineers. Deep system knowledge means faster diagnosis and fewer repeat incidents over time.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-chart-bar"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Full Transparency</h3>
					<p>Real-time dashboards, monthly service reports and open-book SLA measurement mean you always know exactly how your systems are performing and how our support team is delivering against their commitments.</p>
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
								<h2>Ensure Peak Performance</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Get a Support Quote <i class="flaticon-right-up"></i></a>
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
