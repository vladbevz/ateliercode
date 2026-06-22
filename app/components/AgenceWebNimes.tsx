'use client';

import Link from 'next/link';
import {
  MapPin, ArrowRight, Check, Euro, Clock, Zap,
  Star, Phone, Target,
  XCircle, Search, TrendingUp, Building2
} from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function AgenceWebNimesContent() {

  const villes = [
    { name: "Nîmes", dept: "Gard (30)" },
    { name: "Alès", dept: "Gard (30)" },
    { name: "Uzès", dept: "Gard (30)" },
    { name: "Bagnols-sur-Cèze", dept: "Gard (30)" },
    { name: "Beaucaire", dept: "Gard (30)" },
    { name: "Le Grau-du-Roi", dept: "Gard (30)" },
    { name: "Montpellier", dept: "Hérault (34)" },
    { name: "Avignon", dept: "Vaucluse (84)" },
  ];

  const plans = [
    {
      name: 'Site Vitrine',
      price: 'dès 499 €',
      pitch: 'Votre meilleur commercial — 24h/24.',
      features: ['4 à 6 pages sur mesure', 'SEO local optimisé', '1 mois de suivi', 'Livré en 7–10 jours'],
      dark: false,
    },
    {
      name: 'E-commerce',
      price: 'dès 990 €',
      pitch: 'Vendez en ligne dès demain.',
      features: ['Boutique Stripe complète', 'Catalogue & gestion stock', 'SEO e-commerce', 'Livré en 2–4 semaines'],
      dark: true,
    },
    {
      name: 'Application web',
      price: 'Sur devis',
      pitch: 'Un outil métier sur mesure.',
      features: ['React & Next.js sur mesure', 'Back-end, API, auth', 'Dashboard admin', 'Estimation gratuite'],
      dark: false,
    },
  ];

  return (
    <section className="relative bg-white">

      {/* ─── 1. HERO ─── */}
      <div className="min-h-screen flex items-center border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 text-center w-full">
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-6 animate-fade-up">
            Agence web locale · Nîmes — Gard (30)
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Agence web à Nîmes — qualité pro, prix accessible.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Les petites entreprises méritent un site web{' '}
            <span className="text-gray-900 font-semibold">aussi performant que les grandes</span>.
            Dès 499 €, livré en une semaine — sans compromis sur la qualité.
          </p>
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mt-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
            Dès 499 € · Livré en 7–15 jours · Score 95+/100
          </p>
        </div>
      </div>

      {/* ─── 2. LE PROBLÈME ─── */}
      <div className="border-b border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateIn className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-7">Le problème</p>
              <div className="border-l-4 border-gray-900 pl-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Les grandes agences facturent 2 000 à 5 000 €.
                  Le petit commerce du coin, lui, n&apos;a pas ce budget.
                </h2>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-sm text-gray-600 font-medium">
                  Sans site performant, vos clients potentiels vont chez le concurrent
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  score: '2 000 €',
                  unit: '+',
                  label: 'Prix moyen d\'une agence classique',
                  desc: 'Pour un site WordPress qui chargera en 4–6 secondes. Souvent sans SEO local et sans suivi.',
                },
                {
                  score: '3–6',
                  unit: ' s',
                  label: 'Temps de chargement WordPress moyen',
                  desc: '53 % des visiteurs quittent un site qui met plus de 3 secondes à charger.',
                },
                {
                  score: 'Page 4',
                  unit: '',
                  label: 'Où finissent la plupart des sites locaux',
                  desc: 'Moins de 1 % des internautes consultent la deuxième page. La page 4, personne ne la voit.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-lg"
                >
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-2xl font-bold text-gray-900 leading-none">{item.score}</span>
                    <span className="text-sm font-semibold text-gray-500">{item.unit}</span>
                  </div>
                  <div className="border-l border-gray-200 pl-4">
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>

      <div className="container mx-auto px-4">

        {/* ─── 3. NOTRE RÉPONSE ─── */}
        <div className="py-14 md:py-20">
          <AnimateIn className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Notre réponse</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Un site premium, à prix d&apos;artisan.
            </h2>
          </AnimateIn>

          <AnimateIn className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto" delay={100}>
            {[
              {
                icon: <Euro className="w-7 h-7" />,
                metric: 'Dès 299 €',
                title: 'Prix transparent',
                desc: 'Pas d\'abonnement caché, pas de surprise. Un tarif fixe annoncé avant de commencer — adapté au budget du petit commerce.',
                dark: false,
              },
              {
                icon: <Zap className="w-7 h-7" />,
                metric: '< 1 seconde',
                title: 'Performant & référencé',
                desc: 'Nos sites chargent 5× plus vite que WordPress. Google récompense la vitesse — vos clients vous trouvent en premier.',
                dark: true,
              },
              {
                icon: <Clock className="w-7 h-7" />,
                metric: '7 à 15 jours',
                title: 'Livraison rapide',
                desc: 'Pas de files d\'attente, pas d\'intermédiaires. Vous travaillez directement avec le développeur — votre site est en ligne vite.',
                dark: false,
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 md:p-10 hover:-translate-y-0.5 transition-all duration-200 ${
                  p.dark ? 'bg-gray-900' : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-14 h-14 rounded-md flex items-center justify-center mb-6 ${
                  p.dark ? 'bg-white/10 text-white' : 'bg-gray-900 text-white'
                }`}>
                  {p.icon}
                </div>
                <p className={`text-2xl font-bold mb-2 ${p.dark ? 'text-white' : 'text-gray-900'}`}>
                  {p.metric}
                </p>
                <h3 className={`text-lg font-bold mb-3 ${p.dark ? 'text-gray-200' : 'text-gray-900'}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${p.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {p.desc}
                </p>
              </div>
            ))}
          </AnimateIn>
        </div>

        {/* ─── 4. POUR QUI ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Pour qui ?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Fait pour les petites entreprises de Nîmes.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Artisans, commerçants, professions libérales, TPE — votre activité mérite une présence en ligne qui travaille pour vous.
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" delay={100}>
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Artisans & commerçants',
                desc: 'Plombier, boulanger, fleuriste, coiffeur — un site vitrine simple et efficace pour être trouvé sur Google Maps et générer des appels.',
                examples: ['Devis en ligne', 'Photos de réalisations', 'Avis clients'],
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Professions libérales',
                desc: 'Médecin, avocat, consultant, coach — une présence digitale élégante qui inspire confiance et capte de nouveaux patients ou clients.',
                examples: ['Prise de rendez-vous', 'Présentation services', 'Zone de chalandise'],
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'PME & TPE locales',
                desc: 'Vous avez une équipe et des ambitions — votre site doit refléter ça. Design sur mesure, SEO avancé, contenu optimisé pour convertir.',
                examples: ['Catalogue produits', 'Blog professionnel', 'Formulaire de devis'],
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: 'Créateurs & indépendants',
                desc: 'Photographe, designer, coach sportif, formateur — une vitrine digitale qui raconte votre histoire et vend votre expertise.',
                examples: ['Portfolio', 'Tarifs & prestations', 'Contact direct'],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-5 p-7 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="shrink-0 w-12 h-12 rounded-md bg-gray-900 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, i) => (
                      <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimateIn>
        </div>

        {/* ─── 5. POURQUOI LOCAL ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-10 md:p-14">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Agence locale</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Pourquoi choisir une agence web locale à Nîmes ?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Réunion en présentiel',
                  desc: 'On peut se voir à Nîmes pour le brief, la présentation du site ou les révisions. Pas de visio obligatoire.',
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Vous parlez au développeur',
                  desc: 'Pas de commercial entre vous et moi. Chaque échange est direct, rapide, sans perte d\'information.',
                },
                {
                  icon: <Search className="w-6 h-6" />,
                  title: 'Connaissance du marché local',
                  desc: 'Je connais les quartiers, les mots-clés locaux et les habitudes des consommateurs gardois. Votre SEO est ciblé.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-11 h-11 rounded-md bg-gray-900 text-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* ─── 6. TARIFS ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tarifs</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Des prix clairs, sans surprise.
            </h2>
          </AnimateIn>

          <AnimateIn className="grid lg:grid-cols-3 gap-5 items-center max-w-5xl mx-auto mb-8" delay={100}>
            {plans.map((plan, idx) => (
              <div key={idx} className="relative">
                <div className={`rounded-lg overflow-hidden flex flex-col h-full hover:-translate-y-0.5 transition-all duration-200 ${
                  plan.dark
                    ? 'bg-gray-900 py-10 px-10'
                    : 'bg-white border border-gray-200 hover:border-gray-300 py-10 px-10'
                }`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.dark ? 'text-gray-400' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>
                  <p className={`text-sm mb-5 ${plan.dark ? 'text-gray-300' : 'text-gray-500'}`}>{plan.pitch}</p>
                  <p className={`text-xs mb-1 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>à partir de</p>
                  <span className={`text-5xl font-black leading-none mb-1 ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <p className={`text-xs mb-7 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>TVA non applicable</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`shrink-0 mt-0.5 w-4 h-4 rounded-md flex items-center justify-center ${
                          plan.dark ? 'bg-white/15' : 'bg-gray-100'
                        }`}>
                          <Check className={`w-2.5 h-2.5 ${plan.dark ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <span className={`text-sm ${plan.dark ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center py-3.5 px-5 rounded-md font-semibold text-sm active:scale-[0.98] transition-all duration-150 ${
                      plan.dark
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </AnimateIn>

          <div className="text-center mt-8">
            <Link href="/tarifs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
              Voir tous les détails des forfaits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ─── 7. ZONE D'INTERVENTION ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Zone d&apos;intervention</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nîmes et tout le Gard.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mt-4">
              Basé à Nîmes, j&apos;interviens dans tout le Gard et l&apos;Occitanie — en présentiel ou à distance selon vos préférences.
            </p>
          </AnimateIn>

          <AnimateIn className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" delay={100}>
            {villes.map((ville, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white border border-gray-200 text-center hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-900 font-semibold text-sm">{ville.name}</span>
                </div>
                <div className="text-gray-400 text-xs">{ville.dept}</div>
              </div>
            ))}
          </AnimateIn>
        </div>

        {/* ─── 8. CTA ─── */}
        <div className="pb-24">
          <AnimateIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
              Parlons de votre projet
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Votre site à Nîmes, dès la semaine prochaine.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
              Devis gratuit sous 24h. Aucun engagement avant que vous soyez convaincu.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-md font-semibold text-lg hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
            >
              Obtenir mon devis gratuit
            </Link>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
