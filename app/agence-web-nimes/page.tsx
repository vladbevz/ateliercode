'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Check, Star, Target } from 'lucide-react';

export default function AgenceWebNimes() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20">
      {/* Твій чорно-сірий фон з Hero */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/30 border border-gray-800 mb-8">
            <MapPin className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300">Agence Web à Nîmes</span>
          </div>

          {/* Заголовок з ключовими словами */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Agence Web à <span className="text-amber-300">Nîmes</span><br />
            Création de Sites Internet
          </h1>

          {/* Опис */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            AtelierCode est votre agence web spécialisée à Nîmes. Développement de sites vitrines, 
            e-commerce et applications web pour les entreprises du Gard et d'Occitanie.
          </p>

          {/* Ключові слова */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Nos services à Nîmes :</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Création site web Nîmes",
                "Développement e-commerce Gard",
                "Référencement naturel Nîmes",
                "Site vitrine professionnel",
                "Maintenance site internet",
                "Formation WordPress"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/30 border border-gray-800">
                  <Check className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Зона обслуговування */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-amber-400" />
              Zone d'intervention à Nîmes et dans le Gard
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Nîmes Centre", "Alès", "Montpellier", "Avignon", "Arles", "Uzès", "Bagnols-sur-Cèze", "Beaucaire"].map((ville, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-900/30 border border-gray-800 text-center">
                  <div className="text-white font-medium">{ville}</div>
                  <div className="text-gray-400 text-sm">Gard (30)</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Vous cherchez une agence web à Nîmes ?</h3>
            <p className="text-gray-400 mb-6">Contactez votre expert local en développement web.</p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Demander un devis gratuit
              <Star className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}