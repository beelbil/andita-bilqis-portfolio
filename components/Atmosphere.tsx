'use client';

import React from 'react';
import { motion } from 'framer-motion';

// =============================================================================
// SUBCOMPONENTS: SHARED PRIMITIVES
// =============================================================================

/**
 * Technical Architectural Grid
 * Renders an ultra-subtle 80x80px grid with smooth edge-fading masks.
 */
interface TechnicalGridProps {
  opacity?: number;
  mask?: 'radial' | 'vertical' | 'horizontal' | 'bottom';
  className?: string;
  size?: number;
}

export function TechnicalGrid({
  opacity = 0.025,
  mask = 'radial',
  className = '',
  size = 80,
}: TechnicalGridProps) {
  const maskStyles: Record<string, string> = {
    radial:
      'radial-gradient(ellipse 65% 55% at 50% 50%, black 15%, transparent 80%)',
    vertical:
      'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
    horizontal:
      'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
    bottom:
      'linear-gradient(to bottom, transparent, black 40%, transparent)',
  };

  const selectedMask = maskStyles[mask] || maskStyles.radial;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage: selectedMask,
        WebkitMaskImage: selectedMask,
      }}
    />
  );
}

/**
 * Soft Breathing Atmospheric Glow
 */
interface AtmosphericGlowProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: number;
  blur?: number;
  duration?: number;
}

export function AtmosphericGlow({
  className = '',
  width = 500,
  height = 400,
  top,
  bottom,
  left,
  right,
  opacity = 0.025,
  blur = 120,
  duration = 9,
}: AtmosphericGlowProps) {
  return (
    <motion.div
      animate={{
        opacity: [opacity * 0.8, opacity * 1.3, opacity * 0.8],
        scale: [0.96, 1.04, 0.96],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-full bg-white pointer-events-none ${className}`}
      style={{
        width,
        height,
        top,
        bottom,
        left,
        right,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

/**
 * Twinkling Star
 */
interface StarProps {
  top: string;
  left?: string;
  right?: string;
  size?: number;
  duration?: number;
  delay?: number;
  glow?: boolean;
}

export function Star({
  top,
  left,
  right,
  size = 4,
  duration = 4,
  delay = 0,
  glow = true,
}: StarProps) {
  return (
    <motion.span
      animate={{
        opacity: [0.15, 0.85, 0.15],
        scale: [0.75, 1.3, 0.75],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className="absolute rounded-full bg-white pointer-events-none"
      style={{
        top,
        left,
        right,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: glow
          ? '0 0 10px rgba(255, 255, 255, 0.8)'
          : '0 0 4px rgba(255, 255, 255, 0.4)',
      }}
    />
  );
}

/**
 * Slow Rotating 4-Point Star
 */
interface RotatingStarProps {
  top: string;
  left?: string;
  right?: string;
  size?: number;
  duration?: number;
}

export function RotatingStar({
  top,
  left,
  right,
  size = 14,
  duration = 16,
}: RotatingStarProps) {
  return (
    <motion.div
      className="absolute text-white pointer-events-none"
      style={{
        top,
        left,
        right,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        rotate: 360,
        opacity: [0.25, 0.9, 0.25],
      }}
      transition={{
        rotate: {
          duration,
          repeat: Infinity,
          ease: 'linear',
        },
        opacity: {
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
      >
        <path d="M12 0L13.8 9.5L24 12L13.8 14.5L12 24L10.2 14.5L0 12L10 9.5L12 0Z" />
      </svg>
    </motion.div>
  );
}

/**
 * Slowly Drifting Cosmic Particle
 */
export function DriftingParticle({
  top,
  left,
  right,
  xOffset = 35,
  yOffset = -25,
  duration = 8,
}: {
  top: string;
  left?: string;
  right?: string;
  xOffset?: number;
  yOffset?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        x: [0, xOffset, 0],
        y: [0, yOffset, 0],
        opacity: [0.1, 0.65, 0.1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] pointer-events-none"
      style={{ top, left, right }}
    />
  );
}

/**
 * Minimalist Editorial Planet Sphere with Rim Lighting and Orbital Rings
 * Abstract UI graphic, monochrome silver highlights.
 */
interface CelestialPlanetProps {
  className?: string;
  size?: number;
  position?: 'bottom-right' | 'top-left' | 'bottom-left' | 'top-right';
}

export function CelestialPlanet({
  className = '',
  size = 460,
  position = 'bottom-right',
}: CelestialPlanetProps) {
  const positionClasses = {
    'bottom-right':
      'bottom-[-18%] md:bottom-[-12%] right-[-14%] md:right-[-6%]',
    'top-left': 'top-[-15%] left-[-12%]',
    'bottom-left': 'bottom-[-15%] left-[-12%]',
    'top-right': 'top-[-15%] right-[-10%]',
  }[position];

  return (
    <div
      className={`absolute ${positionClasses} pointer-events-none select-none opacity-40 md:opacity-55 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
        <defs>
          {/* Dark Spherical Gradient */}
          <radialGradient id="planetBodyGrad" cx="32%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#1a1c22" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#121318" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#0a0b0e" stopOpacity="1" />
            <stop offset="100%" stopColor="#050608" stopOpacity="1" />
          </radialGradient>

          {/* Rim Lighting (Silver-White reflection) */}
          <linearGradient
            id="silverPlanetRim"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#d4d4d4" stopOpacity="0.25" />
            <stop offset="65%" stopColor="#8a8a8a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Ring 1: Dashed Wide Orbit */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          <ellipse
            cx="250"
            cy="250"
            rx="235"
            ry="75"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
            strokeDasharray="4 6"
            transform="rotate(-26 250 250)"
          />
        </motion.g>

        {/* Planet Silhouette Sphere */}
        <circle
          cx="250"
          cy="250"
          r="155"
          fill="url(#planetBodyGrad)"
          stroke="url(#silverPlanetRim)"
          strokeWidth="1.2"
        />

        {/* Inner Curved Shadow / Atmospheric Latitude Line */}
        <path
          d="M 125 200 A 155 155 0 0 1 365 210"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Ring 2: Solid Tilted Orbital Ring with Satellite Node */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          <ellipse
            cx="250"
            cy="250"
            rx="205"
            ry="65"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            transform="rotate(-26 250 250)"
          />

          {/* Tiny Satellite Node */}
          <circle
            cx="455"
            cy="250"
            r="2"
            fill="#ffffff"
            transform="rotate(-26 250 250)"
            className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
          />
        </motion.g>
      </svg>
    </div>
  );
}

/**
 * Faint Orbital Arc (Curved line traversing the section)
 */
export function OrbitalCurve({
  className = '',
  orientation = 'top-right',
}: {
  className?: string;
  orientation?: 'top-right' | 'top-left' | 'center';
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 600"
        className="w-full h-full opacity-[0.06] md:opacity-[0.09]"
        fill="none"
        preserveAspectRatio="none"
      >
        <ellipse
          cx={orientation === 'top-left' ? '200' : '900'}
          cy="300"
          rx="700"
          ry="260"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
        <circle
          cx={orientation === 'top-left' ? '650' : '450'}
          cy="180"
          r="2.5"
          fill="white"
          className="drop-shadow-[0_0_6px_white]"
        />
      </svg>
    </div>
  );
}

// =============================================================================
// MAIN ATMOSPHERE COMPONENT: UNIFIED ACROSS SECTIONS
// =============================================================================

export type AtmosphereVariant =
  | 'hero'
  | 'skills'
  | 'about'
  | 'education'
  | 'projects'
  | 'editorial'
  | 'experience'
  | 'achievements'
  | 'contact';

interface AtmosphereProps {
  variant: AtmosphereVariant;
  isInView?: boolean;
}

export default function Atmosphere({
  variant,
  isInView = true,
}: AtmosphereProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {/* ───────────────────────────────────────────────────────────────────
          1. HERO ATMOSPHERE (Medium Visibility)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'hero' && (
        <>
          {/* Subtle Technical Grid behind hero */}
          <TechnicalGrid opacity={0.022} mask="radial" size={85} />

          {/* Deep Ambient Glows */}
          <AtmosphericGlow
            top="18%"
            left="20%"
            width={450}
            height={450}
            opacity={0.02}
            blur={140}
          />
          <AtmosphericGlow
            top="25%"
            right="12%"
            width={550}
            height={550}
            opacity={0.028}
            blur={130}
          />

          {/* Distant Static Stars */}
          <span className="absolute top-[22%] left-[12%] w-1 h-1 rounded-full bg-white/25" />
          <span className="absolute top-[48%] left-[6%] w-1 h-1 rounded-full bg-white/20" />
          <span className="absolute top-[68%] right-[18%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="absolute bottom-[20%] left-[28%] w-1 h-1 rounded-full bg-white/25" />

          {/* Twinkling Stars */}
          <Star top="15%" right="22%" size={3.5} duration={4} delay={0.5} />
          <Star top="72%" left="15%" size={4} duration={5} delay={1.5} />

          {/* Subtle Drifting Particle */}
          <DriftingParticle top="55%" left="40%" duration={10} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          2. SKILLS ATMOSPHERE (Subtle Visibility)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'skills' && (
        <>
          {/* Focused Grid behind marquee track */}
          <TechnicalGrid
            opacity={0.026}
            mask="horizontal"
            size={75}
            className="top-[15%] h-[75%]"
          />

          {/* Ambient Glow */}
          <AtmosphericGlow
            top="20%"
            left="30%"
            width={500}
            height={320}
            opacity={0.02}
            blur={120}
          />

          {/* Tiny Stars */}
          <span className="absolute top-[25%] left-[10%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-[65%] right-[12%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="absolute bottom-[18%] left-[24%] w-1 h-1 rounded-full bg-white/25" />

          {/* Twinkling Stars */}
          <Star top="30%" right="18%" size={3.5} duration={4.2} delay={1} />
          <Star top="75%" left="8%" size={4} duration={5} delay={2} />

          {/* Particle */}
          <DriftingParticle top="45%" right="25%" xOffset={-30} duration={8} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          3. ABOUT ATMOSPHERE (Subtle Visibility)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'about' && (
        <>
          {/* Faint Orbital Curve */}
          <OrbitalCurve orientation="top-right" />

          {/* Technical Grid with vertical fade */}
          <TechnicalGrid opacity={0.02} mask="vertical" size={80} />

          {/* Soft Glows */}
          <AtmosphericGlow
            top="15%"
            left="5%"
            width={450}
            height={400}
            opacity={0.018}
            blur={130}
          />
          <AtmosphericGlow
            bottom="10%"
            right="5%"
            width={400}
            height={350}
            opacity={0.018}
            blur={120}
          />

          {/* Star Field */}
          <span className="absolute top-[20%] left-[8%] w-1 h-1 rounded-full bg-white/25" />
          <span className="absolute top-[45%] right-[10%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="absolute top-[75%] left-[18%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute bottom-[15%] right-[22%] w-1 h-1 rounded-full bg-white/20" />

          {/* Twinkling Star */}
          <Star top="28%" right="15%" size={3.5} duration={4.8} delay={0.8} />
          <Star top="82%" left="12%" size={4} duration={3.8} delay={1.8} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          4. EDUCATION ATMOSPHERE (Subtle Planet + Starfield)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'education' && (
        <>
          {/* Abstract Celestial Planet Silhouette with Rim Lighting & Rings */}
          <CelestialPlanet
            position="bottom-right"
            size={480}
            className="hidden sm:block"
          />

          {/* Technical Grid */}
          <TechnicalGrid opacity={0.024} mask="radial" size={80} />

          {/* Glows framing the timeline & planet */}
          <AtmosphericGlow
            top="18%"
            right="5%"
            width={500}
            height={500}
            opacity={0.025}
            blur={130}
          />
          <AtmosphericGlow
            bottom="8%"
            left="5%"
            width={380}
            height={380}
            opacity={0.018}
            blur={110}
          />

          {/* Starfield */}
          <span className="absolute top-[16%] left-[10%] w-1 h-1 rounded-full bg-white/35" />
          <span className="absolute top-[34%] right-[22%] w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="absolute top-[56%] left-[6%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-[75%] right-[12%] w-1 h-1 rounded-full bg-white/35" />
          <span className="absolute top-[88%] left-[22%] w-1.5 h-1.5 rounded-full bg-white/20" />

          {/* Twinkling Stars */}
          <Star top="24%" right="28%" size={4} duration={3.6} delay={0.4} />
          <Star top="68%" left="14%" size={3.5} duration={4.5} delay={1.4} />

          {/* Rotating Star near planet horizon */}
          <div className="hidden md:block">
            <RotatingStar top="42%" right="18%" size={12} duration={20} />
          </div>

          <DriftingParticle top="50%" left="32%" duration={9} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          5. PROJECTS ATMOSPHERE (Medium Visibility)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'projects' && (
        <>
          {/* Distant Orbital Line traversing background */}
          <OrbitalCurve orientation="top-left" />

          {/* Technical Grid */}
          <TechnicalGrid opacity={0.03} mask="radial" size={85} />

          {/* Ambient Glows framing project cards */}
          <AtmosphericGlow
            top="8%"
            right="8%"
            width={550}
            height={550}
            opacity={0.025}
            blur={135}
          />
          <AtmosphericGlow
            top="45%"
            left="5%"
            width={450}
            height={450}
            opacity={0.018}
            blur={120}
          />
          <AtmosphericGlow
            bottom="15%"
            right="10%"
            width={480}
            height={480}
            opacity={0.022}
            blur={130}
          />

          {/* Static Star Field */}
          <span className="absolute top-[7%] left-[8%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-[16%] right-[14%] w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="absolute top-[35%] left-[5%] w-1 h-1 rounded-full bg-white/20" />
          <span className="absolute top-[50%] right-[7%] w-1 h-1 rounded-full bg-white/35" />
          <span className="absolute top-[68%] left-[11%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="absolute top-[82%] right-[16%] w-1 h-1 rounded-full bg-white/25" />
          <span className="absolute top-[93%] left-[26%] w-1.5 h-1.5 rounded-full bg-white/20" />

          {/* Twinkling Stars */}
          <Star top="12%" right="26%" size={4} duration={4} delay={0.6} />
          <Star top="44%" left="15%" size={3.5} duration={4.8} delay={1.6} />
          <Star top="78%" right="22%" size={4} duration={3.8} delay={2.2} />

          {/* Rotating Star */}
          <div className="hidden md:block">
            <RotatingStar top="28%" left="18%" size={13} duration={18} />
          </div>

          <DriftingParticle top="62%" left="38%" duration={11} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          6. EDITORIAL STATEMENT ATMOSPHERE (Minimal transition)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'editorial' && (
        <>
          <TechnicalGrid opacity={0.018} mask="radial" size={80} />
          <AtmosphericGlow
            top="15%"
            left="25%"
            width={500}
            height={250}
            opacity={0.018}
            blur={110}
          />
          <span className="absolute top-[30%] left-[15%] w-1 h-1 rounded-full bg-white/25" />
          <span className="absolute top-[60%] right-[18%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <Star top="40%" right="12%" size={3} duration={4} delay={0.5} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          7. EXPERIENCE ATMOSPHERE (Subtle Visibility)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'experience' && (
        <>
          {/* Curved Orbit Line */}
          <OrbitalCurve orientation="top-right" />

          {/* Technical Grid */}
          <TechnicalGrid opacity={0.024} mask="vertical" size={80} />

          {/* Glows */}
          <AtmosphericGlow
            top="12%"
            right="8%"
            width={480}
            height={480}
            opacity={0.022}
            blur={125}
          />
          <AtmosphericGlow
            bottom="10%"
            left="6%"
            width={420}
            height={420}
            opacity={0.02}
            blur={115}
          />

          {/* Stars */}
          <span className="absolute top-[14%] left-[10%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-[28%] right-[18%] w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="absolute top-[52%] left-[7%] w-1 h-1 rounded-full bg-white/25" />
          <span className="absolute top-[74%] right-[11%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute bottom-[12%] left-[22%] w-1.5 h-1.5 rounded-full bg-white/20" />

          {/* Twinkling Stars */}
          <Star top="22%" left="16%" size={3.5} duration={4.2} delay={1} />
          <Star top="66%" right="20%" size={4} duration={3.7} delay={1.8} />

          <DriftingParticle top="40%" right="30%" duration={8.5} />
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          8. ACHIEVEMENTS ATMOSPHERE (Subtle Celestial Glow)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'achievements' && (
        <>
          {/* Subtle Grid */}
          <TechnicalGrid opacity={0.022} mask="radial" size={80} />

          {/* Ambient Glow */}
          <AtmosphericGlow
            top="20%"
            left="20%"
            width={520}
            height={420}
            opacity={0.022}
            blur={120}
          />

          {/* Stars */}
          <span className="absolute top-[18%] left-[12%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-[35%] right-[16%] w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="absolute top-[68%] left-[8%] w-1 h-1 rounded-full bg-white/20" />
          <span className="absolute bottom-[16%] right-[22%] w-1.5 h-1.5 rounded-full bg-white/25" />

          {/* Twinkling Star */}
          <Star top="25%" right="24%" size={4} duration={4} delay={0.5} />
          <Star top="78%" left="15%" size={3.5} duration={4.6} delay={1.5} />

          {/* Rotating Star */}
          <div className="hidden md:block">
            <RotatingStar top="55%" right="12%" size={12} duration={22} />
          </div>
        </>
      )}

      {/* ───────────────────────────────────────────────────────────────────
          9. CONTACT ATMOSPHERE (Medium-Strong Visibility — Prelude to Footer)
      ─────────────────────────────────────────────────────────────────── */}
      {variant === 'contact' && (
        <>
          {/* Abstract Celestial Arc in Top-Left (leads smoothly into footer atmosphere) */}
          <CelestialPlanet
            position="top-left"
            size={380}
            className="hidden sm:block opacity-35"
          />

          {/* Technical Grid */}
          <TechnicalGrid opacity={0.028} mask="radial" size={80} />

          {/* Glows framing form and details */}
          <AtmosphericGlow
            top="12%"
            right="8%"
            width={550}
            height={550}
            opacity={0.025}
            blur={130}
          />
          <AtmosphericGlow
            bottom="5%"
            left="8%"
            width={460}
            height={460}
            opacity={0.022}
            blur={120}
          />

          {/* Stars */}
          <span className="absolute top-[14%] left-[9%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-[22%] right-[15%] w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="absolute top-[55%] left-[4%] w-1 h-1 rounded-full bg-white/20" />
          <span className="absolute top-[70%] right-[8%] w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute bottom-[12%] left-[24%] w-1.5 h-1.5 rounded-full bg-white/20" />

          {/* Twinkling Stars */}
          <Star top="18%" right="28%" size={4} duration={3.8} delay={0.5} />
          <Star top="65%" left="14%" size={3.5} duration={4.4} delay={1.6} />

          {/* Rotating Star */}
          <RotatingStar top="16%" right="32%" size={14} duration={14} />

          <DriftingParticle top="48%" left="36%" duration={9} />
        </>
      )}
    </div>
  );
}
