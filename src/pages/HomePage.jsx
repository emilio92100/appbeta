import {
  BadgeCheck,
  ChevronRight,
  FileSearch,
  Files,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const features = [
  {
    icon: FileSearch,
    title: 'Analyse intelligente',
    text: 'Détection du type de document et mise en avant des points vraiment utiles avant un achat.',
  },
  {
    icon: LayoutDashboard,
    title: 'Lecture ultra claire',
    text: 'Une présentation simple, structurée et agréable sur mobile, tablette et ordinateur.',
  },
  {
    icon: Files,
    title: 'Vision globale du bien',
    text: 'Regroupez plusieurs documents dans un dossier et obtenez une synthèse complète.',
  },
  {
    icon: ShieldCheck,
    title: 'Décision plus sereine',
    text: 'Repérez plus vite les charges, travaux, procédures ou signaux à surveiller.',
  },
]

const steps = [
  'Vous importez un document ou un dossier complet.',
  'Analymo détecte le document et extrait les éléments essentiels.',
  'Vous obtenez un résumé clair, des points clés et des alertes utiles.',
]

const cards = [
  'PV d’AG',
  'Règlement de copropriété',
  'Appels de charges',
  'Diagnostics techniques',
  'Carnet d’entretien',
  'Analyse multi-documents',
]

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge">
              <Sparkles size={16} /> SaaS immobilier nouvelle génération
            </div>
            <h1>
              Comprenez un bien immobilier <span>sans vous perdre dans les documents.</span>
            </h1>
            <p>
              Analymo simplifie la lecture des documents immobiliers pour aider les acheteurs à aller à l’essentiel,
              avec une expérience moderne, premium et parfaitement responsive.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button">
                Demander une démo <ChevronRight size={18} />
              </Link>
              <Link to="/tarifs" className="button button-secondary">
                Voir les tarifs
              </Link>
            </div>
            <div className="hero-metrics">
              <div className="metric-card">
                <strong>Mobile-first</strong>
                <span>UX pensée d’abord pour le téléphone</span>
              </div>
              <div className="metric-card">
                <strong>Lisibilité rapide</strong>
                <span>Les infos importantes remontent en premier</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="hero-dashboard-card floating-card">
              <div className="dashboard-topline">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <div className="dashboard-header">
                <div>
                  <p className="eyebrow">Analyse en cours</p>
                  <h3>PV d’AG — 32 pages</h3>
                </div>
                <div className="status-pill">82%</div>
              </div>
              <div className="progress-track">
                <div className="progress-value" />
              </div>
              <div className="dashboard-grid">
                <div className="insight-card primary-insight">
                  <p className="eyebrow">Alerte identifiée</p>
                  <strong>Ravalement voté</strong>
                  <span>Dépense potentielle à anticiper pour la copropriété.</span>
                </div>
                <div className="insight-card">
                  <p className="eyebrow">Charges</p>
                  <strong>Derniers appels repérés</strong>
                  <span>Les montants clés sont remontés dans le résumé.</span>
                </div>
                <div className="insight-card">
                  <p className="eyebrow">Clarté</p>
                  <strong>Résumé accessible</strong>
                  <span>Idéal pour un acheteur non expert.</span>
                </div>
              </div>
            </div>

            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-header">
                  <div>
                    <p className="eyebrow">Synthèse du bien</p>
                    <strong>3 signaux à surveiller</strong>
                  </div>
                  <div className="mini-badge">Simple</div>
                </div>
                <div className="phone-list">
                  <div className="phone-item phone-item-highlight">
                    <BadgeCheck size={16} /> Travaux votés détectés
                  </div>
                  <div className="phone-item">Charges de copropriété extraites</div>
                  <div className="phone-item">Résumé des points sensibles</div>
                  <div className="phone-item">Lecture optimisée pour mobile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Fonctionnalités"
            title="Une expérience SaaS élégante, simple et rassurante"
            description="Tout est conçu pour rendre l’analyse plus fluide et plus compréhensible, quel que soit l’écran utilisé."
          />
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={feature.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container two-col-grid">
          <div>
            <SectionTitle
              badge="Comment ça marche"
              title="Un parcours simple, rapide et moderne"
              description="Pas besoin d’être expert en immobilier. Analymo reformule les documents pour vous aider à décider plus sereinement."
            />
            <div className="steps-list">
              {steps.map((step, index) => (
                <div key={step} className="step-card">
                  <div className="step-index">0{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stack-card">
            <div className="stack-card-inner">
              <p className="eyebrow">Documents pris en charge</p>
              <h3>Tout est centralisé dans une seule interface</h3>
              <div className="tag-cloud">
                {cards.map((card) => (
                  <span key={card} className="tag-chip">
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <p className="section-badge">Prêt à lancer Analymo ?</p>
            <h2>Une base de site propre, premium et prête pour GitHub</h2>
            <p>
              Cette structure peut ensuite être branchée à Supabase, Stripe, votre formulaire de contact et votre future authentification réelle.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="button">
              Nous contacter
            </Link>
            <Link to="/connexion" className="button button-secondary">
              Voir la page connexion
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
