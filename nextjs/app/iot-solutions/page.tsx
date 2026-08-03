import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "IoT Solutions - Sunware Technologies",
  description: "Internet of Things solutions from Sunware Technologies. IoT strategy, platform development and edge computing.",
  alternates: { canonical: "https://sunwaretechnologies.com/iot-solutions" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">IoT Solutions</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Unlocking Business Transformation Through Connected Intelligence</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">End-to-End IoT Solutions</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies empowers businesses to harness the transformative potential of the Internet of Things. Our comprehensive IoT solutions encompass device design, data management, analytics, and custom application creation.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="IoT Solutions">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>IoT Device Design</h4><p>Create custom IoT devices from sensors and actuators to gateways.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>IoT Data Management</h4><p>Collect, store, process, and analyze data from IoT devices in real-time.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>IoT Analytics</h4><p>Uncover valuable insights to optimize operations and predict maintenance needs.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Custom IoT Applications</h4><p>Build tailored applications to monitor, control, and automate processes.</p></div></div>
    </div></div></section>

	<section style="padding:100px 0;background:#fff;">
		<div class="container">
			<div class="text-center mb-60">
				<p style="font-size:16px;color:#EF7F1A;font-weight:600;margin-bottom:10px;">Who can benefit?</p>
				<h2 style="font-size:42px;font-weight:700;">Designed For</h2>
			</div>
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-cogs" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Efficiency Seekers</h4>
						<p>Automate processes and optimize resource utilization.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-chart-bar" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Data-Driven</h4>
						<p>Gain real-time visibility into operations.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-lightbulb" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Innovators</h4>
						<p>Develop innovative IoT-based products and services.</p>
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
								<h2>Connect, Analyze, Transform - Start Today</h2>
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