import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <div className="brand-mark">A</div>
            <div>
              <div className="brand-title">Analymo</div>
              <div className="brand-subtitle">Un SaaS clair, moderne et pensé pour les acheteurs.</div>
            </div>
          </div>
          <p className="footer-text">
            Comprenez rapidement vos PV d&apos;AG, règlements de copropriété, appels de charges et diagnostics.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Navigation</h4>
          <div className="footer-links">
            <Link to="/">Accueil</Link>
            <Link to="/tarifs">Tarifs</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/connexion">Connexion</Link>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">hello@analymo.fr</p>
          <p className="footer-text">Paris • France</p>
        </div>
      </div>
    </footer>
  )
}
