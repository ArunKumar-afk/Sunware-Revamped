"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    setIsIndia(host.endsWith(".in"));
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer__one" style={{ padding: "15px 0", backgroundColor: "#0a0f1e" }}>
        <div className="bg_shape" style={{ backgroundImage: "url('/assets/img/shape/footer.png')" }}></div>
        <div className="container">
          <div className="row">

            {/* Logo + tagline */}
            <div className="col-lg-3 col-sm-6">
              <div className="footer__one-widget">
                <a className="logo" href="/"><img src="/white Logo.png" alt="Sunware Technologies" /></a>
                <p style={{ fontStyle: "italic", color: "#EF7F1A", margin: "15px 0 4px 0", fontSize: "14px", fontWeight: 500 }}>Advanced Data &amp; AI Solutions Tailored to Your Needs.</p>
              </div>
            </div>

            {/* Quick links */}
            <div className="col-lg-3 col-sm-6 sm-mt-30">
              <div className="footer__one-widget ml-40 xl-ml-0">
                <h5>Quick Links</h5>
                <div className="footer-widget-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/data-analytics">Services</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/edgedata360">EdgeData360</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-sm-6 lg-mt-30">
              <div className="footer__one-widget contact ml-40 xl-ml-0">
                <h5>Contact</h5>

                {/* Email — always visible */}
                <div className="contact-item mb-15">
                  <div className="contact-item-icon"><i className="flaticon-email"></i></div>
                  <div className="contact-item-info">
                    <span>Email</span>
                    <h6>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "mailto:connect@sunwaretechnologies.com";
                        }}
                        style={{ color: "#fff", wordBreak: "break-all" }}
                      >
                        connect@sunwaretechnologies.com
                      </a>
                    </h6>
                  </div>
                </div>

                {/* Address — domain-aware */}
                <div className="contact-item mb-15">
                  <div className="contact-item-icon"><i className="flaticon-location"></i></div>
                  <div className="contact-item-info">
                    <span>Office</span>
                    {isIndia ? (
                      <h6 style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.6" }}>
                        117, KSR Nagar, Ambattur<br />Chennai, Tamil Nadu 600053<br />India
                      </h6>
                    ) : (
                      <h6 style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.6" }}>
                        20065 Stevens Creek Blvd,<br />Suite B-2B, Cupertino<br />CA 95014, USA
                      </h6>
                    )}
                  </div>
                </div>

                {/* Social icons */}
                <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                  <a href="https://in.linkedin.com/company/sunwaretechnologies" target="_blank" rel="noopener noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank" rel="noopener noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}><i className="fab fa-youtube"></i></a>
                  <a href="https://www.instagram.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>

            {/* Address column — domain-aware full address block */}
            <div className="col-lg-3 col-sm-6 lg-mt-30">
              <div className="footer__one-widget ml-40 xl-ml-0">
                <h5>Our Offices</h5>
                {isIndia ? (
                  <>
                    <p style={{ color: "#aaa", fontSize: "13px", lineHeight: "1.8", marginBottom: "14px" }}>
                      <strong style={{ color: "#fff" }}>India (HQ)</strong><br />
                      117, KSR Nagar, Ambattur<br />
                      Chennai, Tamil Nadu 600053
                    </p>
                    <p style={{ color: "#aaa", fontSize: "13px", lineHeight: "1.8", marginBottom: "14px" }}>
                      <strong style={{ color: "#fff" }}>USA</strong><br />
                      20065 Stevens Creek Blvd,<br />
                      Suite B-2B, Cupertino, CA 95014
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ color: "#aaa", fontSize: "13px", lineHeight: "1.8", marginBottom: "14px" }}>
                      <strong style={{ color: "#fff" }}>USA (HQ)</strong><br />
                      20065 Stevens Creek Blvd,<br />
                      Suite B-2B, Cupertino, CA 95014
                    </p>
                    <p style={{ color: "#aaa", fontSize: "13px", lineHeight: "1.8", marginBottom: "14px" }}>
                      <strong style={{ color: "#fff" }}>India</strong><br />
                      117, KSR Nagar, Ambattur<br />
                      Chennai, Tamil Nadu 600053
                    </p>
                  </>
                )}
                <p style={{ color: "#aaa", fontSize: "13px", lineHeight: "1.8" }}>
                  <strong style={{ color: "#fff" }}>UAE</strong><br />
                  DMCC Business Centre, Level 5<br />
                  Jewellery &amp; Gemplex 2, Dubai
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
