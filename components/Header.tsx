"use client";

function handleCategoryClick(e: React.MouseEvent) {
  const title = (e.target as HTMLElement).closest(".services-category-title");
  if (!title) return;
  e.stopPropagation();
  const cat = title.parentElement!;
  const isOpen = cat.classList.contains("cat-open");
  cat.parentElement?.querySelectorAll(".services-category.cat-open").forEach((el) => el.classList.remove("cat-open"));
  if (!isOpen) cat.classList.add("cat-open");
}

export default function Header() {
  return (
    <header className="header__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="header__area-menubar">
              <div className="header__area-menubar-left one">
                <a href="/"><img src="/main logo.png" alt="Sunware Technologies" style={{ height: "45px" }} /></a>
              </div>
              <div className="header__area-menubar-center">
                <div className="header__area-menubar-center-menu">
                  <ul id="mobilemenu">
                    {/* Products */}
                    <li className="has-dropdown">
                      <a href="#">Products <i className="fal fa-chevron-down" style={{ fontSize: "12px", marginLeft: "4px" }}></i></a>
                      <div className="dropdown-small dropdown-align-left" style={{ width: "380px", padding: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <a href="/edgedata360/" className="megamenu-item-nested" style={{ fontSize: "15px", fontWeight: 600, padding: "14px 18px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <img src="/images/edlogo.png" alt="EdgeData360" style={{ height: "28px", width: "auto" }} />
                              <div>
                                <div style={{ fontWeight: 700, color: "var(--primary-color-1)" }}>EdgeData360</div>
                                <div style={{ fontSize: "12px", color: "#666", fontWeight: 400 }}>Real-time edge intelligence platform</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* Services */}
                    <li className="has-dropdown">
                      <a href="#">Services <i className="fal fa-chevron-down" style={{ fontSize: "12px", marginLeft: "4px" }}></i></a>
                      <div className="dropdown-small dropdown-align-left" style={{ width: "580px", padding: "24px" }}>
                        <div className="services-categories" onClick={handleCategoryClick}>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-brain" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Data Science, AI &amp; Analytics</div>
                            <div className="services-category-items">
                              <a href="/ai-enablement/" className="megamenu-item-nested"><i className="fas fa-robot" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> AI Enablement</a>
                              <a href="/data-science-ai/" className="megamenu-item-nested"><i className="fas fa-flask" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Data Science &amp; AI</a>
                              <a href="/data-analytics/" className="megamenu-item-nested"><i className="fas fa-chart-bar" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Data Analytics</a>
                              <a href="/data-engineering/" className="megamenu-item-nested"><i className="fas fa-database" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Data Engineering</a>
                              <a href="/iot-solutions/" className="megamenu-item-nested"><i className="fas fa-microchip" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> IoT Solutions</a>
                            </div>
                          </div>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-code" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Engineering &amp; Development</div>
                            <div className="services-category-items">
                              <a href="/enterprise-app-development/" className="megamenu-item-nested"><i className="fas fa-laptop-code" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Enterprise Application Development</a>
                              <a href="/cloud-services/" className="megamenu-item-nested"><i className="fas fa-cloud" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Cloud Services</a>
                              <a href="/infrastructure/" className="megamenu-item-nested"><i className="fas fa-server" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Infrastructure</a>
                              <a href="/mobile-app-development/" className="megamenu-item-nested"><i className="fas fa-mobile-alt" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Mobile App Development</a>
                              <a href="/cybersecurity-services/" className="megamenu-item-nested"><i className="fas fa-shield-alt" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Cybersecurity</a>
                            </div>
                          </div>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-lightbulb" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Strategy &amp; Consulting</div>
                            <div className="services-category-items">
                              <a href="/technology-consulting/" className="megamenu-item-nested"><i className="fas fa-cogs" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Technology Consulting</a>
                              <a href="/digital-transformation/" className="megamenu-item-nested"><i className="fas fa-sync-alt" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Digital Transformation</a>
                              <a href="/salesforce-expertise/" className="megamenu-item-nested"><i className="fab fa-salesforce" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Salesforce Expertise</a>
                              <a href="/odoo-solutions/" className="megamenu-item-nested"><i className="fas fa-cubes" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Odoo Solutions</a>
                            </div>
                          </div>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-hands-helping" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Operational Support</div>
                            <div className="services-category-items">
                              <a href="/staff-augmentation/" className="megamenu-item-nested"><i className="fas fa-users" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Staff Augmentation</a>
                              <a href="/maintenance-support/" className="megamenu-item-nested"><i className="fas fa-tools" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Maintenance &amp; Support</a>
                              <a href="/microsoft-solutions/" className="megamenu-item-nested"><i className="fab fa-microsoft" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Microsoft Solutions</a>
                              <a href="/neo4j-solutions/" className="megamenu-item-nested"><i className="fas fa-project-diagram" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Neo4J Graph Technologies</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Industries */}
                    <li className="has-dropdown">
                      <a href="#">Industries <i className="fal fa-chevron-down" style={{ fontSize: "12px", marginLeft: "4px" }}></i></a>
                      <div className="dropdown-small dropdown-align-left" style={{ width: "480px", padding: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <a href="/healthcare-lifesciences/" className="megamenu-item-nested" style={{ fontSize: "15px", fontWeight: 600, padding: "14px 18px" }}><i className="fas fa-heartbeat" style={{ color: "#EF7F1A", marginRight: "10px", width: "20px" }}></i> Healthcare &amp; Life Sciences</a>
                          <a href="/banking-finance/" className="megamenu-item-nested" style={{ fontSize: "15px", fontWeight: 600, padding: "14px 18px" }}><i className="fas fa-university" style={{ color: "#EF7F1A", marginRight: "10px", width: "20px" }}></i> Banking &amp; Financial Services</a>
                          <a href="/retail-ecommerce/" className="megamenu-item-nested" style={{ fontSize: "15px", fontWeight: 600, padding: "14px 18px" }}><i className="fas fa-shopping-cart" style={{ color: "#EF7F1A", marginRight: "10px", width: "20px" }}></i> Retail &amp; E-commerce</a>
                          <a href="/media-entertainment/" className="megamenu-item-nested" style={{ fontSize: "15px", fontWeight: 600, padding: "14px 18px" }}><i className="fas fa-film" style={{ color: "#EF7F1A", marginRight: "10px", width: "20px" }}></i> Media &amp; Entertainment</a>
                        </div>
                      </div>
                    </li>
                    {/* Technologies */}
                    <li className="has-dropdown">
                      <a href="#">Technologies <i className="fal fa-chevron-down" style={{ fontSize: "12px", marginLeft: "4px" }}></i></a>
                      <div className="dropdown-small dropdown-align-left" style={{ width: "580px", padding: "24px" }}>
                        <div className="services-categories" onClick={handleCategoryClick}>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-briefcase" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Core Business Solutions</div>
                            <div className="services-category-items">
                              <a href="/cloud-solutions/" className="megamenu-item-nested"><i className="fas fa-cloud" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Cloud Solutions Expertise</a>
                              <a href="/automation-efficiency/" className="megamenu-item-nested"><i className="fas fa-cogs" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Automation and Efficiency</a>
                              <a href="/data-science-ai/" className="megamenu-item-nested"><i className="fas fa-brain" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Data Science &amp; AI</a>
                              <a href="/mobile-app-development/" className="megamenu-item-nested"><i className="fas fa-mobile-alt" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Mobile Application Development</a>
                            </div>
                          </div>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-puzzle-piece" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Specialized Technology Solutions</div>
                            <div className="services-category-items">
                              <a href="/neo4j-solutions/" className="megamenu-item-nested"><i className="fas fa-project-diagram" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Graph Technologies: Neo4J</a>
                              <a href="/salesforce-expertise/" className="megamenu-item-nested"><i className="fab fa-salesforce" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> CRM: Salesforce</a>
                              <a href="/odoo-solutions/" className="megamenu-item-nested"><i className="fas fa-cubes" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> ERP: Odoo Solutions</a>
                            </div>
                          </div>
                          <div className="services-category">
                            <div className="services-category-title"><i className="fas fa-rocket" style={{ color: "#EF7F1A", marginRight: "10px" }}></i> Frontier/Emerging Technologies</div>
                            <div className="services-category-items">
                              <a href="/aiot-integrations/" className="megamenu-item-nested"><i className="fas fa-robot" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> AIoT Integrations</a>
                              <a href="/iot-innovations/" className="megamenu-item-nested"><i className="fas fa-microchip" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> IoT Innovations</a>
                              <a href="/cybersecurity-services/" className="megamenu-item-nested"><i className="fas fa-lock" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Cybersecurity</a>
                              <a href="/microsoft-solutions/" className="megamenu-item-nested"><i className="fab fa-microsoft" style={{ color: "#EF7F1A", marginRight: "8px", width: "16px" }}></i> Microsoft &amp; Azure</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="/careers/">Careers</a></li>
                    <li><a href="/blog/">Blog</a></li>
                    <li><a href="/about/">About Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="header__area-menubar-right">
                <div className="header__area-menubar-right-tel lg-display-n">
                  <a className="default_button" href="#" onClick={(e) => { e.preventDefault(); (window as any).openEnquireModal?.(e); }} style={{ background: "#EF7F1A", color: "#fff" }}>Enquire Now<i className="flaticon-right-up"></i></a>
                </div>
                <button className="menu js-menu"><span></span><span></span><span></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

