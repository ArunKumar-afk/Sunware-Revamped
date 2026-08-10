import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Neo4J Graph Technologies - Sunware Technologies",
  description: "Neo4j graph database solutions from Sunware Technologies. Knowledge graphs, recommendation engines, fraud detection and connected data analytics.",
  alternates: { canonical: "https://sunwaretechnologies.com/neo4j-solutions/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.5), rgba(10,15,30,0.7)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Neo4J Graph Technologies</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Unlocking the power of connected data to reveal relationships no relational database can see.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Technologies / Neo4J</div>
        <h2>Graph Data: The Future of Connected Intelligence</h2>
        <p>Sunware's Neo4j practice helps organisations model, store, and query highly connected data with unprecedented speed and flexibility. Where traditional databases struggle with complex relationships, graph technology excels — revealing patterns and connections that drive smarter decisions.</p>
        <p>From fraud detection networks to knowledge graphs and recommendation engines, we build graph solutions that scale to billions of nodes and relationships.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Explore Graph Solutions <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Neo4J Graph Technologies">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-chart-network"></i></div>
          <div class="hc-badge-text"><strong>Neo4j Certified</strong><span>Graph database experts</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Graph</div>
      <h2>What Graph Technology Unlocks</h2>
      <p>Four powerful capabilities that only graph databases can deliver at scale.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-search"></i></div>
        <h4>Deep Relationship Queries</h4>
        <p>Traverse millions of relationships in milliseconds — something that would take relational databases hours of expensive JOIN operations.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-shield-check"></i></div>
        <h4>Advanced Fraud Detection</h4>
        <p>Identify fraud rings, money laundering networks, and synthetic identity patterns by analysing the connections between entities in real time.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-star"></i></div>
        <h4>Personalised Recommendations</h4>
        <p>Model customer-product-behaviour relationships to power recommendation engines that increase conversion and basket size.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-sitemap"></i></div>
        <h4>Knowledge Graph Intelligence</h4>
        <p>Build enterprise knowledge graphs that connect disparate data sources, enabling AI models to reason over your entire information landscape.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Neo4J &amp; Graph Capabilities</h2>
      <p>End-to-end graph solutions from data modelling to production deployment.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-project-diagram"></i></div>
        <h4>Graph Data Modelling</h4>
        <p>Domain-specific graph schema design that accurately represents your business entities, relationships, and properties.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-database"></i></div>
        <h4>Neo4j Implementation</h4>
        <p>Full Neo4j cluster setup, data ingestion pipelines, Cypher query optimisation, and performance tuning for production workloads.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-shield-check"></i></div>
        <h4>Fraud &amp; Risk Analytics</h4>
        <p>Real-time graph algorithms for fraud ring detection, AML compliance, and credit risk assessment in banking and insurance.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-brain"></i></div>
        <h4>Knowledge Graph &amp; AI Integration</h4>
        <p>Connect Neo4j to your ML models and LLMs to enable graph-augmented RAG pipelines and context-aware AI applications.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-exchange-alt"></i></div>
        <h4>Migration from Relational Databases</h4>
        <p>Proven migration frameworks to move appropriate workloads from SQL/NoSQL databases to Neo4j with zero data loss.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-neo">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-neo">Why Enterprises Choose Us</h2>
      <p>Three strengths that define our graph technology practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-certificate"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Neo4j Certified Team</h3>
        <p>Our certified Neo4j professionals bring deep Cypher, GDS, and AuraDB expertise across diverse industry verticals.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Real-World Use Cases</h3>
        <p>We have delivered graph solutions across banking fraud, telecom network analysis, retail recommendations, and enterprise knowledge management.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Full Ecosystem Integration</h3>
        <p>We integrate Neo4j seamlessly with your existing data stack — Kafka, Spark, Elasticsearch, cloud platforms, and AI/ML pipelines.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Explore Your Connected Data?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Your Graph Journey <i class="flaticon-right-up"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div></div>
</div>
</div>`;

export default function Page() {
  return <HtmlPage content={content} />;
}

