import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Data Engineering Services - Sunware Technologies",
  description: "Build robust data pipelines and infrastructure with Sunware Technologies data engineering services. ETL, data warehousing and real-time processing.",
  alternates: { canonical: "https://sunwaretechnologies.com/data-engineering" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Data Engineering</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Architecting Your Path to Data-Driven Success</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Building a Smarter Data Foundation</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies bridges the gap with comprehensive Data Engineering services. Empowering businesses to transform raw data into actionable insights through architecture design, ETL processes, warehousing, and seamless data integration.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data Engineering">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Data Architecture</h4><p>Crafting robust data architectures tailored to your specific business needs.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>ETL Processes</h4><p>Efficient pipelines for seamless data extraction, transformation, and loading.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Data Warehousing</h4><p>Scalable data warehouses for centralized storage and analysis.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Data Integration</h4><p>Integrating disparate data sources into a unified ecosystem.</p></div></div>
    </div></div></section>

	<section style="padding:100px 0;background:#fff;">
		<div class="container">
			<div class="text-center mb-60">
				<p style="font-size:16px;color:#EF7F1A;font-weight:600;margin-bottom:10px;">Who is this service for?</p>
				<h2 style="font-size:42px;font-weight:700;">Built For</h2>
			</div>
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-database" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Data-Driven</h4>
						<p>Businesses seeking to make decisions based on data analysis.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-check-circle" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Quality Seekers</h4>
						<p>Organizations focused on improving data accuracy.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-tachometer-alt" style="font-size:40px;color:#EF7F1A;margin-bottom:20px;"></i>
						<h4>Optimizers</h4>
						<p>Businesses looking to utilize data for better operations.</p>
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
								<h2>Build Your Data Foundation ? Get Started</h2>
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