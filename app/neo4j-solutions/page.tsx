import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Neo4j Graph Solutions - Sunware Technologies",
  description: "Neo4j graph database solutions from Sunware Technologies. Graph modeling, knowledge graphs and connected data analytics.",
  alternates: { canonical: "https://sunwaretechnologies.com/neo4j-solutions" },
};

const content = `<div class="banner__one" style="position: relative; overflow: hidden; background: #fff;">
		<video autoplay loop muted playsinline style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); z-index: 0; opacity: 0.6;">
			<source src="waves_1.mp4" type="video/mp4">
		</video>
		
		<div class="banner__one-image" style="padding: 100px 0; position: relative; z-index: 1; background: transparent;">
			<div class="container jc-center text-center">
                                <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
                                        <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid var(--primary-color-1); color: var(--primary-color-1);"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
                                </div>
				<h1 style="color: var(--primary-color-1); font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1.1; margin-bottom: 20px;">Neo4J Graph Technologies</h1>
				<p style="font-size: 20px; color: #444; margin: 0 auto; max-width: 800px;">Unlock the Power of Connected Data</p>
			</div>
		</div>
	</div>

	<div class="container section-padding">
		<div class="story-row al-center">
			<div class="story-content wow fadeInLeft">
				<h2 style="font-size: 42px; font-weight: 700; margin-bottom: 25px;">Transform Your Data with Graph Intelligence</h2>
				<p style="font-size: 18px; line-height: 1.8; color: #555;">Sunware Technologies leverages Neo4J's powerful graph database technology to help businesses uncover hidden relationships in their data, enabling smarter decisions, fraud detection, recommendation engines, and knowledge graphs that drive real business value.</p>
			</div>
			<div class="story-image wow fadeInRight">
				<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Neo4J Graph Technologies">
			</div>
		</div>
	</div>

    <section class="tailored-grid"><div class="container"><div class="row g-4">
        <div class="col-lg-3"><div class="solution-card"><h4>Knowledge Graphs</h4><p>Build intelligent knowledge graphs that connect your data and reveal hidden insights.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Fraud Detection</h4><p>Identify fraudulent patterns and anomalies through real-time graph analysis.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Recommendation Engines</h4><p>Deliver personalized recommendations powered by graph-based algorithms.</p></div></div>
        <div class="col-lg-3"><div class="solution-card"><h4>Network Analysis</h4><p>Analyze complex networks and relationships to optimize operations.</p></div></div>
    </div></div></section>

	<section style="padding: 100px 0; background: #fff;">
		<div class="container">
			<div class="text-center mb-60">
				<p style="font-size: 16px; color: #EF7F1A; font-weight: 600; margin-bottom: 10px;">Who is this service for?</p>
				<h2 style="font-size: 42px; font-weight: 700;">Ideal For</h2>
			</div>
			<div class="row g-4">
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-database" style="font-size: 40px; color: #EF7F1A; margin-bottom: 20px;"></i>
						<h4>Data-Rich Organizations</h4>
						<p>Businesses with complex, interconnected data seeking deeper insights.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-shield-alt" style="font-size: 40px; color: #EF7F1A; margin-bottom: 20px;"></i>
						<h4>Security Focused</h4>
						<p>Organizations needing advanced fraud detection and risk analysis.</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="solution-card text-center">
						<i class="fas fa-users" style="font-size: 40px; color: #EF7F1A; margin-bottom: 20px;"></i>
						<h4>Customer-Centric</h4>
						<p>Companies wanting to deliver personalized experiences at scale.</p>
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
								<h2>Discover Hidden Connections in Your Data</h2>
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