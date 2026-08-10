import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Cloud Solutions - Sunware Technologies",
  description: "End-to-end cloud solutions from Sunware Technologies. Multi-cloud strategy, migration, cloud-native development and managed services.",
  alternates: { canonical: "https://sunwaretechnologies.com/cloud-solutions" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Cloud.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Cloud Solutions Expertise</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Scalability, security, and efficiency through tailored cloud strategies.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Services / Cloud</div>
        <h2>Strategic Cloud Mastery for Modern Enterprises</h2>
        <p>Sunware offers a full spectrum of cloud services — from strategy and planning to deployment and ongoing management. Collaborating with top cloud providers like AWS, Azure, and Google Cloud, we tailor high-performance solutions to your unique business needs.</p>
        <p>Whether you are migrating legacy systems, building cloud-native applications, or optimising existing workloads, our certified cloud architects guide every step of the journey.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Cloud Architect <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Cloud.png" alt="Cloud Solutions">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-cloud"></i></div>
          <div class="hc-badge-text"><strong>AWS · Azure · GCP</strong><span>Multi-cloud certified</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Partner With Us</div>
      <h2>What Cloud Transformation Delivers</h2>
      <p>Four powerful outcomes our cloud solutions drive for enterprises.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-tachometer-alt"></i></div>
        <h4>Accelerate Time to Market</h4>
        <p>Spin up environments instantly, automate deployments, and ship features faster with cloud-native CI/CD pipelines and elastic infrastructure.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-chart-line"></i></div>
        <h4>Reduce Operational Costs</h4>
        <p>Eliminate over-provisioning and pay only for what you use. Our FinOps practice consistently delivers 30–40% infrastructure cost savings.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-shield-check"></i></div>
        <h4>Enterprise-Grade Security</h4>
        <p>Zero-trust architecture, automated compliance checks, and continuous threat monitoring protect your workloads around the clock.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-expand-arrows-alt"></i></div>
        <h4>Infinite Scalability</h4>
        <p>Handle traffic spikes without downtime. Auto-scaling and serverless architectures ensure your platform grows with your business.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>End-to-End Cloud Capabilities</h2>
      <p>From strategy to managed operations — everything you need on one cloud journey.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-map"></i></div>
        <h4>Cloud Strategy &amp; Consulting</h4>
        <p>Roadmap design, cloud-readiness assessments, and provider selection aligned to your business goals.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-exchange-alt"></i></div>
        <h4>Cloud Migration</h4>
        <p>Lift-and-shift, re-platform, or re-architect — zero-downtime migrations with full data integrity.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-code"></i></div>
        <h4>Cloud-Native Development</h4>
        <p>Microservices, containers, and serverless applications built from the ground up for the cloud.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-infinity"></i></div>
        <h4>DevOps &amp; Automation</h4>
        <p>CI/CD pipelines, infrastructure-as-code, and automated testing for rapid, reliable releases.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-tools"></i></div>
        <h4>Managed Cloud Services</h4>
        <p>24/7 monitoring, performance tuning, patching, and incident response for your cloud environment.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
        <div class="hc-sol-num">06 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-lock"></i></div>
        <h4>Cloud Security &amp; Compliance</h4>
        <p>Identity management, encryption, threat detection, and compliance automation for regulated industries.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-cloud">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-cloud">Why Enterprises Choose Us</h2>
      <p>Three strengths that set our cloud practice apart.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-certificate"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Certified Expertise</h3>
        <p>Our architects hold certifications across AWS, Azure, and GCP — bringing deep platform knowledge to every engagement.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Proven Delivery</h3>
        <p>Hundreds of successful cloud migrations and deployments across healthcare, banking, retail, and media sectors globally.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Partnership Model</h3>
        <p>We act as your long-term cloud partner — not a one-time vendor — with ongoing optimisation, support, and strategic guidance.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Scale with Confidence in the Cloud</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Your Cloud Journey <i class="flaticon-right-up"></i></a>
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
