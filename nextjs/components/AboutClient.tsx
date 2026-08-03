"use client";
import FooterCTA from "./FooterCTA";

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <div className="banner__one" style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
        <video autoPlay loop muted playsInline style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: 0, opacity: 0.6 }}>
          <source src="/waves_2.mp4" type="video/mp4" />
        </video>
        <div className="container" style={{ position: "relative", zIndex: 5, padding: "120px 0" }}>
          <div className="row al-center jc-between">
            <div className="col-xl-7 col-lg-7">
              <div className="banner__one-content">
                <h1 className="wow fadeInUp" style={{ color: "var(--primary-color-1)", fontSize: "64px", fontWeight: 900, lineHeight: 1.2, marginBottom: "20px" }}>About <span style={{ color: "#EF7F1A" }}>Sunware Technologies</span></h1>
                <h3 className="wow fadeInUp" data-wow-delay=".2s" style={{ color: "#EF7F1A", fontSize: "28px", fontWeight: 700, marginBottom: "25px" }}>Engineering Innovative Solutions</h3>
                <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "18px", color: "rgba(0,0,0,0.75)", marginBottom: "35px", lineHeight: 1.7, maxWidth: "650px" }}>We empower global businesses with deep technical mastery and groundbreaking AI innovations. Our team transforms complex data challenges into strategic opportunities across multiple continents.</p>
                <div className="wow fadeInUp" data-wow-delay=".6s" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <a className="default_button" href="#" onClick={(e) => { e.preventDefault(); (window as any).openEnquireModal?.(e); }}>Work With Us <i className="flaticon-right-up"></i></a>
                  <a className="default_button" href="/blog" style={{ background: "rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.15)", color: "var(--primary-color-1)" }}>Read Stories <i className="flaticon-right-up"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="wow fadeInRight" data-wow-delay=".6s" style={{ position: "relative", zIndex: 10 }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.2)", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/1t_2QZWWz0M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose Driven */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-12 t-center">
              <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ fontWeight: 800, fontSize: "42px", color: "#0a0f1e" }}>Purpose-Driven Progress</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "18px", lineHeight: 1.8, color: "#555", maxWidth: "800px", margin: "20px auto 0" }}>We believe technology should serve a purpose beyond profit. Every solution we build is designed to create lasting value for businesses and communities worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FooterCTA heading="Let's Build Something Extraordinary Together" buttonText="Start Today" onClickEnquire />
    </>
  );
}
