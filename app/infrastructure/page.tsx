import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Infrastructure Services - Sunware Technologies",
  description: "Enterprise infrastructure services from Sunware Technologies. Server management, networking, DevOps and infrastructure automation.",
  alternates: { canonical: "https://sunwaretechnologies.com/infrastructure" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Infrastructure Solutions</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Empowering Businesses with Robust Infrastructure</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">End-to-End Infrastructure Services</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies provides comprehensive infrastructure solutions designed to optimize performance, enhance reliability, and support your business growth. Our expertise spans cloud infrastructure, on-premises data centers, hybrid environments, and edge computing.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Infrastructure Solutions">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Cloud Infrastructure</h4><p>Design and deploy cloud-based solutions offering scalability and flexibility.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Data Center Optimization</h4><p>Modernize on-premises data centers for improved performance and efficiency.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Hybrid &amp; Edge Computing</h4><p>Integrate cloud and on-premises resources for optimal flexibility.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Infrastructure Management</h4><p>Proactive monitoring, maintenance, and support for peak performance.</p></div></div>
    </div></div></section>

	<section style="padding:100px 0;background:#fff;">
		<div class="container">
			<div class="text-center mb-60">
				<p style="font-size:16px;color:#EF7F1A;font-weight:600;margin-bottom:10px;">Who needs this?</p>
				<h2 style="font-size:42px;font-weight:700;">Ideal For</h2>
			</div>
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-server" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>IT Modernizers</h4>
						<p>Organizations seeking to modernize IT infrastructure.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-dollar-sign" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Cost Optimizers</h4>
						<p>Businesses looking to reduce costs through strategic solutions.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-cloud" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Cloud Adopters</h4>
						<p>Companies transitioning to cloud or hybrid environments.</p>
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
								<h2>Build a Future-Proof IT Foundation</h2>
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