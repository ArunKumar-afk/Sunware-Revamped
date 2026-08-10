import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Healthcare and Life Sciences - Sunware Technologies",
  description: "Technology solutions for healthcare and life sciences from Sunware Technologies. EHR integration, clinical analytics and regulatory compliance.",
  alternates: { canonical: "https://sunwaretechnologies.com/healthcare-lifesciences" },
};

const content = `<!-- --- BANNER HERO (matches site pattern) --- -->
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.3), rgba(10,15,30,0.55)), url('/images/Industries/Sunware_Industries_Healthcare_and_Life_Sciences_Banner.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
                <div class="container text-center">
                        <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay=".4s">
                                <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Healthcare &amp; Life Sciences</h1>
                        </div>
                        <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Engineering precise technological solutions for the world's most critical breakthroughs.</p>
                </div>
        </section>

	<!-- --- INTRO SPLIT --- -->
	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Industries / Healthcare</div>
					<h2>Empowering Pharmaceutical &amp; Life Sciences Organizations</h2>
					<p>In the fast-paced world of pharmaceutical and life sciences, where a single breakthrough can transform millions of lives, staying ahead of the curve is paramount.</p>
					<p>We understand the unique challenges you face ? from accelerating drug development timelines to ensuring strict regulatory compliance. Our tailored IT solutions are designed to empower your organization to achieve its goals and make a real impact.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to an Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="/images/Industries/Sunware_Industries_Healthcare_and_Life_Sciences_Our-tailored-IT-solutions.png" alt="Healthcare IT Solutions">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-shield-check"></i></div>
						<div class="hc-badge-text">
							<strong>FDA &amp; HIPAA Ready</strong>
							<span>Compliance-first solutions</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- --- PARTNER BENEFITS --- -->
	<section class="hc-benefits">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Why Partner With Us</div>
				<h2>Partner with Us to Transform<br>Your Organization</h2>
				<p>Four powerful outcomes our technology solutions deliver for pharmaceutical and life sciences leaders.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-flask"></i></div>
					<h4>Accelerate Drug Development</h4>
					<p>Streamline R&amp;D processes, reducing time-to-market by up to 20%. Efficient data management and collaboration enables faster decision-making.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-chart-line"></i></div>
					<h4>Gain Real-Time Insights</h4>
					<p>Harness advanced big data analytics to uncover patterns in research, clinical trials, and manufacturing. Drive data-driven decisions that optimize patient outcomes.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-cogs"></i></div>
					<h4>Enhance Operational Efficiency</h4>
					<p>Automate repetitive tasks and optimize supply chains. Experience up to 15% reduction in operational costs with a significant productivity boost.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-shield-check"></i></div>
					<h4>Bolster Security &amp; Compliance</h4>
					<p>Safeguard sensitive patient data and intellectual property. Ensure full adherence to stringent regulatory requirements, minimizing non-compliance risk.</p>
				</div>

			</div>
		</div>
	</section>

	<!-- --- IT SOLUTIONS BENTO --- -->
	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Tailored IT Solutions for<br>Pharmaceutical &amp; Life Sciences</h2>
				<p>End-to-end technology capabilities purpose-built for the complexity and compliance demands of your sector.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-code"></i></div>
					<h4>Custom Software Development</h4>
					<p>We create bespoke applications that perfectly align with your unique research, clinical trial, or manufacturing needs ? built to scale as your requirements evolve.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-cloud-upload"></i></div>
					<h4>Cloud Migration &amp; Management</h4>
					<p>Leverage the scalability and flexibility of the cloud for seamless data storage, high-throughput analysis, and real-time global collaboration across your teams and research sites.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-lock"></i></div>
					<h4>Cybersecurity Risk Assessment &amp; Mitigation</h4>
					<p>Proactively identify and address vulnerabilities to protect mission-critical research data and patient information against evolving cyber threats.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-clipboard-check"></i></div>
					<h4>Regulatory Compliance Consulting</h4>
					<p>Stay ahead of evolving FDA, HIPAA, and GxP regulations ? ensuring your systems and processes meet the highest global standards at every stage.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-chart-bar"></i></div>
					<h4>Data Analytics &amp; Visualization</h4>
					<p>Transform raw scientific and operational data into actionable insights through intuitive dashboards, empowering smarter, faster decisions across your organization.</p>
				</div>

			</div>
		</div>
	</section>

	<!-- --- WHY CHOOSE US --- -->
	<section class="hc-why" aria-labelledby="why-heading">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading">Why Organizations Trust Us</h2>
				<p>Three core strengths that make Sunware Technologies the partner of choice for pharmaceutical and life sciences leaders.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-microscope"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Deep Industry Expertise</h3>
					<p>We understand the nuances of the pharmaceutical and life sciences landscape ? delivering tailored solutions that address your specific technical and regulatory challenges with precision.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-trophy"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Proven Track Record</h3>
					<p>Our team has a successful history of delivering innovative IT solutions for leading pharmaceutical and life sciences organizations across research, clinical, and commercial operations.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-handshake"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Client-Centric Approach</h3>
					<p>We prioritize your goals and work collaboratively to develop solutions that align perfectly with your unique vision ? acting as a true technology partner, not just a vendor.</p>
				</article>

			</div>
		</div>
	</section>

	<!-- --- CTA (site standard) --- -->
	<div class="container" style="padding:80px 15px;">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Ready to Transform Your Organization?</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Contact Us Today<i class="flaticon-right-up"></i></a>
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