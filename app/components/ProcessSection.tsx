// app/components/ProcessSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ClipboardCheck, 
  Palette, 
  Code2, 
  Rocket, 
  TrendingUp,
  Clock,
  Target,
  Heart,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "1. Analyse & Stratégie",
      description: "On étudie votre marché, vos concurrents et vos objectifs pour créer une stratégie sur mesure.",
      duration: "1-2 jours",
      color: "from-gray-900 to-gray-700"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "2. Design & UX",
      description: "Création d'une interface qui reflète votre image et guide vos visiteurs vers l'action.",
      duration: "3-4 jours",
      color: "from-gray-700 to-gray-600"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "3. Développement",
      description: "Code propre, performant et optimisé SEO. Votre site est rapide et visible sur Google.",
      duration: "5-7 jours",
      color: "from-gray-600 to-gray-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "4. Lancement & Suivi",
      description: "Mise en ligne, formation et accompagnement. On ne vous laisse pas tomber après la livraison.",
      duration: "1-2 jours",
      color: "from-gray-500 to-gray-400"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Augmentation du chiffre",
      description: "Un site professionnel attire plus de clients qualifiés.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Visibilité Google",
      description: "Apparaissez en première page sur les recherches locales.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponible 24/7",
      description: "Votre site travaille même quand vous dormez.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Crédibilité",
      description: "90% des clients jugent une entreprise sur son site.",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    // ✅ FIX 1: додано `relative` — без нього `absolute` дочірні елементи
    // виходять за межі секції і перекривають контент на мобільному
    <section  className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Du projet à la réussite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthode éprouvée pour créer des sites qui ne sont pas juste beaux, 
            mais qui <span className="text-gray-900 font-semibold">rapportent des clients</span>
          </p>
        </motion.div>

        
        <div className="mb-32">
          

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                // ✅ FIX 3: прибрано `relative` тут — разом з абсолютними
                // стрілками це створювало overflow на вузьких екранах
                className="group relative"
              >
                {/* Іконка */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-6 shadow-xl relative z-10 mx-auto lg:mx-0`}
                >
                  {step.icon}
                </motion.div>

                {/* Контент */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="flex items-center justify-center lg:justify-start pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Стрілка між кроками — тільки desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-10 text-gray-300 z-20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Pourquoi un site web ? */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi votre entreprise a besoin d'un site web ?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En 2026, ne pas avoir de site web, c'est comme avoir une boutique fermée
          </p>
        </motion.div>

        {/* Grid des bénéfices */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group cursor-pointer text-center"
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}>
                {benefit.icon}
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-4">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-gray-900 mt-6 origin-center"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 px-8 py-5 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all shadow-2xl"
          >
            <span>Prêt à passer au niveau supérieur ?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Premier rendez-vous gratuit • Sans engagement
          </p>
        </motion.div>
      </div>

      {/* Декоративні blob-и — залишаємо всередині relative section, вони безпечні */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-gray-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
}