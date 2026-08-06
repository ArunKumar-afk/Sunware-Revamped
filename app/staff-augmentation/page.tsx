import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Staff Augmentation - Sunware Technologies",
  description: "Scale your team with Sunware Technologies staff augmentation services. Skilled developers, engineers and consultants on demand.",
  alternates: { canonical: "https://sunwaretechnologies.com/staff-augmentation" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
                                <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                        <a href="index.html" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid var(--primary-color-1); color: var(--primary-color-1);"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                                </div>
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Staff Augmentation Solutions</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Empower Your Workforce, Accelerate Your Success</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">A Tailored Approach to Staff Augmentation</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies provides flexible and scalable staff augmentation solutions to bridge your talent gaps and propel your projects forward. Our extensive network of highly qualified professionals allows you to seamlessly integrate specialized skills and expertise into your existing teams.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Staff Augmentation">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Access to Top Talent</h4><p>Gain access to a vast pool of pre-vetted professionals across diverse domains and technologies.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Flexible Engagement</h4><p>Choose from project-based, contract-to-hire, or direct-hire models to suit your needs.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Rapid Scalability</h4><p>Quickly adapt your workforce to meet fluctuating project demands and deadlines.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Reduced Costs</h4><p>Avoid the time-consuming and expensive traditional recruitment process.</p></div></div>
    </div></div></section>

	<section style="padding: 80px 0; background: #f8faff;">
		<div class="container">
			<div class="section-title t-center mb-60 wow fadeInUp">
				<span class="subtitle">Who Needs This?</span>
				<h2 style="font-weight: 800;">Ideal For Organizations Facing</h2>
			</div>
			<div class="row">
				<div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".1s">
					<div class="culture-card" style="height:100%; text-align:center;">
						<div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fas fa-clock" style="font-size:28px; color:#EF7F1A;"></i></div>
						<h4 style="font-weight:800; margin-bottom:15px;">Tight Deadlines</h4>
						<p style="color:#666;">Need to ramp up resources quickly to meet critical deadlines? We can help.</p>
					</div>
				</div>
				<div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".2s">
					<div class="culture-card" style="height:100%; text-align:center;">
						<div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fas fa-users" style="font-size:28px; color:#EF7F1A;"></i></div>
						<h4 style="font-weight:800; margin-bottom:15px;">Resource Constraints</h4>
						<p style="color:#666;">Operating with a limited workforce? We provide the talent to fill the gaps.</p>
					</div>
				</div>
				<div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".3s">
					<div class="culture-card" style="height:100%; text-align:center;">
						<div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fas fa-star" style="font-size:28px; color:#EF7F1A;"></i></div>
						<h4 style="font-weight:800; margin-bottom:15px;">Specialized Skills</h4>
						<p style="color:#666;">Require specific expertise for a particular project? We have the right fit.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>Scale Your Team, Accelerate Your Success</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start Today<i class="flaticon-right-up"></i></a>



								</div>
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