import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  FileSearch,
  Building2,
  Users,
  BadgeCheck,
  CheckCircle2,
  Star,
  Mail,
  Phone,
  Sparkles,
  ScanSearch,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const reasons = [
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Comprendre plus vite",
    text: "Analymo met en avant les éléments utiles dans des documents immobiliers parfois longs, techniques ou mal structurés.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Acheter avec plus de sécurité",
    text: "L’objectif est de vous aider à mieux repérer les points de vigilance avant une décision importante.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Gagner en clarté",
    text: "Une présentation plus lisible, plus moderne et plus rassurante pour avancer sans vous sentir perdu.",
  },
];

const audiences = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Primo-accédants",
    text: "Pour celles et ceux qui achètent pour la première fois et veulent comprendre sans jargon.",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Investisseurs",
    text: "Pour aller plus vite dans la lecture d’un dossier et identifier les sujets sensibles plus efficacement.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Professionnels",
    text: "Pour fluidifier la lecture documentaire et gagner du temps dans l’analyse de plusieurs biens.",
  },
];

const steps = [
  {
    number: "01",
    title: "Importez vos documents",
    text: "Déposez vos PV d’AG, règlements de copropriété, appels de charges, diagnostics ou autres documents.",
  },
  {
    number: "02",
    title: "Analymo analyse le dossier",
    text: "Les points importants, zones d’attention et informations utiles sont identifiés et réorganisés.",
  },
  {
    number: "03",
    title: "Recevez une lecture claire",
    text: "Vous obtenez un rendu plus lisible, plus synthétique et plus rassurant avant de prendre votre décision.",
  },
];

const reviews = [
  {
    name: "Sophie M.",
    role: "Acheteuse",
    text: "J’avais besoin d’un outil qui m’aide à comprendre rapidement. La présentation est claire, rassurante et beaucoup plus moderne.",
  },
  {
    name: "Thomas R.",
    role: "Investisseur",
    text: "On sent une vraie logique produit. C’est fluide, propre, et surtout ça va directement à l’essentiel.",
  },
  {
    name: "Claire D.",
    role: "Primo-accédante",
    text: "J’aime le fait de ne pas être noyée dans les documents. L’interface donne confiance et fait gagner du temps.",
  },
];

const metrics = [
  { value: "Lecture plus claire", label: "des documents immobiliers" },
  { value: "UX moderne", label: "pensée ordinateur, tablette, mobile" },
  { value: "Points clés visibles", label: "plus rapidement dans le dossier" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute right-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute bottom-[10%] left-[45%] h-[260px] w-[260px] rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Analymo" className="h-11 w-auto md:h-12" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#pourquoi" className="text-sm text-slate-600 transition hover:text-slate-900">
              Pourquoi Analymo
            </a>
            <a href="#pour-qui" className="text-sm text-slate-600 transition hover:text-slate-900">
              Pour qui
            </a>
            <a href="#etapes" className="text-sm text-slate-600 transition hover:text-slate-900">
              Étapes
            </a>
            <a href="#avis" className="text-sm text-slate-600 transition hover:text-slate-900">
              Avis
            </a>
            <a href="#contact" className="text-sm text-slate-600 transition hover:text-slate-900">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/connexion"
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
            >
              Connexion
            </a>
            <a
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:pt-20">
        <motion.div initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-sky-700 shadow-sm"
          >
            <ScanSearch className="h-4 w-4" />
            Analyse intelligente de documents immobiliers
          </motion.div>

          <motion.h1
            custom={0.08}
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-900 md:text-6xl"
          >
            Analysez vos documents.
            <span className="mt-2 block text-sky-800">
              Sécurisez votre achat immobilier.
            </span>
          </motion.h1>

          <motion.p
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Analymo vous aide à comprendre plus rapidement les documents
            immobiliers importants, à repérer les points de vigilance et à avancer
            avec plus de clarté avant d’acheter.
          </motion.p>

          <motion.div
            custom={0.24}
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-medium text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Découvrir Analymo
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Nous contacter
            </a>
          </motion.div>

          <motion.div
            custom={0.32}
            variants={fadeUp}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {metrics.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <p className="text-lg font-semibold tracking-tight text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-sky-200/50 via-cyan-100/30 to-transparent blur-2xl" />

          <div className="relative rounded-[34px] border border-white/80 bg-white/75 p-4 shadow-[0_40px_100px_rgba(15,23,42,0.10)] backdrop-blur-xl">
            <div className="rounded-[28px] border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Analyse en cours</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">PV d’AG · 32 pages</p>
                </div>
                <div className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                  87%
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500"
                />
              </div>

              <div className="mt-6 grid gap-4">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5"
                >
                  <p className="text-sm font-medium text-sky-700">Point détecté</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Sujet important à vérifier avant décision
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Une lecture structurée permet de faire ressortir plus vite les
                    sujets qui peuvent avoir un impact sur votre achat.
                  </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm text-slate-500">Résumé simplifié</p>
                    <p className="mt-1 font-semibold text-slate-900">Lecture plus claire</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm text-slate-500">Repérage rapide</p>
                    <p className="mt-1 font-semibold text-slate-900">Zones de vigilance</p>
                  </motion.div>
                </div>

                <div className="grid gap-3">
                  {[
                    "Travaux évoqués dans les décisions récentes",
                    "Informations mieux ordonnées",
                    "Lecture plus rassurante avant achat",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-slate-700">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="grid gap-4 rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.06)] md:grid-cols-4 md:p-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">Pensé pour</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Un achat plus serein</p>
          </div>
          {["PV d’AG", "Règlement de copropriété", "Appels de charges"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
            >
              <span className="font-medium text-slate-700">{item}</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </div>
      </section>

      <section id="pourquoi" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Pourquoi Analymo ?
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 150 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
          />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Une interface plus premium, plus claire et plus rassurante pour mieux
            comprendre les documents qui accompagnent un achat immobilier.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index * 0.08}
              className="rounded-[30px] border border-white/80 bg-white/80 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            >
              <div className="inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pour-qui" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 rounded-[36px] bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.06)] md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-sky-700">
              Pour qui Analymo ?
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Une solution pensée pour plusieurs profils.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Que vous achetiez pour la première fois, que vous investissiez ou
              que vous travailliez déjà dans l’immobilier, Analymo apporte une
              lecture plus structurée du dossier.
            </p>
          </div>

          <div className="grid gap-5">
            {audiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.08}
                className="rounded-[28px] border border-white bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="etapes" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Les étapes
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Un parcours simple, fluide et élégant, pensé pour ordinateur, tablette et téléphone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index * 0.08}
              className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            >
              <div className="text-sm font-semibold tracking-[0.25em] text-sky-600">
                {step.number}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.05}
            className="rounded-[34px] border border-white/80 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.06)]"
          >
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-700">
              Une lecture plus lisible
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">
              Un rendu pensé pour mettre l’essentiel en avant.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              L’idée n’est pas seulement d’analyser un document, mais de le
              présenter d’une manière plus intelligible, plus synthétique et plus
              agréable à consulter.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Synthèse plus claire du dossier",
                "Points importants visibles plus rapidement",
                "Présentation plus moderne et rassurante",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.12}
            className="rounded-[34px] border border-slate-100 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
          >
            <p className="text-sm text-sky-200">Expérience produit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Une page d’accueil plus vivante, plus premium, plus dense.
            </h2>
            <p className="mt-5 text-lg leading-8 text-sky-50/85">
              Cette nouvelle version remplit mieux l’espace, apporte plus de
              contenu, plus de respiration et une sensation plus startup / SaaS.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Animations douces au scroll",
                "Blocs plus riches",
                "Palette claire inspirée du logo",
                "Structure plus premium",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                  <Star className="h-4 w-4 text-sky-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="avis" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Ils donnent leur avis
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Une expérience pensée pour clarifier, rassurer et faire gagner du temps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index * 0.08}
              className="rounded-[30px] border border-white/80 bg-white/85 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-5 flex gap-1 text-amber-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>

              <p className="text-lg leading-8 text-slate-700">
                “{review.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-sky-700">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 rounded-[36px] border border-white/80 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.06)] md:grid-cols-[0.95fr_1.05fr] md:p-12">
          <div>
            <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-700">
              Contact
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Parlons d’Analymo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Une question, un besoin, une envie d’en savoir plus sur le produit ?
              Tu peux utiliser ce bloc pour préparer une prise de contact propre.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="h-5 w-5 text-sky-600" />
                <span>contact@analymo.fr</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="h-5 w-5 text-sky-600" />
                <span>Réponse rapide par email</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-100 bg-slate-50 p-6 md:p-8">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-500">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-500">Email</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-500">Message</label>
                <textarea
                  rows="5"
                  placeholder="Votre message"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-base font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-white/70 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-8">
          <div className="max-w-md">
            <img src="/logo.png" alt="Analymo" className="h-10 w-auto" />
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Analymo aide à rendre la lecture documentaire immobilière plus claire,
              plus fluide et plus rassurante avant une décision d’achat.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600">
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
