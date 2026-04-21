import React from 'react';
import SectionCTA from '../components/SectionCTA/SectionCTA';

const About = () => {
  const openEnquireModal = (e) => {
    e.preventDefault();
    document.getElementById('enquire-modal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {/* Standardized Page Header Start */}
      <section className="story-header" style={{ backgroundImage: "url('/images/Success_Stories/Success_Stories_inner_pages/Sunware_Success-Stories-02_Banner_Unifying_Data.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '140px 0', color: '#fff', position: 'relative' }}>
        <div className="container">
          <div className="row al-center jc-between">
            <div className="col-xl-7 col-lg-7">
              <div className="banner__one-content">
                <h1 className="wow fadeInUp" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, color: '#fff', marginBottom: '20px' }}>
                  About <span style={{ color: '#EF7F1A' }}>Sunware Technologies</span>
                </h1>
                <h3 className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#EF7F1A', fontSize: '28px', fontWeight: 700, marginBottom: '25px' }}>
                  Engineering Innovative Solutions
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '35px', lineHeight: 1.7, maxWidth: '650px' }}>
                  We empower global businesses with deep technical mastery and groundbreaking AI innovations. Our team transforms complex data challenges into strategic opportunities across multiple continents.
                </p>
                <div className="wow fadeInUp" data-wow-delay=".6s" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <a className="default_button" href="#" onClick={openEnquireModal}>Work With Us <i className="flaticon-right-up"></i></a>
                  <a className="default_button" href="/blog" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>Read Stories <i className="flaticon-right-up"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="wow fadeInRight" data-wow-delay=".6s" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/k9KRLE_KTFI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Detailed Story */}
      <section className="about-detailed section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title mb-40">
                <span className="subtitle wow fadeInLeft" style={{ color: '#EF7F1A' }}>Our Journey</span>
                <h2 className="wow fadeInUp" style={{ fontWeight: 800, fontSize: '48px', lineHeight: 1.2, color: 'var(--primary-color-1)' }}>About Sunware Technologies</h2>
              </div>
              <div className="about-text wow fadeInUp" style={{ fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
                <p className="mb-25">At Sunware Technologies, we are passionate about empowering product companies in the US, UK, and UAE to unlock the transformative potential of data engineering and artificial intelligence...</p>
                <p className="mb-25">We understand the unique challenges faced by product companies in building scalable data infrastructure, developing intelligent features, and leveraging AI to enhance their offerings...</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', marginTop: '100px' }}>
                <p className="mb-25">Our commitment goes beyond just providing technical expertise. We believe in forging strong, collaborative partnerships, working closely with your teams to understand your specific product vision and business objectives...</p>
                <p>Our experience across diverse sectors has equipped us with the insights to navigate complex data landscapes and deliver tangible results...</p>
              </div>
            </div>
          </div>

          {/* SWORD Framework */}
          <div className="about__one-right-title t-center mt-60">
            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Core Excellence</span>
            <h2 className="title_split_anim mb-20" style={{ color: '#EF7F1A', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>The SWORD Framework</h2>
            <div className="sword-values-container mt-40">
              <div className="sword-item"><div className="sword-circle">S</div><p>Empowerment Through <span>S</span>ynergy</p></div>
              <div className="sword-item"><div className="sword-circle">W</div><p>Sustainable <span>W</span>isdom</p></div>
              <div className="sword-item"><div className="sword-circle">O</div><p>Outcome-<span>O</span>riented Excellence</p></div>
              <div className="sword-item"><div className="sword-circle">R</div><p><span>R</span>elentless Innovation</p></div>
              <div className="sword-item"><div className="sword-circle">D</div><p><span>D</span>ata-driven Integrity</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-section" style={{ background: "linear-gradient(rgba(10,15,30,0.65), rgba(10, 15, 30, 0.75)), url('/wide copy.png')", backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '80px 0', position: 'relative' }}>
        <div className="container text-center">
          <span className="subtitle wow fadeInUp" style={{ color: '#EF7F1A' }}>Our Leadership</span>
          <h2 className="mt-20 mb-40 wow fadeInUp" data-wow-delay=".2s" style={{ color: '#fff', fontWeight: 800, fontSize: '52px', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>Architects of Data-Driven Product Revolution</h2>
          <div className="wow fadeInUp" data-wow-delay=".3s" style={{ width: '100px', height: '3px', background: '#EF7F1A', margin: '0 auto 40px auto', borderRadius: '2px' }}></div>
          <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '22px', lineHeight: '1.8', opacity: 1, color: '#fff', maxWidth: '950px', margin: '0 auto', fontStyle: 'italic', fontWeight: 500, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>"The visionary leadership at Sunware Technologies is driven by a powerful aspiration: to fundamentally transform product businesses across the globe..."</p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-impact section-padding" style={{ background: '#f9fbff' }}>
        <div className="container">
          <div className="section-title t-center mb-60">
            <span className="subtitle wow fadeInUp" style={{ color: '#EF7F1A' }}>Global Responsibility</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ fontWeight: 800, fontSize: '42px', color: '#0a0f1e' }}>Purpose-Driven Progress</h2>
          </div>
          <div className="row">
            {[
              { icon: 'fas fa-hand-holding-heart', title: 'Empowering Communities', desc: 'We partner with NGOs to champion critical causes like child support, educational accessibility, and humanitarian aid.' },
              { icon: 'fas fa-seedling', title: 'Greener Tomorrow', desc: 'Committed to annual tree-planting initiatives to combat air pollution and create a more sustainable future.' },
              { icon: 'fas fa-search-plus', title: 'Transparency Matters', desc: 'Our annual sustainability reports provide clear and accessible information on our ongoing efforts.' },
              { icon: 'fas fa-user-shield', title: 'Well-being First', desc: 'Prioritizing team well-being with COVID-adapted offices, mental health support, and a robust whistleblowing system.' },
              { icon: 'fas fa-globe', title: 'Global Responsibility', desc: 'Sunware is a proud member of the United Nations Global Compact, uniting us with responsible businesses globally.' },
              { icon: 'fas fa-users-cog', title: 'Employee-Driven Impact', desc: 'Our team actively participates in volunteer initiatives, supporting schools, animal shelters, and social care organizations.' }
            ].map((item, idx) => (
              <div key={idx} className="col-xl-4 col-md-6 mb-30">
                <div className="impact-card wow fadeInUp" data-wow-delay={`${idx * 0.1}s`} style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', height: '100%' }}>
                  <div style={{ fontSize: '40px', color: '#EF7F1A', marginBottom: '20px' }}><i className={item.icon}></i></div>
                  <h4 style={{ fontWeight: 800, marginBottom: '15px' }}>{item.title}</h4>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="Build Your Ideal World — We’re Ready!" />
    </>
  );
};

export default About;
