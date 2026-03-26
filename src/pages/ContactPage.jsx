import SectionTitle from '../components/SectionTitle'

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="section page-hero">
        <div className="container contact-layout">
          <div>
            <SectionTitle
              badge="Contact"
              title="Parlons de ton projet Analymo"
              description="Cette page est prête pour être reliée plus tard à Formspree, Resend, Supabase ou n’importe quel backend email."
            />
            <div className="contact-info-card">
              <div>
                <strong>Email</strong>
                <p>hello@analymo.fr</p>
              </div>
              <div>
                <strong>Ville</strong>
                <p>Paris, France</p>
              </div>
              <div>
                <strong>Réponse</strong>
                <p>Nous revenons vers vous rapidement.</p>
              </div>
            </div>
          </div>

          <form className="form-card">
            <div className="form-row">
              <label>Nom</label>
              <input type="text" placeholder="Votre nom" />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" placeholder="Votre email" />
            </div>
            <div className="form-row">
              <label>Sujet</label>
              <input type="text" placeholder="Ex : demande de démo" />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea rows="6" placeholder="Expliquez votre besoin..." />
            </div>
            <button type="button" className="button full-width-button">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
