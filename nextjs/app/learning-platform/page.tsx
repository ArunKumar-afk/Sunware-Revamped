import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Learning Platform - Sunware Technologies",
  description: "Digital learning platform solutions from Sunware Technologies. LMS development, e-learning and educational technology.",
  alternates: { canonical: "https://sunwaretechnologies.com/learning-platform" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Learning Platform</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Transform Your Workforce Through Engaging and Effective Training</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">A World of Learning at Your Fingertips</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies empowers businesses to unlock the potential of their workforce through our comprehensive learning platform. We provide a robust suite of learning and development solutions designed to equip employees with the skills and knowledge they need to excel.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Learning Platform">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Extensive Content</h4><p>Access a vast collection of on-demand learning materials, courses, and tutorials.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Personalized Paths</h4><p>Create customized learning paths tailored to individual roles and career goals.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Mobile-Friendly</h4><p>Learn anytime, anywhere, on any device with our fully responsive platform.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Analytics &amp; Tracking</h4><p>Monitor learning progress and measure the impact of training on performance.</p></div></div>
    </div></div></section>

	<section style="padding: 80px 0; background: #f8faff;">
		<div class="container">
			<div class="section-title t-center mb-60 wow fadeInUp">
				<span class="subtitle">The Learning Platform Advantage</span>
				<h2 style="font-weight: 800;">Ideal For Organizations Facing</h2>
			</div>
			<div class="row">
				<div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".1s">
					<div class="culture-card" style="height:100%; text-align:center;">
						<div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fas fa-heart" style="font-size:28px; color:#EF7F1A;"></i></div>
						<h4 style="font-weight:800; margin-bottom:15px;">Employee Engagement</h4>
						<p style="color:#666;">Engaging learning experiences boost employee morale and motivation.</p>
					</div>
				</div>
				<div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".2s">
					<div class="culture-card" style="height:100%; text-align:center;">
						<div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fas fa-graduation-cap" style="font-size:28px; color:#EF7F1A;"></i></div>
						<h4 style="font-weight:800; margin-bottom:15px;">Skill Development</h4>
						<p style="color:#666;">Equip your workforce with the skills they need to excel.</p>
					</div>
				</div>
				<div class="col-lg-4 mb-30 wow fadeInUp" data-wow-delay=".3s">
					<div class="culture-card" style="height:100%; text-align:center;">
						<div style="width:60px; height:60px; background:rgba(239,127,26,0.1); border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;"><i class="fas fa-dollar-sign" style="font-size:28px; color:#EF7F1A;"></i></div>
						<h4 style="font-weight:800; margin-bottom:15px;">Cost Reduction</h4>
						<p style="color:#666;">Eliminate the need for expensive travel and instructor-led training.</p>
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
								<h2>Invest in Your People, Invest in Growth</h2>
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
					</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}