// app/components/Hero.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap, Award } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-0"
    >
      {/* Анімований фон */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </motion.div>

      {/* Плаваючі точки — тільки на клієнті */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                y: [null, -30, 30, -30],
                x: [null, 30, -30, 30],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Заголовок */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 pt-12 md:pt-16 lg:pt-20"
            // ✅ прибрано leading-tight — воно стискало міжрядковий інтервал
            // і TypeAnimation рядок накладався на перший
          >
            <span className="block">Votre site web</span>

            {/* ✅ окремий блок з достатнім відступом зверху */}
            <span className="block mt-4 md:mt-6">
              {/* ✅ gradient на обгортці, підкреслення — окремий absolute div */}
              <span className="relative inline-block pb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    'vous apporte plus de clients',
                    2000,
                    'augmente votre chiffre',
                    2000,
                    'renforce votre image',
                    2000,
                    'travaille 24h/24',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                {/* Підкреслення не впливає на layout рядків вище */}
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full" />
              </span>
            </span>
          </motion.h1>

          {/* Підзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Transformez votre présence en ligne avec un site web qui ne se contente pas d'exister —{' '}
            <span className="text-gray-900 font-semibold">il performe et convertit.</span>
          </motion.p>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all shadow-2xl flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Obtenir un devis gratuit</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/processus"
                className="px-10 py-5 border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-3"
              >
                <span>Comment ça marche ?</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: <TrendingUp />, value: "+40%", label: "de clients en plus" },
              { icon: <Zap />, value: "< 2s", label: "de chargement" },
              { icon: <Users />, value: "10+", label: "clients satisfaits" },
              { icon: <Award />, value: "98/100", label: "Lighthouse" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-3 text-gray-700 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Скрол індикатор */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}