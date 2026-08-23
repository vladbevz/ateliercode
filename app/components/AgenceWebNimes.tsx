'use client';

import Link from 'next/link';
import {
  MapPin, ArrowRight, Check,
  Star, Phone, Target, Paintbrush,
  Search, TrendingUp, Building2
} from 'lucide-react';
import AnimateIn from './AnimateIn';
import { villes as toutesLesVilles } from '../lib/villes-data';
import { useFlipCard } from '../hooks/useFlipCard';

export default function AgenceWebNimesContent() {
  useFlipCard();

  const villes = [
    { name: 'Nîmes', dept: 'Gard (30)', href: '/agence-web-nimes' },
    ...toutesLesVilles.map((v) => ({
      name: v.nom,
      dept: `${v.departement} (${v.codePostal.slice(0, 2)})`,
      href: `/agence-web/${v.slug}`,
    })),
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 animate-fade-up">
            Agence web à Nîmes — qualité pro, prix accessible.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Les petites entreprises méritent un site web{' '}
            <span className="text-gray-900 font-semibold">aussi performant que les grandes</span>.
            Dès 499 €, livré en une semaine — sans compromis sur la qualité.
          </p>
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mt-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
            Dès 499 € · Livré en 7–15 jours · Maquette gratuite
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">

        {/* ─── 2. POUR QUI ─── */}
        <div className="pt-14 md:pt-20 pb-20 md:pb-28">
          <AnimateIn className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Pour qui ?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Fait pour les petites entreprises de Nîmes.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Artisans, commerçants, professions libérales, TPE — votre activité mérite une présence en ligne qui travaille pour vous.
            </p>
          </AnimateIn>

          <AnimateIn className="max-w-5xl mx-auto border-y border-gray-200 divide-y divide-gray-200" delay={100}>
            {[
              {
                icon: <Building2 className="w-5 h-5" />,
                title: 'Artisans & commerçants',
                desc: 'Plombier, boulanger, fleuriste, coiffeur — un site vitrine simple et efficace pour être trouvé sur Google Maps et générer des appels.',
                examples: ['Devis en ligne', 'Photos de réalisations', 'Avis clients'],
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: 'Professions libérales',
                desc: 'Médecin, avocat, consultant, coach — une présence digitale élégante qui inspire confiance et capte de nouveaux patients ou clients.',
                examples: ['Prise de rendez-vous', 'Présentation services', 'Zone de chalandise'],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: 'PME & TPE locales',
                desc: 'Vous avez une équipe et des ambitions — votre site doit refléter ça. Design sur mesure, SEO avancé, contenu optimisé pour convertir.',
                examples: ['Catalogue produits', 'Blog professionnel', 'Formulaire de devis'],
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: 'Créateurs & indépendants',
                desc: 'Photographe, designer, coach sportif, formateur — une vitrine digitale qui raconte votre histoire et vend votre expertise.',
                examples: ['Portfolio', 'Tarifs & prestations', 'Contact direct'],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group grid md:grid-cols-[280px_1fr] gap-3 md:gap-12 -mx-2 px-2 py-9 rounded-md transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 transition-transform duration-200 group-hover:translate-x-1">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                  <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
                    {item.examples.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </AnimateIn>
        </div>

        {/* ─── 3. POURQUOI LOCAL ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-10 md:p-14">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Agence locale</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Pourquoi choisir une agence web locale à Nîmes ?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MapPin className="w-8 h-8" strokeWidth={1.5} />,
                  title: 'Réunion en présentiel',
                  desc: 'On peut se voir à Nîmes pour le brief, la présentation du site ou les révisions. Pas de visio obligatoire.',
                },
                {
                  icon: <Phone className="w-8 h-8" strokeWidth={1.5} />,
                  title: 'Vous parlez au développeur',
                  desc: 'Pas de commercial entre vous et moi. Chaque échange est direct, rapide, sans perte d\'information.',
                },
                {
                  icon: <Search className="w-8 h-8" strokeWidth={1.5} />,
                  title: 'Connaissance du marché local',
                  desc: 'Je connais les quartiers, les mots-clés locaux et les habitudes des consommateurs gardois. Votre SEO est ciblé.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flip-card h-52 cursor-pointer">
                  <div className="flip-card-inner rounded-lg">

                    {/* FACE AVANT — icône + titre */}
                    <div className="flip-card-front bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <span className="text-gray-900">{item.icon}</span>
                      <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs text-gray-400">Toucher pour en savoir plus</span>
                    </div>

                    {/* FACE ARRIÈRE — description */}
                    <div className="flip-card-back bg-gray-900 text-white rounded-lg flex flex-col justify-center p-6">
                      <h4 className="text-sm font-bold mb-3">{item.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* ─── 4. OFFRES GRATUITES ─── */}
        <div className="pb-14 md:pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="shrink-0 w-10 h-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Premier rendez-vous gratuit</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Je me déplace gratuitement pour le premier rendez-vous — brief, questions,
                  présentation du projet. Sans engagement de votre part.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="shrink-0 w-10 h-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
                <Paintbrush className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Maquette offerte avant commande</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Avant de vous engager, vous voyez à quoi ressemblera votre site.
                  La maquette est gratuite — vous commandez seulement si elle vous convient.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. CONTENU LOCAL UNIQUE ─── */}
        <div className="pb-14 md:pb-20">
          <AnimateIn className="max-w-5xl mx-auto border-l-4 border-gray-900 pl-8">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Nîmes & le web
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Nîmes, préfecture du Gard et ville d&apos;environ 150 000 habitants, conjugue un centre historique romain parmi les plus visités de France — les Arènes, la Maison Carrée — et un tissu économique fait avant tout de commerces de proximité, d&apos;artisans et de professions libérales. Cette double identité, touristique et locale, crée deux besoins numériques différents : être visible auprès des visiteurs de passage, et être trouvé par les habitants qui cherchent un professionnel près de chez eux.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Le centre-ville historique concentre une forte densité de commerçants et d&apos;indépendants, souvent en concurrence directe avec les zones commerciales périphériques et avec les grandes enseignes déjà bien installées en ligne. Un site bien référencé sur les recherches locales — « plombier Nîmes », « restaurant centre-ville Nîmes » — fait souvent la différence entre un client qui appelle et un client qui passe au résultat suivant sur Google.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AtelierCode est basé à Nîmes même — pas seulement dans le nom du domaine. Les rendez-vous se font en présentiel dans le centre-ville ou à distance selon ce qui vous arrange, et je connais directement les quartiers, les zones commerciales et les habitudes de recherche des Nîmois.
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              La preuve par l&apos;exemple ?{' '}
              <Link href="/realisations" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-2 transition-colors">
                Découvrez nos réalisations à Nîmes et dans le Gard
              </Link>.
            </p>
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
                        : 'bg-gray-900 text-white hover:bg-gray-800 btn-sweep'
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
              <Link
                key={idx}
                href={ville.href}
                className="city-card p-4 rounded-lg bg-white border border-gray-200 text-center hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-900 font-semibold text-sm">{ville.name}</span>
                </div>
                <div className="text-gray-400 text-xs">{ville.dept}</div>
              </Link>
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
              className="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-md font-semibold text-lg hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
            >
              Obtenir mon devis gratuit
            </Link>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Déplacement gratuit · Maquette offerte · Sans engagement
            </p>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
