import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileText, SearchCheck, Users, Building2, BadgeCheck, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

const steps = [
  {
    number: "01",
    title: "Déposez vos documents",
    text: "Importez facilement vos PV d’AG, règlements de copropriété, appels de charges ou diagnostics dans un espace simple et sécurisé.",
  },
  {
    number: "02",
    title: "Analymo détecte les points clés",
    text: "L’outil met en avant les éléments importants, les signaux de vigilance et les sujets à comprendre avant de vous engager.",
  },
  {
    number: "03",
    title: "Obtenez une lecture claire",
    text: "Recevez une restitution lisible, structurée et pensée pour vous aider à décider avec plus de sérénité.",
  },
];

const reasons = [
  {
    icon: <SearchCheck className="h-6 w-6" />,
    title: "Voir ce qui compte vraiment",
    text: "Analymo aide à faire ressortir les informations essentielles dans des documents souvent longs, techniques ou dispersés.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Sécuriser votre achat",
    text: "Repérez plus vite les zones de vigilance avant de signer, pour acheter avec davantage de recul et de confiance.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Gagner du temps",
    text: "Au lieu de lire seul des dizaines de pages parfois difficiles à interpréter, vous obtenez une lecture plus directe et structurée.",
  },
];

const audiences = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Primo-accédants",
    text: "Pour les acheteurs qui veulent comprendre avant d’acheter, sans jargon et sans se sentir perdus.",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Investisseurs",
    text: "Pour ceux qui veulent aller plus vite dans l’analyse d’un dossier et repérer plus facilement les points sensibles.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Professionnels",
    text: "Pour les acteurs de l’immobilier qui souhaitent fluidifier la lecture documentaire et gagner en efficacité.",
  },
];

const reviews = [
  {
    name: "Sophie M.",
    role: "Acheteuse",
    text: "J’avais du mal à savoir quoi regarder dans les documents. La présentation était claire et rassurante.",
  },
  {
    name: "Thomas R.",
    role: "Investisseur",
    text: "J’aime la simplicité de lecture. On va droit aux points utiles, sans perdre du temps dans des dizaines de pages.",
  },
  {
    name: "Claire D.",
    role: "Primo-accédante",
    text: "Très bon ressenti. L’outil donne une impression de contrôle avant un achat important.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06141d] text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#0f3d57]/35 blur-3xl" />
        <div className="absolute right-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#1f6a8a]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#0f3d57]/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06141d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Analymo" className="h-11 w-auto md:h-12" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#pourquoi" className="text-sm text-white/75 transition hover:text-white">Pourquoi Analymo</a>
            <a href="#pour-qui" className="text-sm text-white/75 transition hover:text-white">Pour qui</a>
            <a href="#etapes" className="text-sm text-white/75 transition hover:text-white">Étapes</a>
            <a href="#avis" className="text-sm text-white/75 transition hover:text-white">Avis</a>
            <a href="#contact" className="text-sm text-white/75 transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/connexion"
              className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 transition hover:border-white/30 hover:bg-white/5 md:inline-flex"
            >
              Connexion
            </a>
            <a
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f6a8a] px-4 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(31,106,138,0.35)] transition hover:bg-[#245f79]"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:px-8 md:pt-24">
        <motion.div initial="hidden" animate="show" className="max-w-2xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-[#2e5b72] bg-[#0c2430] px-4 py-2 text-sm text-[#9bc0d2]"
          >
            Analyses intelligentes de documents immobiliers
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Analysez vos documents.
            <span className="mt-2 block text-[#8eb7cb]">
              Sécurisez votre achat immobilier.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-8 text-white/72"
          >
            Analymo aide à lire plus clairement les documents immobiliers complexes
            pour mieux comprendre un dossier, repérer les points sensibles et avancer
            avec plus de confiance.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f6a8a] px-6 py-4 text-base font-medium text-white shadow-[0_16px_35px_rgba(31,106,138,0.35)] transition hover:bg-[#245f79]"
            >
              Découvrir Analymo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-base text-white/90 transition hover:bg-white/8"
            >
              Nous contacter
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#1f6a8a]/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="rounded-[28px] border border-white/10 bg-[#081b25] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/55">Analyse en cours</p>
                  <p className="mt-1 text-lg font-medium">PV d’AG · 32 pages</p>
                </div>
                <div className="rounded-full border border-[#2e5b72] bg-[#0f2a36] px-3 py-1 text-sm text-[#8eb7cb]">
                  87%
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#2c6b86] to-[#82a9bc]"
                />
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-[#2b5568] bg-[#0d2430] p-4">
                  <p className="text-sm text-[#8eb7cb]">Point détecté</p>
                  <p className="mt-1 text-base font-medium text-white">
                    Sujet de travaux à surveiller
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Un élément important du dossier ressort clairement pour faciliter votre lecture avant décision.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm text-white/50">Lecture simplifiée</p>
                    <p className="mt-1 font-medium">Résumé structuré</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm text-white/50">Lecture assistée</p>
                    <p className="mt-1 font-medium">Vigilances mises en avant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="pourquoi" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Pourquoi Analymo ?</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 130 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-4 h-[3px] rounded-full bg-[#3b7a97]"
          />
          <p className="mt-6 text-lg leading-8 text-white/68">
            Une approche plus claire, plus fluide et plus rassurante pour comprendre
            les documents qui accompagnent un achat immobilier.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
            >
              <div className="inline-flex rounded-2xl border border-[#2e5b72] bg-[#0d2430] p-3 text-[#8eb7cb]">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/68">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pour-qui" className="border-y border-white/8 bg-[#071922] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Pour qui Analymo ?</h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Analymo s’adresse à tous ceux qui veulent comprendre un dossier
              immobilier plus rapidement et avec plus de clarté.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="inline-flex rounded-2xl border border-[#2e5b72] bg-[#0d2430] p-3 text-[#8eb7cb]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="etapes" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Les étapes</h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            Un parcours simple, pensé pour rester lisible sur ordinateur, tablette et téléphone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7"
            >
              <div className="text-sm font-medium tracking-[0.22em] text-[#7ea9be]">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 leading-7 text-white/68">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="avis" className="border-y border-white/8 bg-[#071922] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Ils donnent leur avis</h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Une expérience pensée pour rassurer, clarifier et faire gagner du temps.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-lg leading-8 text-white/78">
                  “{review.text}”
                </p>
                <div className="mt-6">
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-[#8eb7cb]">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h2 className="text-3xl font-semibold md:text-4xl">Contactez-nous</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
              Vous souhaitez en savoir plus sur Analymo, suivre le lancement ou poser une question ?
              Écrivez-nous.
            </p>

            <div className="mt-8 space-y-4 text-white/78">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#8eb7cb]" />
                <span>contact@analymo.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#8eb7cb]" />
                <span>Réponse rapide par email</span>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#081b25] p-8 md:p-10">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/60">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-white/30 focus:border-[#3d6f87]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">Email</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-white/30 focus:border-[#3d6f87]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">Message</label>
                <textarea
                  rows="5"
                  placeholder="Votre message"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none placeholder:text-white/30 focus:border-[#3d6f87]"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#1f6a8a] px-6 py-4 text-base font-medium text-white shadow-[0_14px_34px_rgba(31,106,138,0.35)] transition hover:bg-[#245f79]"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#05141c]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <img src="/logo.png" alt="Analymo" className="h-10 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
              Analymo aide à rendre la lecture documentaire immobilière plus claire,
              plus fluide et plus rassurante avant une décision d’achat.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/55">
            <a href="/">Accueil</a>
            <a href="/tarifs">Tarifs</a>
            <a href="/contact">Contact</a>
            <a href="/connexion">Connexion</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
