'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutData } from '@/data/portfolio';
import Atmosphere from '@/components/Atmosphere';
import type { IconType } from 'react-icons';

// Simple Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiFigma,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

// Tabler Icons
import {
  TbBrain,
  TbApps,
  TbAutomation,
} from 'react-icons/tb';

// ──────────────────────────────────────────────
// Tech Stack
// ──────────────────────────────────────────────
const aboutTechStack: {
  name: string;
  icon: IconType;
}[] = [
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Vite',
    icon: SiVite,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    name: 'Python & NLP',
    icon: TbBrain,
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
  },
  {
    name: 'Figma',
    icon: SiFigma,
  },
  {
    name: 'Power Apps',
    icon: TbApps,
  },
  {
    name: 'Power Automate',
    icon: TbAutomation,
  },
  {
    name: 'GitHub',
    icon: SiGithub,
  },
  {
    name: 'Vercel',
    icon: SiVercel,
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: '-100px 0px',
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <Atmosphere variant="about" isInView={isInView} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ─────────────────────────────────────
            INTRO STATEMENT
        ───────────────────────────────────── */}
        <div className="mb-20 md:mb-32">
          <h2 className="sr-only">About Me</h2>

          {/* First Statement */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '110%' }}
              animate={
                isInView
                  ? { y: 0 }
                  : { y: '110%' }
              }
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                text-text-primary
                leading-[1.1]
              "
            >
              Curious about{' '}
              <span className="relative inline-block text-silver-shine italic">
                how things work.

                <span
                  className="
                    absolute
                    inset-0
                    bg-white/15
                    blur-xl
                    rounded-full
                    -z-10
                    pointer-events-none
                  "
                />
              </span>
            </motion.p>
          </div>

          {/* Second Statement */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '110%' }}
              animate={
                isInView
                  ? { y: 0 }
                  : { y: '110%' }
              }
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                text-text-primary
                leading-[1.1]
              "
            >
              Focused on{' '}
              <span className="relative inline-block text-silver-shine italic">
                building what works.

                <span
                  className="
                    absolute
                    inset-0
                    bg-white/15
                    blur-xl
                    rounded-full
                    -z-10
                    pointer-events-none
                  "
                />
              </span>
            </motion.p>
          </div>
        </div>

        {/* ─────────────────────────────────────
            ABOUT CONTENT
        ───────────────────────────────────── */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-12
            gap-12
            lg:gap-20
            border-t
            border-border
            pt-12
            md:pt-16
          "
        >

          {/* About Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: 'easeOut',
            }}
            className="
              md:col-span-7
              lg:col-span-8
              flex
              flex-col
              gap-6
            "
          >
            {aboutData.map(
              (paragraph: string, index: number) => (
                <p
                  key={index}
                  className="
                    text-base
                    md:text-lg
                    text-text-secondary
                    leading-relaxed
                  "
                >
                  {paragraph}
                </p>
              )
            )}
          </motion.div>

          {/* About Details */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: 'easeOut',
            }}
            className="
              md:col-span-5
              lg:col-span-4
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8
                md:border-l
                md:border-border
                md:pl-8
              "
            >

              {/* Education */}
              <div className="flex flex-col gap-2">
                <span
                  className="
                    text-sm
                    uppercase
                    tracking-wider
                    font-mono
                    text-text-muted
                  "
                >
                  Education
                </span>

                <span className="text-base text-text-primary">
                  BINUS University
                </span>

                <span className="text-sm text-text-secondary">
                  Computer Science, Semester 5
                </span>
              </div>

              <div className="w-full h-px bg-border md:hidden" />

              {/* Interests */}
              <div className="flex flex-col gap-2">
                <span
                  className="
                    text-sm
                    uppercase
                    tracking-wider
                    font-mono
                    text-text-muted
                  "
                >
                  Interests
                </span>

                <span className="text-base text-text-primary">
                  Software Engineering,
                  Full Stack Development,
                  Quality Assurance,
                  AI, Data & Automation
                </span>
              </div>

              <div className="w-full h-px bg-border md:hidden" />

              {/* Creative */}
              <div className="flex flex-col gap-2">
                <span
                  className="
                    text-sm
                    uppercase
                    tracking-wider
                    font-mono
                    text-text-muted
                  "
                >
                  Creative
                </span>

                <span className="text-base text-text-primary">
                  Video Production
                </span>

                <span className="text-sm text-text-secondary">
                  Editing, Visual Storytelling
                </span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────
            TECH STACK
        ───────────────────────────────────── */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: 'easeOut',
          }}
          className="mt-20 md:mt-24"
        >

          {/* Tech Stack Header */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="
                text-xs
                md:text-sm
                uppercase
                tracking-[0.18em]
                font-mono
                text-text-muted
                whitespace-nowrap
              "
            >
              Tech Stack
            </span>

            <div className="h-px bg-border flex-1" />
          </div>

          {/* Tech Stack Pills */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-3
            "
          >
            {aboutTechStack.map(
              (tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {
                            opacity: 0,
                            y: 12,
                          }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.95 + index * 0.05,
                      ease: 'easeOut',
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      min-h-[56px]
                      border
                      border-border
                      rounded-xl
                      bg-surface/20
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-white/30
                      hover:bg-white/[0.04]
                    "
                  >
                    <Icon
                      className="
                        w-5
                        h-5
                        shrink-0
                        text-text-muted
                        opacity-80
                        transition-all
                        duration-300
                        group-hover:text-text-primary
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        text-sm
                        md:text-[15px]
                        font-medium
                        text-text-secondary
                        transition-colors
                        duration-300
                        group-hover:text-text-primary
                      "
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              }
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}