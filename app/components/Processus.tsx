// app/components/Processus.tsx
'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Palette, Code2, Rocket, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Processus() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "1. Analyse",
      description: "On étudie votre marché, vos objectifs et vos concurrents pour définir une stratégie gagnante.",
      duration: "2-3 jours",
      details: [
        "Audit de votre positionnement",
        "Analyse des concurrents",
        "Définition des objectifs",
        "Proposition commerciale"
      ],
      color: "from-gray-900 to-gray-700"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "2. Design",
      description: "Création de maquettes qui reflètent votre image et optimisent l'expérience utilisateur.",
      duration: "3-4 jours",
      details: [
        "Wireframes interactifs",
        "Design unique et personnalisé",
        "Validation client",
        "Adaptation mobile"
      ],
      color: "from-gray-700 to-gray-600"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "3. Développement",
      description: "Intégration avec les dernières technologies pour un site rapide, sécurisé et évolutif.",
      duration: "5-7 jours",
      details: [
        "Code propre et maintenable",
        "Optimisation SEO",
        "Tests de performance",
        "Sécurisation des données"
      ],
      color: "from-gray-600 to-gray-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "4. Lancement",
      description: "Mise en ligne, formation et accompagnement pour une transition en douceur.",
      duration: "2-3 jours",
      details: [
        "Déploiement sur Vercel",
        "Configuration nom de domaine",
        "Formation à l'administration",
        "Support post-lancement"
      ],
      color: "from-gray-500 to-gray-400"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Світлий фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            De l'idée à la <br />
            <span className="text-gray-400">réalisation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthode transparente et éprouvée pour créer votre site web sans stress
          </p>
        </motion.div>

        {/* Timeline verticale pour mobile, horizontale pour desktop */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne de progression */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 origin-left hidden lg:block"
          />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                {/* Numéro et icône */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-6 shadow-xl mx-auto lg:mx-0`}
                >
                  {step.icon}
                </motion.div>

                {/* Contenu */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 group">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    {step.description}
                  </p>

                  {/* Détails */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15 + idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Indicateur de progression */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(index + 1) * 25}%` } : {}}
                        transition={{ delay: 1, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${step.color}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Flèche (sauf dernier) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-16 text-gray-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section "Pourquoi c'est important" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Pourquoi un processus structuré ?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Pas de mauvaise surprise",
                desc: "Chaque étape est validée avec vous avant de passer à la suivante",
                icon: "🎯"
              },
              {
                title: "Délais tenus",
                desc: "Un planning clair et respecté, pas de développement sans fin",
                icon: "⏱️"
              },
              {
                title: "Vous restez maître",
                desc: "Vous comprenez chaque étape et gardez le contrôle",
                icon: "👑"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Démarrer votre projet</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}