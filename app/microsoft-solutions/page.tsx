import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Microsoft Solutions - Sunware Technologies",
  description: "Microsoft technology solutions from Sunware Technologies. Azure, Microsoft 365, Dynamics 365, Power Platform and Teams implementation for enterprises.",
  alternates: { canonical: "https://sunwaretechnologies.com/microsoft-solutions/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Microsoft_Technologies.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Microsoft Solutions</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Maximising your Microsoft investment through expert implementation, integration, and managed services.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Technologies / Microsoft</div>
        <h2>The Full Microsoft Ecosystem, Expertly Delivered</h2>
        <p>Sunware's Microsoft practice helps organisations across the globe harness the full potential of the Microsoft technology stack — from Azure cloud infrastructure and Microsoft 365 productivity to Dynamics 365 ERP/CRM and the Power Platform.</p>
        <p>Our certified Microsoft specialists design, implement, and manage solutions that drive real business outcomes — not just technology deployments for their own sake.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Microsoft Expert <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Microsoft_Technologies.png" alt="Microsoft Solutions">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fab fa-microsoft"></i></div>
          <div class="hc-badge-text"><strong>Microsoft Certified</strong><span>Azure &amp; 365 Partner</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>What Microsoft Solutions Deliver</h2>
      <p>Four powerful outcomes a well-deployed Microsoft ecosystem creates for organisations.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-users"></i></div>
        <h4>Enhanced Collaboration</h4>
        <p>Microsoft 365 and Teams create a connected, productive workplace — whether your teams are in the office, remote, or across multiple continents.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-cloud"></i></div>
        <h4>Elastic Cloud Infrastructure</h4>
        <p>Azure delivers the scalability, reliability, and global reach enterprises need — with 99.99% SLA and compliance certifications for regulated industries.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-cogs"></i></div>
        <h4>Unified Business Operations</h4>
        <p>Dynamics 365 connects finance, supply chain, sales, and HR on one platform — with built-in AI and Power BI analytics throughout.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-magic"></i></div>
        <h4>Citizen Development at Scale</h4>
        <p>Power Platform empowers business users to build apps, automate workflows, and create dashboards — reducing IT backlog and accelerating innovation.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Microsoft Capabilities</h2>
      <p>Comprehensive services across the entire Microsoft technology portfolio.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-cloud"></i></div>
        <h4>Microsoft Azure</h4>
        <p>Cloud migration, Azure architecture, DevOps pipelines, Azure AI services, and managed Azure infrastructure for enterprises.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-envelope"></i></div>
        <h4>Microsoft 365</h4>
        <p>M365 tenant setup, Teams deployment, SharePoint intranet, Exchange Online migration, and security baseline configuration.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-chart-line"></i></div>
        <h4>Dynamics 365</h4>
        <p>Dynamics 365 Sales, Finance, Supply Chain, and Customer Service implementation, customisation, and integration with existing systems.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-bolt"></i></div>
        <h4>Power Platform</h4>
        <p>Power Apps, Power Automate, Power BI, and Power Virtual Agents — enabling rapid business application development and automation.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-shield-check"></i></div>
        <h4>Microsoft Security</h4>
        <p>Microsoft Defender, Sentinel SIEM, Purview compliance, Entra ID (Azure AD), and Intune MDM for a comprehensive Microsoft security posture.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
        <div class="hc-sol-num">06 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-magic"></i></div>
        <h4>Microsoft Copilot &amp; AI</h4>
        <p>Microsoft 365 Copilot deployment, Azure OpenAI integration, and custom AI solutions built on the Microsoft AI platform.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-ms">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-ms">Why Enterprises Choose Us</h2>
      <p>Three strengths that define our Microsoft practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-certificate"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Microsoft Certified Partner</h3>
        <p>Our certified Microsoft professionals hold competencies across Azure, Modern Work, Business Applications, and Security.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Cross-Portfolio Expertise</h3>
        <p>Unlike single-product specialists, we span the full Microsoft ecosystem — designing solutions that leverage synergies across Azure, 365, and Dynamics.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Managed Services &amp; Support</h3>
        <p>Ongoing managed services, licence management, release management, and 24/7 support to protect and optimise your Microsoft investment.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Maximise Your Microsoft Investment</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Talk to a Microsoft Expert <i class="flaticon-right-up"></i></a>
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

