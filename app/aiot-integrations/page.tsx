import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "AIoT Integrations - Sunware Technologies",
  description: "AI-powered IoT solutions from Sunware Technologies. AIoT platform integration, edge intelligence, predictive maintenance and smart operations.",
  alternates: { canonical: "https://sunwaretechnologies.com/aiot-integrations/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_AIoT.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">AIoT Integrations</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Converging Artificial Intelligence and the Internet of Things to create autonomous, self-optimising operations.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Technologies / AIoT</div>
        <h2>Where AI Meets the Physical World</h2>
        <p>Sunware's AIoT practice combines sensor networks, edge computing, and advanced machine learning to transform physical assets into intelligent, connected systems. Our solutions don't just collect data — they act on it autonomously.</p>
        <p>From smart factories to intelligent infrastructure, we build AIoT ecosystems that reduce downtime, optimise energy consumption, and create entirely new operational capabilities for your organisation.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Explore AIoT Solutions <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_AIoT.png" alt="AIoT Integrations">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-microchip"></i></div>
          <div class="hc-badge-text"><strong>Edge AI + Cloud AI</strong><span>End-to-end intelligence</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>What AIoT Delivers for Your Operations</h2>
      <p>Four transformative outcomes of intelligent IoT deployments.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-tools"></i></div>
        <h4>Predictive Maintenance</h4>
        <p>AI models analyse sensor data to predict equipment failures before they happen — reducing unplanned downtime by up to 50%.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-leaf"></i></div>
        <h4>Energy Optimisation</h4>
        <p>Intelligent building and facility management systems automatically optimise HVAC, lighting, and power — cutting energy costs by 20–35%.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-eye"></i></div>
        <h4>Real-Time Visibility</h4>
        <p>Connected sensors provide a live operational view of assets, environments, and supply chains — enabling instant, informed decisions.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-robot"></i></div>
        <h4>Autonomous Operations</h4>
        <p>AI-driven control loops that respond to real-world conditions automatically — minimising human intervention in routine operational tasks.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our AIoT Capabilities</h2>
      <p>End-to-end AIoT solutions from device connectivity to intelligent analytics.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-network-wired"></i></div>
        <h4>IoT Platform &amp; Connectivity</h4>
        <p>Device provisioning, protocol management (MQTT, CoAP, OPC-UA), and cloud IoT platform setup on AWS IoT, Azure IoT Hub, or GCP IoT Core.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-microchip"></i></div>
        <h4>Edge AI Deployment</h4>
        <p>ML model deployment on edge devices for low-latency inference — enabling real-time decisions without cloud round-trips.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-camera"></i></div>
        <h4>Computer Vision for Industry</h4>
        <p>Visual inspection, defect detection, safety compliance monitoring, and people counting using cameras and AI at the edge.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-chart-bar"></i></div>
        <h4>IoT Analytics &amp; Dashboards</h4>
        <p>Real-time and historical analytics platforms that turn terabytes of sensor data into operational intelligence and predictive insights.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-shield-check"></i></div>
        <h4>AIoT Security</h4>
        <p>Device authentication, encrypted communications, OTA update management, and anomaly detection for secure connected environments.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-aiot">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-aiot">Why Enterprises Choose Us</h2>
      <p>Three strengths that define our AIoT practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-microchip"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Hardware to Cloud Expertise</h3>
        <p>We bridge the gap between physical devices and cloud intelligence — handling firmware, connectivity, edge computing, and cloud platforms.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>EdgeData360 Platform</h3>
        <p>Our proprietary AIoT platform — EdgeData360 — provides 250+ pre-built connectors, visual AI dashboards, and agentic automation out of the box.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-handshake"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Industry Proven</h3>
        <p>We have delivered AIoT solutions for manufacturing, logistics, smart buildings, and agriculture — with measurable ROI in every deployment.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Intelligentise Your Operations?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Your AIoT Journey <i class="flaticon-right-up"></i></a>
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

