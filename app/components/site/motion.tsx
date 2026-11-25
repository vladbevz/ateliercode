'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Entrées staggerées au scroll ───────────────────────────────────── */

type Direction = 'up' | 'left';

const listVariants = (stagger: number): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: stagger } },
});

const itemVariants: Variants = {
  hidden: (dir: Direction) => (dir === 'left' ? { opacity: 0, x: -24 } : { opacity: 0, y: 20 }),
  shown: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function MotionList({
  as = 'ul',
  stagger = 0.12,
  className,
  children,
}: {
  as?: 'ul' | 'ol';
  stagger?: number;
  className?: string;
  children: ReactNode;
}) {
  const Tag = as === 'ol' ? motion.ol : motion.ul;
  return (
    <Tag
      className={className}
      variants={listVariants(stagger)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </Tag>
  );
}

export function MotionItem({
  direction = 'up',
  className,
  children,
}: {
  direction?: Direction;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.li className={className} custom={direction} variants={itemVariants}>
      {children}
    </motion.li>
  );
}

/* ─── Mot rotatif (hero) ─────────────────────────────────────────────── */

export function RotatingWord({ words, interval = 2500, className = '' }: { words: string[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (document.visibilityState === 'visible') setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-flex overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="inline-block whitespace-nowrap"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
