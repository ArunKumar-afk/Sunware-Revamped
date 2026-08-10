import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Cybersecurity Services - Sunware Technologies",
  description: "Enterprise cybersecurity services from Sunware Technologies. Risk assessment, threat detection, compliance, and managed security operations.",
  alternates: { canonical: "https://sunwaretechnologies.com/cybersecurity-services/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Cybersecurity.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Cybersecurity Services</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Protecting your digital assets, people, and operations from evolving cyber threats with enterprise-grade security.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Services / Cybersecurity</div>
        <h2>Resilient Security for a Threat-Driven World</h2>
        <p>Sunware's cybersecurity practice combines proactive threat intelligence, zero-trust architecture, and 24/7 monitoring to protect your organisation from the inside out. In an era where breaches are a matter of "when", not "if", we help you stay ahead of attackers.</p>
        <p>From risk assessments and compliance to incident response and managed security operations, we provide the full spectrum of cybersecurity services that modern enterprises require.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Talk to a Security Expert <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Cybersecurity.png" alt="Cybersecurity Services">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-shield-check"></i></div>
          <div class="hc-badge-text"><strong>24/7 SOC</strong><span>Continuous threat monitoring</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Security Matters</div>
      <h2>What Strong Cybersecurity Protects</h2>
      <p>Four critical business outcomes that robust security posture delivers.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-database"></i></div>
        <h4>Data Protection</h4>
        <p>Safeguard customer PII, intellectual property, and financial records from theft, ransomware, and insider threats with layered defences.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-clipboard-check"></i></div>
        <h4>Regulatory Compliance</h4>
        <p>Meet GDPR, HIPAA, PCI DSS, ISO 27001, and SOC 2 requirements — avoiding fines, legal liability, and reputational damage.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-business-time"></i></div>
        <h4>Business Continuity</h4>
        <p>Incident response plans and resilient architecture ensure your operations recover rapidly from attacks with minimal disruption.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-handshake"></i></div>
        <h4>Customer Trust</h4>
        <p>Demonstrable security posture builds confidence with customers, partners, and regulators — becoming a competitive differentiator.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Cybersecurity Capabilities</h2>
      <p>End-to-end security services from risk assessment to managed operations.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-search"></i></div>
        <h4>Risk Assessment &amp; Audit</h4>
        <p>Comprehensive security assessments that identify vulnerabilities, gaps, and risks across your people, processes, and technology.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-bug"></i></div>
        <h4>Penetration Testing</h4>
        <p>Ethical hacking engagements — network, application, cloud, and social engineering — to find weaknesses before attackers do.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-eye"></i></div>
        <h4>Managed SOC &amp; SIEM</h4>
        <p>24/7 security operations centre with AI-powered SIEM, threat hunting, and real-time incident response to protect your environment round the clock.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-user-shield"></i></div>
        <h4>Identity &amp; Access Management</h4>
        <p>Zero-trust IAM implementation with MFA, privileged access management, and SSO to minimise the attack surface across your organisation.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-clipboard-check"></i></div>
        <h4>Compliance &amp; Governance</h4>
        <p>GDPR, HIPAA, PCI DSS, ISO 27001, and SOC 2 compliance programs with policy development, training, and audit readiness support.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
        <div class="hc-sol-num">06 / 06</div>
        <div class="hc-sol-icon"><i class="fal fa-first-aid"></i></div>
        <h4>Incident Response</h4>
        <p>Rapid containment, forensic investigation, eradication, and recovery services when a security incident occurs — minimising damage and downtime.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-cyber">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-cyber">Why Enterprises Trust Us</h2>
      <p>Three strengths that define our cybersecurity practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-certificate"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Certified Security Team</h3>
        <p>Our team holds CISSP, CEH, CISM, and cloud security certifications — bringing verified expertise to every engagement.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Proactive, Not Reactive</h3>
        <p>We identify and eliminate vulnerabilities before they become incidents — using threat intelligence, red team exercises, and continuous monitoring.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Business-Aligned Security</h3>
        <p>We design security programmes that protect the business without slowing it down — balancing robust controls with operational agility.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Secure Your Organisation Today</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Get a Security Assessment <i class="flaticon-right-up"></i></a>
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

