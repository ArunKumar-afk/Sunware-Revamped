import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Data Science & AI - Sunware Technologies",
  description: "Advanced data science and artificial intelligence solutions from Sunware Technologies. Machine learning, predictive analytics and AI strategy.",
  alternates: { canonical: "https://sunwaretechnologies.com/data-science-ai" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Data_Science.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Data Science &amp; AI</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Transforming raw data into actionable intelligence that drives measurable business outcomes.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Services / Data Science &amp; AI</div>
        <h2>Intelligence at the Core of Every Decision</h2>
        <p>Sunware leads in Data Science and AI by delivering advanced analytics, machine learning models, and AI-driven strategies. We help organisations unlock the hidden value in their data to drive growth, efficiency, and competitive advantage.</p>
        <p>Our data scientists and ML engineers combine domain expertise with cutting-edge algorithms to build models that are not just accurate — but truly useful in production environments.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Data Scientist <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Data_Science.png" alt="Data Science & AI">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-brain"></i></div>
          <div class="hc-badge-text"><strong>ML &amp; Generative AI</strong><span>Production-ready models</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>What AI &amp; Data Science Unlocks</h2>
      <p>Four transformative outcomes our AI practice delivers for organisations.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-eye"></i></div>
        <h4>Predictive Intelligence</h4>
        <p>Forecast demand, detect churn, and anticipate failures before they happen — giving you an information advantage over competitors.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-user-circle"></i></div>
        <h4>Personalisation at Scale</h4>
        <p>Deliver hyper-personalised experiences to millions of customers simultaneously through real-time recommendation engines.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-cogs"></i></div>
        <h4>Operational Optimisation</h4>
        <p>Use AI to optimise supply chains, staffing levels, pricing strategies, and resource allocation with mathematical precision.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-shield-check"></i></div>
        <h4>Risk &amp; Fraud Detection</h4>
        <p>Real-time anomaly detection models identify fraudulent transactions and cybersecurity threats before damage occurs.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Data Science &amp; AI Capabilities</h2>
      <p>Full-spectrum AI services from data strategy to production deployment.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-database"></i></div>
        <h4>Data Strategy &amp; Architecture</h4>
        <p>Design modern data platforms, data lakes, and lakehouse architectures that make your data AI-ready.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-chart-network"></i></div>
        <h4>Machine Learning Engineering</h4>
        <p>End-to-end ML pipelines — from feature engineering and model training to MLOps deployment and monitoring.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-comment-alt-dots"></i></div>
        <h4>Natural Language Processing</h4>
        <p>Chatbots, document intelligence, sentiment analysis, and language models tailored to your domain.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-eye"></i></div>
        <h4>Computer Vision</h4>
        <p>Image classification, object detection, and visual inspection solutions for manufacturing, retail, and healthcare.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-magic"></i></div>
        <h4>Generative AI Solutions</h4>
        <p>Custom LLM integrations, RAG pipelines, and AI copilots that augment your teams and products with Gen AI capabilities.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
        <div class="hc-sol-num">06 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-chart-bar"></i></div>
        <h4>Analytics &amp; BI Dashboards</h4>
        <p>Interactive dashboards and self-service analytics that put data-driven insights in the hands of every decision-maker.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-ds">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-ds">Why Organisations Trust Us</h2>
      <p>Three strengths that define our AI and data science practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-flask"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Research-Grade Rigour</h3>
        <p>Our team applies rigorous statistical methodology and peer-reviewed techniques, ensuring models are robust, interpretable, and fair.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>End-to-End Ownership</h3>
        <p>We take models from ideation through production — handling data pipelines, retraining, monitoring, and business integration.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Business-First Mindset</h3>
        <p>We focus on business outcomes first and data science second — ensuring every model solves a real problem and delivers measurable ROI.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Turn Data into Your Competitive Edge</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Today <i class="flaticon-right-up"></i></a>
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
