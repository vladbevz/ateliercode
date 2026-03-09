'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Eye, Mail, ArrowRight } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
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
            <Shield className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 tracking-wide">
              Protection des données
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
              Politique de<br />confidentialité
            </h1>
            <p className="text-lg text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>

          <div className="space-y-6">

            {/* 1. Introduction */}
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
                <h2 className="text-xl font-bold text-gray-900">Introduction</h2>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-sm text-gray-600">
                  AtelierCode ("nous", "notre", "nos") s'engage à protéger la vie privée de ses utilisateurs.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Conformité légale :</p>
                  <ul className="space-y-2">
                    {[
                      "Règlement Général sur la Protection des Données (RGPD)",
                      "Loi \"Informatique et Libertés\" du 6 janvier 1978 modifiée",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 2. Données collectées */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Données personnelles collectées</h2>
              </div>
              <div className="space-y-5 pl-11">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-3">Données fournies volontairement :</p>
                  <ul className="space-y-2">
                    {[
                      { title: "Formulaire de contact", desc: "Nom, adresse email, message" },
                      { title: "Demande de devis", desc: "Informations sur votre projet, budget, délais" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                        <span><span className="font-medium text-gray-800">{item.title} :</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-3">Données collectées automatiquement :</p>
                  <ul className="space-y-2">
                    {[
                      { title: "Données de navigation", desc: "Adresse IP, type de navigateur, pages visitées" },
                      { title: "Données techniques", desc: "Appareil utilisé, système d'exploitation" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                        <span><span className="font-medium text-gray-800">{item.title} :</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 3. Finalités */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Finalités du traitement</h2>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-sm text-gray-600">Nous utilisons vos données pour :</p>
                <ul className="space-y-2">
                  {[
                    "Répondre à vos demandes de contact",
                    "Établir des devis personnalisés",
                    "Améliorer notre site et nos services",
                    "Respecter nos obligations légales",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-600">
                  <span className="font-medium text-gray-700">Base légale : </span>
                  Votre consentement (article 6.1.a du RGPD) et notre intérêt légitime (article 6.1.f du RGPD).
                </div>
              </div>
            </motion.section>

            {/* 4. Conservation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Durée de conservation</h2>
              </div>
              <ul className="space-y-2 pl-11">
                {[
                  { title: "Données de contact", desc: "3 ans après le dernier contact" },
                  { title: "Données de navigation", desc: "13 mois" },
                  { title: "Factures et documents comptables", desc: "10 ans (obligation légale)" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                    <span><span className="font-medium text-gray-800">{item.title} :</span> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* 5. Vos droits */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  5
                </div>
                <h2 className="text-xl font-bold text-gray-900">Vos droits</h2>
              </div>
              <div className="pl-11">
                <p className="text-sm text-gray-500 mb-5">Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Droit d'accès", desc: "Obtenir confirmation du traitement de vos données" },
                    { title: "Droit de rectification", desc: "Corriger des données inexactes" },
                    { title: "Droit à l'effacement", desc: "Supprimer vos données ('droit à l'oubli')" },
                    { title: "Droit d'opposition", desc: "Vous opposer au traitement" },
                  ].map((right, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-colors">
                      <p className="text-sm font-semibold text-gray-900 mb-1">{right.title}</p>
                      <p className="text-xs text-gray-500">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* 6. Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Contact</h2>
              </div>
              <div className="space-y-4 pl-11">
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">Délégué à la protection des données (DPO) :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Nom : </span>
                      <span className="text-gray-800 font-medium">Bevz Vladyslav</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Email : </span>
                      <a href="mailto:contact@ateliercode.fr" className="text-gray-900 font-medium hover:underline">
                        contact@ateliercode.fr
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400">Adresse : </span>
                      <span className="text-gray-800">19 rue Menard, 30000 Nîmes</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">Autorité de contrôle :</p>
                  <p className="text-sm text-gray-500 mb-2">Vous avez le droit de déposer une réclamation auprès de la CNIL :</p>
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors font-medium">
                    https://www.cnil.fr
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Навігація */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-16 pt-10 border-t border-gray-200"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Documents juridiques
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Mentions légales", href: "/mentions-legales" },
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
        </motion.div>
      </div>
    </div>
  );
}