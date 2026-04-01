'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Zap, HandshakeIcon, TrendingUp, ArrowRight, Code2,
  Award, Target, Coffee, Sparkles, Heart,
  CheckCircle2, XCircle, AlertCircle, Gauge, Search, Paintbrush,
  Phone, Clock, Euro, Shield
} from 'lucide-react';
import Image from 'next/image';

export default function Apropos() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });
  const [imageError, setImageError] = useState(false);

  const story = [
    {
      label: '01',
      heading: 'Le déclic',
      text: "Je ne viens pas du monde de l'informatique. Après un parcours classique dans une autre filière, j'ai découvert le développement web par curiosité — et cette curiosité est devenue une obsession. J'ai appris React et Next.js seul, en me fixant un objectif simple : créer des sites qui ne sont pas juste beaux, mais qui rapportent vraiment à leurs propriétaires.",
      icon: <Sparkles className="w-6 h-6" />,
      dark: false,
    },
    {
      label: '02',
      heading: "L'enquête",
      text: "Avant de lancer AtelierCode, j'ai voulu comprendre le marché. Alors j'ai fait semblant d'être plombier. J'ai contacté trois agences web à Nîmes en demandant un devis pour un site vitrine. Résultat : entre 1 200 € et 2 500 €, pour des sites WordPress livrés en 6 semaines. Je me suis dit : il y a quelque chose à faire ici.",
      icon: <Target className="w-6 h-6" />,
      dark: true,
    },
    {
      label: '03',
      heading: 'La mission',
      text: "AtelierCode est né de cette conviction : le petit commerce mérite un site de qualité, performant, fait sur mesure — sans payer le prix d'une grande agence. Je code en React / Next.js, ce qui me permet de livrer des sites ultra-rapides, bien référencés sur Google, à des tarifs accessibles. En direct avec vous — sans intermédiaire, sans surprise.",
      icon: <Heart className="w-6 h-6" />,
      dark: false,
    },
  ];

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
      us: '2 à 3 semaines',
    },
    {
      criteria: 'Vitesse de chargement',
      icon: <Gauge className="w-4 h-4" />,
      free: 'Lent (code gonflé, pubs)',
      wp: 'Moyen (plugins lourds)',
      us: '< 1 seconde · 98/100 Lighthouse',
    },
    {
      criteria: 'SEO Google',
      icon: <Search className="w-4 h-4" />,
      free: 'Très limité',
      wp: 'Plugin Yoast (suffisant ?)',
      us: 'Intégré dans chaque ligne de code',
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
      name: 'SEO',
      tagline: 'Visible sur Google dès le lancement',
      desc: "Balises, sitemap, structure sémantique, Core Web Vitals — tout est optimisé sans plugin supplémentaire.",
      icon: '🔍',
    },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance d'abord",
      desc: 'Chaque ligne de code est pensée pour la vitesse. Pas de templates qui ralentissent tout.',
      color: 'from-gray-900 to-gray-700',
    },
    {
      icon: <HandshakeIcon className="w-6 h-6" />,
      title: 'Transparence totale',
      desc: 'Prix clairs, délais respectés. Vous savez toujours où en est votre projet.',
      color: 'from-gray-800 to-gray-600',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sites qui convertissent',
      desc: "Un beau site ne suffit pas. L'objectif, c'est que votre téléphone sonne plus souvent.",
      color: 'from-gray-700 to-gray-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ancré localement',
      desc: 'Basé à Nîmes, je connais les besoins des petits pros de la région.',
      color: 'from-gray-600 to-gray-400',
    },
  ];

  const stats = [
    { value: '10+', label: 'Projets livrés', icon: <Award className="w-5 h-5" /> },
    { value: '100%', label: 'Clients satisfaits', icon: <Target className="w-5 h-5" /> },
    { value: '24h', label: 'Temps de réponse', icon: <Coffee className="w-5 h-5" /> },
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">

        {/* ─── 1. HERO : photo + bio ─── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Qui se cache derrière{' '}
              <span className="relative inline-block text-gray-400">
                AtelierCode
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gray-300 rounded-full"
                />
              </span>
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative w-[260px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    {!imageError ? (
                      <Image
                        src="/images/image.webp"
                        alt="Vladyslav Bevz - Développeur web à Nîmes"
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Code2 className="w-20 h-20 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">Vladyslav Bevz</p>
                          <p className="text-sm opacity-75">Développeur web</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-5 -right-5 bg-gray-900 text-white rounded-2xl p-4 shadow-xl"
                  >
                    <Code2 className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6 pt-2"
              >
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    Vladyslav <span className="text-gray-400">Bevz</span>
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Nîmes, France · Auto-entrepreneur</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Développeur web indépendant, je crée des sites sur mesure en{' '}
                    <span className="font-semibold text-gray-900">React / Next.js</span> —
                    la technologie qui propulse les sites les plus rapides du monde.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Pas d'agence, pas d'intermédiaire. Vous travaillez directement avec moi,
                    du premier message jusqu'à la mise en ligne.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Mon objectif est simple : que votre site soit un vrai outil de travail —
                    pas une vitrine qui dort sur internet.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <div className="text-gray-700">{stat.icon}</div>
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

        {/* ─── 2. COMPARAISON ─── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pas tous les sites{' '}
              <span className="text-gray-400">se valent</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Voici ce que vous obtenez vraiment selon la solution choisie
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            {/* Header */}
            <div className="grid grid-cols-4 gap-0 min-w-[640px]">
              <div className="p-4" />

              {/* Col: Constructeur gratuit */}
              <div className="p-5 bg-gray-50 border border-gray-200 border-b-0 rounded-tl-2xl text-center">
                <div className="flex justify-center mb-2">
                  <XCircle className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Constructeur</p>
                <p className="text-sm text-gray-400">Wix, Squarespace…</p>
              </div>

              {/* Col: Agence WordPress */}
              <div className="p-5 bg-gray-50 border border-gray-200 border-l-0 border-b-0 text-center">
                <div className="flex justify-center mb-2">
                  <AlertCircle className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Agence WordPress</p>
                <p className="text-sm text-gray-400">Solution classique</p>
              </div>

              {/* Col: AtelierCode (highlighted) */}
              <div className="p-5 bg-gray-900 border border-gray-900 border-b-0 rounded-tr-2xl text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">AtelierCode</p>
                <p className="text-sm text-gray-400">React / Next.js</p>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, idx) => {
              const isLast = idx === comparison.length - 1;
              return (
                <div key={idx} className={`grid grid-cols-4 gap-0 min-w-[640px]`}>
                  {/* Criteria */}
                  <div className={`flex items-center gap-2 px-4 py-4 bg-white border border-gray-200 border-t-0 border-r-0 ${isLast ? 'rounded-bl-2xl' : ''}`}>
                    <span className="text-gray-400">{row.icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{row.criteria}</span>
                  </div>

                  {/* Free builder */}
                  <div className="px-4 py-4 bg-white border border-gray-200 border-t-0 border-r-0">
                    <p className="text-sm text-gray-400">{row.free}</p>
                  </div>

                  {/* WordPress agency */}
                  <div className="px-4 py-4 bg-white border border-gray-200 border-t-0">
                    <p className="text-sm text-gray-500">{row.wp}</p>
                  </div>

                  {/* AtelierCode */}
                  <div className={`px-4 py-4 bg-gray-900 border border-gray-900 border-t-0 ${isLast ? 'rounded-br-2xl' : ''}`}>
                    <p className="text-sm text-white font-medium">{row.us}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── 3. HISTOIRE ─── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center mb-14"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comment tout a <span className="text-gray-400">commencé</span>
            </h3>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {story.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden p-8 md:p-10 ${item.dark ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 shadow-lg'}`}
              >
                {/* Watermark number */}
                <span
                  className={`absolute right-6 top-1/2 -translate-y-1/2 text-[120px] md:text-[160px] font-black leading-none select-none pointer-events-none ${item.dark ? 'text-white/5' : 'text-gray-100'}`}
                >
                  {item.label}
                </span>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${item.dark ? 'bg-white/10 text-white' : 'bg-gray-900 text-white'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-3 ${item.dark ? 'text-white' : 'text-gray-900'}`}>
                      {item.heading}
                    </h4>
                    <p className={`leading-relaxed ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── 4. STACK ─── */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="text-center mb-14"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Des outils choisis{' '}
              <span className="text-gray-400">pour votre résultat</span>
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Chaque technologie a une raison d'être — et cette raison, c'est votre succès en ligne
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all"
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

        {/* ─── 5. VALEURS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
          className="mb-28"
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce en quoi <span className="text-gray-400">je crois</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des valeurs simples qui guident chaque projet que je réalise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── 6. CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3 }}
        >
          <div className="bg-gray-900 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* Left — texte + bouton */}
              <div className="relative p-10 md:p-14 flex flex-col justify-center">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-20 -left-20 w-72 h-72 bg-white rounded-full blur-3xl pointer-events-none"
                />
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Parlons de votre projet
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Un site qui travaille pour vous,{' '}
                  <span className="text-gray-400">pas l'inverse.</span>
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Devis gratuit, réponse sous 24 h. Aucun engagement avant que vous soyez convaincu.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Obtenir mon devis gratuit
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right — garanties */}
              <div className="border-t md:border-t-0 md:border-l border-white/10 p-10 md:p-14 flex flex-col justify-center gap-6">
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.4 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{item.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
