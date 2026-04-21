import React from 'react';
import { Link } from 'react-router-dom';
import SectionCTA from '../../components/SectionCTA/SectionCTA';

const BankingFinance = () => {
  return (
    <>
      <section className="story-hero" style={{ background: "linear-gradient(rgba(10,15,30,0.7), rgba(10,15,30,0.8)), url('/images/Industries/Sunware_Industries_Banking_and_Financial_Services_Banner.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px 0 100px 0', color: '#fff', textAlign: 'center' }}>
        <div className="container text-center">
          <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '30px' }}>
            <Link to="/" className="default_button" style={{ padding: '10px 25px', fontSize: '14px', background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
              <i className="fal fa-long-arrow-left" style={{ marginRight: '8px' }}></i> Back to Home
            </Link>
          </div>
          <div className="wow fadeInUp" data-wow-delay=".4s">
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '20px' }}>Banking & Financial Services</h1>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".6s" style={{ fontSize: '24px', maxWidth: '900px', margin: '0 auto', color: '#ffffff !important', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
            Empowering institutions to thrive in an era of digital-first finance.
          </p>
        </div>
      </section>

      <div className="container section-padding">
        <div className="story-row al-center" style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '100px' }}>
          <div className="story-content wow fadeInLeft" style={{ flex: 1 }}>
            <h2 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '25px' }}>Banking Redefined for the Digital Age</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
              With over 75% of Americans now using digital banking as their primary method, the industry's digital transformation is no longer optional...
            </p>
          </div>
          <div className="story-image wow fadeInRight" style={{ flex: 1 }}>
            <img src="/images/Industries/Sunware_Industries_Banking-and-Financial_Services_Our_Tailored_Solutions.png" alt="Banking Transformation" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>

      <SectionCTA title="Build Your Ideal World — We’re Ready!" />
    </>
  );
};

export default BankingFinance;
