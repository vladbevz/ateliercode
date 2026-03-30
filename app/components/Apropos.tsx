'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { MapPin, Zap, HandshakeIcon, TrendingUp, ArrowRight, Code2, Award, Target, Coffee, Sparkles, Quote, Star, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Apropos() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });
  const [imageError, setImageError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const story = [
    {
      label: '01',
      heading: 'Le déclic',
      text: "Je ne viens pas du monde de l'informatique. Après un parcours classique dans une autre filière, j'ai découvert le développement web par curiosité — et cette curiosité est devenue une obsession. J'ai appris React et Next.js seul, en me fixant un objectif simple : créer des sites qui ne sont pas juste beaux, mais qui rapportent vraiment à leurs propriétaires.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      label: '02',
      heading: "L'enquête",
      text: "Avant de lancer AtelierCode, j'ai voulu comprendre le marché. Alors j'ai fait semblant d'être plombier. J'ai contacté trois agences web à Nîmes en demandant un devis pour un site vitrine. Résultat : entre 1 200 € et 2 500 €, pour des sites WordPress livrés en 6 semaines. Je me suis dit : il y a quelque chose à faire ici.",
      icon: <Target className="w-5 h-5" />
    },
    {
      label: '03',
      heading: 'La mission',
      text: "AtelierCode est né de cette conviction : le petit commerce mérite un site de qualité, performant, fait sur mesure — sans payer le prix d'une grande agence. Je code en React / Next.js, ce qui me permet de livrer des sites ultra-rapides, bien référencés sur Google, à des tarifs accessibles. Enregistré en tant qu'auto-entrepreneur, je travaille en direct avec vous — sans intermédiaire, sans surprise.",
      icon: <Heart className="w-5 h-5" />
    },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance d\'abord',
      desc: 'Chaque ligne de code est pensée pour la vitesse. Pas de templates qui ralentissent tout.',
      color: 'from-gray-900 to-gray-700'
    },
    {
      icon: <HandshakeIcon className="w-6 h-6" />,
      title: 'Transparence totale',
      desc: 'Prix clairs, délais respectés. Vous savez toujours où en est votre projet.',
      color: 'from-gray-800 to-gray-600'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sites qui convertissent',
      desc: "Un beau site ne suffit pas. L'objectif, c'est que votre téléphone sonne plus souvent.",
      color: 'from-gray-700 to-gray-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ancré localement',
      desc: 'Basé à Nîmes, je connais les besoins des petits pros de la région.',
      color: 'from-gray-600 to-gray-400'
    },
  ];

  const stats = [
    { value: '10+', label: 'Projets livrés', icon: <Award className="w-5 h-5" />, delay: 0 },
    { value: '100%', label: 'Clients satisfaits', icon: <Target className="w-5 h-5" />, delay: 0.1 },
    { value: '24h', label: 'Temps de réponse', icon: <Coffee className="w-5 h-5" />, delay: 0.2 },
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Hero Section avec photo - Version créative */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Qui suis-je ?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Qui se cache derrière <br />
              <span className="text-gray-400 relative inline-block">
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

          {/* Photo et bio - Design créatif */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo avec effet créatif */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative">
                  {/* Anneau décoratif */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    {!imageError ? (
                      <Image
                        src="/images/image.webp"
                        alt="Vladyslav Bevz - Développeur web à Nîmes"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                  
                  {/* Badge flottant */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-5 -right-5 bg-gray-900 text-white rounded-2xl p-4 shadow-xl"
                  >
                    <Code2 className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Bio créative */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6"
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
                    Développeur web passionné, je crée des sites sur mesure qui allient 
                    <span className="font-semibold text-gray-900"> performance, design et simplicité</span> d'utilisation.
                  </p>
                  <p className="text-gray-600">
                    Mon objectif ? Transformer votre vision en un site web qui vous ressemble 
                    et qui fait la différence auprès de vos clients.
                  </p>
                </div>

                {/* Mini stats */}
                <div className="flex flex-wrap gap-4 pt-4">
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

        {/* Story avec timeline - Design créatif */}
        <div className="relative max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Mon parcours</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comment tout a <span className="text-gray-400">commencé</span>
            </h3>
          </motion.div>

          <div className="relative">
            {/* Ligne de timeline */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-8 md:left-[68px] top-0 w-0.5 h-full bg-gradient-to-b from-gray-900 via-gray-500 to-gray-300 origin-top"
            />
            
            {story.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                className="relative flex gap-6 md:gap-8 mb-12 last:mb-0"
              >
                {/* Timeline point avec icône */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent md:hidden" />
                </div>
                
                {/* Contenu avec effet carte */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-gray-200">{item.label}</span>
                    <h4 className="text-xl font-bold text-gray-900">{item.heading}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stack technique - Design créatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mb-32 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <Code2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Technologies</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-12">
                Ma <span className="text-gray-400">stack technique</span>
              </h3>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vercel'].map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="relative group"
              >
                <div className="px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  {tech}
                </div>
                <div className="absolute inset-0 bg-gray-900 rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valeurs - Design créatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
              <Heart className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Mes valeurs</span>
            </div>
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
                transition={{ delay: 1.5 + index * 0.1 }}
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

        {/* Citation - Design créatif avec animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="mb-32"
        >
          <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-10 md:p-12 text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50" />
            
            <Quote className="w-12 h-12 text-gray-300 mx-auto mb-6" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 italic leading-relaxed"
            >
              "Un site web, c'est comme une boutique. S'il n'est pas accueillant, 
              les clients passent leur chemin."
            </motion.p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-transparent mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Vladyslav Bevz — Fondateur d'AtelierCode</p>
          </div>
        </motion.div>

        {/* CTA - Design créatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.9 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
            />
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Discutons de vos besoins et voyons comment je peux vous aider à atteindre vos objectifs.
            </p>
            <Link
              href="/contact"
              className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Prendre contact</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform relative z-10" />
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gray-200"
              />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}