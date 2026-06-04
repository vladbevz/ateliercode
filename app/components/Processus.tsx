'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Palette, Code2, Rocket, Clock, CheckCircle2, ArrowRight, Target, Award } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: 'Analyse',
    description: 'On étudie votre marché, vos objectifs et vos concurrents pour définir une stratégie gagnante.',
    duration: '1–2 jours',
    details: ['Audit de votre positionnement', 'Analyse des concurrents', 'Définition des objectifs', 'Proposition commerciale'],
  },
  {
    number: '02',
    icon: <Palette className="w-7 h-7" />,
    title: 'Design',
    description: 'Création de maquettes qui reflètent votre image et optimisent l\'expérience utilisateur.',
    duration: '3–4 jours',
    details: ['Wireframes interactifs', 'Design unique et personnalisé', 'Validation client', 'Adaptation mobile'],
  },
  {
    number: '03',
    icon: <Code2 className="w-7 h-7" />,
    title: 'Développement',
    description: 'Intégration avec les dernières technologies pour un site rapide, sécurisé et évolutif.',
    duration: '5–7 jours',
    details: ['Code propre et maintenable', 'Optimisation SEO', 'Tests de performance', 'Sécurisation des données'],
  },
  {
    number: '04',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Lancement',
    description: 'Mise en ligne, formation et accompagnement pour une transition en douceur.',
    duration: '1–2 jours',
    details: ['Déploiement sur Vercel', 'Configuration nom de domaine', 'Formation à l\'administration', 'Support post-lancement'],
  },
];

const reasons = [
  { title: 'Pas de mauvaise surprise', desc: 'Chaque étape est validée avec vous avant de passer à la suivante', icon: <Target className="w-6 h-6" /> },
  { title: 'Délais tenus', desc: 'Un planning clair et respecté, pas de développement sans fin', icon: <Clock className="w-6 h-6" /> },
  { title: 'Vous restez maître', desc: 'Vous comprenez chaque étape et gardez le contrôle', icon: <Award className="w-6 h-6" /> },
];

export default function Processus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <section ref={ref} className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-100 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-75 bg-violet-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Méthode</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            De l&apos;idée à la<br />
            <span className="bg-linear-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">réalisation.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Une méthode transparente et éprouvée pour créer votre site web sans stress.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="relative flex flex-col"
            >
              {/* Connector line on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-5 h-px bg-linear-to-r from-zinc-700 to-transparent z-10" />
              )}

              <div className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-7 flex flex-col flex-1 transition-all group">
                {/* Step number */}
                <div className="text-4xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors mb-5 tracking-tighter">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-400/10 transition-colors">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-1">{step.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  {step.duration}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">{step.description}</p>

                <div className="space-y-2 pt-5 border-t border-zinc-800">
                  {step.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5 shrink-0" />
                      <span className="text-xs text-zinc-500">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why structured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-100 mb-10">
            Pourquoi un processus <span className="text-zinc-500">structuré ?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {reasons.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-7 bg-zinc-900 border border-zinc-800 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-amber-400 flex items-center justify-center mb-4 mx-auto">
                  {r.icon}
                </div>
                <h4 className="text-base font-bold text-zinc-100 mb-2">{r.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-2xl font-bold transition-all shadow-lg shadow-amber-400/20"
          >
            Lancer mon projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
