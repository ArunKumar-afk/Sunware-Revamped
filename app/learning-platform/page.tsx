import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Learning Platform - Sunware Technologies",
  description: "Digital learning ecosystems that upskill your workforce and drive measurable performance improvement with Sunware Technologies.",
  alternates: { canonical: "https://sunwaretechnologies.com/learning-platform" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Learning Platform</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Digital learning ecosystems that upskill your workforce and drive measurable performance improvement.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Learning</div>
					<h2>A World-Class Learning Experience, Built for Your Organisation</h2>
					<p>Your people are your most important competitive asset — and their ability to learn, adapt and grow determines how fast your organisation can move. Sunware's Learning Platform practice designs and delivers digital learning ecosystems that make continuous development engaging, measurable and scalable across your entire workforce.</p>
					<p>Whether you need a modern LMS, custom eLearning programmes, microlearning pathways or a comprehensive learning data strategy, we combine instructional design expertise with technical delivery to create learning experiences that genuinely change behaviour and drive performance.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Learning Specialist <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80&fit=crop" alt="Learning Platform">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-graduation-cap"></i></div>
						<div class="hc-badge-text">
							<strong>LMS &amp; Custom eLearning</strong>
							<span>Mobile-first platforms</span>
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
				<h2>What a Digital Learning Ecosystem<br>Delivers for Your Organisation</h2>
				<p>Four outcomes that transform L&amp;D from a cost centre into a strategic capability.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-chart-line"></i></div>
					<h4>Measurable Skill Growth</h4>
					<p>Assessment-driven learning paths with pre and post-competency measurement give you clear evidence of skill development — linking learning investment to demonstrable performance improvements on the job.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-heart"></i></div>
					<h4>Higher Engagement</h4>
					<p>Mobile-first design, gamification, social learning features and bite-sized microlearning modules increase course completion rates by 3-5x compared to traditional eLearning — making learning a habit, not a chore.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-dollar-sign"></i></div>
					<h4>Training Cost Reduction</h4>
					<p>Replacing instructor-led classroom training with scalable digital learning typically delivers 40-60% cost reductions — while enabling consistent, high-quality learning experiences regardless of geography or team size.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-users"></i></div>
					<h4>Scalable to Any Team Size</h4>
					<p>Cloud-based LMS platforms and reusable content architectures let you deliver the same quality learning experience to 50 learners or 50,000 — across multiple languages, geographies and device types simultaneously.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Learning Platform<br>Capabilities</h2>
				<p>End-to-end learning ecosystem design, development and analytics.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-cogs"></i></div>
					<h4>LMS Implementation</h4>
					<p>We implement, configure and optimise leading LMS platforms including Moodle, TalentLMS, Cornerstone, SAP SuccessFactors Learning and custom-built solutions — tailored to your organisation's structure and learning culture.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-play-circle"></i></div>
					<h4>Custom eLearning Development</h4>
					<p>Our instructional designers and multimedia developers create engaging SCORM-compliant eLearning courses — combining scenario-based learning, interactive assessments, animations and branching simulations to maximise knowledge retention.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-mobile-alt"></i></div>
					<h4>Microlearning &amp; Mobile Learning</h4>
					<p>We design mobile-first microlearning content — 3-7 minute focused modules, push-notification nudges and spaced repetition schedules — that fit into the flow of work and dramatically improve long-term knowledge retention.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-chart-bar"></i></div>
					<h4>Learning Analytics</h4>
					<p>We implement xAPI and learning analytics dashboards that track completion, assessment scores, engagement patterns and skill progression — giving L&amp;D leaders the data to optimise content and demonstrate learning ROI to the business.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-exchange-alt"></i></div>
					<h4>Content Migration &amp; Integration</h4>
					<p>We migrate legacy eLearning content to modern standards, integrate your LMS with HRIS, identity providers and content libraries, and establish content governance processes that keep your learning catalogue current and relevant.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-lp">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-lp">Why L&amp;D Leaders Choose Us</h2>
				<p>Three strengths that define our Learning Platform practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-pencil-ruler"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Instructional Design Expertise</h3>
					<p>Our team combines certified instructional designers, multimedia developers and UX specialists — ensuring the learning experiences we build are pedagogically sound, visually engaging and genuinely effective.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-balance-scale"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Technology Agnostic</h3>
					<p>We recommend the right LMS and authoring tools for your needs and budget — whether that is an enterprise platform, open-source solution or a custom-built learning experience platform — with no vendor bias.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-chart-line"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Measurable Outcomes</h3>
					<p>We define learning success metrics before we design a single piece of content — and build in the measurement frameworks to prove that the learning is delivering real behaviour change and business impact.</p>
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
								<h2>Invest in Your People</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Build Your Learning Ecosystem <i class="flaticon-right-up"></i></a>
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
