'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20">
      
      {/* Чорно-сірий фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-black/40 to-black"></div>
      </div>

      {/* Сітка */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/30 border border-gray-800 mb-8 backdrop-blur-sm"
          >
            <Shield className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Protection des données
            </span>
          </motion.div>

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-none text-white">
              Politique de confidentialité
            </h1>
            <p className="text-gray-400 text-lg">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>

          {/* Контент */}
          <div className="space-y-10">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Introduction</h2>
              </div>
              <div className="text-gray-300 space-y-4 pl-11">
                <p>AtelierCode ("nous", "notre", "nos") s'engage à protéger la vie privée de ses utilisateurs.</p>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-2">Conformité légale :</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5"></div>
                      <span>Règlement Général sur la Protection des Données (RGPD)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5"></div>
                      <span>Loi "Informatique et Libertés" du 6 janvier 1978 modifiée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Données collectées */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Données personnelles collectées</h2>
              </div>
              <div className="text-gray-300 space-y-4 pl-11">
                <div>
                  <p className="font-medium text-gray-400 mb-3">Données fournies volontairement :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="text-white">Formulaire de contact :</span> Nom, adresse email, message</li>
                    <li><span className="text-white">Demande de devis :</span> Informations sur votre projet, budget, délais</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-400 mb-3">Données collectées automatiquement :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="text-white">Données de navigation :</span> Adresse IP, type de navigateur, pages visitées</li>
                    <li><span className="text-white">Données techniques :</span> Appareil utilisé, système d'exploitation</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Finalités */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Finalités du traitement</h2>
              </div>
              <div className="text-gray-300 space-y-3 pl-11">
                <p>Nous utilisons vos données pour :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Établir des devis personnalisés</li>
                  <li>Améliorer notre site et nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
                <p className="mt-4 p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                  <span className="text-gray-400">Base légale :</span> Votre consentement (article 6.1.a du RGPD) et notre intérêt légitime (article 6.1.f du RGPD).
                </p>
              </div>
            </motion.section>

            {/* Conservation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Durée de conservation</h2>
              </div>
              <div className="text-gray-300 space-y-3 pl-11">
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="text-white">Données de contact :</span> 3 ans après le dernier contact</li>
                  <li><span className="text-white">Données de navigation :</span> 13 mois</li>
                  <li><span className="text-white">Factures et documents comptables :</span> 10 ans (obligation légale)</li>
                </ul>
              </div>
            </motion.section>

            {/* Ваші права */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Vos droits</h2>
              </div>
              <div className="text-gray-300 space-y-4 pl-11">
                <p className="text-gray-400 mb-6">Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Droit d'accès", desc: "Obtenir confirmation du traitement de vos données" },
                    { title: "Droit de rectification", desc: "Corriger des données inexactes" },
                    { title: "Droit à l'effacement", desc: "Supprimer vos données ('droit à l'oubli')" },
                    { title: "Droit d'opposition", desc: "Vous opposer au traitement" },
                  ].map((right, index) => (
                    <div key={index} className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors group/right">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 group-hover/right:bg-white transition-colors"></div>
                        <div>
                          <h4 className="text-white font-medium mb-2">{right.title}</h4>
                          <p className="text-gray-400 text-sm">{right.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Контакт */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Contact</h2>
              </div>
              <div className="text-gray-300 space-y-6 pl-11">
                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-3">Délégué à la protection des données (DPO) :</p>
                  <p className="text-gray-300 mb-4">Bevz Vladyslav</p>
                  
                  <p className="text-white font-medium mb-2">Email :</p>
                  <a href="mailto:contact@ateliercode.fr" className="text-gray-300 hover:text-white hover:underline transition-colors break-all text-lg block mb-4">
                    contact@ateliercode.fr
                  </a>
                  
                  <p className="text-white font-medium mb-2">Adresse :</p>
                  <p className="text-gray-300">19 rue Menard, 30000 Nimes</p>
                </div>
                
                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-3">Autorité de contrôle :</p>
                  <p className="text-gray-300 mb-3">Vous avez le droit de déposer une réclamation auprès de la CNIL :</p>
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:underline transition-colors">
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
            className="mt-16 pt-12 border-t border-gray-800/30"
          >
            <h3 className="text-lg font-medium text-gray-400 mb-6">Documents juridiques</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/mentions-legales" 
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold transition-all duration-300 hover:bg-gray-900/30 flex items-center gap-3">
                <span>Mentions légales</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
              </Link>
              <Link href="/cgv"
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold transition-all duration-300 hover:bg-gray-900/30 flex items-center gap-3">
                <span>Conditions Générales de Vente</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}