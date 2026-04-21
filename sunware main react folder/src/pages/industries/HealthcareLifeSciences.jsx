import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionCTA from '../../components/SectionCTA/SectionCTA';

const HealthcareLifeSciences = () => {
  const openModal = (e) => {
    e.preventDefault();
    document.getElementById('enquire-modal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <PageBanner 
        image="/images/Industries/Sunware_Industries_Healthcare_and_Life_Sciences_Banner.png"
        title="Healthcare & Life Sciences"
        subtitle="Engineering precise technological solutions for the world's most critical breakthroughs."
      />

      {/* Intro Section */}
      <section className="hc-intro">
        <div className="container">
          <div className="hc-intro-grid">
            <div className="wow fadeInLeft" data-wow-delay=".1s">
              <div className="hc-intro-label">Industries / Healthcare</div>
              <h2>Empowering Pharmaceutical & Life Sciences Organizations</h2>
              <p>In the fast-paced world of pharmaceutical and life sciences, where a single breakthrough can transform millions of lives, staying ahead of the curve is paramount.</p>
              <p>We understand the unique challenges you face — from accelerating drug development timelines to ensuring strict regulatory compliance. Our tailored IT solutions are designed to empower your organization to achieve its goals and make a real impact.</p>
              <a href="#" className="default_button mt-20" onClick={openModal} style={{ display: 'inline-flex', marginTop: '20px' }}>
                Talk to an Expert <i className="flaticon-right-up"></i>
              </a>
            </div>
            <div className="hc-intro-visual wow fadeInRight" data-wow-delay=".2s">
              <img src="/images/Industries/Sunware_Industries_Healthcare_and_Life_Sciences_Our-tailored-IT-solutions.png" alt="Healthcare IT Solutions" />
              <div className="hc-intro-badge">
                <div className="hc-badge-icon"><i className="fal fa-shield-check"></i></div>
                <div className="hc-badge-text">
                  <strong>FDA & HIPAA Ready</strong>
                  <span>Compliance-first solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="hc-benefits">
        <div className="container">
          <div className="hc-section-head wow fadeInUp" data-wow-delay=".1s">
            <div className="hc-pill">Why Partner With Us</div>
            <h2>Partner with Us to Transform<br />Your Organization</h2>
            <p>Four powerful outcomes our technology solutions deliver for pharmaceutical and life sciences leaders.</p>
          </div>
          <div className="hc-benefits-grid">
            <div className="hc-benefit-card wow fadeInUp" data-wow-delay=".1s">
              <div className="hc-benefit-ghost">01</div>
              <div className="hc-benefit-icon i1"><i className="fal fa-flask"></i></div>
              <h4>Accelerate Drug Development</h4>
              <p>Streamline R&D processes, reducing time-to-market by up to 20%. Efficient data management and collaboration enables faster decision-making.</p>
            </div>
            <div className="hc-benefit-card wow fadeInUp" data-wow-delay=".2s">
              <div className="hc-benefit-ghost">02</div>
              <div className="hc-benefit-icon i2"><i className="fal fa-chart-line"></i></div>
              <h4>Gain Real-Time Insights</h4>
              <p>Harness advanced big data analytics to uncover patterns in research, clinical trials, and manufacturing. Drive data-driven decisions that optimize patient outcomes.</p>
            </div>
            <div className="hc-benefit-card wow fadeInUp" data-wow-delay=".3s">
              <div className="hc-benefit-ghost">03</div>
              <div className="hc-benefit-icon i3"><i className="fal fa-cogs"></i></div>
              <h4>Enhance Operational Efficiency</h4>
              <p>Automate repetitive tasks and optimize supply chains. Experience up to 15% reduction in operational costs with a significant productivity boost.</p>
            </div>
            <div className="hc-benefit-card wow fadeInUp" data-wow-delay=".4s">
              <div className="hc-benefit-ghost">04</div>
              <div className="hc-benefit-icon i4"><i className="fal fa-shield-check"></i></div>
              <h4>Bolster Security & Compliance</h4>
              <p>Safeguard sensitive patient data and intellectual property. Ensure full adherence to stringent regulatory requirements, minimizing non-compliance risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Solutions Section */}
      <section className="hc-solutions">
        <div className="container">
          <div className="hc-section-head wow fadeInUp" data-wow-delay=".1s">
            <div className="hc-pill">Our Services</div>
            <h2>Our Tailored IT Solutions for<br />Pharmaceutical & Life Sciences</h2>
            <p>End-to-end technology capabilities purpose-built for the complexity and compliance demands of your sector.</p>
          </div>
          <div className="hc-sol-grid">
            <div className="hc-sol-item wow fadeInUp" data-wow-delay=".1s">
              <div className="hc-sol-num">01 / 05</div>
              <div className="hc-sol-icon" aria-hidden="true"><i className="fal fa-code"></i></div>
              <h4>Custom Software Development</h4>
              <p>We create bespoke applications that perfectly align with your unique research, clinical trial, or manufacturing needs — built to scale as your requirements evolve.</p>
            </div>
            <div className="hc-sol-item wow fadeInUp" data-wow-delay=".2s">
              <div className="hc-sol-num">02 / 05</div>
              <div className="hc-sol-icon" aria-hidden="true"><i className="fal fa-cloud-upload"></i></div>
              <h4>Cloud Migration & Management</h4>
              <p>Leverage the scalability and flexibility of the cloud for seamless data storage, high-throughput analysis, and real-time global collaboration across your teams and research sites.</p>
            </div>
            <div className="hc-sol-item wow fadeInUp" data-wow-delay=".15s">
              <div className="hc-sol-num">03 / 05</div>
              <div className="hc-sol-icon" aria-hidden="true"><i className="fal fa-lock"></i></div>
              <h4>Cybersecurity Risk Assessment & Mitigation</h4>
              <p>Proactively identify and address vulnerabilities to protect mission-critical research data and patient information against evolving cyber threats.</p>
            </div>
            <div className="hc-sol-item wow fadeInUp" data-wow-delay=".25s">
              <div className="hc-sol-num">04 / 05</div>
              <div className="hc-sol-icon" aria-hidden="true"><i className="fal fa-clipboard-check"></i></div>
              <h4>Regulatory Compliance Consulting</h4>
              <p>Stay ahead of evolving FDA, HIPAA, and GxP regulations — ensuring your systems and processes meet the highest global standards at every stage.</p>
            </div>
            <div className="hc-sol-item wow fadeInUp" data-wow-delay=".35s">
              <div className="hc-sol-num">05 / 05</div>
              <div className="hc-sol-icon" aria-hidden="true"><i className="fal fa-chart-bar"></i></div>
              <h4>Data Analytics & Visualization</h4>
              <p>Transform raw scientific and operational data into actionable insights through intuitive dashboards, empowering smarter, faster decisions across your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="hc-why" aria-labelledby="why-heading">
        <div className="hc-why-stripe" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hc-section-head wow fadeInUp" data-wow-delay=".1s">
            <div className="hc-pill" role="text">Why Choose Sunware</div>
            <h2 id="why-heading">Why Organizations Trust Us</h2>
            <p>Three core strengths that make Sunware Technologies the partner of choice for pharmaceutical and life sciences leaders.</p>
          </div>
          <div className="hc-why-grid" role="list">
            <article className="hc-why-card wow fadeInUp" data-wow-delay=".1s" role="listitem">
              <span className="hc-why-step" aria-label="Point 1">01</span>
              <div className="hc-why-icon-wrap" aria-hidden="true"><i className="fal fa-microscope"></i></div>
              <div className="hc-why-divider" aria-hidden="true"></div>
              <h3>Deep Industry Expertise</h3>
              <p>We understand the nuances of the pharmaceutical and life sciences landscape — delivering tailored solutions that address your specific technical and regulatory challenges with precision.</p>
            </article>
            <article className="hc-why-card wow fadeInUp" data-wow-delay=".2s" role="listitem">
              <span className="hc-why-step" aria-label="Point 2">02</span>
              <div className="hc-why-icon-wrap" aria-hidden="true"><i className="fal fa-trophy"></i></div>
              <div className="hc-why-divider" aria-hidden="true"></div>
              <h3>Proven Track Record</h3>
              <p>Our team has a successful history of delivering innovative IT solutions for leading pharmaceutical and life sciences organizations across research, clinical, and commercial operations.</p>
            </article>
            <article className="hc-why-card wow fadeInUp" data-wow-delay=".3s" role="listitem">
              <span className="hc-why-step" aria-label="Point 3">03</span>
              <div className="hc-why-icon-wrap" aria-hidden="true"><i className="fal fa-handshake"></i></div>
              <div className="hc-why-divider" aria-hidden="true"></div>
              <h3>Client-Centric Approach</h3>
              <p>We prioritize your goals and work collaboratively to develop solutions that align perfectly with your unique vision — acting as a true technology partner, not just a vendor.</p>
            </article>
          </div>
        </div>
      </section>

      <SectionCTA title="Ready to Transform Your Organization?" />
    </>
  );
};

export default HealthcareLifeSciences;
