"use client";

function toggleNavSub(e: React.MouseEvent, el: HTMLAnchorElement) {
  e.preventDefault();
  e.stopPropagation();
  const li = el.parentElement!;
  const isOpen = li.classList.contains("open");
  const siblings = li.parentElement!.querySelectorAll(".nav-item.has-sub.open");
  siblings.forEach((s) => { if (s !== li) s.classList.remove("open"); });
  if (isOpen) li.classList.remove("open"); else li.classList.add("open");
}

export default function FullscreenNav() {
  return (
    <div className="js-nav" role="dialog" aria-modal="true" aria-label="Site Navigation">
      <button className="nav-close-btn" onClick={() => document.querySelector<HTMLButtonElement>(".js-menu")?.click()} style={{ position: "absolute", top: "30px", right: "30px", background: "none", border: "none", color: "#fff", fontSize: "28px", cursor: "pointer", zIndex: 99999, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <i className="fal fa-times"></i>
      </button>
      <div className="nav-brand"><a href="/"><img src="/white Logo.png" alt="Sunware Technologies" /></a></div>
      <ul>
        <li className="nav-item has-sub"><a href="/edgedata360/" onClick={(e) => toggleNavSub(e, e.currentTarget)}>Products <span className="nav-toggle"><i className="fal fa-chevron-down"></i></span></a>
          <div className="nav-sub"><a href="/edgedata360/">EdgeData360</a></div>
        </li>
        <li className="nav-item has-sub"><a href="#" onClick={(e) => toggleNavSub(e, e.currentTarget)}>Services <span className="nav-toggle"><i className="fal fa-chevron-down"></i></span></a>
          <div className="nav-sub">
            <p className="nav-sub-title">Data Science, AI &amp; Analytics</p>
            <a href="/ai-enablement/">AI Enablement</a>
            <a href="/data-science-ai/">Data Science &amp; AI</a>
            <a href="/data-analytics/">Data Analytics</a>
            <a href="/data-engineering/">Data Engineering</a>
            <a href="/iot-solutions/">IoT Solutions</a>
            <p className="nav-sub-title">Engineering &amp; Development</p>
            <a href="/enterprise-app-development/">Enterprise App Development</a>
            <a href="/cloud-services/">Cloud Services</a>
            <a href="/infrastructure/">Infrastructure</a>
            <a href="/mobile-app-development/">Mobile App Development</a>
            <a href="/cybersecurity-services/">Cybersecurity</a>
            <p className="nav-sub-title">Strategy &amp; Consulting</p>
            <a href="/technology-consulting/">Technology Consulting</a>
            <a href="/digital-transformation/">Digital Transformation</a>
            <a href="/salesforce-expertise/">Salesforce Expertise</a>
            <a href="/odoo-solutions/">Odoo Solutions</a>
            <p className="nav-sub-title">Operational Support</p>
            <a href="/staff-augmentation/">Staff Augmentation</a>
            <a href="/maintenance-support/">Maintenance &amp; Support</a>
            <a href="/microsoft-solutions/">Microsoft Solutions</a>
            <a href="/neo4j-solutions/">Neo4J Graph Technologies</a>
          </div>
        </li>
        <li className="nav-item has-sub"><a href="#" onClick={(e) => toggleNavSub(e, e.currentTarget)}>Industries <span className="nav-toggle"><i className="fal fa-chevron-down"></i></span></a>
          <div className="nav-sub">
            <a href="/healthcare-lifesciences/">Healthcare &amp; Life Sciences</a>
            <a href="/banking-finance/">Banking &amp; Financial Services</a>
            <a href="/retail-ecommerce/">Retail &amp; E-commerce</a>
            <a href="/media-entertainment/">Media &amp; Entertainment</a>
          </div>
        </li>
        <li className="nav-item has-sub"><a href="#" onClick={(e) => toggleNavSub(e, e.currentTarget)}>Technologies <span className="nav-toggle"><i className="fal fa-chevron-down"></i></span></a>
          <div className="nav-sub">
            <a href="/cloud-solutions/">Cloud Solutions</a>
            <a href="/automation-efficiency/">Automation &amp; Efficiency</a>
            <a href="/aiot-integrations/">AIoT Integrations</a>
            <a href="/iot-innovations/">IoT Innovations</a>
            <a href="/neo4j-solutions/">Graph Technologies: Neo4J</a>
            <a href="/salesforce-expertise/">CRM: Salesforce</a>
            <a href="/odoo-solutions/">ERP: Odoo Solutions</a>
            <a href="/microsoft-solutions/">Microsoft &amp; Azure</a>
          </div>
        </li>
        <li className="nav-item"><a href="/careers/">Careers</a></li>
        <li className="nav-item"><a href="/blog/">Blog</a></li>
        <li className="nav-item"><a href="/about/">About Us</a></li>
      </ul>
      <div className="nav-footer">
        <div className="nav-footer-social">
          <a href="https://in.linkedin.com/company/sunwaretechnologies" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank"><i className="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com/sunwaretechnologies" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
        <a className="default_button" href="#" onClick={(e) => { e.preventDefault(); (window as any).openEnquireModal?.(e); }} style={{ background: "#EF7F1A", color: "#fff" }}>Enquire Now <i className="flaticon-right-up"></i></a>
      </div>
    </div>
  );
}

