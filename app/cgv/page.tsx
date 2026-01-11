'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle, FileText, Check, Clock, Shield, Mail, Package, CreditCard } from 'lucide-react';

export default function CGV() {
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
            <FileText className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Conditions contractuelles
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
              Conditions Générales de Vente
            </h1>
            <p className="text-gray-400 text-lg">
              En vigueur au {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>

          {/* Важливе попередження */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="p-8 rounded-2xl bg-amber-900/10 border border-amber-800/30 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">Important</h3>
                  <p className="text-amber-200/80">
                    Ces conditions s'appliquent à toutes les prestations de services proposées par AtelierCode. 
                    En confirmant votre commande, vous acceptez intégralement ces conditions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Контент */}
          <div className="space-y-10">
            {/* Стаття 1 - Objet */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h2 className="text-xl font-semibold text-white">Objet</h2>
              </div>
              <div className="text-gray-300 space-y-4 pl-11">
                <p>Les présentes conditions générales de vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de services de développement web proposés par AtelierCode.</p>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-2">Champ d'application :</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5"></div>
                      <span>Elles s'appliquent à toutes les prestations, sans restriction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5"></div>
                      <span>Elles prévalent sur toute autre condition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Стаття 2 - Identification */}
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
                <h2 className="text-xl font-semibold text-white">Identification du vendeur</h2>
              </div>
              <div className="text-gray-300 space-y-2 pl-11">
                <p><span className="font-medium text-gray-400">AtelierCode</span> - Micro-entreprise</p>
                <p><span className="font-medium text-gray-400">SIRET :</span> [À ajouter après obtention]</p>
                <p><span className="font-medium text-gray-400">Adresse :</span> [Votre adresse complète]</p>
                <p><span className="font-medium text-gray-400">Email :</span> contact@ateliercode.fr</p>
                <p><span className="font-medium text-gray-400">Téléphone :</span> [Votre numéro de téléphone]</p>
              </div>
            </motion.section>

            {/* Стаття 5 - Prix et paiement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Prix et paiement</h2>
              </div>
              <div className="text-gray-300 space-y-6 pl-11">
                {/* Prix */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">5.1. Prix</h4>
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-gray-300">Les prix sont indiqués en euros hors taxes (HT).</p>
                    <div className="mt-3 p-3 rounded-lg bg-gray-800/30">
                      <p className="text-amber-300 font-medium">TVA non applicable</p>
                      <p className="text-gray-400 text-sm mt-1">(article 293 B du Code Général des Impôts)</p>
                    </div>
                  </div>
                </div>

                {/* Modalités de paiement - ЗМІНЕНО НА 50/50 */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">5.2. Modalités de paiement</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Acompte", value: "50%", desc: "à la commande" },
                      { title: "Solde", value: "50%", desc: "à la livraison" },
                      { title: "Moyens", value: "Carte, Virement", desc: "de paiement acceptés" },
                    ].map((item, index) => (
                      <div key={index} className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 text-center group/item hover:border-gray-700 transition-colors">
                        <div className="text-3xl font-bold text-white mb-2 group-hover/item:text-amber-300 transition-colors">
                          {item.value}
                        </div>
                        <div className="text-gray-300 font-medium mb-2">{item.title}</div>
                        <div className="text-gray-400 text-sm">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-gray-400 text-sm">
                    Paiement par carte bancaire sécurisé, virement bancaire ou PayPal.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Стаття 6 - Délais et livraison */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Délais et livraison</h2>
              </div>
              <div className="text-gray-300 space-y-6 pl-11">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">6.1. Délais de réalisation</h4>
                  <p className="mb-4">Les délais de réalisation sont indiqués à titre indicatif sur le devis.</p>
                  
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-white font-medium mb-3">Modifications possibles en cas de :</p>
                    <div className="space-y-3">
                      {[
                        "Retard dans la fourniture des éléments par le client",
                        "Demandes de modifications supplémentaires",
                        "Cas de force majeure",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-3">6.2. Livraison</h4>
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <p className="text-white font-medium mb-3">Le service est considéré comme livré lorsque :</p>
                    <div className="space-y-3">
                      {[
                        "Le site est mis en ligne sur le serveur d'hébergement",
                        "Les fonctionnalités spécifiées dans le devis sont opérationnelles",
                        "Un email de confirmation est envoyé au client",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded border border-gray-700 flex items-center justify-center">
                            <Check className="w-3 h-3 text-gray-400" />
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Стаття 7 - Droit de rétractation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-8 rounded-2xl bg-amber-900/10 border border-amber-800/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-900/30 border border-amber-800 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-amber-300">Droit de rétractation</h2>
              </div>
              <div className="text-amber-200/80 space-y-4 pl-11">
                <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contrats de services pleinement exécutés avant la fin du délai de rétractation.</p>
                <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-800/30">
                  <p className="text-amber-300 font-medium">Important :</p>
                  <p>Pour les services de développement web sur mesure, le droit de rétractation ne s'applique pas une fois que la prestation a commencé avec l'accord du client.</p>
                </div>
              </div>
            </motion.section>

            {/* Стаття 8 - Garanties */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Package className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Garanties</h2>
              </div>
              <div className="text-gray-300 space-y-4 pl-11">
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-2">Garantie de conformité</p>
                  <p className="text-gray-300">AtelierCode garantit que le service fourni est conforme aux spécifications du devis accepté.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-2">Maintenance incluse</p>
                  <p className="text-gray-300">Une période de maintenance de 30 jours est incluse pour corriger les éventuels dysfonctionnements liés au développement.</p>
                </div>
              </div>
            </motion.section>

            {/* Стаття 11 - Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm group hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Contact</h2>
              </div>
              <div className="text-gray-300 pl-11">
                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-white font-medium mb-4">Pour toute question relative aux CGV :</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Dénomination sociale</p>
                      <p className="text-white">AtelierCode - Micro-entreprise</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a href="mailto:contact@ateliercode.fr" className="text-gray-300 hover:text-white hover:underline transition-colors break-all text-lg">
                        contact@ateliercode.fr
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Adresse</p>
                      <p className="text-white">[Votre adresse complète]</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Навігація до інших сторінок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 pt-12 border-t border-gray-800/30"
          >
            <h3 className="text-lg font-medium text-gray-400 mb-6">Documents juridiques</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/mentions-legales" 
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold transition-all duration-300 hover:bg-gray-900/30 flex items-center gap-3">
                <span>Mentions légales</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
              </Link>
              <Link href="/politique-confidentialite"
                className="group px-8 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold transition-all duration-300 hover:bg-gray-900/30 flex items-center gap-3">
                <span>Politique de confidentialité</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}