import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, i * 150);
    });
  }, []);

  return (
    <div className="bg-[#0B1D26] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <img src="/logo.png" alt="logo" className="h-10" />
        <div className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-blue-400">Accueil</a>
          <a href="#" className="hover:text-blue-400">Fonctionnalités</a>
          <a href="#" className="hover:text-blue-400">Avis</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded-lg">Connexion</button>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold fade-in opacity-0 translate-y-10 transition-all duration-700">
          Analysez vos documents immobiliers <br />
          <span className="text-blue-400">et sécurisez votre achat</span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-xl mx-auto fade-in opacity-0 translate-y-10 transition-all duration-700">
          Analymo vous permet de comprendre rapidement les documents complexes
          et d’éviter les mauvaises surprises avant d’acheter.
        </p>
        <button className="mt-8 bg-blue-500 px-6 py-3 rounded-xl text-lg hover:bg-blue-600 transition fade-in opacity-0 translate-y-10">
          Commencer l’analyse
        </button>
      </section>

      {/* POURQUOI */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold relative inline-block">
          Pourquoi Analymo ?
          <span className="block h-1 bg-blue-400 mt-2 w-0 animate-[grow_1s_forwards]"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            "Comprenez instantanément vos documents",
            "Détectez les risques cachés",
            "Prenez une décision en toute confiance"
          ].map((text, i) => (
            <div key={i} className="bg-[#112B36] p-6 rounded-xl shadow-lg">
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-20 px-6 text-center bg-[#08161C]">
        <h2 className="text-3xl font-bold">Pour qui ?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          {[
            "Acheteurs immobiliers",
            "Investisseurs",
            "Professionnels de l’immobilier"
          ].map((item, i) => (
            <div key={i} className="p-6 border border-gray-700 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ETAPES */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">Comment ça marche ?</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {[
            "Upload vos documents",
            "Analyse automatique par IA",
            "Recevez un rapport clair"
          ].map((step, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-blue-400 mb-4">{i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVIS */}
      <section className="py-20 px-6 bg-[#08161C] text-center">
        <h2 className="text-3xl font-bold">Ils nous font confiance</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          {[
            "Grâce à Analymo, j’ai évité un achat risqué.",
            "Simple, rapide et très efficace.",
            "Un outil indispensable avant d’acheter."
          ].map((avis, i) => (
            <div key={i} className="p-6 bg-[#112B36] rounded-xl">
              "{avis}"
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-4">Une question ? Contactez-nous</p>

        <input
          type="email"
          placeholder="Votre email"
          className="mt-6 px-4 py-3 rounded-lg w-72 text-black"
        />
        <br />
        <button className="mt-4 bg-blue-500 px-6 py-3 rounded-xl">
          Envoyer
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700">
        © Analymo - Tous droits réservés
      </footer>

    </div>
  );
}
