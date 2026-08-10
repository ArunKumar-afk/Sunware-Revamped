import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Salesforce Implementation - Sunware Technologies",
  description: "Expert Salesforce implementation, customisation and integration services from Sunware Technologies. Sales Cloud, Service Cloud, Marketing Cloud and more.",
  alternates: { canonical: "https://sunwaretechnologies.com/salesforce-expertise/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Sales_force.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Salesforce Implementation</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Maximising your Salesforce investment through expert implementation, customisation, and continuous optimisation.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Technologies / Salesforce</div>
        <h2>Unlock the Full Power of the Salesforce Platform</h2>
        <p>Sunware's Salesforce practice helps organisations implement, customise, and optimise the world's leading CRM platform. Our certified consultants bring deep functional and technical expertise across the entire Salesforce ecosystem.</p>
        <p>Whether you are implementing for the first time, migrating from a legacy CRM, or expanding to new Salesforce clouds, we ensure your deployment delivers measurable business value from day one.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Salesforce Expert <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Sales_force.png" alt="Salesforce Implementation">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-certificate"></i></div>
          <div class="hc-badge-text"><strong>Salesforce Certified</strong><span>Consultants &amp; Developers</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>What Salesforce Delivers for Your Organisation</h2>
      <p>Four measurable outcomes a well-implemented Salesforce platform creates.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-chart-line"></i></div>
        <h4>Accelerated Sales Growth</h4>
        <p>Sales Cloud gives your teams a 360-degree customer view, intelligent lead scoring, and automated pipeline management — closing deals faster.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-smile"></i></div>
        <h4>Exceptional Customer Service</h4>
        <p>Service Cloud enables omnichannel support, AI-powered case routing, and self-service portals that delight customers and reduce resolution times.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-bullseye"></i></div>
        <h4>Smarter Marketing</h4>
        <p>Marketing Cloud and Pardot enable personalised journeys, lead nurturing, and ROI attribution across every marketing channel.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-chart-bar"></i></div>
        <h4>Data-Driven Decisions</h4>
        <p>Einstein Analytics and real-time dashboards transform your CRM data into actionable insights for leadership and frontline teams alike.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Salesforce Capabilities</h2>
      <p>Comprehensive Salesforce services across the full platform lifecycle.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-cogs"></i></div>
        <h4>Sales &amp; Service Cloud</h4>
        <p>End-to-end implementation of Sales and Service Cloud with custom objects, workflows, and automation tailored to your processes.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-bullseye"></i></div>
        <h4>Marketing Cloud &amp; Pardot</h4>
        <p>Journey Builder, Email Studio, and Pardot configuration for automated lead nurturing and multi-channel campaign management.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-code"></i></div>
        <h4>Custom Development</h4>
        <p>Apex, Visualforce, and Lightning Web Components development for complex business logic and custom UI requirements.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-exchange-alt"></i></div>
        <h4>Integration &amp; API Development</h4>
        <p>Seamless Salesforce integration with ERP, marketing tools, and data warehouses using REST/SOAP APIs and MuleSoft.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-exchange-alt"></i></div>
        <h4>CRM Migration</h4>
        <p>Data migration from legacy CRMs (Dynamics, HubSpot, SAP CRM) to Salesforce with full data cleansing and validation.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
        <div class="hc-sol-num">06 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-graduation-cap"></i></div>
        <h4>Training &amp; Adoption</h4>
        <p>Change management, admin training, and user adoption programs that ensure your team actually uses Salesforce to its full potential.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-sf">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-sf">Why Enterprises Choose Us</h2>
      <p>Three strengths that set our Salesforce practice apart.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-certificate"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Multi-Cloud Expertise</h3>
        <p>Our certified team spans Sales, Service, Marketing, Experience, and Analytics Clouds — delivering holistic Salesforce transformations.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Industry Accelerators</h3>
        <p>Pre-built templates and configurations for banking, healthcare, and retail dramatically reduce go-live timelines.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Long-Term Partnership</h3>
        <p>We provide ongoing managed services, seasonal release support, and continuous optimisation to protect your Salesforce investment.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Transform Your CRM?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Talk to a Salesforce Expert <i class="flaticon-right-up"></i></a>
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

