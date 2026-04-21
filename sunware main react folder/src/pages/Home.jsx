import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // 1. Swiper Banner Slider Init
    if (typeof window.Swiper !== 'undefined') {
      new window.Swiper(".banner-slider", {
        loop: true,
        parallax: true,
        speed: 1200,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".hero-pagination",
          clickable: true,
        },
      });

      // 2. Client Brand Marquee Init
      new window.Swiper(".brand_slider", {
        loop: true,
        speed: 4500,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        freeMode: true,
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          575: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        },
      });

      // 3. Tech Stack Team Slider Init
      new window.Swiper(".team_slider", {
        loop: true,
        spaceBetween: 25,
        speed: 800,
        autoplay: {
          delay: 4000,
          reverseDirection: false,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        },
      });
    }

    // 4. Industry Tab Logic
    const tabs = document.querySelectorAll('.industry-nav-item');
    const contents = document.querySelectorAll('.industry-detail-content');

    const handleTabClick = (e) => {
      const targetId = e.currentTarget.getAttribute('data-target');
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => {
        c.classList.add('d-none');
        c.classList.remove('active', 'animated', 'fadeIn');
      });

      e.currentTarget.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove('d-none');
        targetContent.classList.add('active', 'animated', 'fadeIn');
      }
    };

    tabs.forEach(tab => tab.addEventListener('click', handleTabClick));

    // Cleanup
    return () => {
      tabs.forEach(tab => tab.removeEventListener('click', handleTabClick));
    };
  }, []);

  const openEnquiry = (e) => {
    e.preventDefault();
    document.getElementById('enquire-modal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {/* Banner Area Start */}
      <div className="banner__one" style={{ position: 'relative', overflow: 'hidden', background: '#fff' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.6 }}>
          <source src="/waves_2.mp4" type="video/mp4" />
        </video>
        
        <div className="container" style={{ position: 'relative', zIndex: 5, padding: '120px 0' }}>
          <div className="row al-center">
            <div className="col-xl-7 col-lg-7">
              <div className="swiper banner-slider" style={{ overflow: 'visible' }}>
                <div className="swiper-wrapper">
                  {/* Slide 1: Sunware */}
                  <div className="swiper-slide">
                    <div className="banner__one-content">
                      <h1 data-animation="fadeIn" data-delay=".1s" style={{ color: 'var(--primary-color-1)', fontSize: '64px', lineHeight: 1.2, maxWidth: '100%', marginBottom: '20px' }}>Advanced Data & AI Solutions Tailored to Your Needs</h1>
                      <h3 className="subtitle" style={{ color: '#EF7F1A', background: 'none', border: 'none', padding: 0, fontSize: '32px', fontWeight: 700, marginBottom: '35px', display: 'block' }}>Data. Intelligence. Engineered.</h3>
                      <div className="banner__one-content-button">
                        <Link className="default_button" to="/about" style={{ background: '#EF7F1A', borderRadius: '50px', padding: '15px 40px', color: '#fff', fontWeight: 700, fontSize: '18px' }}>Get Started</Link>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: EdgeData */}
                  <div className="swiper-slide">
                    <div className="banner__one-content">
                      <h1 data-animation="fadeIn" data-delay=".1s" style={{ color: 'var(--primary-color-1)', fontSize: '64px', lineHeight: 1.2, maxWidth: '100%', marginBottom: '20px' }}>Real-Time Edge Intelligence for a Smarter World</h1>
                      <h3 className="subtitle" style={{ color: '#EF7F1A', background: 'none', border: 'none', padding: 0, fontSize: '32px', fontWeight: 700, marginBottom: '35px', display: 'block' }}>Process. Analyze. Act — at the Edge.</h3>
                      <div className="banner__one-content-button">
                        <a className="default_button" href="https://edgedata360.com" target="_blank" rel="noopener noreferrer" style={{ background: '#EF7F1A', borderRadius: '50px', padding: '15px 40px', color: '#fff', fontWeight: 700, fontSize: '18px' }}>Explore EdgeData</a>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3: Valutek */}
                  <div className="swiper-slide">
                    <div className="banner__one-content">
                      <h1 data-animation="fadeIn" data-delay=".1s" style={{ color: 'var(--primary-color-1)', fontSize: '64px', lineHeight: 1.2, maxWidth: '100%', marginBottom: '20px' }}>Autonomous Ecosystem. Intelligent Infrastructure at Scale.</h1>
                      <h3 className="subtitle" style={{ color: '#EF7F1A', background: 'none', border: 'none', padding: 0, fontSize: '32px', fontWeight: 700, marginBottom: '35px', display: 'block' }}>Reimagining Property Intelligence for Regulated Industries.</h3>
                      <div className="banner__one-content-button">
                        <a className="default_button" href="https://valutek.ai" target="_blank" rel="noopener noreferrer" style={{ background: '#EF7F1A', borderRadius: '50px', padding: '15px 40px', color: '#fff', fontWeight: 700, fontSize: '18px' }}>Discover Valucore</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-pagination swiper-pagination"></div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="banner__one-image-area wow fadeInRight" data-wow-delay=".8s" style={{ position: 'relative', zIndex: 10 }}>
                <img src="/about hero.png" alt="Sunware Technologies" style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo Slider */}
      <div className="brand_logo_slider_area section-padding" style={{ background: '#ffffff', padding: '50px 0', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper brand_slider">
                <div className="swiper-wrapper">
                  {['Sunware_Technologies_Client_Acumen.jpg', 'Sunware_Technologies_Client_Bank-of-the-west.jpg', 'Sunware_Technologies_Client_Fleetgurd.jpg', 'Sunware_Technologies_Client_Global-payment.jpg', 'Sunware_Technologies_Client_HP.jpg', 'Sunware_Technologies_Client_HouseAdvantage.jpg', 'Sunware_Technologies_Client_Mastercard.jpg', 'Sunware_Technologies_Client_PsiQuantum.jpg', 'Sunware_Technologies_Client_Regeneron.jpg', 'Sunware_Technologies_Client_SafeWay.jpg', 'Sunware_Technologies_Client_SoCalGas.jpg', 'Sunware_Technologies_Client_USAA.jpg', 'Sunware_Technologies_Client_convence.jpg', 'Sunware_Technologies_Client_pFizer.jpg', 'Sunware_Technologies_Client_premium_media.jpg', 'Sunware_Technologies_Client_roche.jpg', 'Sunware_Technologies_Client_sciformix.jpg'].map(img => (
                    <div key={img} className="swiper-slide"><img src={`/images/Client Logo/${img}`} alt="Client" /></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Area */}
      <div className="industries__one overflow-hidden section-padding">
        <div className="bg_shape" style={{ backgroundImage: "url('/assets/img/shape/bg.png')" }}></div>
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-12">
              <div className="services__one-title t-center">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Expertise</span>
                <h2 className="title_split_anim">Industries We Serve</h2>
              </div>
              <div className="t-center mt-30 mb-50" style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--primary-color-1)', marginBottom: '20px' }}>Driving Business Innovation: Through Intelligent Data</h4>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>At Sunware Technologies, we transform business challenges into technological opportunities. We're experts in cloud data engineering, analytics, machine learning, and AI solutions tailored specifically for the Banking, Financial Services, Insurance, Utilities, Retail, Manufacturing, and Healthcare sectors.</p>
              </div>
            </div>
          </div>
          
          <div className="row al-center mt-30">
            <div className="col-lg-4 col-md-5">
              <div className="industry-nav">
                <div className="industry-nav-item active" data-target="healthcare"><h5>Healthcare & Life Sciences <i className="fas fa-chevron-right"></i></h5></div>
                <div className="industry-nav-item" data-target="banking"><h5>Banking & Financial Services <i className="fas fa-chevron-right"></i></h5></div>
                <div className="industry-nav-item" data-target="retail"><h5>Retail & E-commerce <i className="fas fa-chevron-right"></i></h5></div>
                <div className="industry-nav-item" data-target="media"><h5>Media & Entertainment <i className="fas fa-chevron-right"></i></h5></div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="industry-content-wrapper">
                <div id="healthcare" className="industry-detail-content active">
                  <p>In the fast-paced world of pharmaceutical and life sciences, where a single breakthrough can transform millions of lives, staying ahead of the curve is paramount. We understand the unique challenges you face...</p>
                  <div className="industry-stats-container">
                    <div className="stat-item"><h2 className="stat-value">$67.82 bln</h2><p className="stat-year">by 2025</p><span className="stat-desc">The healthcare analytics market is expected to reach.</span></div>
                    <div className="stat-divider"></div>
                    <div className="stat-item"><h2 className="stat-value">46.2%</h2><p className="stat-year">by 2028</p><span className="stat-desc">The global AI in healthcare market is expected to grow</span></div>
                  </div>
                  <div className="mt-40"><Link className="default_button" to="/healthcare-lifesciences">Read More <i className="flaticon-right-up"></i></Link></div>
                </div>
                <div id="banking" className="industry-detail-content d-none">
                  <p>In today's fast-paced digital world, the banking and financial services industry is experiencing a profound transformation...</p>
                  <div className="industry-stats-container">
                    <div className="stat-item"><h2 className="stat-value">$332.5 bln</h2><p className="stat-year">by 2028</p><span className="stat-desc">The global fintech market is expected to reach.</span></div>
                    <div className="stat-divider"></div>
                    <div className="stat-item"><h2 className="stat-value">60%</h2><p className="stat-year">by 2025</p><span className="stat-desc">Banks will offer open banking services.</span></div>
                  </div>
                  <div className="mt-40"><Link className="default_button" to="/banking-finance">Read More <i className="flaticon-right-up"></i></Link></div>
                </div>
                <div id="retail" className="industry-detail-content d-none">
                  <p>The retail landscape is undergoing a seismic shift, with online sales projected to account for 24% of total retail sales by 2026...</p>
                  <div className="industry-stats-container">
                    <div className="stat-item"><h2 className="stat-value">$17.86 bln</h2><p className="stat-year">by 2028</p><span className="stat-desc">Global AR/VR retail market growth predictions.</span></div>
                    <div className="stat-divider"></div>
                    <div className="stat-item"><h2 className="stat-value">80%</h2><p className="stat-year">Customer Success</p><span className="stat-desc">Consumers prefer personalized brand experiences.</span></div>
                  </div>
                  <div className="mt-40"><Link className="default_button" to="/retail-ecommerce">Read More <i className="flaticon-right-up"></i></Link></div>
                </div>
                <div id="media" className="industry-detail-content d-none">
                  <p>In the fast-paced world of media and entertainment, staying ahead of the curve is essential for success...</p>
                  <div className="industry-stats-container">
                    <div className="stat-item"><h2 className="stat-value">80%</h2><p className="stat-year">Strategic Impact</p><span className="stat-desc">Executives believe AI will significantly impact the industry.</span></div>
                    <div className="stat-divider"></div>
                    <div className="stat-item"><h2 className="stat-value">63%</h2><p className="stat-year">Efficiency Gains</p><span className="stat-desc">Media companies are using AI to automate content production.</span></div>
                  </div>
                  <div className="mt-40"><Link className="default_button" to="/media-entertainment">Read More <i className="flaticon-right-up"></i></Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SWORD Values Section */}
      <div className="about__one overflow-hidden section-padding" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-12">
              <div className="about__one-right ml-40 xl-ml-0 t-center">
                <div className="about__one-right-title">
                  <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Core Values</span>
                  <h2 className="title_split_anim mb-20" style={{ color: '#EF7F1A' }}>Value & Ethos</h2>
                  <div style={{ width: '100px', height: '1px', background: '#EF7F1A', margin: '15px auto 30px auto' }}></div>
                  <h4 style={{ fontWeight: 700, color: '#EF7F1A', marginBottom: '20px', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto' }}>We engineer innovative solutions to empower business.</h4>
                  <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', maxWidth: '850px', margin: '0 auto' }}>Our specialized 'SWORD' framework is built on the principles of synergy, wisdom, and excellence...</p>							
                </div>
                <div className="sword-values-container mt-40" style={{ marginTop: '60px !important' }}>
                  <div className="sword-item"><div className="sword-circle">S</div><p>Empowerment Through <span>S</span>ynergy</p></div>
                  <div className="sword-item"><div className="sword-circle">W</div><p>Sustainable <span>W</span>isdom</p></div>
                  <div className="sword-item"><div className="sword-circle">O</div><p>Outcome-<span>O</span>riented Excellence</p></div>
                  <div className="sword-item"><div className="sword-circle">R</div><p><span>R</span>elentless Innovation</p></div>
                  <div className="sword-item"><div className="sword-circle">D</div><p><span>D</span>ata-driven Integrity</p></div>
                </div>
                <div className="item_bounce mt-55">
                  <Link className="default_button" to="/about">Discover More<i className="flaticon-right-up"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Slider */}
      <div className="team__one overflow-hidden section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="team__one-title t-center">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Stack</span>
                <h2 className="title_split_anim">Core Technologies & Services</h2>                        
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".6s">
            <div className="col-lg-12">
              <div className="swiper team_slider">
                <div className="swiper-wrapper data_cursor" data-cursor-text="Drag">
                  {[
                    { to: '/cloud-solutions', img: 'Sunware_Technologies_Cloud.png', label: 'Cloud Solutions', desc: 'Expertise in hybrid cloud systems' },
                    { to: '/automation-efficiency', img: 'Sunware_Technologies_Automation.png', label: 'Automation', desc: 'Streamlining operations & efficiency' },
                    { to: '/data-science-ai', img: 'Sunware_Technologies_Data_Science.png', label: 'Data Science & AI', desc: 'Generative AI & predictive analytics' },
                    { to: '/salesforce-expertise', img: 'Sunware_Technologies_Sales_force.png', label: 'Salesforce', desc: 'Implementation & customization' }
                  ].map(item => (
                    <div key={item.to} className="swiper-slide">
                      <Link to={item.to} className="team__one-item" style={{ display: 'block', cursor: 'pointer' }}>
                        <img src={`/images/Technologies/${item.img}`} alt={item.label} />
                        <div className="team__one-item-content">
                          <h4>{item.label}</h4>
                          <span>{item.desc}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
