'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Check, Target, ArrowRight, Clock, Star } from 'lucide-react';

export default function AgenceWebNimesContent() {
  const services = [
    "Création site web Nîmes",
    "Développement e-commerce Gard",
    "Référencement naturel Nîmes",
    "Site vitrine professionnel",
    "Maintenance site internet",
    "Formation WordPress"
  ];

  const villes = [
    { name: "Nîmes Centre", dept: "Gard (30)" },
    { name: "Alès", dept: "Gard (30)" },
    { name: "Montpellier", dept: "Hérault (34)" },
    { name: "Avignon", dept: "Vaucluse (84)" },
    { name: "Arles", dept: "Bouches-du-Rhône (13)" },
    { name: "Uzès", dept: "Gard (30)" },
    { name: "Bagnols-sur-Cèze", dept: "Gard (30)" },
    { name: "Beaucaire", dept: "Gard (30)" },
  ];

  const stats = [
    { value: "3–7", label: "jours de livraison" },
    { value: "100%", label: "satisfaction client" },
    { value: "5+", label: "projets à Nîmes" },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Декоративні блоби */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600">Agence Web à Nîmes — Gard (30)</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Agence Web à Nîmes<br />
            <span className="text-gray-400">Création de Sites Internet</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-10">
            AtelierCode est votre agence web spécialisée à Nîmes. Développement de sites vitrines,
            e-commerce et applications web pour les entreprises du Gard et d&apos;Occitanie.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Nos services à <span className="text-gray-400">Nîmes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zone d'intervention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Target className="w-7 h-7 text-gray-400" />
            Zone d&apos;intervention
          </h2>
          <p className="text-gray-600 mb-10">Nîmes et ses environs — Gard et Occitanie</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {villes.map((ville, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
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
        </motion.div>

        {/* Pourquoi local */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir une agence web <span className="text-gray-400">locale à Nîmes ?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Proximité",
                  desc: "Réunions en présentiel possibles à Nîmes et dans le Gard"
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Réactivité",
                  desc: "Même fuseau horaire, même disponibilité — réponse sous 24h"
                },
                {
                  icon: <Star className="w-5 h-5" />,
                  title: "Connaissance locale",
                  desc: "On connaît le marché nîmois et les attentes des clients du Gard"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative bg-gray-900 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-700 rounded-full blur-3xl opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Vous cherchez une agence web à Nîmes ?
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Contactez votre expert local en développement web. Devis gratuit sous 24h.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}