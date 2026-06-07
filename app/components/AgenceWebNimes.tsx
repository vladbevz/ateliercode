'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  MapPin, ArrowRight, Check, Euro, Clock, Zap,
  Star, Phone, Target, Shield, XCircle, CheckCircle2,
  Gauge, Search, TrendingUp, Building2
} from 'lucide-react';

export default function AgenceWebNimesContent() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });

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
      name: 'Landing Page',
      price: '299 €',
      pitch: 'Une page, un message, un objectif.',
      features: ['1 page sur mesure', 'Formulaire de contact', 'SEO de base', 'Livré en 3–5 jours'],
      dark: false,
    },
    {
      name: 'Site Vitrine',
      price: '499 €',
      pitch: 'Votre meilleur commercial — 24h/24.',
      features: ['4 à 5 pages', 'SEO local optimisé', '1 mois de suivi', 'Livré en 5–7 jours'],
      dark: true,
      popular: true,
    },
    {
      name: 'Site Pro',
      price: '799 €',
      pitch: 'Pour dominer votre marché local.',
      features: ['6 à 8 pages', 'Blog + Analytics', 'SEO avancé', '3 mois de suivi'],
      dark: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">

      {/* ─── 1. HERO ─── */}
      <div className="relative flex flex-col justify-center min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-5rem)] overflow-hidden py-12">
        <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/60 to-white" />
        <div className="absolute top-0 right-0 w-125 h-125 bg-gray-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-gray-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Agence web locale · Nîmes — Gard (30)</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Agence web à Nîmes — <span className="text-gray-400">qualité pro, prix accessible.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Les petites entreprises méritent un site web{' '}
              <span className="text-gray-900 font-semibold">aussi performant que les grandes</span>.
              Dès 499 €, livré en une semaine — sans compromis sur la qualité.
            </p>
          </motion.div>

          {/* Proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { value: 'Dès 299 €', label: 'sans abonnement', sub: '' },
              { value: '7–15', label: 'jours de livraison', sub: ' j' },
              { value: '95+', label: 'Score Lighthouse', sub: '/100' },
              { value: '100 %', label: 'clients satisfaits', sub: '' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.08 }}
                className="flex flex-col items-center px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm min-w-32.5"
              >
                <span className="text-2xl font-bold text-gray-900">{item.value}<span className="text-lg text-gray-400">{item.sub}</span></span>
                <span className="text-xs text-gray-500 mt-1 text-center">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── 2. LE PROBLÈME ─── */}
      <div className="border-y border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-7">Le problème</p>
              <div className="border-l-4 border-gray-900 pl-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Les grandes agences facturent 2 000 à 5 000 €.{' '}
                  <span className="text-gray-400">Le petit commerce du coin, lui, n&apos;a pas ce budget.</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-sm text-gray-600 font-medium">
                  Sans site performant, vos clients potentiels vont chez le concurrent
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
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
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + idx * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm"
                >
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-2xl font-bold text-gray-900 leading-none">{item.score}</span>
                    <span className="text-sm font-semibold text-gray-500">{item.unit}</span>
                  </div>
                  <div className="border-l border-gray-200 pl-4">
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ─── 3. NOTRE RÉPONSE ─── */}
        <div className="py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Notre réponse</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Un site premium,{' '}
              <span className="text-gray-400">à prix d&apos;artisan.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className={`rounded-3xl p-8 md:p-10 relative overflow-hidden ${
                  p.dark ? 'bg-gray-900' : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                {p.dark && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"
                  />
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── 4. POUR QUI ─── */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Pour qui ?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Fait pour les{' '}
              <span className="text-gray-400">petites entreprises de Nîmes.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
              Artisans, commerçants, professions libérales, TPE — votre activité mérite une présence en ligne qui travaille pour vous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="flex gap-5 p-7 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, i) => (
                      <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── 5. POURQUOI LOCAL ─── */}
        <div className="pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-3xl p-10 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Agence locale</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Pourquoi choisir une agence web{' '}
                <span className="text-gray-400">locale à Nîmes ?</span>
              </h2>
            </motion.div>

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
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 6. TARIFS ─── */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tarifs</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Des prix clairs,{' '}
              <span className="text-gray-400">sans surprise.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5 items-center max-w-5xl mx-auto mb-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-200 text-gray-900 text-xs font-bold rounded-full shadow-md">
                      <Star className="w-3.5 h-3.5" />
                      LE PLUS CHOISI
                    </div>
                  </div>
                )}
                <div className={`rounded-3xl overflow-hidden flex flex-col h-full ${
                  plan.dark
                    ? 'bg-gray-900 shadow-2xl shadow-gray-900/30 pt-14 pb-10 px-10'
                    : 'bg-white border border-gray-200 py-10 px-10'
                }`}>
                  {plan.dark && (
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute -top-16 -right-16 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"
                    />
                  )}
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
                        <div className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
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
                    className={`relative z-10 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition-all group/btn ${
                      plan.dark
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link href="/tarifs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
              Voir tous les détails des forfaits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* ─── 7. ZONE D'INTERVENTION ─── */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-10"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Zone d'intervention</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nîmes et{' '}
              <span className="text-gray-400">tout le Gard.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mt-4">
              Basé à Nîmes, j'interviens dans tout le Gard et l'Occitanie — en présentiel ou à distance selon vos préférences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {villes.map((ville, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + idx * 0.06 }}
                className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-900 font-semibold text-sm">{ville.name}</span>
                </div>
                <div className="text-gray-400 text-xs">{ville.dept}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── 8. CTA ─── */}
        <div className="pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
                Parlons de votre projet
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                Votre site à Nîmes, <span className="text-gray-400">dès la semaine prochaine.</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
                Devis gratuit sous 24h. Aucun engagement avant que vous soyez convaincu.
              </p>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: <CheckCircle2 className="w-5 h-5" />,
                  title: 'Devis gratuit & sans engagement',
                  desc: 'Je prends le temps de comprendre votre activité avant de vous proposer quoi que ce soit.',
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: 'Prix fixe, aucune surprise',
                  desc: 'Le prix est annoncé avant de commencer. Pas d\'extras cachés, pas de dépassement de budget.',
                },
                {
                  icon: <Gauge className="w-5 h-5" />,
                  title: 'Qualité technique garantie',
                  desc: 'Score Lighthouse 95+, chargement < 1 s, SEO local natif — pas un template, un vrai site sur mesure.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
                    {item.icon}
                  </div>
                  <p className="font-bold text-gray-900 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
