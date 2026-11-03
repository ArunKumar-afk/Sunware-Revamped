"use client";
import { useState, useEffect } from "react";

type ModalType = "privacy" | "terms" | null;

const PRIVACY_CONTENT = (
  <div>
    <p style={{ color: "#555", fontSize: "14px", marginBottom: "16px" }}>
      <strong>Effective Date: January 1, 2025</strong>
    </p>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      Sunware Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>sunwaretechnologies.com</strong>.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>1. Information We Collect</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      We may collect personal information you voluntarily provide when you contact us, submit an enquiry, or apply for a job — including your name, email address, phone number, and company details. We also collect non-personal data such as browser type, pages visited, and time spent on pages via analytics tools.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>2. How We Use Your Information</h4>
    <ul style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px", paddingLeft: "20px" }}>
      <li>To respond to your enquiries and provide requested services</li>
      <li>To send updates, newsletters, or marketing communications (with your consent)</li>
      <li>To improve our website and services</li>
      <li>To comply with legal obligations</li>
    </ul>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>3. Sharing of Information</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      We do not sell or rent your personal information. We may share data with trusted third-party service providers who assist in operating our website or conducting our business, under strict confidentiality agreements.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>4. Cookies</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      We use cookies and similar tracking technologies to enhance your experience. You may choose to disable cookies through your browser settings; however, some features of the site may not function properly as a result.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>5. Data Security</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>6. Your Rights</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      You have the right to access, correct, or delete personal information we hold about you. To exercise these rights, please contact us at <strong>connect@sunwaretechnologies.com</strong>.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>7. Changes to This Policy</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "0" }}>
      We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
    </p>
  </div>
);

const TERMS_CONTENT = (
  <div>
    <p style={{ color: "#555", fontSize: "14px", marginBottom: "16px" }}>
      <strong>Effective Date: January 1, 2025</strong>
    </p>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      By accessing or using the Sunware Technologies website at <strong>sunwaretechnologies.com</strong>, you agree to be bound by these Terms of Use. Please read them carefully before using our site.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>1. Use of the Website</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse our site by knowingly introducing viruses or other harmful material.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>2. Intellectual Property</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      All content on this website — including text, graphics, logos, images, and software — is the property of Sunware Technologies and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>3. Disclaimer of Warranties</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      This website is provided on an "as is" and "as available" basis. Sunware Technologies makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of the content for any particular purpose.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>4. Limitation of Liability</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      To the fullest extent permitted by law, Sunware Technologies shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>5. Third-Party Links</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>6. Governing Law</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
      These Terms of Use are governed by the laws of the State of California, USA, without regard to its conflict of law provisions.
    </p>

    <h4 style={{ color: "#0a0f1e", fontWeight: 700, marginBottom: "8px", fontSize: "15px" }}>7. Changes to Terms</h4>
    <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", marginBottom: "0" }}>
      We reserve the right to modify these Terms at any time. Continued use of the website after changes are posted constitutes your acceptance of the revised Terms.
    </p>
  </div>
);

export default function Footer() {
  const [modal, setModal] = useState<ModalType>(null);

  // Close on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  const socialBtn = {
    width: "40px", height: "40px", borderRadius: "50%",
    background: "rgba(255,255,255,0.1)", display: "flex",
    alignItems: "center", justifyContent: "center",
    color: "#fff", fontSize: "16px", transition: "background 0.25s ease",
    textDecoration: "none",
  } as React.CSSProperties;

  return (
    <>
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
                  <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
                    <a href="https://in.linkedin.com/company/sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on LinkedIn"
                      style={{ ...socialBtn, width: "auto", padding: "0 14px", borderRadius: "20px", gap: "7px", fontSize: "13px" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    ><i className="fab fa-linkedin-in"></i><span>LinkedIn</span></a>
                    <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on YouTube"
                      style={{ ...socialBtn, width: "auto", padding: "0 14px", borderRadius: "20px", gap: "7px", fontSize: "13px" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    ><i className="fab fa-youtube"></i><span>YouTube</span></a>
                    <a href="https://www.instagram.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on Instagram"
                      style={{ ...socialBtn, width: "auto", padding: "0 14px", borderRadius: "20px", gap: "7px", fontSize: "13px" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    ><i className="fab fa-instagram"></i><span>Instagram</span></a>
                    {/* Facebook hidden temporarily */}
                    {/* <a href="https://www.facebook.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Sunware Technologies on Facebook"
                      style={{ ...socialBtn, width: "auto", padding: "0 14px", borderRadius: "20px", gap: "7px", fontSize: "13px" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,127,26,0.7)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    ><i className="fab fa-facebook-f"></i><span>Facebook</span></a> */}
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
                      { label: "Relim.ai", href: "/relim-ai/" },
                      { label: "Blog", href: "/blog/" },
                      { label: "About Us", href: "/about/" },
                      { label: "Careers", href: "/careers/" },
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

              {/* Services links */}
              <div className="col-lg-2 col-sm-6 mb-30">
                <div className="footer__one-widget">
                  <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "20px" }}>Services</h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {[
                      { label: "AI Services", href: "/ai-enablement/" },
                      { label: "Data Engineering", href: "/data-engineering/" },
                      { label: "Cloud Solutions", href: "/cloud-solutions/" },
                      { label: "Data Analytics", href: "/data-analytics/" },
                      { label: "Cybersecurity", href: "/cybersecurity-services/" },
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

              {/* Contact */}
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="footer__one-widget">
                  <h5 style={{ color: "#fff", fontWeight: 700, marginBottom: "20px" }}>Contact Us</h5>

                  {/* Phone */}
                  <div style={{ display: "flex", gap: "10px", marginBottom: "16px", alignItems: "flex-start" }}>
                    <i className="flaticon-phone-call" style={{ color: "#EF7F1A", fontSize: "16px", marginTop: "3px", flexShrink: 0 }}></i>
                    <div>
                      <span style={{ color: "#888", fontSize: "11px", display: "block", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone</span>
                      <a href="tel:+14082576069"
                        style={{ color: "#ccc", fontSize: "13px", textDecoration: "none", transition: "color 0.2s", display: "block", marginBottom: "4px" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
                      >+1-408-257-6069</a>
                      <a href="tel:+919003299896"
                        style={{ color: "#ccc", fontSize: "13px", textDecoration: "none", transition: "color 0.2s", display: "block" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
                      >+91 90032 99896</a>
                    </div>
                  </div>

                  {/* Email */}
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

                  {/* Offices */}
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <i className="flaticon-location" style={{ color: "#EF7F1A", fontSize: "16px", marginTop: "3px", flexShrink: 0 }}></i>
                    <div>
                      <span style={{ color: "#888", fontSize: "11px", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Offices</span>
                      <span style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.6" }}>USA &nbsp;·&nbsp; UAE &nbsp;·&nbsp; India (Chennai &amp; Pune)</span>
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
                <button onClick={() => setModal("privacy")}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontSize: "13px", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#666")}
                >Privacy Policy</button>
                <button onClick={() => setModal("terms")}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontSize: "13px", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#666")}
                >Terms of Use</button>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Modal overlay */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 99999,
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: "16px",
              width: "100%", maxWidth: "680px", maxHeight: "80vh",
              display: "flex", flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Modal header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "24px 28px 20px", borderBottom: "1px solid #eee", flexShrink: 0,
            }}>
              <h3 style={{ margin: 0, color: "#0a0f1e", fontSize: "20px", fontWeight: 700 }}>
                {modal === "privacy" ? "Privacy Policy" : "Terms of Use"}
              </h3>
              <button
                onClick={() => setModal(null)}
                aria-label="Close"
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#999", fontSize: "22px", lineHeight: 1, padding: "4px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#EF7F1A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#999")}
              >✕</button>
            </div>

            {/* Modal body — scrollable */}
            <div style={{ padding: "24px 28px", overflowY: "auto", flexGrow: 1 }}>
              {modal === "privacy" ? PRIVACY_CONTENT : TERMS_CONTENT}
            </div>

            {/* Modal footer */}
            <div style={{
              padding: "16px 28px", borderTop: "1px solid #eee",
              display: "flex", justifyContent: "flex-end", flexShrink: 0,
            }}>
              <button
                onClick={() => setModal(null)}
                style={{
                  background: "#EF7F1A", color: "#fff", border: "none",
                  borderRadius: "8px", padding: "10px 28px", fontSize: "14px",
                  fontWeight: 600, cursor: "pointer", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#d66e0f")}
                onMouseLeave={e => (e.currentTarget.style.background = "#EF7F1A")}
              >Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
