import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About Us' },
  { to: '#',        label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/blog',    label: 'Blog' },
  { to: 'mailto:sales@sunware.in', label: 'Contact Us', external: true },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__one" style={{ padding: '15px 0', backgroundColor: '#0a0f1e' }}>
        <div className="bg_shape" style={{ backgroundImage: "url('/assets/img/shape/footer.png')" }}></div>
        <div className="container">
          <div className="row">

            {/* Brand */}
            <div className="col-lg-3 col-sm-6">
              <div className="footer__one-widget">
                <Link className="logo" to="/">
                  <img src="/white Logo.png" alt="Sunware Technologies" />
                </Link>
                <p style={{ fontStyle: 'italic', color: '#EF7F1A', margin: '15px 0 4px 0', fontSize: '14px', fontWeight: 500 }}>
                  Advanced Data &amp; AI Solutions Tailored to Your Needs.
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div className="col-lg-3 col-sm-6 sm-mt-30">
              <div className="footer__one-widget ml-40 xl-ml-0">
                <h5>Quick links</h5>
                <div className="footer-widget-menu">
                  <ul>
                    {quickLinks.map(({ to, label, external }) => (
                      <li key={to}>
                        {external
                          ? <a href={to}>{label}</a>
                          : <Link to={to}>{label}</Link>
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-sm-6 lg-mt-30">
              <div className="footer__one-widget contact ml-40 xl-ml-0">
                <h5>Contact</h5>
                <div className="contact-item mb-15">
                  <div className="contact-item-icon"><i className="flaticon-email"></i></div>
                  <div className="contact-item-info">
                    <span>Email</span>
                    <h6><a href="mailto:sales@sunware.in">sales@sunware.in</a></h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="col-lg-3 col-sm-6 lg-mt-30">
              <div className="footer__one-widget social">
                <h5>Social Media</h5>
                <p>Stay connected with us</p>
                <ul>
                  <li><a href="https://www.linkedin.com/company/sunware-technologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.youtube.com/@sunwaretechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="https://www.instagram.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
