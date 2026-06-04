'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gauge, Search, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    number: '01',
    icon: <Gauge className="w-6 h-6" />,
    metric: '< 1s',
    title: 'Ultra-rapide',
    desc: 'Chargement en moins d\'une seconde. Google récompense la vitesse — vos concurrents mettent 5 secondes à charger.',
    detail: 'Next.js · Vercel · score 95+',
  },
  {
    number: '02',
    icon: <Search className="w-6 h-6" />,
    metric: 'Page 1',
    title: 'Visible sur Google',
    desc: 'SEO local intégré nativement dans le code — pas un plugin fragile. Vos clients à Nîmes vous trouvent en premier.',
    detail: 'SEO technique · Schema.org · Sitemap',
    dark: true,
  },
  {
    number: '03',
    icon: <TrendingUp className="w-6 h-6" />,
    metric: '+40%',
    title: 'Qui convertit',
    desc: 'Design pensé pour déclencher l\'action : appel, formulaire, devis. Chaque élément pousse à passer à l\'acte.',
    detail: 'UX · CRO · Mobile-first',
  },
];

export default function PillarsPremium() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative bg-zinc-50 py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-5">
            Notre promesse
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 leading-[0.9] mb-5">
            Trois engagements.<br />
            <span className="text-zinc-400">Aucun compromis.</span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Pas des promesses marketing — des résultats mesurables livrés avec chaque site.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl p-8 md:p-10 overflow-hidden group ${
                p.dark
                  ? 'bg-zinc-950 text-zinc-100'
                  : 'bg-white border border-zinc-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {p.dark && (
                <>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/8 rounded-full blur-[80px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600/10 rounded-full blur-[60px] pointer-events-none" />
                </>
              )}

              {/* Number */}
              <div className={`text-xs font-bold tracking-[0.2em] mb-8 ${p.dark ? 'text-zinc-600' : 'text-zinc-300'}`}>
                {p.number}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                p.dark ? 'bg-amber-400/10 text-amber-400' : 'bg-zinc-900 text-white'
              }`}>
                {p.icon}
              </div>

              {/* Metric */}
              <div className={`text-5xl font-black tracking-tighter mb-3 ${
                p.dark
                  ? 'bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent'
                  : 'text-zinc-900'
              }`}>
                {p.metric}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${p.dark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                {p.title}
              </h3>

              {/* Desc */}
              <p className={`text-sm leading-relaxed mb-6 ${p.dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {p.desc}
              </p>

              {/* Detail badge */}
              <div className={`inline-flex text-xs font-medium px-3 py-1.5 rounded-full ${
                p.dark
                  ? 'bg-zinc-800 text-zinc-400'
                  : 'bg-zinc-100 text-zinc-500'
              }`}>
                {p.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="mt-10 text-center"
        >
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            En savoir plus sur notre approche
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
