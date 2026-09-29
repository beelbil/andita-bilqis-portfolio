'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { educationData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Atmosphere from '@/components/Atmosphere';

export default function Education() {
  const containerRef = useRef<HTMLElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: '-100px 0px',
  });

  return (
    <section
      id="education"
      ref={containerRef}
      className="
        relative
        py-24
        md:py-32
        border-t
        border-border
        overflow-hidden
      "
    >

      {/* ── Unified Ambient Atmosphere (Celestial Planet + Grid + Starfield) ── */}
      <Atmosphere variant="education" isInView={isInView} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ─────────────────────────────────────
            SECTION HEADING
        ───────────────────────────────────── */}

        <div className="flex items-center gap-4">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-mono text-white/40 whitespace-nowrap">
            EDUCATION
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Academic Journey
        </h2>

        {/* ─────────────────────────────────────
            TIMELINE
        ───────────────────────────────────── */}

        <div className="relative mt-16 md:mt-24">

          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={
              isInView
                ? { scaleY: 1 }
                : { scaleY: 0 }
            }
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: 'top' }}
            className="
              absolute
              left-[11px]
              md:left-[calc(33.333%-18px)]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-white/30
              via-white/10
              to-transparent
            "
          />

          {educationData.map((item, index) => (
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
                duration: 0.8,
                delay: 0.35 + index * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                grid
                grid-cols-1
                md:grid-cols-12
                gap-8
                md:gap-12
                pb-14
                md:pb-20
                last:pb-0
              "
            >

              {/* ─────────────────────────────
                  TIMELINE NODE
              ───────────────────────────── */}

              <div
                className="
                  absolute
                  left-[5px]
                  md:left-[calc(33.333%-24px)]
                  top-1
                  z-20
                  w-3
                  h-3
                  rounded-full
                  border
                  border-white/50
                  bg-black
                  shadow-[0_0_12px_rgba(255,255,255,0.35)]
                "
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={
                    isInView
                      ? { scale: 1 }
                      : { scale: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.18,
                  }}
                  className="
                    absolute
                    inset-[3px]
                    rounded-full
                    bg-white/80
                  "
                />
              </div>

              {/* ─────────────────────────────
                  PERIOD
              ───────────────────────────── */}

              <div
                className="
                  md:col-span-4
                  pl-10
                  md:pl-0
                  md:pr-8
                "
              >
                <div className="flex flex-col gap-2">

                  <span
                    className="
                      text-[10px]
                      md:text-xs
                      font-mono
                      tracking-[0.2em]
                      uppercase
                      text-white/40
                    "
                  >
                    0{index + 1} / PERIOD
                  </span>

                  <span
                    className="
                      text-sm
                      md:text-base
                      font-mono
                      text-white/65
                    "
                  >
                    {item.period}
                  </span>

                </div>
              </div>

              {/* ─────────────────────────────
                  CONTENT CARD
              ───────────────────────────── */}

              <div
                className="
                  md:col-span-8
                  pl-10
                  md:pl-0
                "
              >
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
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
                      pointer-events-none
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      opacity-50
                    "
                  />

                  {/* Top metadata */}
                  <div className="relative flex items-center justify-between mb-5">

                    <span
                      className="
                        text-[10px]
                        md:text-xs
                        uppercase
                        tracking-[0.18em]
                        font-mono
                        text-white/45
                      "
                    >
                      Academic Record
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-mono
                        text-white/25
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </div>

                  {/* Institution */}
                  <h3
                    className="
                      relative
                      text-2xl
                      md:text-3xl
                      lg:text-4xl
                      font-bold
                      tracking-tight
                      text-white
                      leading-tight
                    "
                  >
                    {item.institution}
                  </h3>

                  {/* Degree */}
                  <div className="relative mt-4 flex flex-wrap items-center gap-3">

                    <span
                      className="
                        inline-flex
                        items-center
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.035]
                        text-xs
                        md:text-sm
                        uppercase
                        tracking-wider
                        text-white/75
                      "
                    >
                      {item.degree}
                    </span>

                    {item.major && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/25" />

                        <span
                          className="
                            text-sm
                            text-white/45
                          "
                        >
                          {item.major}
                        </span>
                      </>
                    )}

                  </div>

                  {/* Divider */}
                  <div className="relative my-6 h-px bg-white/10" />

                  {/* Description */}
                  <p
                    className="
                      relative
                      max-w-2xl
                      text-sm
                      md:text-base
                      text-white/55
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                  {/* Bottom decorative line */}
                  <div
                    className="
                      relative
                      mt-7
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div className="h-px w-8 bg-white/25 transition-all duration-300 group-hover:w-14 group-hover:bg-white/50" />

                    <span
                      className="
                        text-[9px]
                        font-mono
                        tracking-[0.2em]
                        text-white/25
                        uppercase
                      "
                    >
                      Academic Progress
                    </span>
                  </div>

                </motion.div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}