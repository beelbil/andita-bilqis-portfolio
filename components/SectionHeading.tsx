'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ label, title, subtitle, align = 'left' }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-full ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start'}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* Label area */}
      <motion.div variants={itemVariants} className="flex flex-col mb-4">
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className="w-4 h-[1px] bg-accent"></span>
          <span className="text-text-muted text-xs font-mono tracking-widest uppercase">
            {label}
          </span>
        </div>
        <div className={`mt-2 h-[1px] bg-border w-16 ${align === 'center' ? 'mx-auto' : ''}`} />
      </motion.div>

      {/* Title */}
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p variants={itemVariants} className={`text-lg text-text-secondary mt-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
