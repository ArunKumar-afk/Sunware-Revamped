import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Automation & Operations - Sunware Technologies",
  description: "Intelligent automation and operational excellence solutions from Sunware Technologies. RPA, process automation and AI-driven workflows.",
  alternates: { canonical: "https://sunwaretechnologies.com/automation-efficiency/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Automation.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Automation &amp; Operations</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Eliminating manual effort and driving operational excellence through intelligent automation.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Services / Automation</div>
        <h2>Intelligent Automation for the Modern Enterprise</h2>
        <p>Sunware's automation practice combines Robotic Process Automation (RPA), AI-powered workflows, and intelligent orchestration to eliminate repetitive tasks and free your teams to focus on high-value work.</p>
        <p>From back-office operations to customer-facing processes, we design automation solutions that scale with your business and integrate seamlessly with your existing technology stack.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to an Expert <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Automation.png" alt="Automation & Operations">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-robot"></i></div>
          <div class="hc-badge-text"><strong>Up to 70% Cost Reduction</strong><span>Through intelligent automation</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Automate</div>
      <h2>What Automation Delivers for Your Business</h2>
      <p>Four measurable outcomes enterprises achieve through our automation programs.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-bolt"></i></div>
        <h4>Faster Process Execution</h4>
        <p>Automated workflows execute in seconds what previously took hours — dramatically reducing cycle times across finance, HR, and operations.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-check-double"></i></div>
        <h4>Zero Error Rates</h4>
        <p>Robots don't make data-entry mistakes. Eliminate costly errors in invoice processing, compliance reporting, and data migration.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-chart-line"></i></div>
        <h4>Operational Cost Savings</h4>
        <p>Reduce operational costs by up to 70% by shifting high-volume, rule-based tasks to intelligent software bots operating 24/7.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-users"></i></div>
        <h4>Employee Empowerment</h4>
        <p>Free your workforce from mundane tasks and redirect their energy toward innovation, strategy, and customer relationships.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Automation &amp; Operations Capabilities</h2>
      <p>End-to-end automation services from discovery to deployment and beyond.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-search"></i></div>
        <h4>Process Discovery &amp; Mining</h4>
        <p>Identify automation opportunities using process mining tools that map and analyse your current workflows objectively.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-robot"></i></div>
        <h4>RPA Implementation</h4>
        <p>Deploy software robots using UiPath, Automation Anywhere, or Power Automate to handle repetitive rule-based tasks at scale.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-brain"></i></div>
        <h4>Intelligent Document Processing</h4>
        <p>Extract, classify, and validate data from invoices, contracts, and forms using AI-powered OCR and NLP.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-project-diagram"></i></div>
        <h4>Workflow Orchestration</h4>
        <p>Coordinate complex multi-system processes with end-to-end orchestration that integrates ERP, CRM, and cloud platforms.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-chart-bar"></i></div>
        <h4>Automation Analytics &amp; Monitoring</h4>
        <p>Real-time dashboards track bot performance, exception rates, and ROI so you always know what your automation is delivering.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-auto">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-auto">Why Enterprises Choose Us</h2>
      <p>Three strengths that define our automation practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-lightbulb"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Platform Agnostic</h3>
        <p>We work with UiPath, Automation Anywhere, Power Automate, and custom AI frameworks — selecting the right tool for your environment.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Rapid Time to Value</h3>
        <p>Our accelerator frameworks and pre-built bot libraries dramatically reduce deployment timelines, delivering ROI within weeks.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Centre of Excellence Support</h3>
        <p>We help you build an internal automation CoE — governance frameworks, training, and operating models for sustained scale.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Automate Your Operations?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Get Started <i class="flaticon-right-up"></i></a>
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

