import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Odoo Custom Solutions - Sunware Technologies",
  description: "Odoo ERP implementation, customisation and integration services from Sunware Technologies. End-to-end business management solutions for growing enterprises.",
  alternates: { canonical: "https://sunwaretechnologies.com/odoo-solutions/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Odoo.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Odoo Custom Solutions</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">All-in-one ERP solutions tailored to your unique business processes and industry requirements.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Technologies / Odoo ERP</div>
        <h2>Business Management Reimagined with Odoo</h2>
        <p>Sunware's Odoo practice delivers fully customised ERP implementations that unify your finance, operations, sales, HR, and manufacturing on a single platform. We go beyond vanilla implementations — building tailored solutions that fit your workflows perfectly.</p>
        <p>As a certified Odoo partner, we handle everything from initial discovery and module selection to deployment, data migration, training, and ongoing support.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to an Odoo Expert <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Odoo.png" alt="Odoo Custom Solutions">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-layer-group"></i></div>
          <div class="hc-badge-text"><strong>Certified Odoo Partner</strong><span>30+ modules expertise</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>What Odoo Delivers for Your Business</h2>
      <p>Four transformative outcomes of a well-implemented Odoo ERP.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-layer-group"></i></div>
        <h4>Unified Business Operations</h4>
        <p>Replace 10+ disconnected tools with one integrated platform — eliminating data silos and giving everyone a single source of truth.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-chart-line"></i></div>
        <h4>Reduced Operational Costs</h4>
        <p>Open-source licensing and modular pricing mean you pay only for what you need — cutting software costs by up to 60% vs legacy ERP.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-bolt"></i></div>
        <h4>Faster Business Processes</h4>
        <p>Automated workflows, smart approvals, and real-time inventory tracking slash process cycle times across procurement, sales, and finance.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-expand-arrows-alt"></i></div>
        <h4>Scales with You</h4>
        <p>Start with the modules you need and activate new ones as you grow — Odoo scales from 10 to 10,000 users without re-implementation.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Odoo Capabilities</h2>
      <p>Complete Odoo services from consultation to deployment and support.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-map"></i></div>
        <h4>Odoo Implementation</h4>
        <p>Full-cycle implementation covering discovery, configuration, data migration, user acceptance testing, and go-live support.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-code"></i></div>
        <h4>Custom Module Development</h4>
        <p>Bespoke Odoo module development in Python to implement unique business logic not covered by standard modules.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-exchange-alt"></i></div>
        <h4>Third-Party Integration</h4>
        <p>Seamless integration with payment gateways, e-commerce platforms, shipping providers, and legacy enterprise systems.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-database"></i></div>
        <h4>Data Migration</h4>
        <p>Structured migration from legacy ERP, accounting software, or spreadsheets to Odoo with full audit trails and data validation.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-headset"></i></div>
        <h4>Support &amp; Managed Services</h4>
        <p>Post-go-live support, version upgrades, performance optimisation, and ongoing customisation as your business evolves.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-odoo">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-odoo">Why Businesses Choose Us</h2>
      <p>Three strengths that define our Odoo practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-certificate"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Certified Odoo Partner</h3>
        <p>Our certified Odoo consultants and developers bring deep expertise across 30+ Odoo modules and multiple industry verticals.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Business-Fit Implementations</h3>
        <p>We adapt Odoo to your processes — not the other way around — ensuring high user adoption and genuine operational improvements.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>End-to-End Ownership</h3>
        <p>From discovery to go-live to year-3 upgrades, we own the full Odoo lifecycle so you always have expert hands on your ERP.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Unify Your Business on Odoo?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Get a Free Consultation <i class="flaticon-right-up"></i></a>
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

