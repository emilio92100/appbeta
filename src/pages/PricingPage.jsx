import { Check } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const plans = [
  {
    name: 'Découverte',
    price: '9€',
    subtitle: 'Pour tester Analymo simplement',
    highlight: false,
    features: ['1 analyse simple', 'Lecture claire du document', 'Affichage mobile optimisé', 'Support email'],
  },
  {
    name: 'Essentiel',
    price: '29€',
    subtitle: 'Le meilleur équilibre pour un achat',
    highlight: true,
    features: ['5 analyses', 'Analyse multi-documents', 'Synthèse du bien', 'Points sensibles mis en avant'],
  },
  {
    name: 'Pro',
    price: '79€',
    subtitle: 'Pour utilisateurs intensifs ou pros',
    highlight: false,
    features: ['20 analyses', 'Tableau de bord complet', 'Priorité support', 'Idéal pour activité régulière'],
  },
]

export default function PricingPage() {
  return (
    <main className="page-main">
      <section className="section page-hero">
        <div className="container narrow-container">
          <SectionTitle
            badge="Tarifs"
            title="Des offres simples, lisibles et adaptées à un SaaS moderne"
            description="Tu pourras ensuite ajuster facilement les prix, les crédits et le wording selon ton modèle économique final."
            center
          />
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}>
              {plan.highlight ? <div className="pricing-badge">Le plus choisi</div> : null}
              <h3>{plan.name}</h3>
              <div className="pricing-price">{plan.price}</div>
              <p className="pricing-subtitle">{plan.subtitle}</p>
              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <div key={feature} className="pricing-feature">
                    <Check size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`button ${plan.highlight ? '' : 'button-secondary'} full-width-button`}>
                Choisir cette offre
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
