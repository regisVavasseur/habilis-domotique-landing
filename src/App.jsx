import React, { useState, useRef } from 'react';
import {
  Menu,
  X,
  Check,
  ArrowRight,
  Shield,
  Zap,
  Smartphone,
  Thermometer,
  Lock,
  Users,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Sparkles,
  Lightbulb,
  ThermometerSun,
  Gauge,
  ShieldCheck,
  Home,
  CheckCircle
} from 'lucide-react';

import LogoHabilis from "./components/LogoHabilis"; 


const iconMap = {
  home: Home,
  light: Lightbulb,
  heat: ThermometerSun,
  security: Shield,
  securityPlus: ShieldCheck,
  energy: Gauge,
  premium: Sparkles,
};

const domotiquePacks = [
  {
    title: "Pack Installation Seul",
    price: "190€",
    subtitle: "Si vous souhaitez vous débrouillez seul",
    highlight: false,
    icon: "home",
    features: [
      "Home Assistant inclus",
      "Dongle Zigbee PRO inclus",
      "Installation & configuration complètes",
      "Sécurisation & accès à distance (VPN)",
      "Dashboard personnalisé",
    ],
  },
  {
    title: "Pack Lumière 4 Zones",
    price: "450€",
    subtitle: "Modernisez vos éclairages",
    highlight: true,
    icon: "light",
    features: [
      "4 modules Zigbee derrière interrupteurs",
      "Pilotage smartphone",
      "Scénarios lumière intelligents",
      "Dashboard Lumière dédié",
      "Installation clé en main",
    ],
  },
  {
    title: "Pack Chauffage Intelligent",
    price: "690€",
    subtitle: "Pour radiateurs électriques",
    highlight: false,
    icon: "heat",
    features: [
      "4 modules fil pilote Zigbee",
      "Gestion présence / horaires",
      "Modes Nuit, Confort, Éco",
      "Suivi de température pièce par pièce",
      "Économies d’énergie ciblées",
    ],
  },
  {
    title: "Pack Sécurité",
    price: "690€",
    subtitle: "Premier niveau de protection",
    highlight: false,
    icon: "security",
    features: [
      "4 détecteurs d’ouverture Zigbee",
      "1 sirène intérieure",
      "Modes Armé / Nuit / Absent",
      "Notifications immédiates sur smartphone",
      "Journal des événements",
    ],
  },
  {
    title: "Pack Sécurité+",
    price: "990€",
    subtitle: "Protection renforcée",
    highlight: false,
    icon: "securityPlus",
    features: [
      "Pack Sécurité complet",
      "1 sirène extérieure",
      "1 caméra avec IA locale",
      "Détection personnes / véhicules",
      "Scénarios dissuasion lumière + sirène",
    ],
  },
  {
    title: "Pack Énergie",
    price: "490€",
    subtitle: "Suivi & optimisation",
    highlight: false,
    icon: "energy",
    features: [
      "Module Linky (TIC) intégré",
      "Dashboard consommation en temps réel",
      "Coût journalier / mensuel",
      "Alertes dépassement",
      "Conseils d’optimisation ciblés",
    ],
  },
  {
    title: "Pack Premium Maison",
    price: "1 990€",
    subtitle: "Lumière + Chauffage + Sécurité",
    highlight: false,
    icon: "premium",
    features: [
      "4 zones Lumière & 4 zones Chauffage",
      "Sécurité complète & Suivi Énergie",
      "Scénarios Maison / Travail / Vacances",
      "Dashboard par pièce & vues mobiles",
      "Accompagnement personnalisé",
    ],
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState('');
  const [currentPackIndex, setCurrentPackIndex] = useState(0);
  const packsSliderRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleChoosePack = (packName) => {
    setSelectedPack(`Je suis intéressé par le ${packName}.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackIndex = (index) => {
    if (!packsSliderRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, domotiquePacks.length - 1));
    const children = packsSliderRef.current.children;
    const target = children[clampedIndex];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setCurrentPackIndex(clampedIndex);
    }
  };

  const handleBulletClick = (index) => {
    scrollToPackIndex(index);
  };

  return (
<div className="font-sans text-slate-800 bg-slate-50 min-h-screen w-full max-w-[100vw] overflow-x-hidden">      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <LogoHabilis />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 font-medium">Services</button>
              <button onClick={() => scrollToSection('packs')} className="text-slate-600 hover:text-blue-600 font-medium">Tarifs</button>
              <button onClick={() => scrollToSection('pourquoi')} className="text-slate-600 hover:text-blue-600 font-medium">Pourquoi HA ?</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors">
                Devis Gratuit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-blue-600 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-gray-50 w-full text-left">Services</button>
              <button onClick={() => scrollToSection('packs')} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-gray-50 w-full text-left">Tarifs</button>
              <button onClick={() => scrollToSection('pourquoi')} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-gray-50 w-full text-left">Pourquoi HA ?</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md mt-4">Demander un devis</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-24">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        {/* CONTENU */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Votre maison, <span className="text-blue-400">en plus malin.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Installation professionnelle de domotique <strong>Home Assistant</strong>. 
              Pilotez votre chauffage, sécurisez votre foyer et économisez de l'énergie, 
              sans abonnement et sans cloud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-[60%] mx-auto sm:w-auto sm:mx-0">
              <button
                onClick={() => scrollToSection('packs')}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Voir les packs <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition flex items-center justify-center"
              >
                Découvrir les services
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-100">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" /> Données 100% locales
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" /> Sans abonnement
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" /> Économies d'énergie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Ce que nous rendons intelligent</h2>
            <p className="mt-4 text-slate-600">Une installation unifiée pour toute la maison.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Zap className="w-8 h-8 text-yellow-500" />}
              title="Économies d'Énergie"
              desc="Suivi conso en temps réel. Coupure automatique du chauffage si une fenêtre est ouverte. Optimisation Linky."
            />
            <ServiceCard 
              icon={<Shield className="w-8 h-8 text-red-500" />}
              title="Sécurité Avancée"
              desc="Caméras avec détection de personne, simulation de présence pendant vos vacances, alerte fuite d'eau."
            />
            <ServiceCard 
              icon={<Thermometer className="w-8 h-8 text-orange-500" />}
              title="Confort Thermique"
              desc="Programmation intelligente des radiateurs pièce par pièce. Ne chauffez plus une maison vide."
            />
            <ServiceCard 
              icon={<Smartphone className="w-8 h-8 text-blue-500" />}
              title="Contrôle Unique"
              desc="Fini les 15 applications différentes. Une seule interface (PC, Tablette, Mobile) pour tout piloter."
            />
            <ServiceCard 
              icon={<Lock className="w-8 h-8 text-slate-700" />}
              title="Données Privées"
              desc="Contrairement à Google ou Alexa, tout reste chez vous. Votre vie privée n'est pas à vendre."
            />
            <ServiceCard 
              icon={<Users className="w-8 h-8 text-purple-500" />}
              title="Scénarios de Vie"
              desc="Mode Cinéma, Mode Nuit, Mode Télétravail... La maison s'adapte à votre rythme de vie."
            />
          </div>
        </div>
      </section>

      {/* Why HA Section */}
      <section id="pourquoi" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Pourquoi Home Assistant ?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Liberté Totale</h3>
                  <p className="text-slate-300">Compatible avec +2500 marques (Philips Hue, Somfy, Tuya, Ikea...). Vous n'êtes pas enfermé chez un seul fabricant.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pérennité</h3>
                  <p className="text-slate-300">Open source et mis à jour mensuellement par une communauté mondiale. Votre système ne deviendra pas obsolète.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Locale</h3>
                  <p className="text-slate-300">Vos automatismes fonctionnent même si Internet est coupé. C'est plus rapide et plus fiable.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte dashboard HA */}
          <div className="md:w-1/2 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
            <div className="aspect-video bg-slate-900 rounded-lg border border-slate-700 mb-4 overflow-hidden relative">
              {/* Bandeau haut */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="ml-3 text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Tableau de bord Habilis
                  </span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
                  En ligne
                </span>
              </div>

              {/* Contenu */}
              <div className="p-4 grid grid-cols-2 gap-4 text-xs text-slate-200">
                {/* Carte 1 */}
                <div className="bg-slate-800/70 rounded-lg p-3 border border-slate-700/70 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-300">Température</span>
                    <Thermometer className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="text-lg font-semibold">21.3°C</div>
                  <p className="text-[11px] text-slate-400">Salon · Confort</p>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-blue-500"></div>
                  </div>
                </div>

                {/* Carte 2 */}
                <div className="bg-slate-800/70 rounded-lg p-3 border border-slate-700/70 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-300">Énergie aujourd'hui</span>
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-lg font-semibold">7.4 kWh</div>
                  <p className="text-[11px] text-slate-400">-18% vs. semaine dernière</p>
                  <div className="flex gap-1 mt-1">
                    {[40, 55, 30, 65, 50].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-slate-700 rounded-t-sm overflow-hidden flex items-end"
                        style={{ height: '40px' }}
                      >
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-cyan-400"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carte 3 : Sécurité */}
                <div className="bg-slate-800/70 rounded-lg p-3 border border-slate-700/70 col-span-2 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] font-medium text-slate-300">Sécurité</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Toutes les portes sont fermées. Aucune anomalie détectée.
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
                    Maison sécurisée
                  </span>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-slate-400 italic">
              Exemple de tableau de bord personnalisé Habilis
            </p>
          </div>
        </div>
      </section>

      <section id="zone-intervention" className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Notre Zone d'Intervention 🗺️
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Basés à <strong className="font-extrabold text-blue-600">Toul (54)</strong>, nous assurons la conception et l'installation de votre système domotique dans tout le <strong className="font-extrabold text-blue-600">Grand Est</strong>.
          </p>

          {/* Visualisation simplifiée des villes principales */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-600">Toul</span>
              <p className="text-sm text-slate-500">(Siège)</p>
            </div>
            <span className="text-3xl text-slate-300 hidden sm:inline">|</span>
            <div className="text-center">
              <span className="text-4xl font-bold text-slate-700">Nancy</span>
            </div>
            <span className="text-3xl text-slate-300 hidden sm:inline">|</span>
            <div className="text-center">
              <span className="text-4xl font-bold text-slate-700">Metz</span>
            </div>
            <span className="text-3xl text-slate-300 hidden sm:inline">|</span>
            <div className="text-center">
              <span className="text-4xl font-bold text-slate-700">Épinal</span>
            </div>
          </div>
          
          <p className="mt-10 text-base text-slate-700">
            Un projet dans une autre ville du Grand Est ? <a onClick={() => scrollToSection('contact')} className="text-blue-600 font-semibold cursor-pointer hover:underline">Contactez-nous</a> pour une étude personnalisée.
          </p>
        </div>
      </section>

      {/* 🔢 Section Statistiques */}
      <section className="py-16 bg-slate-900 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl font-bold text-white">Pourquoi nos clients nous choisissent</h2>
            <p className="mt-4 text-blue-600">
              Une approche transparente, sans abonnement, centrée sur votre confort et votre confidentialité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              title="0"
              unit="abonnement imposé"
              desc="Vous gardez la maîtrise de vos équipements. Aucun coût caché."
            />
            <StatCard
              title="100%"
              unit="données chez vous"
              desc="Votre maison reste privée. Rien n’est envoyé vers des serveurs tiers."
            />
            <StatCard
              title="Jusqu’à 30%"
              unit="d’économies possibles"
              desc="En optimisant chauffage, lumières et scénarios de présence."
            />
            <StatCard
              title="3"
              unit="piliers couverts"
              desc="Confort, sécurité, énergie réunis dans une seule interface."
            />
          </div>
        </div>
      </section>


      {/* Pricing Packs - CARROUSEL */}
      <section id="packs" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Nos Packs Installation</h2>
            <p className="mt-4 text-slate-600">
              Des formules claires, conçues pour faire évoluer votre maison étape par étape.
            </p>
          </div>

          {/* Info carrousel */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-slate-500">
              Faites défiler horizontalement pour découvrir les packs.
            </p>
          </div>

          {/* Carrousel */}
          <div
            ref={packsSliderRef}
            className="flex gap-6 overflow-x-scroll overflow-y-hidden pb-6 pt-2 snap-x snap-mandatory scrollbar-hide lg:scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 w-full max-w-full"          >
            {domotiquePacks.map((pack) => {
              const Icon = iconMap[pack.icon];
              const isInstallationPack = pack.title === "Pack Installation Seul";
              return (
                <article
                  key={pack.title}
                  className={`
                    group snap-start
                    min-w-[80%] sm:min-w-[320px] md:min-w-[340px]
                    flex-shrink-0
                    rounded-2xl border bg-white p-6 shadow-sm
                    transition-transform duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10
                    ${pack.highlight ? "border-blue-500 shadow-md bg-gradient-to-b from-white to-blue-50" : "border-slate-200"}
                  `}
                >
                  {pack.highlight && (
                    <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                      <Sparkles className="h-3 w-3" />
                      Pack recommandé
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {pack.title}
                      </h3>
                      {pack.subtitle && (
                        <p className="text-xs text-slate-500">{pack.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    {/* BLOC GAUCHE : Prix + TTC */}
                    <div>
                      <span className="text-3xl font-bold text-slate-900">
                        {pack.price}
                      </span>
                      <span className="ml-1 text-sm text-slate-500">TTC</span>
                    </div>

                    {/* BLOC DROIT : Badge d'Inclusion */}
                    {!isInstallationPack && (
                      <div className="bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ml-4">
                        {/* Assurez-vous d'avoir CheckCircle importé (e.g., from 'lucide-react') */}
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span className="font-semibold whitespace-nowrap">Pack installation inclus</span>
                      </div>
                    )}
                  </div>

                  <ul className="mb-6 space-y-2 text-sm text-slate-600">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleChoosePack(pack.title)}
                    className={`
                      w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition
                      ${
                        pack.highlight
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }
                    `}
                  >
                    Demander ce pack
                  </button>
                </article>
              );
            })}
          </div>

          {/* Bullets */}
          <div className="mt-6 flex justify-center gap-2">
            {domotiquePacks.map((pack, index) => (
              <button
                key={pack.title}
                type="button"
                onClick={() => handleBulletClick(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentPackIndex
                    ? "w-6 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Voir ${pack.title}`}
              />
            ))}
          </div>

          {/* Option Tranquillité */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Besoin d'une maintenance mensuelle ?</p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <span className="font-bold text-blue-600">
                Option Tranquillité – 19€/mois
              </span>
              <span className="text-sm text-slate-600">
                Mises à jour contrôlées, sauvegardes Cloud, ajustement des scénarios & support prioritaire.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-600 italic mb-4">"J'avais peur que ce soit trop compliqué pour ma femme et moi. Au final, l'interface créée par Habilis est ultra simple. On appuie sur un bouton et la maison s'endort. Génial."</p>
              <div className="font-bold text-slate-900">- Marc & Sophie, Pavillon 120m²</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-600 italic mb-4">"L'investissement dans le pack chauffage a été rentabilisé en un hiver. Mes radiateurs ne chauffent plus inutilement quand j'aère les chambres."</p>
              <div className="font-bold text-slate-900">- Thomas, Appartement T3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Prêt à moderniser votre habitat ?</h2>
            <p className="mt-4 text-slate-400">Devis gratuit et sans engagement. Réponse sous 24h.</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
            <form
              className="space-y-6"
              action="https://formspree.io/f/xzzqyodj"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nom complet</label>
                  <input type="text" name="nom" className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="jean@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Téléphone</label>
                  <input type="phone" name="telephone" required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="01 02 03 04 05" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Type de logement</label>
                <select name="type_logement" className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition">
                  <option>Maison individuelle</option>
                  <option>Appartement</option>
                  <option>Construction neuve</option>
                  <option>Local professionnel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Votre projet (Packs, besoins...)</label>
                <textarea
                  rows="4"
                  name="projet"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Je souhaite contrôler mon chauffage et installer une alarme..."
                  value={selectedPack}
                  onChange={(e) => setSelectedPack(e.target.value)}
                ></textarea>
              </div>
              
              <input type="hidden" name="_subject" value="Nouvelle demande de devis HABILIS" />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition shadow-lg hover:shadow-blue-500/25">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoHabilis />
            </div>
            <p className="text-sm">
              Installation experte de solutions domotiques basées sur Home Assistant.
              Indépendance, local et vie privée.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@habilis-domotique.fr</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-pink-500 transition"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © 2024 Habilis Domotique. Tous droits réservés. Mentions Légales. CGV.
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition duration-300 border border-slate-100">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StatCard = ({ title, unit, desc }) => (
  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-3xl font-extrabold text-blue-600 mb-1">
      {title}
    </div>
    <div className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">
      {unit}
    </div>
    <p className="text-sm text-slate-600">
      {desc}
    </p>
  </div>
);

export default App;