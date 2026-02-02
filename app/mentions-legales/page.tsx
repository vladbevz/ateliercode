'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20">
      
      {/* Чорно-сірий фон (як в Hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-black/40 to-black"></div>
      </div>

      {/* Тонка сіра сітка */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Сірий бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/30 border border-gray-800 mb-8 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Informations légales
            </span>
          </motion.div>

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-none text-white">
              Mentions légales
            </h1>
            <p className="text-gray-400 text-lg">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
            </p>
          </motion.div>

          {/* Контент */}
          <div className="space-y-10">
            {/* Едітор */}
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
                <h2 className="text-xl font-semibold text-white">Éditeur du site</h2>
              </div>
              <div className="text-gray-300 space-y-3 pl-11">
                <p><span className="font-medium text-gray-400">Dénomination sociale :</span> AtelierCode</p>
                <p><span className="font-medium text-gray-400">Statut juridique :</span> Micro-entreprise</p>
                <p><span className="font-medium text-gray-400">Siège social :</span> 19 rue Menard, 30000 Nimes</p>
                <p><span className="font-medium text-gray-400">SIRET :</span> 99993442500011</p>
                <p><span className="font-medium text-gray-400">Numéro de TVA :</span> Non applicable, en application de l'article 293 B du CGI</p>
                <p><span className="font-medium text-gray-400">Email :</span> contact@ateliercode.fr</p>
                <p><span className="font-medium text-gray-400">Directeur de la publication :</span> Bevz Vladyslav, auto-entrepreneur</p>
                <p><span className="font-medium text-gray-400">Téléphone :</span> +33767772915</p>
              </div>
            </motion.section>

            {/* Хостинг */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Hébergement</h2>
              </div>
              <div className="text-gray-300 space-y-4 pl-11">
                <div>
                  <p className="font-medium text-gray-400 mb-3">Développement et déploiement :</p>
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-white font-medium">Vercel Inc.</p>
                    <p className="text-gray-400 text-sm">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white hover:underline transition-colors text-sm">
                      https://vercel.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-400 mb-3">Nom de domaine et DNS :</p>
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-white font-medium">OVH SAS</p>
                    <p className="text-gray-400 text-sm">2 rue Kellermann, 59100 Roubaix, France</p>
                    <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white hover:underline transition-colors text-sm">
                      https://www.ovh.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Інші секції - скорочено для читабельності */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Propriété intellectuelle</h2>
              </div>
              <div className="text-gray-300 space-y-3 pl-11">
                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.</p>
                <p>Tous les éléments accessibles sur le site restent la propriété exclusive d'AtelierCode ou de ses partenaires.</p>
                <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable d'AtelierCode.</p>
              </div>
            </motion.section>

            {/* Контакт */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-lg font-bold">6</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Contact</h2>
              </div>
              <div className="text-gray-300 pl-11">
                <p>Pour toute question relative à ces mentions légales :</p>
                <div className="mt-4 p-5 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-2">Email :</p>
                  <a href="mailto:contact@ateliercode.fr" className="text-gray-300 hover:text-white hover:underline transition-colors break-all text-lg">
                    contact@ateliercode.fr
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Навігація до інших сторінок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-12 border-t border-gray-800/30"
          >
            <h3 className="text-lg font-medium text-gray-400 mb-6">Autres documents juridiques</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/politique-confidentialite" 
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold transition-all duration-300 hover:bg-gray-900/30 flex items-center gap-3">
                <span>Politique de confidentialité</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
              </Link>
              <Link href="/cgv"
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold transition-all duration-300 hover:bg-gray-900/30 flex items-center gap-3">
                <span>Conditions Générales de Vente</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Дата */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 pt-8 border-t border-gray-800/30 text-center text-sm text-gray-500"
          >
            <p>Document établi le : 12/01/2026</p>
            <p className="mt-1">
              <span className="font-medium text-gray-400">Dernière mise à jour :</span> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}