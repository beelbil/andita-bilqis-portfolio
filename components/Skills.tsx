'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Atmosphere from '@/components/Atmosphere';
import type { IconType } from 'react-icons';

// Simple Icons
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiHostinger,
  SiGooglegemini,
  SiCanvas,
  SiGooglecloud,
} from 'react-icons/si';

// Tabler Icons
import {
  TbDatabase,
  TbBrain,
  TbVideo,
  TbCode,
  TbApps,
  TbAutomation,
  TbChartBar,
  TbCloud,
  TbPalette,
} from 'react-icons/tb';

// ──────────────────────────────────────────────
// Icon registry — maps technology name → icon
// ──────────────────────────────────────────────
const techIcons: Record<string, IconType> = {
  // Programming / Development
  'HTML':               SiHtml5,
  'CSS':                SiCss,
  'JavaScript':         SiJavascript,
  'TypeScript':         SiTypescript,
  'Python & NLP':       TbBrain,
  'React':              SiReact,
  'Next.js':            SiNextdotjs,
  'Vite':               SiVite,

  // Styling
  'Tailwind CSS':       SiTailwindcss,

  // Database
  'SQL':                TbDatabase,
  'PostgreSQL':         SiPostgresql,

  // Microsoft / Low-Code
  'Power Apps':         TbApps,
  'Power Automate':     TbAutomation,
  'Power BI':           TbChartBar,
  'SharePoint':          TbCloud,

  // Design
  'Figma':              SiFigma,
  'FigJam':             TbPalette,
  'Canva':              SiCanvas,

  // Development / Deployment
  'Git':                SiGit,
  'GitHub':             SiGithub,
  'Vercel':             SiVercel,
  'Hostinger':          SiHostinger,

  // AI
  'Google Gemini':      SiGooglegemini,

  // AI Creative
  'Google Flow':        SiGooglecloud,
  'AI Video Generation': TbVideo,
};

// Fallback icon for unmapped technologies
const FallbackIcon: IconType = TbCode;

// ──────────────────────────────────────────────
// Flatten all skills across categories into one
// unique ordered list for the marquee
// ──────────────────────────────────────────────
function getAllTechItems(): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const category of skillsData) {
    for (const skill of category.skills) {
      if (!seen.has(skill)) {
        seen.add(skill);
        result.push(skill);
      }
    }
  }

  return result;
}

// ──────────────────────────────────────────────
// Single tech pill
// ──────────────────────────────────────────────
function TechPill({ name }: { name: string }) {
  const Icon = techIcons[name] || FallbackIcon;

  return (
    <span className="inline-flex items-center gap-2.5 px-4 py-2 border border-border rounded-full text-sm text-text-secondary whitespace-nowrap select-none transition-colors duration-200 hover:border-accent/60 hover:text-text-primary bg-surface/40 backdrop-blur-sm cursor-default shrink-0">
      <Icon className="w-4 h-4 shrink-0 opacity-70" />
      <span className="font-medium">{name}</span>
    </span>
  );
}

// ──────────────────────────────────────────────
// Skills section
// ──────────────────────────────────────────────
export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: '-80px 0px',
  });

  const allTech = getAllTechItems();

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-24 md:py-32 border-t border-border overflow-hidden"
    >
      <Atmosphere variant="skills" isInView={isInView} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center gap-4">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-mono text-white/45 whitespace-nowrap">
            TECH STACK
          </span>

          <div className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Technologies & Tools
        </h2>
      </div>

      {/* ── Marquee ──────────────────────────── */}
      <motion.div
        className="mt-16 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
        }
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: 'easeOut',
        }}
      >
        {/* Overflow container */}
        <div className="w-full overflow-hidden">
          {/*
            Inner track: two identical copies side-by-side.
            CSS animation translates the track continuously
            for a seamless marquee loop.
          */}
          <div className="animate-tech-marquee flex w-max gap-4">

            {/* Copy 1 */}
            {allTech.map((tech, i) => (
              <TechPill
                key={`a-${i}`}
                name={tech}
              />
            ))}

            {/* Spacer between copies */}
            <span
              className="w-4 shrink-0"
              aria-hidden
            />

            {/* Copy 2 */}
            {allTech.map((tech, i) => (
              <TechPill
                key={`b-${i}`}
                name={tech}
              />
            ))}

          </div>
        </div>
      </motion.div>
    </section>
  );
}