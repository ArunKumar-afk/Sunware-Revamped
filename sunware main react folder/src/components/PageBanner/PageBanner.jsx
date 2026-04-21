import { Link } from 'react-router-dom'
import './PageBanner.css'

/**
 * PageBanner — the standard dark banner used on all inner pages.
 *
 * Props:
 *   image   (string) — background image path e.g. '/images/Industries/...'
 *   title   (string) — main h1 text
 *   subtitle (string) — optional subtext below
 */
export default function PageBanner({ image, title, subtitle }) {
  return (
    <section
      className="story-hero"
      style={{
        background: `linear-gradient(rgba(10,15,30,0.78), rgba(10,15,30,0.85)), url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <Link to="/" style={{ color: '#EF7F1A', textDecoration: 'none', fontWeight: 600, marginBottom: '20px', display: 'inline-block' }}>
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <h1 className="wow fadeInUp">{title}</h1>
        {subtitle && (
          <p className="wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
