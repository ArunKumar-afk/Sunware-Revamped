import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "IoT Innovations - Sunware Technologies",
  description: "IoT solutions and innovations from Sunware Technologies. Connected devices, smart systems, and real-time monitoring for industrial and commercial applications.",
  alternates: { canonical: "https://sunwaretechnologies.com/iot-innovations/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_IoT.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">IoT Innovations</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Connecting the physical and digital worlds to unlock new levels of visibility, efficiency, and insight.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Technologies / IoT</div>
        <h2>Building the Connected Enterprise of Tomorrow</h2>
        <p>Sunware designs and deploys IoT ecosystems that connect your machines, environments, and assets to cloud platforms — giving you real-time visibility and control across your entire operation. We handle every layer: device hardware, firmware, connectivity, cloud ingestion, and analytics.</p>
        <p>From industrial automation to smart buildings and fleet management, our IoT solutions are production-grade, secure, and built to scale to millions of devices.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Explore IoT Solutions <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_IoT.png" alt="IoT Innovations">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-broadcast-tower"></i></div>
          <div class="hc-badge-text"><strong>Device to Dashboard</strong><span>Full-stack IoT delivery</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>Why IoT Connectivity Transforms Operations</h2>
      <p>Four powerful outcomes connected systems deliver for enterprises.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-eye"></i></div>
        <h4>Total Operational Visibility</h4>
        <p>Monitor every machine, vehicle, and environment in real time — eliminating blind spots and enabling faster, more informed decisions.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-cogs"></i></div>
        <h4>Optimised Asset Utilisation</h4>
        <p>Track asset location, usage, and condition to eliminate idle time, reduce over-purchasing, and extend equipment lifespans.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-shield-check"></i></div>
        <h4>Enhanced Safety &amp; Compliance</h4>
        <p>Environmental sensors and wearable IoT devices protect workers, monitor regulatory compliance, and trigger instant alerts.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-chart-line"></i></div>
        <h4>New Business Models</h4>
        <p>IoT-enabled product-as-a-service models, remote monitoring subscriptions, and data monetisation create entirely new revenue streams.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our IoT Capabilities</h2>
      <p>End-to-end IoT services from hardware selection to cloud analytics.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-microchip"></i></div>
        <h4>IoT Architecture Design</h4>
        <p>End-to-end solution architecture covering device selection, connectivity (Wi-Fi, 5G, LoRaWAN, NB-IoT), edge, and cloud layers.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-cloud-upload"></i></div>
        <h4>Cloud IoT Platform Integration</h4>
        <p>Device management, telemetry ingestion, and rules engines on AWS IoT Core, Azure IoT Hub, and Google Cloud IoT platforms.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-industry"></i></div>
        <h4>Industrial IoT (IIoT)</h4>
        <p>OPC-UA, MODBUS, and PROFINET integration with manufacturing equipment for real-time production monitoring and OEE improvement.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-building"></i></div>
        <h4>Smart Buildings &amp; Facilities</h4>
        <p>BMS integration, occupancy sensing, energy management, and access control for intelligent building operations.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-chart-bar"></i></div>
        <h4>IoT Data Analytics</h4>
        <p>Time-series analysis, anomaly detection, and predictive models built on top of your IoT data streams for actionable operational insight.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-iot">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-iot">Why Enterprises Choose Us</h2>
      <p>Three strengths that define our IoT practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-layer-group"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Full-Stack IoT Delivery</h3>
        <p>We cover hardware, firmware, connectivity, cloud, and analytics in a single engagement — no integration headaches between multiple vendors.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>EdgeData360 Platform</h3>
        <p>Our proprietary IoT platform connects 250+ device types and protocols with zero custom code — dramatically accelerating deployment timelines.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-shield-check"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Security-First Architecture</h3>
        <p>Every IoT solution we build incorporates device identity, encrypted communications, and continuous security monitoring from day one.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Connect Your Operations?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Your IoT Project <i class="flaticon-right-up"></i></a>
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

