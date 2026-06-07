'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Zap, HandshakeIcon, TrendingUp, ArrowRight, Code2,
  Award, Target, Coffee,
  CheckCircle2, XCircle, AlertCircle, Gauge, Search, Paintbrush,
  Phone, Clock, Euro, Shield, FileCode, Globe, Server, BarChart3
} from 'lucide-react';
import Image from 'next/image';

export default function Apropos() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });
  const [imageError, setImageError] = useState(false);

  const comparison = [
    {
      criteria: 'Prix',
      icon: <Euro className="w-4 h-4" />,
      free: 'Gratuit → 15–30 €/mois à vie',
      wp: '1 200 – 2 500 € + maintenance',
      us: 'Tarif clair, sans abonnement',
    },
    {
      criteria: 'Délai',
      icon: <Clock className="w-4 h-4" />,
      free: 'Rapide mais bloquant',
      wp: '4 à 8 semaines',
      us: '5 à 15 jours',
    },
    {
      criteria: 'Visibilité Google',
      icon: <Search className="w-4 h-4" />,
      free: 'Invisible (score 40–55/100)',
      wp: 'Moyen (plugins SEO basiques)',
      us: 'Score 95+/100 · SEO optimisé nativement',
    },
    {
      criteria: 'Vitesse de chargement',
      icon: <Gauge className="w-4 h-4" />,
      free: 'Lent (code gonflé, pubs)',
      wp: 'Moyen (plugins lourds)',
      us: '< 1 seconde',
    },
    {
      criteria: 'Design',
      icon: <Paintbrush className="w-4 h-4" />,
      free: 'Templates génériques',
      wp: 'Thème modifié',
      us: '100 % sur mesure',
    },
    {
      criteria: 'Interlocuteur',
      icon: <Phone className="w-4 h-4" />,
      free: 'FAQ + chatbot',
      wp: 'Chef de projet + délai',
      us: 'Le développeur en direct',
    },
    {
      criteria: 'Résultat business',
      icon: <BarChart3 className="w-4 h-4" />,
      free: 'Aucune garantie',
      wp: 'Résultats variables',
      us: 'Site conçu pour convertir',
    },
    {
      criteria: 'Sécurité',
      icon: <Shield className="w-4 h-4" />,
      free: 'Données chez un tiers',
      wp: 'Vulnérabilités plugins fréquentes',
      us: 'Code propre, aucun plugin risqué',
    },
  ];

  const stack = [
    {
      name: 'Next.js',
      tagline: 'Chargement < 1 seconde',
      desc: "Le framework qui génère des pages ultra-rapides. Vos clients n'attendent pas — Google vous récompense.",
      icon: '⚡',
    },
    {
      name: 'React',
      tagline: 'Interface fluide & moderne',
      desc: "La technologie derrière Facebook et Airbnb. Votre site réagit instantanément, sans rechargement de page.",
      icon: '⚛️',
    },
    {
      name: 'TypeScript',
      tagline: 'Zéro bug en production',
      desc: "Un code vérifié à chaque étape du développement. Moins de bugs, moins de corrections coûteuses.",
      icon: '🛡️',
    },
    {
      name: 'Tailwind CSS',
      tagline: 'Design pixel-perfect',
      desc: "Chaque pixel est à sa place sur tous les écrans — mobile, tablette, desktop. Rien n'est laissé au hasard.",
      icon: '🎨',
    },
    {
      name: 'Vercel',
      tagline: '99,9 % de disponibilité',
      desc: "Hébergement professionnel, déploiement automatique, HTTPS inclus. Votre site ne tombe jamais.",
      icon: '🚀',
    },
    {
      name: 'SEO natif',
      tagline: 'Visible sur Google dès le lancement',
      desc: "Balises, sitemap, structure sémantique, Core Web Vitals — tout est optimisé sans plugin supplémentaire.",
      icon: '🔍',
    },
  ];

  const stats = [
    { value: '10+', label: 'Sites livrés', icon: <Award className="w-5 h-5" /> },
    { value: '100%', label: 'Clients satisfaits', icon: <Target className="w-5 h-5" /> },
    { value: '24h', label: 'Temps de réponse', icon: <Coffee className="w-5 h-5" /> },
  ];

  const googleReasons = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Rendu côté serveur',
      desc: "Nos pages sont générées avant même que le navigateur les demande. Google les indexe instantanément — contrairement aux sites WordPress qui attendent le chargement.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: 'Core Web Vitals 95+/100',
      desc: "Depuis 2021, Google utilise la vitesse comme facteur de classement direct. Nos sites chargent en < 1 seconde. Les sites WordPress : 3 à 6 secondes.",
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: 'Code sémantique propre',
      desc: "Chaque balise HTML a un sens. Google comprend exactement ce que vous proposez, vos services, votre zone géographique — et vous positionne en conséquence.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'SEO local intégré',
      desc: "Données structurées, Google Maps, mots-clés locaux, sitemap automatique — tout est câblé dans le code, pas rajouté avec un plugin fragile.",
    },
  ];

  const pillars = [
    {
      icon: <Gauge className="w-7 h-7" />,
      title: 'Ultra-rapide',
      metric: '< 1 seconde',
      desc: "La vitesse n'est pas un luxe — c'est un facteur de classement Google. Un site lent perd des visiteurs et disparaît des résultats de recherche.",
      dark: false,
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: 'Visible sur Google',
      metric: '95+ / 100',
      desc: "Un beau site que personne ne trouve, c'est de l'argent jeté. Nos sites sont techniquement optimisés pour être bien référencés sur vos mots-clés locaux.",
      dark: true,
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Qui convertit',
      metric: '+40 % de clients',
      desc: "Design pensé pour déclencher l'action : appel, formulaire, devis. Chaque élément a un objectif — transformer un visiteur en client.",
      dark: false,
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">

      {/* ─── 1. HERO ─── */}
      <div className="relative pt-8 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/60 to-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Votre site mérite<br />
              <span className="text-gray-400">d&apos;être trouvé.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Nous créons des sites web qui ne se contentent pas d&apos;être beaux —
              ils sont <span className="text-gray-900 font-semibold">optimisés pour être bien référencés sur Google</span> et
              transforment vos visiteurs en clients.
            </p>
          </motion.div>

          {/* Proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { value: '95–100', label: 'Score Lighthouse', sub: '/100' },
              { value: '< 1 s', label: 'Chargement', sub: '' },
              { value: '10+', label: 'Sites livrés', sub: '' },
              { value: '100 %', label: 'Clients satisfaits', sub: '' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.08 }}
                className="flex flex-col items-center px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm"
              >
                <span className="text-2xl font-bold text-gray-900">{item.value}<span className="text-lg text-gray-400">{item.sub}</span></span>
                <span className="text-xs text-gray-500 mt-1">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── 2. LE PROBLÈME ─── */}
      <div className="border-y border-gray-200 bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left — statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-7">Le problème</p>
              <div className="border-l-4 border-gray-900 pl-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Vous avez investi dans un site web.{' '}
                  <span className="text-gray-400">Il est en page 4 de Google. Vos clients ne le trouvent pas.</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">
                  Un site invisible sur Google = zéro client venu du web
                </span>
              </div>
            </motion.div>

            {/* Right — 3 problem facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  score: '40–60',
                  unit: '/100',
                  label: 'Score Lighthouse moyen',
                  desc: 'La plupart des sites WordPress et Wix. Google pénalise tout ce qui est en dessous de 90.',
                },
                {
                  score: '3–6',
                  unit: 's',
                  label: 'Temps de chargement moyen',
                  desc: '53 % des visiteurs quittent un site qui met plus de 3 secondes à charger.',
                },
                {
                  score: 'Page 4',
                  unit: '',
                  label: 'Position Google moyenne',
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
                  <div className="flex-shrink-0 text-right whitespace-nowrap">
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

        {/* ─── 3. TROIS PILIERS ─── */}
        <div className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Notre réponse</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Trois promesses,{' '}
              <span className="text-gray-400">une seule priorité.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((p, idx) => (
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
                <p className={`text-3xl font-bold mb-2 ${p.dark ? 'text-white' : 'text-gray-900'}`}>
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

        {/* ─── 4. POURQUOI GOOGLE NOUS PRÉFÈRE ─── */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Pourquoi Google nous préfère</p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                La technique au service{' '}
                <span className="text-gray-400">de votre visibilité.</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Chaque décision technique que nous prenons a un impact direct sur votre position dans les résultats Google.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {googleReasons.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-5 p-7 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── 5. LE DÉVELOPPEUR ─── */}
        <div className="pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-center mb-14"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Votre expert</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Un développeur formé,{' '}
                <span className="text-gray-400">pas une agence anonyme.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative w-[260px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  {!imageError ? (
                    <Image
                      src="/images/image.webp"
                      alt="Vladyslav Bevz - Développeur web à Nîmes"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="260px"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Code2 className="w-16 h-16 mx-auto mb-3 opacity-50" />
                        <p className="font-medium">Vladyslav Bevz</p>
                      </div>
                    </div>
                  )}
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 bg-gray-900 text-white rounded-2xl p-3 shadow-xl"
                >
                  <Code2 className="w-6 h-6" />
                </motion.div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="space-y-6 pt-2"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    Vladyslav <span className="text-gray-400">Bevz</span>
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Nîmes, France · Développeur full-stack · Auto-entrepreneur</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Diplômé développeur full-stack, je me spécialise dans la création de sites web avec{' '}
                  <span className="font-semibold text-gray-900">React et Next.js</span> — les technologies
                  utilisées par les entreprises les plus performantes du web.
                  J&apos;ai lancé AtelierCode avec une conviction : les petites entreprises méritent
                  la même qualité technique que les grandes, à un prix accessible.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Vous travaillez <span className="font-semibold text-gray-900">directement avec moi</span> —
                  pas avec un commercial qui transmet à un développeur anonyme.
                  Chaque site est pensé, conçu et livré par la même personne, du premier échange jusqu&apos;à la mise en ligne.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.45 + idx * 0.08 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <div className="text-gray-600">{stat.icon}</div>
                      <div>
                        <span className="font-bold text-gray-900">{stat.value}</span>
                        <span className="text-xs text-gray-500 ml-1">{stat.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ─── 6. COMPARAISON ─── */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Comparaison</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Pas tous les sites{' '}
              <span className="text-gray-400">se valent.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Voici ce que vous obtenez vraiment selon la solution choisie
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <div className="grid grid-cols-4 gap-0 min-w-[640px]">
              <div className="p-4" />
              <div className="p-5 bg-gray-50 border border-gray-200 border-b-0 rounded-tl-2xl text-center">
                <XCircle className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Constructeur</p>
                <p className="text-xs text-gray-400">Wix, Squarespace…</p>
              </div>
              <div className="p-5 bg-gray-50 border border-gray-200 border-l-0 border-b-0 text-center">
                <AlertCircle className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Agence WordPress</p>
                <p className="text-xs text-gray-400">Solution classique</p>
              </div>
              <div className="p-5 bg-gray-900 border border-gray-900 border-b-0 rounded-tr-2xl text-center">
                <CheckCircle2 className="w-5 h-5 text-white mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-0.5">AtelierCode</p>
                <p className="text-xs text-gray-500">React / Next.js</p>
              </div>
            </div>

            {comparison.map((row, idx) => {
              const isLast = idx === comparison.length - 1;
              return (
                <div key={idx} className="grid grid-cols-4 gap-0 min-w-[640px]">
                  <div className={`flex items-center gap-2 px-4 py-4 bg-white border border-gray-200 border-t-0 border-r-0 ${isLast ? 'rounded-bl-2xl' : ''}`}>
                    <span className="text-gray-400">{row.icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{row.criteria}</span>
                  </div>
                  <div className={`px-4 py-4 bg-white border border-gray-200 border-t-0 border-r-0 ${idx % 2 === 0 ? '' : ''}`}>
                    <p className="text-sm text-gray-400">{row.free}</p>
                  </div>
                  <div className="px-4 py-4 bg-white border border-gray-200 border-t-0">
                    <p className="text-sm text-gray-500">{row.wp}</p>
                  </div>
                  <div className={`px-4 py-4 bg-gray-900 border border-gray-900 border-t-0 ${isLast ? 'rounded-br-2xl' : ''}`}>
                    <p className="text-sm text-white font-medium">{row.us}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── 7. STACK ─── */}
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Technologies</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Des outils choisis{' '}
              <span className="text-gray-400">pour votre résultat.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Chaque technologie a une raison d&apos;être — et cette raison, c&apos;est votre succès en ligne.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                    {tech.tagline}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
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
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Prêt à avoir un site qui<br />
                <span className="text-gray-400">travaille vraiment pour vous ?</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
                Devis gratuit, réponse sous 24 h. Aucun engagement avant que vous soyez convaincu.
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
                  icon: <Clock className="w-5 h-5" />,
                  title: 'Réponse en moins de 24 h',
                  desc: 'Vous avez une question, une urgence ? Je réponds vite et en direct.',
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: 'Livraison garantie dans les délais',
                  desc: 'Chaque projet est cadré dès le départ : délais clairs, prix fixe, aucune surprise.',
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
