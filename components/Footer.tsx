"use client";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__one" style={{ padding: "15px 0", backgroundColor: "#0a0f1e" }}>
        <div className="bg_shape" style={{ backgroundImage: "url('/assets/img/shape/footer.png')" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer__one-widget">
                <a className="logo" href="/"><img src="/white Logo.png" alt="Sunware Technologies" /></a>
                <p style={{ fontStyle: "italic", color: "#EF7F1A", margin: "15px 0 4px 0", fontSize: "14px", fontWeight: 500 }}>Advanced Data &amp; AI Solutions Tailored to Your Needs.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-mt-30">
              <div className="footer__one-widget ml-40 xl-ml-0">
                <h5>Quick links</h5>
                <div className="footer-widget-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/data-analytics">Services</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="mailto:connect@sunwaretechnologies.com">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 lg-mt-30">
              <div className="footer__one-widget contact ml-40 xl-ml-0">
                <h5>Contact</h5>
                <div className="contact-item mb-15">
                  <div className="contact-item-icon"><i className="flaticon-email"></i></div>
                  <div className="contact-item-info">
                    <span>Email</span>
                    <h6><a href="/careers#contact" onClick={(e) => { e.preventDefault(); window.location.href = "mailto:" + "connect" + "@" + "sunwaretechnologies" + ".com"; }}>Get in Touch</a></h6>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                  <a href="https://in.linkedin.com/company/sunwaretechnologies" target="_blank" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}><i className="fab fa-youtube"></i></a>
                  <a href="https://www.instagram.com/sunwaretechnologies" target="_blank" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px" }}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 lg-mt-30"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
