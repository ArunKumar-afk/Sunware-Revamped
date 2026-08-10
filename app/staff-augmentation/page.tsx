import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Staff Augmentation - Sunware Technologies",
  description: "Pre-vetted technology talent integrated seamlessly into your team with Sunware Technologies staff augmentation services.",
  alternates: { canonical: "https://sunwaretechnologies.com/staff-augmentation/" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Staff Augmentation</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Pre-vetted technology talent integrated seamlessly into your team — when you need them, for as long as you need them.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Staff Augmentation</div>
					<h2>The Right Talent, At the Right Time</h2>
					<p>Technology projects stall and delivery timelines slip when the right skills are not available at the right moment. Sunware's Staff Augmentation practice solves that problem — providing pre-vetted, experienced technology specialists who integrate seamlessly into your teams and start contributing from day one.</p>
					<p>Whether you need a single senior architect for a critical project, a full delivery team for a product launch, or an ongoing capability to supplement your permanent team, we match the right talent to your needs — and stand behind the quality of every person we place.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Find Your Next Team Member <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop" alt="Staff Augmentation">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-users"></i></div>
						<div class="hc-badge-text">
							<strong>2-Week Onboarding</strong>
							<span>Pre-vetted specialists</span>
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
				<h2>What Staff Augmentation Delivers<br>for Your Organisation</h2>
				<p>Four strategic advantages of augmenting your team with specialist talent.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-bolt"></i></div>
					<h4>Rapid Team Scaling</h4>
					<p>Bypass the months-long permanent hiring cycle — our talent pool and streamlined vetting process means you can have qualified specialists integrated and contributing to your team within two weeks of request.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-certificate"></i></div>
					<h4>Verified Expertise</h4>
					<p>Every candidate undergoes rigorous technical assessment, reference checks and practical skills evaluation before joining our talent pool — so you get proven capability, not just impressive CVs.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-dollar-sign"></i></div>
					<h4>Lower Hiring Costs</h4>
					<p>Staff augmentation eliminates recruitment agency fees, advertising costs, onboarding overhead and the risk of costly permanent mis-hires — delivering talent on demand at a fraction of the total cost of permanent hiring.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-expand-arrows-alt"></i></div>
					<h4>Flexible Engagement</h4>
					<p>Scale up or down as project demands change — with contract periods from weeks to multi-year programmes, contract-to-hire pathways and the flexibility to adjust team composition as requirements evolve.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Staff Augmentation<br>Capabilities</h2>
				<p>Flexible talent solutions for every engagement model and team structure.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-search"></i></div>
					<h4>Technical Talent Sourcing</h4>
					<p>We source and vet specialists across the full technology spectrum — software engineers, data scientists, cloud architects, DevOps engineers, QA specialists, UX designers, product managers and technology leaders.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-file-contract"></i></div>
					<h4>Contract &amp; Project Staffing</h4>
					<p>We place contractors and project specialists on defined-term engagements — fully integrated into your team, working to your processes and delivering against your project milestones and quality standards.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-handshake"></i></div>
					<h4>Contract-to-Hire</h4>
					<p>Evaluate talent on the job before making a permanent commitment — our contract-to-hire model lets you assess cultural fit, technical performance and team dynamics before converting to a permanent role.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-globe"></i></div>
					<h4>Offshore &amp; Nearshore Teams</h4>
					<p>We build dedicated offshore and nearshore delivery teams that operate as a genuine extension of your organisation — with overlapping time zones, strong English communication and collaborative working practices that minimise coordination friction.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-users-cog"></i></div>
					<h4>Managed Teams</h4>
					<p>For organisations that want a fully managed outcome, we provide self-managing agile teams complete with a tech lead or delivery manager — accountable for delivery quality, velocity and team performance end-to-end.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-sa">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-sa">Why Teams Scale With Us</h2>
				<p>Three strengths that define our Staff Augmentation practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-check-double"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Pre-Vetted Talent Pool</h3>
					<p>We maintain a rigorously assessed pool of technology specialists — not a generic CV database. Every person in our network has passed technical assessments, practical evaluations and reference verification before we ever present them to you.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-heart"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Culture-Fit Matching</h3>
					<p>Technical skills get the work done — but cultural fit determines how well a person integrates with your team. We invest time understanding your team dynamics, working culture and values to match people who will genuinely thrive in your environment.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-chart-line"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Ongoing Performance Support</h3>
					<p>We stay engaged throughout the assignment — regular check-ins with both the consultant and your hiring manager ensure any issues are surfaced and resolved quickly, protecting your investment and maintaining team productivity.</p>
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
								<h2>Scale Your Team Today</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Find Your Specialist <i class="flaticon-right-up"></i></a>
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

