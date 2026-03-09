// app/components/StatsSection.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

const Counter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <TrendingUp />, value: 40, suffix: "%", label: "Conversion moyenne", desc: "pour nos clients" },
            { icon: <Users />, value: 50, suffix: "+", label: "Clients satisfaits", desc: "depuis 2020" },
            { icon: <Clock />, value: 7, suffix: "j", label: "Délai moyen", desc: "du brief à la mise en ligne" },
            { icon: <Star />, value: 98, suffix: "/100", label: "Lighthouse", desc: "score de performance" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4 text-gray-700">
                <div className="p-3 bg-gray-100 rounded-xl">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}