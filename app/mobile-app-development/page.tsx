import type { Metadata } from "next";
import HtmlPage from "@/components/HtmlPage";

export const metadata: Metadata = {
  title: "Mobile App Development - Sunware Technologies",
  description: "Native and cross-platform mobile app development from Sunware Technologies. iOS, Android and React Native solutions for enterprises.",
  alternates: { canonical: "https://sunwaretechnologies.com/mobile-app-development/" },
};

const content = `
<section class="story-hero" style="background: linear-gradient(rgba(10,15,30,0.45), rgba(10,15,30,0.65)), url('/images/Technologies/Sunware_Technologies_Mobile_Development.png'); background-size: cover; background-position: center; padding: 40px 0 100px 0;">
  <div class="container text-center">
    <div class="wow fadeInUp" data-wow-delay=".2s" style="margin-bottom: 30px;">
      <a href="/" class="default_button" style="padding: 10px 25px; font-size: 14px; background: transparent; border: 1px solid #fff; color: #fff;"><i class="fal fa-long-arrow-left" style="margin-right: 8px;"></i> Back to Home</a>
    </div>
    <div class="wow fadeInUp" data-wow-delay=".4s">
      <h1 style="color: #fff; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px;">Mobile Application Development</h1>
    </div>
    <p class="wow fadeInUp" data-wow-delay=".6s" style="font-size: 24px; max-width: 900px; margin: 0 auto; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.4);">Crafting intuitive, high-performance mobile experiences that users love and businesses depend on.</p>
  </div>
</section>

<section class="hc-intro">
  <div class="container">
    <div class="hc-intro-grid">
      <div class="wow fadeInLeft" data-wow-delay=".1s">
        <div class="hc-intro-label">Services / Mobile Development</div>
        <h2>Mobile-First Solutions Built for Scale</h2>
        <p>Sunware builds native and cross-platform mobile applications that deliver seamless experiences across iOS and Android. From consumer apps to enterprise mobility solutions, we combine beautiful design with rock-solid engineering.</p>
        <p>Our mobile teams follow agile methodologies, ensuring rapid iteration and continuous delivery — getting your app to market faster without compromising quality.</p>
        <a href="#" class="default_button mt-20" onclick="openEnquireModal(event)" style="display:inline-flex;margin-top:20px;">Discuss Your App Idea <i class="flaticon-right-up"></i></a>
      </div>
      <div class="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
        <img src="/images/Technologies/Sunware_Technologies_Mobile_Development.png" alt="Mobile App Development">
        <div class="hc-intro-badge">
          <div class="hc-badge-icon"><i class="fal fa-mobile-alt"></i></div>
          <div class="hc-badge-text"><strong>iOS &amp; Android</strong><span>Native &amp; Cross-platform</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="hc-benefits">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Business Value</div>
      <h2>Why Mobile-First Matters</h2>
      <p>Four outcomes our mobile development practice delivers for your business.</p>
    </div>
    <div class="hc-benefits-grid">
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-benefit-ghost">01</div>
        <div class="hc-benefit-icon i1"><i class="fal fa-users"></i></div>
        <h4>Wider Customer Reach</h4>
        <p>With 6.8 billion smartphone users globally, a polished mobile app puts your brand directly in the hands of your target audience.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-benefit-ghost">02</div>
        <div class="hc-benefit-icon i2"><i class="fal fa-heart"></i></div>
        <h4>Higher Engagement</h4>
        <p>Push notifications, personalised content, and offline capabilities drive 3x higher engagement than mobile web alone.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-benefit-ghost">03</div>
        <div class="hc-benefit-icon i3"><i class="fal fa-tachometer-alt"></i></div>
        <h4>Operational Efficiency</h4>
        <p>Enterprise mobility apps streamline field operations, approvals, and reporting — reducing paperwork and accelerating decisions.</p>
      </div>
      <div class="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
        <div class="hc-benefit-ghost">04</div>
        <div class="hc-benefit-icon i4"><i class="fal fa-dollar-sign"></i></div>
        <h4>New Revenue Streams</h4>
        <p>Monetise through in-app purchases, subscriptions, and marketplace models — turning your app into a revenue-generating asset.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-solutions">
  <div class="container">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Our Services</div>
      <h2>Our Mobile Development Capabilities</h2>
      <p>Full-cycle mobile development from concept to app store and beyond.</p>
    </div>
    <div class="hc-sol-grid">
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-sol-num">01 / 05</div>
        <div class="hc-sol-icon"><i class="fab fa-apple"></i></div>
        <h4>Native iOS Development</h4>
        <p>Swift-based apps that leverage the full power of Apple's ecosystem — optimised for performance, security, and App Store guidelines.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
        <div class="hc-sol-num">02 / 05</div>
        <div class="hc-sol-icon"><i class="fab fa-android"></i></div>
        <h4>Native Android Development</h4>
        <p>Kotlin-first Android apps with Material Design, Google Play optimisation, and robust device compatibility testing.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-sol-num">03 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-layer-group"></i></div>
        <h4>Cross-Platform Development</h4>
        <p>React Native and Flutter apps that share 80%+ of code across platforms — cutting costs without sacrificing native-feel performance.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
        <div class="hc-sol-num">04 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-building"></i></div>
        <h4>Enterprise Mobility</h4>
        <p>Secure, scalable enterprise apps with SSO, MDM integration, offline sync, and deep ERP/CRM connectivity for field teams.</p>
      </div>
      <div class="hc-sol-item wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-sol-num">05 / 05</div>
        <div class="hc-sol-icon"><i class="fal fa-tools"></i></div>
        <h4>App Maintenance &amp; Support</h4>
        <p>OS update compatibility, performance monitoring, crash reporting, and feature enhancements to keep your app ahead of the curve.</p>
      </div>
    </div>
  </div>
</section>

<section class="hc-why" aria-labelledby="why-mobile">
  <div class="hc-why-stripe" aria-hidden="true"></div>
  <div class="container" style="position:relative;z-index:2;">
    <div class="hc-section-head wow fadeInUp" data-wow-delay=".1s">
      <div class="hc-pill">Why Sunware</div>
      <h2 id="why-mobile">Why Enterprises Choose Us</h2>
      <p>Three strengths that define our mobile development practice.</p>
    </div>
    <div class="hc-why-grid">
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".1s">
        <div class="hc-why-icon-wrap"><i class="fal fa-pencil-ruler"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Design-Driven Engineering</h3>
        <p>Our UX designers and engineers collaborate from day one, ensuring every interaction is intuitive, accessible, and on-brand.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".2s">
        <div class="hc-why-icon-wrap"><i class="fal fa-trophy"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Proven App Store Delivery</h3>
        <p>Dozens of successfully published apps across the App Store and Google Play with strong ratings and minimal rejection rates.</p>
      </article>
      <article class="hc-why-card wow fadeInUp" data-wow-delay=".3s">
        <div class="hc-why-icon-wrap"><i class="fal fa-shield-check"></i></div>
        <div class="hc-why-divider"></div>
        <h3>Security by Default</h3>
        <p>Certificate pinning, biometric auth, data encryption, and secure API design are baked into every app we build from the start.</p>
      </article>
    </div>
  </div>
</section>

<div class="container" style="padding:80px 15px;">
  <div class="row"><div class="col-xl-12">
    <div class="footer__cta-area mb-60">
      <div class="row al-center">
        <div class="col-xl-6 col-lg-7 lg-mb-40">
          <div class="footer__cta-area-left lg-t-center"><h2>Ready to Build Your Next Mobile App?</h2></div>
        </div>
        <div class="col-xl-6 col-lg-5">
          <div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
            <a class="default_button" href="#" onclick="openEnquireModal(event)">Start Building <i class="flaticon-right-up"></i></a>
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

