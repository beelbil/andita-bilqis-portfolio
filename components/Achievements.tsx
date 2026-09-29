'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { achievementsData } from '@/data/portfolio';
import Atmosphere from '@/components/Atmosphere';
import Image from 'next/image';
import Link from 'next/link';

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px',
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section
      id="achievements"
      ref={ref}
      className="
        relative
        py-24
        md:py-32
        overflow-hidden
      "
    >

      {/* ─────────────────────────────────────
      {/* ── Unified Ambient Atmosphere (Subtle Celestial Glow + Grid + Stars) ── */}
      <Atmosphere variant="achievements" isInView={isInView} />

      {/* ─────────────────────────────────────
          CONTENT
      ───────────────────────────────────── */}

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">

        {/* SECTION HEADING */}

        <div>
          <div className="flex items-center gap-4">
            <span
              className="
                text-xs
                md:text-sm
                uppercase
                tracking-[0.2em]
                font-mono
                text-white/40
                whitespace-nowrap
              "
            >
              ACHIEVEMENTS
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: 'left' }}
              className="h-px flex-1 bg-white/10"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-5
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Recognition &amp; Awards
          </motion.h2>
        </div>

        {/* ─────────────────────────────────────
            ACHIEVEMENT GRID
        ───────────────────────────────────── */}

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-sm
                p-6
                md:p-8
                transition-all
                duration-300
                hover:border-white/25
                hover:bg-white/[0.04]
              "
            >

              {/* Card glow */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  rounded-full
                  bg-white/[0.025]
                  blur-3xl
                  opacity-50
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  pointer-events-none
                "
              />

              {/* Top metadata */}
              <div className="relative flex items-center justify-between mb-5">

                <span
                  className="
                    text-[9px]
                    md:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-mono
                    text-white/35
                  "
                >
                  RECOGNITION / {String(index + 1).padStart(2, '0')}
                </span>

                {achievement.logo ? (
                  <div
                    className="
                      relative
                      w-9
                      h-9
                      rounded-full
                      overflow-hidden
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-1.5
                    "
                  >
                    <Image
                      src={achievement.logo}
                      alt="Organization logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <motion.span
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-white/70
                      shadow-[0_0_8px_rgba(255,255,255,0.5)]
                    "
                  />
                )}
              </div>

              {/* Date */}
              <span
                className="
                  relative
                  block
                  mb-3
                  text-[10px]
                  md:text-xs
                  font-mono
                  tracking-[0.12em]
                  text-white/30
                "
              >
                {achievement.date}
              </span>

              {/* Title */}
              <h3
                className="
                  relative
                  text-2xl
                  md:text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  leading-tight
                "
              >
                {achievement.title}
              </h3>

              {/* Divider */}
              <div className="relative my-6 h-px bg-white/10" />

              {/* Description */}
              <p
                className="
                  relative
                  text-sm
                  md:text-base
                  text-white/50
                  leading-relaxed
                  min-h-[80px]
                "
              >
                {achievement.description}
              </p>

              {/* Certificate */}
              {(achievement.certificate || achievement.proof) && (
                <div className="relative mt-7">

                  <button
                    onClick={() =>
                      setSelectedImage(
                        (achievement.certificate ||
                          achievement.proof)!
                      )
                    }
                    className="
                      group/image
                      relative
                      w-full
                      aspect-video
                      rounded-xl
                      overflow-hidden
                      border
                      border-white/10
                      bg-black
                      cursor-zoom-in
                      focus:outline-none
                      focus-visible:ring-1
                      focus-visible:ring-white/50
                    "
                  >
                    <Image
                      src={
                        (achievement.certificate ||
                          achievement.proof)!
                      }
                      alt="Certificate proof"
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover/image:scale-[1.035]
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover/image:bg-black/35
                        transition-colors
                        duration-300
                      "
                    />

                    {/* View button */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <span
                        className="
                          opacity-0
                          translate-y-2
                          group-hover/image:opacity-100
                          group-hover/image:translate-y-0
                          transition-all
                          duration-300
                          px-4
                          py-2
                          rounded-full
                          border
                          border-white/20
                          bg-black/60
                          backdrop-blur-md
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-white
                        "
                      >
                        VIEW FULL ↗
                      </span>
                    </div>
                  </button>
                </div>
              )}

              {/* Certificate link */}
              {achievement.link && (
                <Link
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    text-white/45
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  VIEW CERTIFICATE
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              )}

              {/* Bottom decorative line */}
              <div className="relative mt-7 flex items-center gap-3">
                <div
                  className="
                    h-px
                    w-8
                    bg-white/20
                    transition-all
                    duration-300
                    group-hover:w-14
                    group-hover:bg-white/50
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    font-mono
                    text-white/20
                  "
                >
                  Verified Achievement
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────
          FULL IMAGE MODAL
      ───────────────────────────────────── */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/90
              backdrop-blur-md
              p-4
              md:p-12
              cursor-zoom-out
            "
            onClick={() => setSelectedImage(null)}
          >

            {/* Close */}
            <button
              className="
                absolute
                top-6
                right-6
                z-50
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white/[0.05]
                border
                border-white/15
                text-white/70
                hover:text-white
                hover:border-white/40
                hover:bg-white/10
                transition-all
              "
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close certificate preview"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full
                h-full
                max-w-5xl
                max-h-[85vh]
                flex
                items-center
                justify-center
              "
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full size certificate"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}