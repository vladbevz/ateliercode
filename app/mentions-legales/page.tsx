'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Фон як в інших секціях */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8"
          >
            <span className="text-sm font-medium text-gray-600 tracking-wide">
              Informations légales
            </span>
          </motion.div>

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              Mentions légales
            </h1>
            <p className="text-lg text-gray-500">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
            </p>
          </motion.div>

          {/* Секції */}
          <div className="space-y-6">

            {/* 1. Éditeur */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-900">Éditeur du site</h2>
              </div>
              <div className="space-y-3 pl-11">
                {[
                  { label: "Dénomination sociale", value: "AtelierCode" },
                  { label: "Statut juridique", value: "Micro-entreprise" },
                  { label: "Siège social", value: "19 rue Menard, 30000 Nîmes" },
                  { label: "SIRET", value: "99993442500011" },
                  { label: "Numéro de TVA", value: "Non applicable, art. 293 B du CGI" },
                  { label: "Email", value: "contact@ateliercode.fr" },
                  { label: "Directeur de la publication", value: "Bevz Vladyslav, auto-entrepreneur" },
                  { label: "Téléphone", value: "+33 7 67 77 29 15" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:gap-3">
                    <span className="text-sm font-medium text-gray-400 sm:w-56 flex-shrink-0">{item.label} :</span>
                    <span className="text-sm text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 2. Hébergement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <h2 className="text-xl font-bold text-gray-900">Hébergement</h2>
              </div>
              <div className="space-y-4 pl-11">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Développement et déploiement :</p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="font-semibold text-gray-900">Vercel Inc.</p>
                    <p className="text-sm text-gray-500 mt-1">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors mt-1 block">
                      https://vercel.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Nom de domaine et DNS :</p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="font-semibold text-gray-900">OVH SAS</p>
                    <p className="text-sm text-gray-500 mt-1">2 rue Kellermann, 59100 Roubaix, France</p>
                    <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors mt-1 block">
                      https://www.ovh.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 3. Propriété intellectuelle */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <h2 className="text-xl font-bold text-gray-900">Propriété intellectuelle</h2>
              </div>
              <div className="space-y-3 pl-11 text-sm text-gray-600 leading-relaxed">
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.</p>
                <p>Tous les éléments accessibles sur le site restent la propriété exclusive d'AtelierCode ou de ses partenaires.</p>
                <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable d'AtelierCode.</p>
              </div>
            </motion.section>

            {/* 4. Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <h2 className="text-xl font-bold text-gray-900">Contact</h2>
              </div>
              <div className="pl-11">
                <p className="text-sm text-gray-600 mb-4">Pour toute question relative à ces mentions légales :</p>
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-400 mb-1">Email :</p>
                  <a href="mailto:contact@ateliercode.fr"
                    className="text-gray-900 font-semibold hover:underline transition-colors text-lg">
                    contact@ateliercode.fr
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Навігація */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-10 border-t border-gray-200"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Autres documents juridiques
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Politique de confidentialité", href: "/politique-confidentialite" },
                { label: "Conditions Générales de Vente", href: "/cgv" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-medium transition-all text-sm">
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Дата */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 pt-8 border-t border-gray-100 text-center text-sm text-gray-400"
          >
            <p>Document établi le : 12/01/2026</p>
            <p className="mt-1">
              <span className="font-medium">Dernière mise à jour :</span> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}