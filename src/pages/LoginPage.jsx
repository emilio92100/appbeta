import { LockKeyhole, Mail } from 'lucide-react'

export default function LoginPage() {
  return (
    <main className="page-main auth-page">
      <section className="section auth-section">
        <div className="container auth-grid">
          <div className="auth-copy">
            <div className="section-badge">Connexion</div>
            <h1>Accédez à votre espace Analymo</h1>
            <p>
              Cette page est prête pour être reliée à Supabase Auth plus tard, avec email / mot de passe ou connexion Google.
            </p>
            <div className="auth-benefits">
              <div className="auth-benefit">Consultez vos analyses</div>
              <div className="auth-benefit">Retrouvez vos dossiers</div>
              <div className="auth-benefit">Gérez vos crédits</div>
            </div>
          </div>

          <div className="auth-card">
            <h2>Connexion</h2>
            <div className="social-login">Continuer avec Google</div>
            <div className="divider">ou</div>
            <div className="form-row with-icon">
              <label>Email</label>
              <div className="input-icon-wrap">
                <Mail size={16} />
                <input type="email" placeholder="vous@exemple.com" />
              </div>
            </div>
            <div className="form-row with-icon">
              <label>Mot de passe</label>
              <div className="input-icon-wrap">
                <LockKeyhole size={16} />
                <input type="password" placeholder="••••••••" />
              </div>
            </div>
            <button className="button full-width-button">Se connecter</button>
            <button className="button button-secondary full-width-button">Créer un compte</button>
          </div>
        </div>
      </section>
    </main>
  )
}
