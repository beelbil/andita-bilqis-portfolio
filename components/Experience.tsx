'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { experienceData } from '@/data/portfolio';
import Atmosphere from '@/components/Atmosphere';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px',
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="
        relative
        py-24
        md:py-32
        overflow-hidden
      "
    >

      {/* ─────────────────────────────────────
      {/* ── Unified Ambient Atmosphere (Curved Orbit + Grid + Glows + Stars) ── */}
      <Atmosphere variant="experience" isInView={isInView} />

      {/* ─────────────────────────────────────
          CONTENT
      ───────────────────────────────────── */}

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">

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
              EXPERIENCE
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2
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
            Organizations &amp; Roles
          </h2>
        </div>

        {/* ─────────────────────────────────
            EXPERIENCE TIMELINE
        ───────────────────────────────── */}

        <div className="relative mt-16 md:mt-24 max-w-5xl">

          {/* Vertical timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: 'top',
            }}
            className="
              absolute
              left-[8px]
              md:left-[95px]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-white/30
              via-white/10
              to-transparent
            "
          />

          {experienceData.map((exp, index) => {
            const numStr =
              index + 1 < 10
                ? `0${index + 1}`
                : `${index + 1}`;

            return (
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
                  duration: 0.75,
                  delay: 0.35 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  grid
                  grid-cols-1
                  md:grid-cols-[72px_1fr]
                  gap-8
                  md:gap-12
                  pb-12
                  md:pb-16
                  last:pb-0
                "
              >

                {/* ─────────────────────────
                    TIMELINE NODE
                ───────────────────────── */}

                <div
                  className="
                    absolute
                    left-[2px]
                    md:left-[89px]
                    top-1
                    z-20
                    w-3
                    h-3
                    rounded-full
                    border
                    border-white/50
                    bg-black
                    shadow-[0_0_14px_rgba(255,255,255,0.3)]
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
                      delay: 0.5 + index * 0.12,
                    }}
                    className="
                      absolute
                      inset-[3px]
                      rounded-full
                      bg-white/80
                    "
                  />
                </div>

                {/* ─────────────────────────
                    NUMBER
                ───────────────────────── */}

                <div className="pl-8 md:pl-0 pt-0.5">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      md:text-xs
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    {numStr}
                  </span>
                </div>

                {/* ─────────────────────────
                    EXPERIENCE CARD
                ───────────────────────── */}

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.3,
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
                      w-48
                      h-48
                      rounded-full
                      bg-white/[0.025]
                      blur-3xl
                      opacity-50
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
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
                      EXPERIENCE / {numStr}
                    </span>

                    <motion.span
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.4,
                      }}
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-white/70
                        shadow-[0_0_8px_rgba(255,255,255,0.5)]
                      "
                    />
                  </div>

                  {/* Organization */}
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
                    {exp.organization}
                  </h3>

                  {/* Role */}
                  <div className="relative mt-3 flex items-center gap-3">

                    <span
                      className="
                        h-px
                        w-7
                        bg-white/30
                        transition-all
                        duration-300
                        group-hover:w-12
                        group-hover:bg-white/60
                      "
                    />

                    <span
                      className="
                        text-sm
                        md:text-base
                        font-medium
                        text-white/65
                        transition-colors
                        duration-300
                        group-hover:text-white/90
                      "
                    >
                      {exp.role}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="relative my-6 h-px bg-white/10" />

                  {/* Description */}
                  <p
                    className="
                      relative
                      max-w-3xl
                      text-sm
                      md:text-base
                      text-white/50
                      leading-relaxed
                    "
                  >
                    {exp.description}
                  </p>

                  {/* Keywords */}
                  {exp.keywords && (
                    <div className="relative mt-7 flex flex-wrap gap-2">
                      {exp.keywords
                        .split(' · ')
                        .map((skill: string) => (
                          <span
                            key={skill}
                            className="
                              text-[10px]
                              md:text-xs
                              uppercase
                              tracking-wider
                              px-3
                              py-1.5
                              rounded-full
                              border
                              border-white/10
                              text-white/40
                              bg-white/[0.02]
                              transition-all
                              duration-300
                              group-hover:border-white/20
                              group-hover:text-white/60
                            "
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  )}

                  {/* Bottom decorative line */}
                  <div className="relative mt-7 flex items-center gap-3">
                    <motion.div
                      className="h-px bg-white/20"
                      initial={{ width: 24 }}
                      whileHover={{ width: 48 }}
                      transition={{ duration: 0.3 }}
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
                      Professional Experience
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}