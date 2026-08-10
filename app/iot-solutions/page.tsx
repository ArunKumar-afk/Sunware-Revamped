import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "IoT Solutions - Sunware Technologies",
  description: "End-to-end IoT ecosystems that connect your operations and unlock real-time intelligence with Sunware Technologies IoT solutions.",
  alternates: { canonical: "https://sunwaretechnologies.com/iot-solutions" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">IoT Solutions</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">End-to-end IoT ecosystems that connect your operations and unlock real-time intelligence.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / IoT</div>
					<h2>Connected Operations, Real-Time Intelligence</h2>
					<p>The physical and digital worlds are converging. Sunware's IoT Solutions practice helps manufacturers, utilities, logistics providers and smart facilities unlock the intelligence hidden in their physical assets — from sensors and machines to entire production floors and city infrastructure.</p>
					<p>We design and deliver complete IoT ecosystems — from device connectivity and edge computing through to cloud ingestion, analytics and actionable dashboards — ensuring every component works together as a secure, reliable and scalable whole.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to an IoT Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop" alt="IoT Solutions">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-broadcast-tower"></i></div>
						<div class="hc-badge-text">
							<strong>Device to Dashboard</strong>
							<span>Full-stack IoT</span>
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
				<h2>What IoT Connectivity Delivers<br>for Your Operations</h2>
				<p>Four transformative outcomes from a fully connected operation.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-eye"></i></div>
					<h4>Total Visibility</h4>
					<p>Gain a real-time view of every asset, machine and process across your entire operation — eliminating the blind spots that drive inefficiency, waste and unplanned downtime.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-tools"></i></div>
					<h4>Predictive Maintenance</h4>
					<p>Sensor data and ML models identify equipment degradation patterns weeks before failure — shifting your maintenance strategy from reactive to predictive and slashing unplanned downtime costs.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-leaf"></i></div>
					<h4>Energy Efficiency</h4>
					<p>Granular energy monitoring and automated control systems reduce energy consumption across buildings, factories and fleets — supporting sustainability goals while directly lowering operating costs.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-chart-line"></i></div>
					<h4>New Revenue Models</h4>
					<p>IoT-enabled product telemetry and usage data open the door to outcome-based pricing, subscription services and data monetisation opportunities that were impossible with unconnected products.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our End-to-End IoT<br>Capabilities</h2>
				<p>Full-stack IoT services from device to dashboard and beyond.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-drafting-compass"></i></div>
					<h4>IoT Architecture Design</h4>
					<p>We design fit-for-purpose IoT architectures — selecting the right protocols, connectivity standards, edge vs. cloud processing split and security model for your specific operational environment and scale requirements.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-microchip"></i></div>
					<h4>Device Management &amp; Connectivity</h4>
					<p>We implement fleet management platforms that provision, monitor, update and secure thousands of connected devices — supporting MQTT, OPC-UA, Modbus and other industrial protocols out of the box.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-cloud"></i></div>
					<h4>Cloud IoT Platform</h4>
					<p>We build and operate cloud IoT backends on AWS IoT Core, Azure IoT Hub and GCP IoT — providing scalable ingestion, device twins, rule engines and integration with your enterprise data and analytics platforms.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-server"></i></div>
					<h4>Edge Computing</h4>
					<p>We deploy edge processing capabilities on gateways and industrial PCs — enabling local AI inference, real-time control responses and bandwidth reduction for environments with limited or expensive cloud connectivity.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-chart-bar"></i></div>
					<h4>IoT Analytics</h4>
					<p>We turn raw telemetry streams into operational intelligence — predictive maintenance models, OEE dashboards, anomaly detection systems and digital twin simulations that drive measurable operational improvements.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-iot">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-iot">Why Operations Teams Choose Us</h2>
				<p>Three strengths that define our IoT Solutions practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-network-wired"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Full-Stack IoT</h3>
					<p>From embedded firmware and device connectivity to cloud platforms and analytics dashboards, our team owns the complete IoT stack — eliminating integration risk and finger-pointing between vendors.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-database"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>EdgeData360 Platform</h3>
					<p>Our proprietary EdgeData360 platform accelerates IoT deployments with pre-built connectors, device management, edge AI runtime and analytics modules — reducing time-to-value significantly.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-lock"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Security-First</h3>
					<p>We design security in from the start — device identity, mutual TLS, firmware signing, network segmentation and anomaly detection — protecting your operational technology from evolving cyber threats.</p>
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
								<h2>Connect Your Operations Today</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start Your IoT Journey <i class="flaticon-right-up"></i></a>
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
