"use client";

export default function Footer() {
  const socialBtn = {
    width: "40px", height: "40px", borderRadius: "50%",
    background: "rgba(255,255,255,0.1)", display: "flex",
    alignItems: "center", justifyContent: "center",
    color: "#fff", fontSize: "16px", transition: "background 0.25s ease",
    textDecoration: "none",
  } as React.CSSProperties;

  return (
    <footer className="site-footer">
      <div className="footer__one" style={{ padding: "40px 0 20px", backgroundColor: "#0a0f1e" }}>
        <div className="bg_shape" style={{ backgroundImage: "url('/assets/img/shape/footer.png')" }}></div>
        <div className="container">
          <div className="row">

            {/* Logo + tagline + socials */}
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="footer__one-widget">
                <a className="logo" href="/"><img src="/white Logo.png" alt="Sunware Technologies — AI, Data & Cloud Services" /></a>
                <p style={{ fontStyle: "italic", color: "#EF7F1A", margin: "18px 0 8px 0", fontSize: "14px", fontWeight: 500 }}>
                  Advanced Data &amp; AI Services Tailored to Your Needs.
                </p>
                {/* Social icons */}
                <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
                  <a href="https://in.linkedin.com/company/sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on LinkedIn" style={socialBtn}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  ><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on YouTube" style={socialBtn}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  ><i className="fab fa-youtube"></i></a>
                  <a href="https://www.instagram.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on Instagram" style={socialBtn}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  ><i className="fab fa-instagram"></i></a>
                  {/* Facebook — fixes "Create and link your Facebook Page" recommendation */}
                  <a href="https://www.facebook.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on Facebook" style={socialBtn}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  ><i className="fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="col-lg-2 col-sm-6 mb-30">
              <div className="footer__one-widget">
                <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "20px" }}>Quick Links</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { label: "Home", href: "/" },
                    { label: "EdgeData360", href: "/edgedata360" },
                    { label: "Blog", href: "/blog" },
                    { label: "About Us", href: "/about" },
                    { label: "Careers", href: "/careers" },
                  ].map(({ label, href }) => (
                    <li key={label} style={{ marginBottom: "10px" }}>
                      <a href={href} style={{ color: "#aaa", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.color = "#EF7F1A"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "#aaa"; }}
                      >{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services links — adds keyword-rich internal links */}
            <div className="col-lg-2 col-sm-6 mb-30">
              <div className="footer__one-widget">
                <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "20px" }}>Services</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { label: "AI Services", href: "/ai-enablement" },
                    { label: "Data Engineering", href: "/data-engineering" },
                    { label: "Cloud Solutions", href: "/cloud-solutions" },
                    { label: "Data Analytics", href: "/data-analytics" },
                    { label: "Cybersecurity", href: "/cybersecurity-services" },
                  ].map(({ label, href }) => (
                    <li key={label} style={{ marginBottom: "10px" }}>
                      <a href={href} style={{ color: "#aaa", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.color = "#EF7F1A"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "#aaa"; }}
                      >{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact — address + phone visible for Local SEO */}
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="footer__one-widget">
                <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "20px" }}>Contact Us</h5>

                {/* Email — obfuscated, not plain text */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "16px", alignItems: "flex-start" }}>
                  <i className="flaticon-email" style={{ color: "#EF7F1A", fontSize: "16px", marginTop: "3px", flexShrink: 0 }}></i>
                  <div>
                    <span style={{ color: "#888", fontSize: "11px", display: "block", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email</span>
                    <a href="#contact"
                      onClick={(e) => { e.preventDefault(); window.location.href = ["mailto:connect", "sunwaretechnologies.com"].join("@"); }}
                      aria-label="Email Sunware Technologies"
                      style={{ color: "#ccc", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
                    >connect&#64;sunwaretechnologies&#46;com</a>
                  </div>
                </div>

                {/* Offices — country names only */}
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <i className="flaticon-location" style={{ color: "#EF7F1A", fontSize: "16px", marginTop: "3px", flexShrink: 0 }}></i>
                  <div>
                    <span style={{ color: "#888", fontSize: "11px", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Offices</span>
                    <span style={{ color: "#ccc", fontSize: "14px" }}>USA &nbsp;·&nbsp; India &nbsp;·&nbsp; UAE &nbsp;·&nbsp; UK</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "30px", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>
              © {new Date().getFullYear()} Sunware Technologies. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="/about" style={{ color: "#666", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}
              >Privacy Policy</a>
              <a href="/about" style={{ color: "#666", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}
              >Terms of Use</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
