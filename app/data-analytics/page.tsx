import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Data Analytics Services - Sunware Technologies",
  description: "Transform raw data into actionable insights with Sunware Technologies data analytics services. Business intelligence, dashboards and reporting solutions.",
  alternates: { canonical: "https://sunwaretechnologies.com/data-analytics" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Data Analytics</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Transforming raw data into strategic intelligence that drives confident decisions.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Data Analytics</div>
					<h2>From Raw Data to Business Intelligence</h2>
					<p>Most organisations are sitting on vast reserves of untapped data. Sunware's Data Analytics practice transforms that raw material into clear, actionable intelligence — giving your leaders the confidence to make faster, smarter decisions backed by evidence rather than intuition.</p>
					<p>Our team of data analysts, BI engineers and data scientists works across your entire data estate to design and deliver analytics solutions that are intuitive for business users, scalable for enterprise volumes and rigorous enough to trust.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Data Expert <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop" alt="Data Analytics">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-chart-bar"></i></div>
						<div class="hc-badge-text">
							<strong>Real-Time Analytics</strong>
							<span>BI to predictive models</span>
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
				<h2>What Data Analytics Delivers<br>for Your Business</h2>
				<p>Four outcomes that turn your data into a genuine competitive advantage.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-eye"></i></div>
					<h4>Predictive Intelligence</h4>
					<p>Move from describing what happened to predicting what will happen next — enabling proactive decisions on demand forecasting, churn prevention, risk management and revenue optimisation.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-tachometer-alt"></i></div>
					<h4>Real-Time Decisions</h4>
					<p>With streaming analytics and live dashboards, your teams gain instant visibility into operations — responding to opportunities and threats in minutes rather than waiting for yesterday's reports.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-chart-line"></i></div>
					<h4>Revenue Growth</h4>
					<p>Customer segmentation, pricing analytics and campaign attribution models help your commercial teams identify the highest-value growth levers and allocate resources with precision.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-users"></i></div>
					<h4>Self-Service Analytics</h4>
					<p>We build governed data products and semantic layers that empower business users to explore and answer their own questions — reducing the analytics backlog and accelerating time to insight.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Data Analytics<br>Capabilities</h2>
				<p>End-to-end analytics services from data foundations to advanced modelling.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-chart-pie"></i></div>
					<h4>Business Intelligence &amp; Dashboards</h4>
					<p>We design and build enterprise BI platforms and interactive dashboards — from executive KPI scorecards to granular operational reports — using Power BI, Tableau, Looker and custom solutions.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-brain"></i></div>
					<h4>Predictive Analytics</h4>
					<p>Our data scientists build statistical and ML models that forecast demand, identify at-risk customers, optimise inventory and surface operational anomalies before they become costly incidents.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-bolt"></i></div>
					<h4>Real-Time Analytics</h4>
					<p>We implement streaming data pipelines and real-time dashboards using Apache Kafka, Flink, Spark Streaming and cloud-native event processing — delivering sub-second insight on live operations.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-user-chart"></i></div>
					<h4>Customer Analytics</h4>
					<p>From 360-degree customer profiles and lifetime value modelling to next-best-action engines and personalisation frameworks — we help you understand, acquire and retain customers more effectively.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 05</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-shield-check"></i></div>
					<h4>Data Quality &amp; Governance</h4>
					<p>We implement data catalogues, quality monitoring, lineage tracking and governance policies that ensure your analytics are built on reliable, trustworthy and well-documented data assets.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-da">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-da">Why Data Teams Choose Us</h2>
				<p>Three differentiators that define our Data Analytics practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-layer-group"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Full Data Stack</h3>
					<p>We cover the entire analytics stack — ingestion, transformation, modelling, visualisation and governance — so you get a cohesive solution rather than disconnected point tools.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-briefcase"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Business-First Approach</h3>
					<p>We always start with the business question, not the technology. Every dashboard and model we build is tied to a decision you need to make and a metric you need to move.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-certificate"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Certified BI Expertise</h3>
					<p>Our team holds certifications across Microsoft Power BI, Tableau, dbt, Databricks and major cloud analytics platforms — bringing verified expertise to every engagement.</p>
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
								<h2>Turn Your Data Into a Competitive Advantage</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Get Started Today <i class="flaticon-right-up"></i></a>
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
