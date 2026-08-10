import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Data Engineering Services - Sunware Technologies",
  description: "Build the data foundations that power AI, analytics and intelligent operations with Sunware Technologies data engineering services.",
  alternates: { canonical: "https://sunwaretechnologies.com/data-engineering/" },
};

const content = `
	<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&fit=crop'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
		<div class="container text-center">
			<div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
				<a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
			</div>
			<div class="wow fadeInUp" data-wow-delay=".4s">
				<h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Data Engineering</h1>
			</div>
			<p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Building the data foundations that power AI, analytics and intelligent operations.</p>
		</div>
	</section>

	<section class="hc-intro">
		<div class="container">
			<div class="hc-intro-grid">
				<div class="wow fadeInLeft" data-wow-delay=".1s">
					<div class="hc-intro-label">Services / Data Engineering</div>
					<h2>The Data Foundation Every AI Initiative Needs</h2>
					<p>Great analytics and AI start with great data infrastructure. Sunware's Data Engineering practice designs and builds the pipelines, platforms and data products that feed your analytics and AI initiatives with reliable, high-quality data at scale.</p>
					<p>From migrating legacy data warehouses to building modern lakehouse architectures, our data engineers combine deep technical mastery with an understanding of your business domain — so the data flowing through your systems is accurate, timely and fit for purpose.</p>
					<a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Data Engineer <i class="flaticon-right-up"></i></a>
				</div>
				<div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
					<img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop" alt="Data Engineering">
					<div class="hc-intro-badge">
						<div class="hc-badge-icon"><i class="fal fa-database"></i></div>
						<div class="hc-badge-text">
							<strong>Lakehouse Architecture</strong>
							<span>Modern data platforms</span>
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
				<h2>What Data Engineering Delivers<br>for Your Organisation</h2>
				<p>Four foundational outcomes that make your entire data stack perform.</p>
			</div>
			<div class="hc-benefits-grid">

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-benefit-ghost">01</div>
					<div class="hc-benefit-icon i1"><i class="fal fa-bolt"></i></div>
					<h4>Pipeline Reliability</h4>
					<p>Well-engineered, monitored data pipelines eliminate the data downtime and silent failures that erode trust in analytics — ensuring your teams always have accurate, fresh data to work with.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-benefit-ghost">02</div>
					<div class="hc-benefit-icon i2"><i class="fal fa-expand-arrows-alt"></i></div>
					<h4>Infinite Scalability</h4>
					<p>Cloud-native and lakehouse architectures scale elastically with your data volumes — processing terabytes today and petabytes tomorrow without costly re-architecture or performance degradation.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-benefit-ghost">03</div>
					<div class="hc-benefit-icon i3"><i class="fal fa-shield-check"></i></div>
					<h4>Data Quality</h4>
					<p>Automated data quality checks, validation rules and anomaly detection catch issues at ingestion — protecting downstream analytics and AI models from garbage-in, garbage-out failures.</p>
				</div>

				<div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
					<div class="hc-benefit-ghost">04</div>
					<div class="hc-benefit-icon i4"><i class="fal fa-clock"></i></div>
					<h4>Faster Insights</h4>
					<p>Optimised data models, well-structured semantic layers and efficient query engines reduce the time between a business question being asked and a reliable answer being available.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-solutions">
		<div class="container">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill">Our Services</div>
				<h2>Our Data Engineering<br>Capabilities</h2>
				<p>Comprehensive data engineering services across the modern data stack.</p>
			</div>
			<div class="hc-sol-grid">

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
					<div class="hc-sol-num">01 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-drafting-compass"></i></div>
					<h4>Data Architecture &amp; Strategy</h4>
					<p>We design future-proof data architectures — lakehouse, data mesh, lambda and kappa patterns — tailored to your scale, latency requirements, cost constraints and existing technology investments.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
					<div class="hc-sol-num">02 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-exchange-alt"></i></div>
					<h4>ETL/ELT Pipeline Development</h4>
					<p>We build robust, maintainable data pipelines using dbt, Apache Airflow, Spark and cloud-native services — ingesting, transforming and loading data from hundreds of sources with full lineage tracking.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
					<div class="hc-sol-num">03 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-layer-group"></i></div>
					<h4>Data Lakehouse &amp; Warehouse</h4>
					<p>We implement and optimise modern data platforms on Databricks, Snowflake, BigQuery and Azure Synapse — delivering unified storage and compute that serves both BI and AI workloads efficiently.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
					<div class="hc-sol-num">04 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-stream"></i></div>
					<h4>Real-Time Streaming</h4>
					<p>We design and deploy event-driven streaming architectures using Apache Kafka, Flink and cloud messaging services — enabling real-time analytics, fraud detection and operational intelligence.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
					<div class="hc-sol-num">05 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-check-double"></i></div>
					<h4>Data Quality &amp; Observability</h4>
					<p>We implement Great Expectations, Monte Carlo, Soda and custom quality frameworks that monitor data freshness, completeness, accuracy and schema drift — alerting your team before problems reach production.</p>
				</div>

				<div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
					<div class="hc-sol-num">06 / 06</div>
					<div class="hc-sol-icon" aria-hidden="true"><i class="fal fa-infinity"></i></div>
					<h4>DataOps &amp; Automation</h4>
					<p>We apply DevOps principles to data — CI/CD for pipelines, infrastructure as code, automated testing and version control — reducing deployment risk and accelerating the pace of data delivery.</p>
				</div>

			</div>
		</div>
	</section>

	<section class="hc-why" aria-labelledby="why-heading-de">
		<div class="hc-why-stripe" aria-hidden="true"></div>
		<div class="container" style="position:relative;z-index:2;">
			<div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
				<div class="hc-pill" role="text">Why Choose Sunware</div>
				<h2 id="why-heading-de">Why Engineering Teams Choose Us</h2>
				<p>Three strengths that define our Data Engineering practice.</p>
			</div>
			<div class="hc-why-grid" role="list">

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-code"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Modern Stack Expertise</h3>
					<p>Our engineers are certified practitioners on the modern data stack — dbt, Spark, Kafka, Airflow, Snowflake and Databricks — bringing hands-on production expertise, not just theoretical knowledge.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-cloud"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Cloud-Agnostic</h3>
					<p>We design cloud-portable architectures that work across AWS, Azure and GCP — avoiding vendor lock-in and ensuring your data platform can evolve alongside your cloud strategy.</p>
				</article>

				<article class="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
					<div class="hc-why-icon-wrap" aria-hidden="true"><i class="fal fa-industry"></i></div>
					<div class="hc-why-divider" aria-hidden="true"></div>
					<h3>Production-Grade Delivery</h3>
					<p>We engineer for the real world — with monitoring, alerting, retry logic, schema evolution handling and documented runbooks — so your data platform is operationally robust from day one.</p>
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
								<h2>Build Your Data Foundation</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start the Conversation <i class="flaticon-right-up"></i></a>
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
