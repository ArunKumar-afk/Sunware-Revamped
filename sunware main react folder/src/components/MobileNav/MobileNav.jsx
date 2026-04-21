import { Link } from 'react-router-dom'
import './MobileNav.css'

const navLinks = [
  { to: '/',                        label: 'Home' },
  { to: '/about',                   label: 'About Us' },
  { to: '#',                        label: 'Services' },
  { to: '/healthcare-lifesciences', label: 'Industries' },
  { to: '/careers',                 label: 'Careers' },
  { to: '/blog',                    label: 'Blog' },
]

export default function MobileNav() {
  const openModal = (e) => {
    e.preventDefault()
    document.getElementById('enquire-modal')?.classList.add('active')
    document.body.style.overflow = 'hidden'
    document.querySelector('.js-nav')?.classList.remove('active')
    document.querySelector('.js-menu')?.classList.remove('active')
  }

  return (
    <div className="js-nav" role="dialog" aria-modal="true" aria-label="Site Navigation">
      <div className="nav-brand">
        <Link to="/"><img src="/white Logo.png" alt="Sunware Technologies" /></Link>
      </div>
      <ul>
        {navLinks.map(({ to, label }) => (
          <li key={to} className="nav-item">
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-footer">
        <div className="nav-footer-social">
          <a href="https://www.linkedin.com/company/sunware-technologies" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/sunwaretechnologies" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <a className="default_button" href="#" onClick={openModal} style={{ background: '#EF7F1A', color: '#fff' }}>
          Enquire Now <i className="flaticon-right-up"></i>
        </a>
      </div>
    </div>
  )
}
