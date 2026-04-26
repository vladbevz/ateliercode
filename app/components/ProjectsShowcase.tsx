'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Le 438",
    category: "Restaurant",
    description: "Site simple avec menu interactif",
    desktopImage: "/images/restaurant/desktop.png",
    laptopImage: "/images/restaurant/laptop.png",
    mobileImage: "/images/restaurant/mobile.png",
    stats: [
      { label: "Réservations", value: "+36%", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Temps sur site", value: "+8min", icon: <Clock className="w-3 h-3" /> }
    ],
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-600",
    link: "https://le438-restaurant.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio Photographe",
    category: "Photographie",
    description: "Portfolio élégant pour photographe avec galerie dynamique et design minimaliste.",
    desktopImage: "/images/photographer/desktop.png",
    laptopImage: "/images/photographer/laptop.png",
    mobileImage: "/images/photographer/mobile.png",
    stats: [
      { label: "Demandes", value: "+20%", icon: <Users className="w-3 h-3" /> },
      { label: "Conversion", value: "+40%", icon: <Zap className="w-3 h-3" /> }
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    link: "https://www.anastasiasyrmais.pro/"
  },
  {
    id: 3,
    title: "AquaTracker",
    category: "Application",
    description: "Application de suivi d'hydratation avec dashboard personnalisé et rappels intelligents.",
    desktopImage: "/images/aquatracker/desktop.png",
    laptopImage: "/images/aquatracker/laptop.png",
    mobileImage: "/images/aquatracker/mobile.png",
    stats: [
      { label: "Utilisateurs", value: "+500", icon: <Users className="w-3 h-3" /> },
      { label: "Rétention", value: "74%", icon: <TrendingUp className="w-3 h-3" /> }
    ],
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    textColor: "text-sky-600",
    link: "https://aqua-tracker-fe-rose.vercel.app/"
  },
  {
    id: 4,
    title: "Laboratoire Dentaire",
    category: "Médical",
    description: "Site vitrine pour laboratoire dentaire avec présentation des services.",
    desktopImage: "/images/labo-dentaire/desktop.png",
    laptopImage: "/images/labo-dentaire/laptop.png",
    mobileImage: "/images/labo-dentaire/mobile.png",
    stats: [
      { label: "Clients", value: "+67%", icon: <Users className="w-3 h-3" /> },
      { label: "Confiance", value: "98%", icon: <Zap className="w-3 h-3" /> }
    ],
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    link: "https://dm-laboratorium.vercel.app/"
  },
  {
    id: 5,
    title: "Chocolatier Artisanal",
    category: "Artisanat",
    description: "Site vitrine pour chocolatier avec galerie produits et informations.",
    desktopImage: "/images/chocolatier/desktop.png",
    laptopImage: "/images/chocolatier/laptop.png",
    mobileImage: "/images/chocolatier/mobile.png",
    stats: [
      { label: "Ventes", value: "+234%", icon: <TrendingUp className="w-3 h-3" /> },
      { label: "Panier moyen", value: "+45€", icon: <Zap className="w-3 h-3" /> }
    ],
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-600",
    link: "https://vladbevz.github.io/Simply-chocolate/"
  }
];

const MultiDeviceMockup = ({ project }: { project: typeof projects[0] }) => (
  <div className="relative w-full h-[500px] flex items-center justify-center">
    <div className={`absolute inset-0 ${project.bgColor} opacity-10 rounded-full blur-3xl scale-150`} />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10">
      <Image src={project.desktopImage} alt={`${project.title} - desktop`} width={1400} height={900} className="w-full h-auto object-contain drop-shadow-2xl" priority />
    </div>
    <div className="absolute right-[-5%] bottom-[15%] w-[55%] z-20" style={{ transform: 'rotate(2deg)' }}>
      <Image src={project.laptopImage} alt={`${project.title} - laptop`} width={700} height={450} className="w-full h-auto object-contain drop-shadow-xl" />
    </div>
    <div className="absolute left-[0%] bottom-[15%] w-[55%] z-30" style={{ transform: 'rotate(-3deg)' }}>
      <Image src={project.mobileImage} alt={`${project.title} - mobile`} width={280} height={560} className="w-full h-auto object-contain drop-shadow-lg" />
    </div>
  </div>
);

// ✅ FIX 3: прибрано border-2 і borderColor — немає рамки на мобільному
const MobileMockup = ({ project }: { project: typeof projects[0] }) => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-sm">
    <Image
      src={project.desktopImage}
      alt={project.title}
      width={800}
      height={500}
      className="w-full h-auto object-cover"
      priority
    />
    <div className="absolute top-3 left-3 z-20">
      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/90 ${project.textColor} border ${project.borderColor}`}>
        {project.category}
      </span>
    </div>
  </div>
);

// ✅ FIX 2: анімація тільки по opacity — без x/y зміщення
// це прибирає вертикальні стрибки на мобільному при flex-col layout
const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, zIndex: 1 },
  exit: { opacity: 0, zIndex: 0 }
};

export default function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // ✅ FIX 1: useCallback щоб paginate мав стабільний референс в useEffect
  const paginate = useCallback((newDir: number) => {
    setDirection(newDir);
    setCurrentIndex(i => (i + newDir + projects.length) % projects.length);
  }, []);

  // ✅ FIX 1: затримка 8 секунд перед першим автоперемиканням
  useEffect(() => {
    const t = setInterval(() => paginate(1), 8000);
    return () => clearInterval(t);
  }, [paginate]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
    setTouchStart(null);
  };

  const p = projects[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Des résultats <span className="text-gray-300">concrets</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Découvrez comment nous avons transformé la présence en ligne de nos clients
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 -translate-x-3 md:-translate-x-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 border border-gray-200 flex items-center justify-center"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          <div
            className="overflow-hidden px-6 md:px-14"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                  {/* Mockup — зверху на мобільному */}
                  <div className="w-full order-1 lg:order-2">
                    <div className="hidden lg:block">
                      <MultiDeviceMockup project={p} />
                    </div>
                    <div className="lg:hidden">
                      <MobileMockup project={p} />
                    </div>
                  </div>

                  {/* Текст — знизу на мобільному */}
                  <div className="space-y-4 md:space-y-6 order-2 lg:order-1 w-full">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.bgColor} border ${p.borderColor}`} />
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{p.category}</span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900">{p.title}</h3>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">{p.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      {p.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className={`p-3 md:p-4 rounded-xl ${p.bgColor} border ${p.borderColor}`}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className={p.textColor}>{stat.icon}</div>
                            <span className="text-xs text-gray-500">{stat.label}</span>
                          </div>
                          <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50 translate-x-3 md:translate-x-10 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 border border-gray-200 flex items-center justify-center"
            aria-label="Projet suivant"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
              className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-gray-900' : 'w-1.5 bg-gray-300'}`}
              aria-label={`Projet ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 md:mt-12"
        >
          <Link href="/realisations" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all text-sm">
            <span>Voir tous les projets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
