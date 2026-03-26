import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/contact', label: 'Contact' },
  { to: '/connexion', label: 'Connexion' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-mark">A</div>
          <div>
            <div className="brand-title">Analymo</div>
            <div className="brand-subtitle">Analyse documentaire immobilière</div>
          </div>
        </Link>

        <nav className="desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-actions">
          <Link to="/connexion" className="button button-secondary small-button">
            Se connecter
          </Link>
          <Link to="/contact" className="button small-button">
            Demander une démo
          </Link>
        </div>

        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-panel">
          <div className="container mobile-panel-inner">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="button full-width-button">
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
