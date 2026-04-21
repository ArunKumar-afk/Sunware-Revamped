import React from 'react';
import SectionCTA from '../components/SectionCTA/SectionCTA';

const Careers = () => {
  return (
    <>
      <section className="careers-hero section-padding" style={{ background: '#fff', padding: '60px 0 80px 0' }}>
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-6">
              <span className="subtitle wow fadeInLeft" style={{ color: '#EF7F1A' }}>Careers at Sunware</span>
              <h1 style={{ fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', color: '#0a0f1e', lineHeight: 1.1 }}>
                <span style={{ color: '#0070D2' }}>Where You Can</span> <br />
                <span style={{ color: '#EF7F1A' }}>Make a Difference</span>
              </h1>
              <h3 style={{ fontWeight: 700, fontSize: '24px', marginBottom: '25px', color: '#333' }}>Embrace Flexibility & Thrive</h3>
              <p className="wow fadeInUp" style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: 0 }}>
                Sunware Technologies is your digital transformation partner, fueling growth and success through cutting-edge software solutions...
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ background: '#f9fbff', padding: '40px', borderRadius: '32px', border: '1px solid #edf0f3' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', margin: 0 }}>
                  At Sunware, we understand that a happy and healthy team is a productive team. We foster a dynamic work environment that empowers you to excel...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Iframe */}
      <section className="section-padding" id="open-positions">
        <div className="container">
          <div className="section-title t-center mb-60">
            <span className="subtitle" style={{ color: '#EF7F1A' }}>Join Our Team</span>
            <h2 style={{ fontWeight: 800, marginBottom: '20px' }}>Open Positions</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '18px' }}>
              Build Your Career While Building the Future...
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <iframe 
                src="https://sunware25.oorwin.com/careers/index.html#/list" 
                title="Open Positions"
                style={{ width: '100%', border: 'none', height: '1800px', minHeight: '100vh', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', background: '#fff', overflow: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Humans First & Culture */}
      <section className="section-padding" style={{ background: '#0a101f', color: '#fff' }}>
        <div className="container">
          <div className="row al-center mb-80">
            <div className="col-lg-6">
              <span className="subtitle" style={{ color: '#EF7F1A' }}>Our Culture</span>
              <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '42px' }}>Humans First. <br />Technology Second.</h2>
            </div>
            <div className="col-lg-6">
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', borderLeft: '3px solid #EF7F1A', paddingLeft: '25px' }}>
                At Sunware, technology serves a noble purpose: empowering people. We believe the journey should be just as rewarding as the destination...
              </p>
            </div>
          </div>
          <div className="row">
            {[
              { title: 'Balancing Priorities', desc: 'Your needs are our North Star. We value collaboration and trust above all else.' },
              { title: 'Global Reach', desc: 'We help businesses in Banking, Healthcare, and Manufacturing leapfrog into the future.' },
              { title: 'Happy People', desc: 'Our team works for a purpose. They flourish in a culture that fosters personal growth.' }
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 mb-40">
                <div className="culture-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '24px', height: '100%' }}>
                  <h4 style={{ color: '#fff', fontWeight: 800, marginBottom: '15px' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row">
            {[
              { icon: 'fas fa-rocket', title: 'Launch Your Impact', desc: 'Work on cutting-edge projects that shape the future of technology.' },
              { icon: 'fas fa-chart-line', title: 'We Invest in You', desc: 'Our greatest asset is our team. That is why we prioritize your well-being.' },
              { icon: 'fas fa-user-friends', title: 'Mentorship Matters', desc: 'Sunware fosters a culture of mentorship. Learn from seasoned professionals.' },
              { icon: 'fas fa-leaf', title: 'Sustainable Growth', desc: 'We are committed to a sustainable future, both for the environment and our people.' },
              { icon: 'fas fa-graduation-cap', title: 'Your Development', desc: 'There\'s always room to learn and grow. We provide the resources you need.' },
              { icon: 'fas fa-globe', title: 'Global Network', desc: 'Join our international community of passionate individuals at the forefront of technology.' }
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-40">
                <div className="culture-card" style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', border: '1px solid #f0f3f7', height: '100%' }}>
                  <div style={{ fontSize: '30px', color: '#EF7F1A', marginBottom: '20px' }}><i className={item.icon}></i></div>
                  <h4 style={{ fontWeight: 800, marginBottom: '15px' }}>{item.title}</h4>
                  <p style={{ color: '#666' }}>{item.desc}</p>
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

export default Careers;
