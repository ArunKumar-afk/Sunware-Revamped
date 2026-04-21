import { Link, NavLink } from 'react-router-dom'
import './Header.css'

/* ─── Nav data ─────────────────────────────────────────────── */
const SERVICES = [
  { href: '/cloud-solutions',        label: 'Cloud Solutions',       desc: 'Hybrid cloud systems and scalability' },
  { href: '/automation-efficiency',  label: 'Automation',            desc: 'Streamlining operations and efficiency' },
  { href: '/data-science-ai',        label: 'Data Science & AI',     desc: 'Generative AI and analytics' },
  { href: '/salesforce-expertise',   label: 'Salesforce',            desc: 'Implementation and CRM experts' },
  { href: '/microsoft-solutions',    label: 'Microsoft Solutions',   desc: 'Enterprise stack and Azure' },
  { href: '/iot-innovations',        label: 'IoT Innovations',       desc: 'Connected smart device ecosystems' },
]

const INDUSTRIES = [
  { href: '/healthcare-lifesciences', label: 'Healthcare & Life Sciences',   desc: 'Next-gen patient care and R&D data' },
  { href: '/banking-finance',         label: 'Banking & Financial Services', desc: 'Digital transformation and fintech' },
  { href: '/retail-ecommerce',        label: 'Retail & E-commerce',          desc: 'Scalable online customer journeys' },
  { href: '/media-entertainment',     label: 'Media & Entertainment',        desc: 'Interactive digital content solutions' },
]

export default function Header() {
  const openModal = (e) => {
    e.preventDefault()
    document.getElementById('enquire-modal')?.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  return (
    <header className="header__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="header__area-menubar">

              {/* Logo */}
              <div className="header__area-menubar-left one">
                <Link to="/"><img src="/main logo.png" alt="Sunware Technologies" style={{ height: '45px' }} /></Link>
              </div>

              {/* Desktop nav */}
              <div className="header__area-menubar-center">
                <div className="header__area-menubar-center-menu">
                  <ul id="mobilemenu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>

                    {/* Services dropdown */}
                    <li className="has-dropdown">
                      <a href="#">Services <i className="fal fa-chevron-down" style={{ fontSize: '12px', marginLeft: '4px' }}></i></a>
                      <div className="dropdown-small dropdown-align-left" style={{ width: '680px' }}>
                        <div className="services-grid">
                          {SERVICES.map(s => (
                            <Link key={s.href} to={s.href} className="megamenu-item">
                              <h5>{s.label}</h5>
                              <p>{s.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>

                    {/* Industries dropdown */}
                    <li className="has-dropdown">
                      <a href="#" style={{ color: '#EF7F1A' }}>Industries <i className="fal fa-chevron-down" style={{ fontSize: '12px', marginLeft: '4px' }}></i></a>
                      <div className="dropdown-small dropdown-align-right" style={{ width: '550px' }}>
                        <div className="megamenu-left industries-grid" style={{ gridTemplateColumns: '1fr 1fr', width: '550px' }}>
                          {INDUSTRIES.map(i => (
                            <Link key={i.href} to={i.href} className="megamenu-item">
                              <h5>{i.label}</h5>
                              <p>{i.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li><NavLink to="/careers">Careers</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                  </ul>
                </div>
              </div>

              {/* CTA + Hamburger */}
              <div className="header__area-menubar-right">
                <div className="header__area-menubar-right-tel lg-display-n">
                  <a className="default_button" href="#" onClick={openModal}>
                    Enquire Now<i className="flaticon-right-up"></i>
                  </a>
                </div>
                <button className="menu js-menu">
                  <span></span><span></span><span></span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
