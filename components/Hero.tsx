'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/portfolio';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import Atmosphere from '@/components/Atmosphere';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-main"
    >
      {/* ── Unified Ambient Atmosphere ── */}
      <Atmosphere variant="hero" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12 lg:gap-0">

          {/* ─── Left: Typography & CTAs ────────────────── */}
          <div className="w-full lg:w-[55%] flex flex-col items-start relative z-20 order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div
            className="flex items-center gap-3 mb-8 lg:mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            >
              {/* 4-point sparkle icon */}
              <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white/80 shrink-0 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
              >
                <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z" />
              </svg>

              {/* Text inside bordered capsule */}
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-mono whitespace-nowrap">
                  Computer Science Student
                </span>
              </div>

              {/* Horizontal line extending right */}
              <div className="w-10 sm:w-16 h-[1px] bg-white/15" />
            </motion.div>

            {/* ── Main Headline ── */}
            <div className="mb-8 lg:mb-10">

              {/* Line 1 */}
              <div className="overflow-hidden pb-1">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-white"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  Building with{' '}
                  <span className="relative inline-block italic font-bold text-silver-shine">
                    code.
                    <span className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 pointer-events-none" />
                  </span>
                </motion.h1>
              </div>

              {/* Line 2 */}
              <div className="overflow-hidden pb-1">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-white"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  Designing with{' '}
                  <span className="relative inline-block text-silver-shine italic font-bold">
                    purpose.
                    <span className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 pointer-events-none" />
                  </span>
                </motion.h1>
              </div>

            </div>

            {/* Supporting paragraph with vertical line */}
            <motion.p
              className="text-sm sm:text-base text-text-secondary max-w-md mb-10 lg:mb-12 leading-relaxed border-l border-white/25 pl-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              I&apos;m Andita Bilqis, a Computer Science Software Engineering student focused on
              creating digital products that are functional, intuitive, and
              visually refined.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-14 lg:mb-16"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
            >
              <Link
                href="#projects"
                data-cursor="explore"
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full text-sm font-medium shadow-[0_0_28px_rgba(255,255,255,0.35)] hover:shadow-[0_0_38px_rgba(255,255,255,0.55)] hover:scale-[1.02] transition-all"
              >
                View My Work
                <span className="text-xs">↗</span>
              </Link>
              <Link
                href="#about"
                data-cursor="explore"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] text-white/90 px-7 py-3 rounded-full text-sm font-medium hover:bg-white/[0.08] hover:border-white/40 transition-all"
              >
                About Me
              </Link>
            </motion.div>

            {/* Social icons + extending divider line */}
            <motion.div
              className="flex items-center gap-5 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-muted hover:text-white transition-colors"
                data-cursor="open"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-white transition-colors"
                data-cursor="open"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-text-muted hover:text-white transition-colors"
                data-cursor="open"
              >
                <HiOutlineEnvelope className="w-5 h-5" />
              </a>

              {/* Extended subtle separator line */}
              <div className="hidden sm:block h-[1px] flex-grow max-w-sm bg-white/10 ml-2" />
            </motion.div>
          </div>

          {/* ─── Right: Portrait + Decorative Glass & HUD Elements ── */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative order-1 lg:order-2">

            {/* ── Premium Technical Frame ── */}
            <motion.div
              className="
                absolute
                top-2
                right-2
                lg:right-6
                w-[72%]
                sm:w-[64%]
                lg:w-[78%]
                h-[92%]
                pointer-events-none
              "
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Main frame */}
              <div className="absolute inset-0 rounded-[28px] border border-white/[0.11]" />

              {/* Inner frame */}
              <div className="absolute inset-[6px] rounded-[24px] border border-white/[0.035]" />

              {/* Top-left corner */}
              <div className="absolute top-0 left-0 w-14 h-14">
                <div className="absolute top-0 left-0 w-10 h-px bg-white/40" />
                <div className="absolute top-0 left-0 w-px h-10 bg-white/40" />
                <div className="absolute top-[10px] left-[10px] w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>

              {/* Top-right corner */}
              <div className="absolute top-0 right-0 w-14 h-14">
                <div className="absolute top-0 right-0 w-10 h-px bg-white/30" />
                <div className="absolute top-0 right-0 w-px h-10 bg-white/30" />
              </div>

              {/* Bottom-left corner */}
              <div className="absolute bottom-0 left-0 w-14 h-14">
                <div className="absolute bottom-0 left-0 w-10 h-px bg-white/25" />
                <div className="absolute bottom-0 left-0 w-px h-10 bg-white/25" />
              </div>

              {/* Bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14">
                <div className="absolute bottom-0 right-0 w-10 h-px bg-white/35" />
                <div className="absolute bottom-0 right-0 w-px h-10 bg-white/35" />
                <div className="absolute bottom-[10px] right-[10px] w-1 h-1 rounded-full bg-white/40" />
              </div>

              {/* Technical markers */}
              <div className="absolute top-[18%] left-0 w-3 h-px bg-white/25" />
              <div className="absolute top-[18%] right-0 w-3 h-px bg-white/25" />

              <div className="absolute bottom-[18%] left-0 w-3 h-px bg-white/20" />
              <div className="absolute bottom-[18%] right-0 w-3 h-px bg-white/20" />

              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-[28px] shadow-[0_0_70px_rgba(255,255,255,0.025)]" />
            </motion.div>

            {/* ── Futuristic Orbital System ── */}
            <motion.div
              className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
            >
              {/* Main orbital */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[135%] h-[42%] -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  viewBox="0 0 800 300"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="400"
                    cy="150"
                    rx="380"
                    ry="105"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.7"
                    strokeOpacity="0.28"
                    strokeDasharray="2 10"
                  />

                  {/* orbit accent */}
                  <ellipse
                    cx="400"
                    cy="150"
                    rx="300"
                    ry="82"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.14"
                  />
                </svg>
              </motion.div>

              {/* Secondary tilted orbit */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[120%] h-[35%] -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 38,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  viewBox="0 0 800 300"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="400"
                    cy="150"
                    rx="350"
                    ry="95"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.16"
                    strokeDasharray="1 14"
                  />
                </svg>
              </motion.div>

              {/* Orbiting particles */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.6)]"
                animate={{
                  x: ["-420px", "420px", "-420px"],
                  y: ["20px", "-20px", "20px"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute top-[42%] left-[20%] w-1 h-1 rounded-full bg-white/50"
                animate={{
                  opacity: [0.25, 0.9, 0.25],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute top-[58%] right-[18%] w-1.5 h-1.5 rounded-full bg-white/40"
                animate={{
                  opacity: [0.15, 0.8, 0.15],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Portrait Image (HERO PIC.png) */}
            <motion.div
              className="relative z-10 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[410px] xl:w-[450px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative w-full aspect-square overflow-visible">
                <Image
                  src="/images/profile/hero.png"
                  alt="Andita Bilqis Aulia Rahma"
                  fill
                  priority
                  className="
                    object-contain
                    object-center
                    [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]
                  "
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 410px"
                />
              </div>
            </motion.div>

            {/* ── Floating Code Snippet Card ── */}
            <motion.div
              className="hidden md:flex absolute top-[14%] right-2 lg:right-2 z-20 flex-col gap-1.5 border border-white/15 bg-black/50 backdrop-blur-md rounded-xl p-4 shadow-2xl min-w-[120px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span className="text-xs font-mono text-white/40">&lt;/&gt;</span>

              <div className="flex flex-col gap-1 text-[11px] font-mono">
                <span className="text-white/90 tracking-wider">IDEAS</span>
                <span className="text-white/60 tracking-wider">→ CODE</span>
                <span className="text-white/60 tracking-wider">→ IMPACT</span>
              </div>

              <div className="w-5 h-[1px] bg-white/30 mt-1" />
            </motion.div>

           {/* ── Academic HUD ── */}
            <motion.div
              className="
                hidden lg:flex
                absolute
                bottom-[13%]
                right-[9%]
                z-20
                flex-col
                items-end
                gap-1.5
                font-mono
              "
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2">
                <span className="text-[9px] tracking-[0.2em] text-white/45">
                Semester 1 - 4
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </div>

              {/* Divider */}
              <div className="w-[150px] h-px bg-white/15" />

              {/* Main info */}
              <div className="flex items-baseline gap-3">
                <span className="text-[9px] tracking-[0.15em] text-white/40">
                  GPA
                </span>

                <span className="text-[12px] tracking-[0.12em] text-white/85">
                  3.61 / 4.00
                </span>
              </div>

              {/* University */}
              <span className="text-[8px] tracking-[0.18em] text-white/35">
                BINUS UNIVERSITY
              </span>
            </motion.div>

            {/* Small sparkles near the head */}
            <motion.svg
              className="hidden lg:block absolute top-[8%] right-[22%] z-20 text-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z" />
            </motion.svg>
            <motion.svg
              className="hidden lg:block absolute top-[28%] right-[8%] z-20 text-white/35 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z" />
            </motion.svg>
          </div>
        </div>
      </div>

      {/* ── Bottom-Left Chrome Wave / Fluid Metallic Ribbon ── */}
      <motion.div
        className="hidden lg:block absolute bottom-0 left-0 w-[320px] h-[180px] pointer-events-none z-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.2 }}
      >
        <svg
          viewBox="0 0 320 180"
          className="w-full h-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chromeWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#404247" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#25262a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="chromeWaveInner" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6e7075" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#303236" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Main sweeping metallic ribbon */}
          <path
            d="M -20 180 C 40 170, 100 130, 140 150 C 180 170, 240 130, 290 180"
            stroke="url(#chromeWaveGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M -20 160 C 50 140, 120 100, 170 140 C 210 170, 270 140, 310 175"
            stroke="url(#chromeWaveInner)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M -20 195 C 60 160, 130 110, 190 150 C 230 180, 280 160, 320 185"
            stroke="url(#chromeWaveGrad)"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </section>
  );
}
