"use client";
import { useEffect, useRef, useState } from "react";

export default function EnquireModal() {
  const formRef = useRef<HTMLFormElement>(null);
  const [btnText, setBtnText] = useState('Send Inquiry <i class="flaticon-right-up"></i>');
  const [btnStyle, setBtnStyle] = useState({});
  const [disabled, setDisabled] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setDisabled(true);
    setBtnText('Sending... <i class="flaticon-right-up"></i>');

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {
      name: formData.get("name") as string || "",
      email: formData.get("email") as string || "",
      phone: formData.get("phone") as string || "",
      subject: formData.get("subject") as string || "",
      message: formData.get("message") as string || "",
      source: "Sunware",
    };

    // Submit via hidden iframe + form POST (bypasses all CORS issues)
    const iframe = document.createElement("iframe");
    iframe.name = "sunware_form_" + Date.now();
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const tempForm = document.createElement("form");
    tempForm.method = "POST";
    tempForm.action = "https://script.google.com/macros/s/AKfycbzRpIiiMrLKTWHWygC6oEeFssBSsw10mbYaC9Xl20C3y6JR-XGY_2xFsjjiAHHrTbv8/exec";
    tempForm.target = iframe.name;

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });

    document.body.appendChild(tempForm);
    tempForm.submit();

    // Show success after a brief delay (form posts are fire-and-forget)
    setTimeout(() => {
      document.body.removeChild(tempForm);
      document.body.removeChild(iframe);
      setBtnText('Sent Successfully! <i class="fas fa-check"></i>');
      setBtnStyle({ background: "#28a745" });
      formRef.current?.reset();
      setTimeout(() => {
        setBtnText('Send Inquiry <i class="flaticon-right-up"></i>');
        setBtnStyle({});
        setDisabled(false);
        (window as any).closeEnquireModal();
      }, 2000);
    }, 1500);
  };

  return (
    <div id="enquire-modal" className="modal-overlay">
      <div className="modal-content-wrapper">
        <button className="modal-close" onClick={() => (window as any).closeEnquireModal()}>
          <i className="fal fa-times"></i>
        </button>
        <div className="modal-header" style={{ textAlign: "center", marginBottom: "25px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0a0f1e", marginBottom: "8px" }}>Let&apos;s Talk</h3>
        </div>
        <form className="enquire-form" ref={formRef} onSubmit={handleSubmit}>
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
          <button type="submit" className="default_button" disabled={disabled} style={{ width: "100%", justifyContent: "center", marginTop: "10px", ...btnStyle }} dangerouslySetInnerHTML={{ __html: btnText }} />
        </form>
      </div>
    </div>
  );
}
