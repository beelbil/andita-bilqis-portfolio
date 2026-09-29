'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Atmosphere from '@/components/Atmosphere';

interface EditorialStatementProps {
  lines: string[];
}

export default function EditorialStatement({ lines }: EditorialStatementProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section className="relative py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden w-full px-6" ref={containerRef}>
      <Atmosphere variant="editorial" isInView={isInView} />
      <div className="relative z-10 text-center">
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden mb-2 last:mb-0">
            <motion.div
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary leading-[0.95] tracking-tight whitespace-nowrap"
            >
              {line}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
