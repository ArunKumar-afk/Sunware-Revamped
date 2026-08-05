"use client";
import FooterCTA from "./FooterCTA";

export default function EdgeDataClient() {
  return (
    <>
      {/* Hero */}
      <div className="banner__one" style={{ position: "relative", overflow: "hidden", background: "#f8faff" }}>
        <div className="container" style={{ position: "relative", zIndex: 5, padding: "80px 0" }}>
          <div className="row al-center jc-between">
            <div className="col-xl-7 col-lg-7">
              <div className="banner__one-content">
                <div className="wow fadeInUp" style={{ marginBottom: "8px", marginLeft: "-8px" }}>
                  <img src="/images/edlogo.png" alt="EdgeData360" style={{ height: "72px", width: "auto" }} />
                </div>
                <div className="wow fadeInLeft" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px", marginLeft: "8px", background: "rgba(239,127,26,0.08)", border: "1px solid rgba(239,127,26,0.2)", borderRadius: "50px", padding: "6px 16px" }}>
                  <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#EF7F1A", flexShrink: 0 }}></span>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#EF7F1A", letterSpacing: "0.3px", textTransform: "uppercase" }}>A Product by Sunware Technologies</span>
                </div>
                <h1 className="wow fadeInUp" style={{ color: "var(--primary-color-1)", fontSize: "64px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px" }}>Turn Enterprise Data Into <span style={{ color: "#EF7F1A" }}>Instant AI Intelligence.</span></h1>
                <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "18px", color: "rgba(0,0,0,0.75)", marginBottom: "35px", lineHeight: 1.7, maxWidth: "650px" }}>Seamlessly unify 250+ data sources, create AI-ready pipelines in 10 minutes, and enable real-time decision-making powered by AI.</p>
                <div className="wow fadeInUp" data-wow-delay=".6s" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <a className="default_button" href="https://edgedata360.com" target="_blank">Visit EdgeData <i className="flaticon-right-up"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 ed-stats-col">
              <div className="wow fadeInRight" data-wow-delay=".4s" style={{ marginBottom: "24px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                <video autoPlay loop muted playsInline style={{ width: "100%", display: "block" }}>
                  <source src="/edgedata360/Copy of iot north america.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="wow fadeInRight ed-stats-card" data-wow-delay=".6s">
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "28px", color: "#EF7F1A", marginBottom: "10px", lineHeight: 1 }}><i className="fas fa-quote-left"></i></div>
                  <p className="ed-stats-quote" style={{ margin: 0 }}>Deploy on-premises or in your cloud. EdgeData360 centralises edge operations with real-time visibility - turning raw industrial data into actionable intelligence.</p>
                </div>
                <div className="ed-stats-grid">
                  <div className="ed-stat-item"><div className="ed-stat-value">250+</div><div className="ed-stat-label">Data Connectors</div></div>
                  <div className="ed-stat-item"><div className="ed-stat-value">10 Min</div><div className="ed-stat-label">Pipeline Ready</div></div>
                  <div className="ed-stat-item"><div className="ed-stat-value">24/7</div><div className="ed-stat-label">AI Inferencing</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container section-padding">
        <div className="story-row al-center">
          <div className="story-content wow fadeInLeft">
            <span className="subtitle">About EdgeData360</span>
            <h2 style={{ fontSize: "42px", fontWeight: 800, margin: "16px 0 24px", color: "var(--primary-color-1)" }}>Data Unified. AI Unleashed.</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#555", marginBottom: "20px" }}>EdgeData360 is Sunware Technologies&apos; enterprise product - a unified data platform that connects every source, powers real-time intelligence, and transforms operational data into business outcomes.</p>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#555", marginBottom: "32px" }}>Deploy on-premises or in your customer cloud. EdgeData360 delivers centralized edge operations with real-time visibility, turning raw industrial data into actionable intelligence - without writing a single line of custom integration code.</p>
            <a className="default_button" href="https://edgedata360.com" target="_blank">Read More <i className="flaticon-right-up"></i></a>
          </div>
          <div className="story-image wow fadeInRight">
            <img src="/edgedata360/ed laptop mock latest.png" alt="EdgeData360 Platform Dashboard" style={{ width: "100%", height: "auto", borderRadius: 0, boxShadow: "none" }} />
          </div>
        </div>
      </div>

      {/* Platform Capabilities */}
      <section className="section-padding" style={{ background: "#f8faff" }}>
        <div className="container">
          <div className="section-title t-center mb-60">
            <span className="subtitle">Platform Capabilities</span>
            <h2 style={{ fontWeight: 800 }}>The EdgeData360 Engine</h2>
            <p style={{ maxWidth: "680px", margin: "0 auto", color: "#666", fontSize: "18px" }}>Built for Speed. Engineered for Scale.</p>
          </div>
          <div className="row justify-content-center">
            {[
              { icon: "fa-plug", title: "250+ Connectors", desc: "Connect databases, PLCs, Historian systems, APIs, MQTT/Sparkplug servers and 250+ data sources without writing custom integration code." },
              { icon: "fa-brain", title: "Agentic AI", desc: "Embed autonomous AI agents directly into live pipelines for split-second, automated decisions at the edge." },
              { icon: "fa-chart-line", title: "Visual AI Analytics Dashboard", desc: "Build and share dynamic real-time dashboards fueled by continuous AI-driven insights and visual intelligence." },
              { icon: "fa-robot", title: "AI Chatbot", desc: "Conversational AI interface for querying operational data, triggering actions, and getting real-time insights naturally." },
              { icon: "fa-user-cog", title: "Skill Agent", desc: "Specialized AI agents trained on domain-specific tasks to automate complex operational workflows autonomously." },
              { icon: "fa-clock", title: "Time Based AI Scheduler", desc: "Set-and-forget scheduled intelligence. Define daily, weekly, or monthly schedules with event-driven triggers. Runs continuously with built-in retry logic and failure alerts." },
            ].map((item, i) => (
              <div className={`col-lg-4 col-md-6 mb-40 wow fadeInUp`} data-wow-delay={`${i * 0.1}s`} key={item.title}>
                <div className="culture-card" style={{ height: "100%" }}>
                  <div style={{ fontSize: "32px", color: "#EF7F1A", marginBottom: "20px" }}><i className={`fas ${item.icon}`}></i></div>
                  <h4 style={{ fontWeight: 800, marginBottom: "12px" }}>{item.title}</h4>
                  <p style={{ color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <div className="container section-padding">
        <div className="story-row al-center">
          <div className="story-image wow fadeInLeft" style={{ paddingTop: "70px" }}>
            <img src="/edgedata360/image.png" alt="EdgeData360 Data Challenge" style={{ width: "100%", height: "auto", borderRadius: 0, boxShadow: "none" }} />
          </div>
          <div className="story-content wow fadeInRight">
            <span className="subtitle">The Challenge</span>
            <h2 style={{ fontSize: "38px", fontWeight: 800, margin: "16px 0 28px", color: "var(--primary-color-1)" }}>Still Struggling with Disconnected Data?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: "fa-layer-group", title: "The Silo Effect", desc: "Critical operational data trapped across disparate, legacy systems." },
                { icon: "fa-hourglass-half", title: "Sluggish Timelines", desc: "Complex integration cycles dragging for months, not days." },
                { icon: "fa-eye-slash", title: "Operational Blind Spots", desc: "Zero real-time visibility into your live OT networks and environments." },
                { icon: "fa-times-circle", title: "Failed AI Initiatives", desc: "Powerful algorithms starved by poor, unstandardized data quality." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <i className={`fas ${item.icon}`} style={{ color: "#EF7F1A", fontSize: "22px", marginTop: "3px", flexShrink: 0 }}></i>
                  <div><strong style={{ color: "#0a0f1e", fontSize: "17px" }}>{item.title}</strong><p style={{ color: "#666", margin: "6px 0 0", lineHeight: 1.6 }}>{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Sunware */}
      <section className="section-padding" style={{ background: "#f8faff" }}>
        <div className="container">
          <div className="section-title t-center mb-60">
            <span className="subtitle">Powered by Sunware Technologies</span>
            <h2 style={{ fontWeight: 800 }}>EdgeData360 is backed by deep expertise in</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto", color: "#666", fontSize: "18px" }}>Every layer of EdgeData360 is built on Sunware&apos;s proven services - connecting your edge to the enterprise.</p>
          </div>
          <div className="row justify-content-center">
            {[
              { img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop", title: "Data Science & AIML", desc: "AIML models powering real-time edge intelligence" },
              { img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=240&fit=crop", title: "IoT Solutions", desc: "Device connectivity & edge infrastructure" },
              { img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=240&fit=crop", title: "Cloud Services", desc: "Hybrid edge-to-cloud architecture" },
              { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop", title: "Data Engineering", desc: "Robust pipelines from edge to enterprise" },
            ].map((item, i) => (
              <div className="col-lg-3 col-md-6 mb-30 wow fadeInUp" data-wow-delay={`${i * 0.1}s`} key={item.title}>
                <div className="culture-card" style={{ display: "block", textAlign: "center", height: "100%" }}>
                  <div style={{ width: "100%", height: "120px", borderRadius: "16px", overflow: "hidden", marginBottom: "20px" }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h5 style={{ fontWeight: 800, color: "#0a0f1e", marginBottom: "10px" }}>{item.title}</h5>
                  <p style={{ color: "#888", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FooterCTA heading="Ready to unify your data and unleash AI?" buttonText="Enquire Now" onClickEnquire />
    </>
  );
}
