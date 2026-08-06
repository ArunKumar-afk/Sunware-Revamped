"use client";
import { useEffect, useState } from "react";
import FooterCTA from "./FooterCTA";

const slides = [
  { h1: "Advanced Data & AI Solutions Tailored to Your Needs", h3: "Data. Intelligence. Engineered.", btn: "Get Started", href: "/about", img: "/about hero.png" },
  { h1: "Real-Time Edge Intelligence for a Smarter World", h3: "Process. Analyze. Act - at the Edge.", btn: "Explore EdgeData360", href: "/edgedata360", img: "/ed logo.png" },
];

export default function HomeClient() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => { setIdx((i) => (i + 1) % 2); setFade(true); }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const s = slides[idx];

  return (
    <>
      {/* Banner */}
      <div className="banner__one" style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
        <video autoPlay loop muted playsInline style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: 0, opacity: 0.6 }}>
          <source src="/waves_2.mp4" type="video/mp4" />
        </video>
        <div className="container" style={{ position: "relative", zIndex: 5, padding: "120px 0" }}>
          <div className="row al-center">
            <div className="col-xl-7 col-lg-7">
              <div id="hero-text-area">
                <h1 style={{ color: "var(--primary-color-1)", fontSize: "64px", lineHeight: 1.2, marginBottom: "20px", opacity: fade ? 1 : 0, transition: "opacity 0.5s ease" }}>{s.h1}</h1>
                <h3 style={{ color: "#EF7F1A", fontSize: "32px", fontWeight: 700, marginBottom: "35px", lineHeight: 1.4, opacity: fade ? 1 : 0, transition: "opacity 0.5s ease" }}>{s.h3}</h3>
                <div style={{ opacity: fade ? 1 : 0, transition: "opacity 0.5s ease" }}>
                  <a className="default_button" href={s.href} style={{ background: "#EF7F1A", borderRadius: "50px", padding: "15px 40px", color: "#fff", fontWeight: 700, fontSize: "18px" }}>{s.btn}</a>
                </div>
                <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
                  {slides.map((_, i) => (
                    <span key={i} onClick={() => { setFade(false); setTimeout(() => { setIdx(i); setFade(true); }, 300); }} style={{ width: i === idx ? "32px" : "12px", height: "12px", borderRadius: i === idx ? "6px" : "50%", background: i === idx ? "#EF7F1A" : "#ccc", cursor: "pointer", transition: "all 0.3s" }}></span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div style={{ position: "relative", zIndex: 10 }}>
                <img src={s.img} alt="Sunware Technologies" style={{ width: "100%", display: "block", mixBlendMode: "multiply", opacity: fade ? 1 : 0, transform: fade ? "scale(1)" : "scale(0.95)", transition: "opacity 0.5s ease, transform 0.5s ease" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="industries__one overflow-hidden section-padding">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-12">
              <div className="services__one-title t-center">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Expertise</span>
                <h2 className="title_split_anim" style={{ color: "var(--primary-color-1)" }}>Industries We Serve</h2>
              </div>
              <div className="t-center mt-30 mb-50" style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
                <h4 style={{ fontWeight: 700, color: "var(--primary-color-1)", marginBottom: "20px" }}>Driving Business Innovation: Through Intelligent Data</h4>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#555" }}>At Sunware Technologies, we transform business challenges into technological opportunities. We are experts in cloud data engineering, analytics, machine learning, and AI solutions tailored specifically for the Banking, Financial Services, Insurance, Utilities, Retail, Manufacturing, and Healthcare sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value & Ethos */}
      <div className="about__one overflow-hidden section-padding" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-12">
              <div className="about__one-right ml-40 xl-ml-0 t-center">
                <div className="about__one-right-title">
                  <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Core Values</span>
                  <h2 className="title_split_anim mb-20" style={{ color: "var(--primary-color-1)" }}>Value &amp; Ethos</h2>
                  <div style={{ width: "100px", height: "1px", background: "#EF7F1A", margin: "15px auto 30px auto" }}></div>
                  <h4 style={{ fontWeight: 700, color: "var(--primary-color-1)", marginBottom: "20px", maxWidth: "850px", marginLeft: "auto", marginRight: "auto" }}>We engineer innovative solutions to empower business.</h4>
                  <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "18px", lineHeight: 1.8, color: "#555", maxWidth: "850px", margin: "0 auto" }}>Our specialized &apos;SWORD&apos; framework is built on the principles of synergy, wisdom, and excellence, ensuring we deliver data-driven integrity in every strategic solution we engineer for our global clients.</p>
                </div>
                <div className="sword-values-container mt-40" style={{ marginTop: "60px" }}>
                  {[{ l: "S", t: "Empowerment Through Synergy" }, { l: "W", t: "Sustainable Wisdom" }, { l: "O", t: "Outcome-Oriented Excellence" }, { l: "R", t: "Relentless Innovation" }, { l: "D", t: "Data-driven Integrity" }].map((v) => (
                    <div className="sword-item" key={v.l}>
                      <div className="sword-circle">{v.l}</div>
                      <p><span>{v.l}</span>{v.t.slice(v.t.indexOf(v.l) + 1)}</p>
                    </div>
                  ))}
                </div>
                <div className="item_bounce mt-55">
                  <a className="default_button" href="/about">Discover More<i className="flaticon-right-up"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="team__one overflow-hidden section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="team__one-title t-center">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our Stack</span>
                <h2 className="title_split_anim" style={{ color: "var(--primary-color-1)" }}>Core Technologies &amp; Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="process__area overflow-hidden section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="process__area-title t-center">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Advantages</span>
                <h2 className="title_split_anim" style={{ color: "var(--primary-color-1)" }}>Sunware Technologies Advantages</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="process__area-list" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px" }}>
                {[
                  { num: "01", icon: "flaticon-strategy", title: "Core Focus Unleashed", desc: "Focus on your core business while we handle project execution seamlessly." },
                  { num: "02", icon: "flaticon-repair", title: "Always-On Maintenance", desc: "We prioritize user experience with ongoing maintenance, ensuring market relevance." },
                  { num: "03", icon: "flaticon-cyber-security", title: "Security Built-In", desc: "Robust security at every step of development, protecting your sensitive data." },
                  { num: "04", icon: "flaticon-paper-plane", title: "Faster Launch, Bigger Impact", desc: "Experienced team and vast talent pool get your project to market quickly." },
                  { num: "05", icon: "flaticon-artificial-intelligence", title: "AI-Powered Efficiency", desc: "Leverage AI and analytics to optimize resources and automating tasks." },
                ].map((item) => (
                  <div className="process__area-item wow fadeInUp" key={item.num}>
                    <span>{item.num}</span>
                    <div className="process__area-item-area">
                      <i className={item.icon}></i>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog__one overflow-hidden section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="blog__one-title t-center">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Expert Insights</span>
                <h2 className="title_split_anim" style={{ color: "var(--primary-color-1)" }}>Update News &amp; Blogs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <FooterCTA heading="Build Your Ideal World - We're Ready!" buttonText="Start Today" onClickEnquire />
    </>
  );
}
