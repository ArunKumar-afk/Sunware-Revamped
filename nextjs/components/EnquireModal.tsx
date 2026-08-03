"use client";
import { useEffect } from "react";

export default function EnquireModal() {
  useEffect(() => {
    (window as any).openEnquireModal = (e?: Event) => {
      if (e) e.preventDefault();
      document.getElementById("enquire-modal")?.classList.add("active");
      document.body.style.overflow = "hidden";
    };
    (window as any).closeEnquireModal = () => {
      document.getElementById("enquire-modal")?.classList.remove("active");
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div id="enquire-modal" className="modal-overlay">
      <div className="modal-content-wrapper">
        <button className="modal-close" onClick={() => (window as any).closeEnquireModal()}>
          <i className="fal fa-times"></i>
        </button>
        <div className="modal-header" style={{ textAlign: "center", marginBottom: "25px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0a0f1e", marginBottom: "8px" }}>Let&apos;s Talk</h3>
        </div>
        <form className="enquire-form">
          <div className="form-row">
            <div className="form-group"><label>Full Name</label><input type="text" placeholder="Enter your name" name="name" required /></div>
            <div className="form-group"><label>Corporate Email</label><input type="email" placeholder="Enter your email address" name="email" required /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="Enter your phone number (optional)" name="phone" /></div>
            <div className="form-group">
              <label>Subject</label>
              <select name="subject" required>
                <option value="">Select Service</option>
                <option>Cloud Solutions</option>
                <option>Data &amp; AI Analytics</option>
                <option>Cybersecurity</option>
                <option>IoT Innovations</option>
                <option>Other Services</option>
              </select>
            </div>
          </div>
          <div className="form-group"><label>How can we help?</label><textarea placeholder="Describe your requirements..." name="message" rows={4} required></textarea></div>
          <button type="submit" className="default_button" style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}>Send Inquiry <i className="flaticon-right-up"></i></button>
        </form>
      </div>
    </div>
  );
}
