// app/components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLink, setIsLink] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Трансформації для 3D ефекту - використовуємо фіксовані значення замість window
  const rotateX = useTransform(cursorY, [0, 1000], [5, -5]);
  const rotateY = useTransform(cursorX, [0, 1000], [-5, 5]);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsLink(!!target.closest('a') || !!target.closest('button'));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] perspective-1000"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
    >
      {/* Зовнішнє кільце */}
      <motion.div
        animate={{
          scale: isLink ? [1, 1.2, 1] : 1,
          borderColor: isLink ? ['#111', '#666', '#111'] : '#ccc',
        }}
        transition={{ duration: 1, repeat: isLink ? Infinity : 0 }}
        className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
          isLink ? 'border-gray-900' : 'border-gray-300'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(20px)',
        }}
      />
      
      {/* Внутрішній шар */}
      <motion.div
        animate={{
          scale: isLink ? [0.8, 1, 0.8] : 1,
          opacity: isLink ? [0.3, 0.8, 0.3] : 0.2,
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 rounded-full blur-md"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(10px)',
        }}
      />
      
      {/* Ядро */}
      <motion.div
        animate={{
          scale: isLink ? [1, 1.5, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
          isLink ? 'bg-gray-900' : 'bg-gray-400'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(30px)',
        }}
      />
    </motion.div>
  );
}