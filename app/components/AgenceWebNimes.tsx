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
    { name: "NÃ®mes", dept: "Gard (30)" },
    { name: "AlÃ¨s", dept: "Gard (30)" },
    { name: "UzÃ¨s", dept: "Gard (30)" },
    { name: "Bagnols-sur-CÃ¨ze", dept: "Gard (30)" },
    { name: "Beaucaire", dept: "Gard (30)" },
    { name: "Le Grau-du-Roi", dept: "Gard (30)" },
    { name: "Montpellier", dept: "HÃ©rault (34)" },
    { name: "Avignon", dept: "Vaucluse (84)" },
  ];

  const plans = [
    {
      name: 'Landing Page',
      price: '299 â‚¬',
      pitch: 'Une page, un message, un objectif.',
      features: ['1 page sur mesure', 'Formulaire de contact', 'SEO de base', 'LivrÃ© en 3â€“5 jours'],
      dark: false,
    },
    {
      name: 'Site Vitrine',
      price: '499 â‚¬',
      pitch: 'Votre meilleur commercial â€” 24h/24.',
      features: ['4 Ã  5 pages', 'SEO local optimisÃ©', '1 mois de suivi', 'LivrÃ© en 5â€“7 jours'],
      dark: true,
      popular: true,
    },
    {
      name: 'Site Pro',
      price: '799 â‚¬',
      pitch: 'Pour dominer votre marchÃ© local.',
      features: ['6 Ã  8 pages', 'Blog + Analytics', 'SEO avancÃ©', '3 mois de suivi'],
      dark: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-zinc-950 overflow-hidden">

      {/* â”€â”€â”€ 1. HERO â”€â”€â”€ */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute top-0 right-0 w-125 h-125 bg-zinc-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-zinc-800 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-800 mb-8">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span className="text-sm font-medium text-zinc-300">Agence web locale Â· NÃ®mes â€” Gard (30)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 leading-tight mb-6">
              Agence web Ã  NÃ®mes â€”<br />
              <span className="text-zinc-500">qualitÃ© pro, prix accessible.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Les petites entreprises mÃ©ritent un site web{' '}
              <span className="text-zinc-100 font-semibold">aussi performant que les grandes</span>.
              DÃ¨s 299 â‚¬, livrÃ© en une semaine â€” sans compromis sur la qualitÃ©.
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
              { value: 'DÃ¨s 299 â‚¬', label: 'sans abonnement', sub: '' },
              { value: '7â€“15', label: 'jours de livraison', sub: ' j' },
              { value: '95+', label: 'Score Lighthouse', sub: '/100' },
              { value: '100 %', label: 'clients satisfaits', sub: '' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.08 }}
                className="flex flex-col items-center px-6 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-sm min-w-32.5"
              >
                <span className="text-2xl font-bold text-zinc-100">{item.value}<span className="text-lg text-zinc-500">{item.sub}</span></span>
                <span className="text-xs text-zinc-400 mt-1 text-center">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* â”€â”€â”€ 2. LE PROBLÃˆME â”€â”€â”€ */}
      <div className="border-y border-zinc-800 bg-zinc-900 py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-7">Le problÃ¨me</p>
              <div className="border-l-4 border-gray-900 pl-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight">
                  Les grandes agences facturent 2 000 Ã  5 000 â‚¬.{' '}
                  <span className="text-zinc-500">Le petit commerce du coin, lui, n&apos;a pas ce budget.</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-sm">
                <XCircle className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-300 font-medium">
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
                  score: '2 000 â‚¬',
                  unit: '+',
                  label: 'Prix moyen d\'une agence classique',
                  desc: 'Pour un site WordPress qui chargera en 4â€“6 secondes. Souvent sans SEO local et sans suivi.',
                },
                {
                  score: '3â€“6',
                  unit: ' s',
                  label: 'Temps de chargement WordPress moyen',
                  desc: '53 % des visiteurs quittent un site qui met plus de 3 secondes Ã  charger.',
                },
                {
                  score: 'Page 4',
                  unit: '',
                  label: 'OÃ¹ finissent la plupart des sites locaux',
                  desc: 'Moins de 1 % des internautes consultent la deuxiÃ¨me page. La page 4, personne ne la voit.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + idx * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-sm"
                >
                  <div className="shrink-0 text-right whitespace-nowrap">
                    <span className="text-2xl font-bold text-zinc-100 leading-none">{item.score}</span>
                    <span className="text-sm font-semibold text-zinc-400">{item.unit}</span>
                  </div>
                  <div className="border-l border-zinc-800 pl-4">
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* â”€â”€â”€ 3. NOTRE RÃ‰PONSE â”€â”€â”€ */}
        <div className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Notre rÃ©ponse</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Un site premium,{' '}
              <span className="text-zinc-500">Ã  prix d&apos;artisan.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Euro className="w-7 h-7" />,
                metric: 'DÃ¨s 299 â‚¬',
                title: 'Prix transparent',
                desc: 'Pas d\'abonnement cachÃ©, pas de surprise. Un tarif fixe annoncÃ© avant de commencer â€” adaptÃ© au budget du petit commerce.',
                dark: false,
              },
              {
                icon: <Zap className="w-7 h-7" />,
                metric: '< 1 seconde',
                title: 'Performant & rÃ©fÃ©rencÃ©',
                desc: 'Nos sites chargent 5Ã— plus vite que WordPress. Google rÃ©compense la vitesse â€” vos clients vous trouvent en premier.',
                dark: true,
              },
              {
                icon: <Clock className="w-7 h-7" />,
                metric: '7 Ã  15 jours',
                title: 'Livraison rapide',
                desc: 'Pas de files d\'attente, pas d\'intermÃ©diaires. Vous travaillez directement avec le dÃ©veloppeur â€” votre site est en ligne vite.',
                dark: false,
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className={`rounded-3xl p-8 md:p-10 relative overflow-hidden ${
                  p.dark ? 'bg-zinc-900' : 'bg-zinc-950 border border-zinc-800 shadow-sm'
                }`}
              >
                {p.dark && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-950 rounded-full blur-3xl pointer-events-none"
                  />
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  p.dark ? 'bg-zinc-950/10 text-zinc-100' : 'bg-zinc-900 text-zinc-100'
                }`}>
                  {p.icon}
                </div>
                <p className={`text-3xl font-bold mb-2 ${p.dark ? 'text-zinc-100' : 'text-zinc-100'}`}>
                  {p.metric}
                </p>
                <h3 className={`text-lg font-bold mb-3 ${p.dark ? 'text-gray-200' : 'text-zinc-100'}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${p.dark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* â”€â”€â”€ 4. POUR QUI â”€â”€â”€ */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Pour qui ?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Fait pour les{' '}
              <span className="text-zinc-500">petites entreprises de NÃ®mes.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mt-4">
              Artisans, commerÃ§ants, professions libÃ©rales, TPE â€” votre activitÃ© mÃ©rite une prÃ©sence en ligne qui travaille pour vous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Artisans & commerÃ§ants',
                desc: 'Plombier, boulanger, fleuriste, coiffeur â€” un site vitrine simple et efficace pour Ãªtre trouvÃ© sur Google Maps et gÃ©nÃ©rer des appels.',
                examples: ['Devis en ligne', 'Photos de rÃ©alisations', 'Avis clients'],
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Professions libÃ©rales',
                desc: 'MÃ©decin, avocat, consultant, coach â€” une prÃ©sence digitale Ã©lÃ©gante qui inspire confiance et capte de nouveaux patients ou clients.',
                examples: ['Prise de rendez-vous', 'PrÃ©sentation services', 'Zone de chalandise'],
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'PME & TPE locales',
                desc: 'Vous avez une Ã©quipe et des ambitions â€” votre site doit reflÃ©ter Ã§a. Design sur mesure, SEO avancÃ©, contenu optimisÃ© pour convertir.',
                examples: ['Catalogue produits', 'Blog professionnel', 'Formulaire de devis'],
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: 'CrÃ©ateurs & indÃ©pendants',
                desc: 'Photographe, designer, coach sportif, formateur â€” une vitrine digitale qui raconte votre histoire et vend votre expertise.',
                examples: ['Portfolio', 'Tarifs & prestations', 'Contact direct'],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="flex gap-5 p-7 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-800 text-amber-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, i) => (
                      <span key={i} className="text-xs font-medium text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* â”€â”€â”€ 5. POURQUOI LOCAL â”€â”€â”€ */}
        <div className="pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Agence locale</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
                Pourquoi choisir une agence web{' '}
                <span className="text-zinc-500">locale Ã  NÃ®mes ?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'RÃ©union en prÃ©sentiel',
                  desc: 'On peut se voir Ã  NÃ®mes pour le brief, la prÃ©sentation du site ou les rÃ©visions. Pas de visio obligatoire.',
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Vous parlez au dÃ©veloppeur',
                  desc: 'Pas de commercial entre vous et moi. Chaque Ã©change est direct, rapide, sans perte d\'information.',
                },
                {
                  icon: <Search className="w-6 h-6" />,
                  title: 'Connaissance du marchÃ© local',
                  desc: 'Je connais les quartiers, les mots-clÃ©s locaux et les habitudes des consommateurs gardois. Votre SEO est ciblÃ©.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-800 text-amber-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* â”€â”€â”€ 6. TARIFS â”€â”€â”€ */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Tarifs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Des prix clairs,{' '}
              <span className="text-zinc-500">sans surprise.</span>
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
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-100 text-xs font-bold rounded-full shadow-md">
                      <Star className="w-3.5 h-3.5" />
                      LE PLUS CHOISI
                    </div>
                  </div>
                )}
                <div className={`rounded-3xl overflow-hidden flex flex-col h-full ${
                  plan.dark
                    ? 'bg-zinc-900 shadow-2xl shadow-zinc-950/50 pt-14 pb-10 px-10'
                    : 'bg-zinc-950 border border-zinc-800 py-10 px-10'
                }`}>
                  {plan.dark && (
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute -top-16 -right-16 w-64 h-64 bg-zinc-950 rounded-full blur-3xl pointer-events-none"
                    />
                  )}
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.dark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    {plan.name}
                  </p>
                  <p className={`text-sm mb-5 ${plan.dark ? 'text-gray-300' : 'text-zinc-400'}`}>{plan.pitch}</p>
                  <p className={`text-xs mb-1 ${plan.dark ? 'text-zinc-400' : 'text-zinc-500'}`}>Ã  partir de</p>
                  <span className={`text-5xl font-black leading-none mb-1 ${plan.dark ? 'text-zinc-100' : 'text-zinc-100'}`}>
                    {plan.price}
                  </span>
                  <p className={`text-xs mb-7 ${plan.dark ? 'text-zinc-400' : 'text-zinc-500'}`}>TVA non applicable</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.dark ? 'bg-zinc-950/15' : 'bg-zinc-800'
                        }`}>
                          <Check className={`w-2.5 h-2.5 ${plan.dark ? 'text-zinc-100' : 'text-zinc-300'}`} />
                        </div>
                        <span className={`text-sm ${plan.dark ? 'text-gray-300' : 'text-zinc-300'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`relative z-10 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition-all group/btn ${
                      plan.dark
                        ? 'bg-zinc-950 text-zinc-100 hover:bg-zinc-800'
                        : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
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
            <Link href="/tarifs" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors font-medium">
              Voir tous les dÃ©tails des forfaits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* â”€â”€â”€ 7. ZONE D'INTERVENTION â”€â”€â”€ */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-10"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Zone d'intervention</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              NÃ®mes et{' '}
              <span className="text-zinc-500">tout le Gard.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto mt-4">
              BasÃ© Ã  NÃ®mes, j'interviens dans tout le Gard et l'Occitanie â€” en prÃ©sentiel ou Ã  distance selon vos prÃ©fÃ©rences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {villes.map((ville, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + idx * 0.06 }}
                className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  <span className="text-zinc-100 font-semibold text-sm">{ville.name}</span>
                </div>
                <div className="text-zinc-500 text-xs">{ville.dept}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* â”€â”€â”€ 8. CTA â”€â”€â”€ */}
        <div className="pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-5">
                Parlons de votre projet
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-5 leading-tight">
                Votre site Ã  NÃ®mes,<br />
                <span className="text-zinc-500">dÃ¨s la semaine prochaine.</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10">
                Devis gratuit sous 24h. Aucun engagement avant que vous soyez convaincu.
              </p>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-amber-400/25"
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
                  desc: 'Je prends le temps de comprendre votre activitÃ© avant de vous proposer quoi que ce soit.',
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: 'Prix fixe, aucune surprise',
                  desc: 'Le prix est annoncÃ© avant de commencer. Pas d\'extras cachÃ©s, pas de dÃ©passement de budget.',
                },
                {
                  icon: <Gauge className="w-5 h-5" />,
                  title: 'QualitÃ© technique garantie',
                  desc: 'Score Lighthouse 95+, chargement < 1 s, SEO local natif â€” pas un template, un vrai site sur mesure.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-200 mb-4">
                    {item.icon}
                  </div>
                  <p className="font-bold text-zinc-100 mb-2">{item.title}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

