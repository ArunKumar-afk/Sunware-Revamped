import React from 'react';
import SectionCTA from '../components/SectionCTA/SectionCTA';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
  return (
    <>
      <div className="banner__one" style={{ position: 'relative', overflow: 'hidden', background: '#fff' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.6 }}>
          <source src="/waves_1.mp4" type="video/mp4" />
        </video>
        
        <div className="banner__one-image" style={{ padding: '100px 0', position: 'relative', zIndex: 1, background: 'transparent' }}>
          <div className="container jc-center text-center">
            <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '30px' }}>
              <Link to="/" className="default_button" style={{ padding: '10px 25px', fontSize: '14px', background: 'transparent', border: '1px solid var(--primary-color-1)', color: 'var(--primary-color-1)' }}>
                <i className="fal fa-long-arrow-left" style={{ marginRight: '8px' }}></i> Back to Home
              </Link>
            </div>
            <h1 style={{ color: 'var(--primary-color-1)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '20px' }}>Cloud Solutions Expertise</h1>
            <p style={{ fontSize: '20px', color: '#444', margin: '0 auto', maxWidth: '800px' }}>Scalability, security, and efficiency through tailored cloud strategies.</p>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="story-row al-center" style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '100px' }}>
          <div className="story-content wow fadeInLeft" style={{ flex: 1 }}>
            <h2 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '25px' }}>Strategic Cloud Mastery</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
              Sunware offers a full spectrum of cloud services, from strategy and planning to deployment and ongoing management...
            </p>
          </div>
          <div className="story-image wow fadeInRight" style={{ flex: 1 }}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Cloud Transformation" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>

      <section className="tailored-grid" style={{ padding: '100px 0', background: '#f9faff' }}>
        <div className="container">
          <div className="row g-4">
            {[
              { title: 'Cloud Consulting', desc: 'Strategic roadmaps for modern infrastructure.' },
              { title: 'Cloud Engineering', desc: 'High-performance system architecture.' },
              { title: 'DevOps', desc: 'Automated deployment and elastic scaling.' },
              { title: 'Security', desc: 'Cloud-native protection for your data.' }
            ].map((item, idx) => (
              <div key={idx} className="col-lg-3">
                <div className="solution-card" style={{ background: '#fff', padding: '40px', borderRadius: '24px', height: '100%', transition: '0.3s', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '15px' }}>{item.title}</h4>
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

export default CloudSolutions;
