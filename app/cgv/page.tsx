'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle, FileText, Check, Clock, Shield, Mail, Package, CreditCard, ArrowRight } from 'lucide-react';

export default function CGV() {
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
            <FileText className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 tracking-wide">
              Conditions contractuelles
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
              Conditions Générales<br />de Vente
            </h1>
            <p className="text-lg text-gray-500">
              En vigueur au {new Date().toLocaleDateString('fr-FR')}
            </p>
          </motion.div>

          {/* Важливе попередження */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-8 p-6 rounded-2xl bg-amber-50 border border-amber-200"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-amber-800 mb-2">Important</h3>
                <p className="text-sm text-amber-700">
                  Ces conditions s'appliquent à toutes les prestations de services proposées par AtelierCode.
                  En confirmant votre commande, vous acceptez intégralement ces conditions.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">

            {/* 1. Objet */}
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
                <h2 className="text-xl font-bold text-gray-900">Objet</h2>
              </div>
              <div className="space-y-4 pl-11">
                <p className="text-sm text-gray-600">
                  Les présentes conditions générales de vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de services de développement web proposés par AtelierCode.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Champ d'application :</p>
                  <ul className="space-y-2">
                    {[
                      "Elles s'appliquent à toutes les prestations, sans restriction",
                      "Elles prévalent sur toute autre condition",
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

            {/* 2. Identification */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Identification du vendeur</h2>
              </div>
              <div className="space-y-3 pl-11">
                {[
                  { label: "Dénomination", value: "AtelierCode — Micro-entreprise" },
                  { label: "SIRET", value: "99993442500011" },
                  { label: "Adresse", value: "19 rue Menard, 30000 Nîmes" },
                  { label: "Email", value: "contact@ateliercode.fr" },
                  { label: "Téléphone", value: "+33 7 67 77 29 15" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                    <span className="font-medium text-gray-400 sm:w-32 flex-shrink-0">{item.label} :</span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 3. Prix et paiement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Prix et paiement</h2>
              </div>
              <div className="space-y-6 pl-11">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">5.1. Prix</h4>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-sm text-gray-600">Les prix sont indiqués en euros hors taxes (HT).</p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200">
                      <span className="text-sm font-semibold text-amber-700">TVA non applicable</span>
                      <span className="text-xs text-amber-600">(art. 293 B du CGI)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">5.2. Modalités de paiement</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Acompte", value: "50%", desc: "à la commande" },
                      { title: "Solde", value: "50%", desc: "à la livraison" },
                      { title: "Moyens", value: "Carte, Virement", desc: "acceptés" },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center hover:border-gray-300 transition-colors">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                        <div className="text-sm font-medium text-gray-700">{item.title}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-gray-400">
                    Paiement par carte bancaire sécurisé, virement bancaire ou PayPal.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 4. Délais et livraison */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Délais et livraison</h2>
              </div>
              <div className="space-y-5 pl-11">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">6.1. Délais de réalisation</h4>
                  <p className="text-sm text-gray-600 mb-3">Les délais de réalisation sont indiqués à titre indicatif sur le devis.</p>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-2">Modifications possibles en cas de :</p>
                    <ul className="space-y-1.5">
                      {[
                        "Retard dans la fourniture des éléments par le client",
                        "Demandes de modifications supplémentaires",
                        "Cas de force majeure",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">6.2. Livraison</h4>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-2">Le service est considéré comme livré lorsque :</p>
                    <ul className="space-y-2">
                      {[
                        "Le site est mis en ligne sur le serveur d'hébergement",
                        "Les fonctionnalités spécifiées dans le devis sont opérationnelles",
                        "Un email de confirmation est envoyé au client",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-gray-500" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 5. Droit de rétractation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-amber-50 rounded-2xl p-8 border border-amber-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-amber-800">Droit de rétractation</h2>
              </div>
              <div className="space-y-3 pl-11 text-sm text-amber-700">
                <p>
                  Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contrats de services pleinement exécutés avant la fin du délai de rétractation.
                </p>
                <div className="p-4 rounded-xl bg-amber-100 border border-amber-200">
                  <p className="font-medium text-amber-800 mb-1">Important :</p>
                  <p>Pour les services de développement web sur mesure, le droit de rétractation ne s'applique pas une fois que la prestation a commencé avec l'accord du client.</p>
                </div>
              </div>
            </motion.section>

            {/* 6. Garanties */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Garanties</h2>
              </div>
              <div className="space-y-3 pl-11">
                {[
                  {
                    title: "Garantie de conformité",
                    desc: "AtelierCode garantit que le service fourni est conforme aux spécifications du devis accepté."
                  },
                  {
                    title: "Maintenance incluse",
                    desc: "Une période de maintenance de 30 jours est incluse pour corriger les éventuels dysfonctionnements liés au développement."
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 7. Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Contact</h2>
              </div>
              <div className="pl-11">
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-4">Pour toute question relative aux CGV :</p>
                  <div className="space-y-3 text-sm">
                    {[
                      { label: "Dénomination", value: "AtelierCode — Micro-entreprise" },
                      { label: "Email", value: "contact@ateliercode.fr", link: "mailto:contact@ateliercode.fr" },
                      { label: "Adresse", value: "19 rue Menard, 30000 Nîmes" },
                    ].map((item, i) => (
                      <div key={i}>
                        <span className="text-gray-400">{item.label} : </span>
                        {item.link
                          ? <a href={item.link} className="text-gray-900 font-medium hover:underline">{item.value}</a>
                          : <span className="text-gray-800 font-medium">{item.value}</span>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Навігація */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-16 pt-10 border-t border-gray-200"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Documents juridiques
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "Politique de confidentialité", href: "/politique-confidentialite" },
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