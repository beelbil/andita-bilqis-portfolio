'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: siteConfig.linkedin,
    },
    {
      label: 'GitHub',
      href: siteConfig.github,
    },
    {
      label: 'Email',
      href: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10">

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[5%]
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[300px]
            rounded-full
            bg-white/[0.025]
            blur-[120px]
          "
        />

        {/* Secondary glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-[-15%]
            right-[-5%]
            w-[350px]
            h-[350px]
            rounded-full
            bg-white/[0.02]
            blur-[110px]
          "
        />

        {/* Technical grid */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage:
              'linear-gradient(to bottom, transparent, black 45%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 45%, transparent)',
          }}
        />

        {/* Stars */}
        <motion.span
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[19%]
            left-[10%]
            w-1
            h-1
            rounded-full
            bg-white
            shadow-[0_0_10px_rgba(255,255,255,0.8)]
          "
        />

        <motion.span
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="
            absolute
            top-[35%]
            right-[12%]
            w-1.5
            h-1.5
            rounded-full
            bg-white
            shadow-[0_0_12px_rgba(255,255,255,0.7)]
          "
        />

        <span className="absolute top-[54%] left-[22%] w-1 h-1 rounded-full bg-white/30" />
        <span className="absolute top-[70%] right-[25%] w-1 h-1 rounded-full bg-white/25" />
        <span className="absolute bottom-[15%] left-[8%] w-1.5 h-1.5 rounded-full bg-white/20" />

        {/* Rotating star */}
        <motion.div
          className="
            absolute
            top-[22%]
            right-[28%]
            w-4
            h-4
          "
          animate={{
            rotate: 360,
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            rotate: {
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="
              w-full
              h-full
              text-white
              drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]
            "
            fill="currentColor"
          >
            <path d="M12 0L13.8 9.5L24 12L13.8 14.5L12 24L10.2 14.5L0 12L10.2 9.5L12 0Z" />
          </svg>
        </motion.div>

        {/* Floating particle */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            top-[60%]
            left-[35%]
            w-1
            h-1
            rounded-full
            bg-white
            shadow-[0_0_8px_rgba(255,255,255,0.8)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 md:pt-28">

        {/* TOP META */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span
            className="
              text-[9px]
              md:text-[10px]
              uppercase
              tracking-[0.22em]
              font-mono
              text-white/30
              whitespace-nowrap
            "
          >
            PORTFOLIO / 2026
          </span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: 'left' }}
            className="h-px flex-1 bg-white/10"
          />

          <span
            className="
              hidden
              md:block
              text-[9px]
              uppercase
              tracking-[0.2em]
              font-mono
              text-white/20
            "
          >
            END / 01
          </span>
        </motion.div>

        {/* =================================================
            STATEMENT
        ================================================= */}

        <div className="relative mt-12 md:mt-16">

          {/* Have an idea */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              items-center
              gap-3
              mb-4
            "
          >
            <span className="w-6 h-px bg-white/30" />

            <span
              className="
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.22em]
                font-mono
                text-white/30
              "
            >
              HAVE AN IDEA?
            </span>
          </motion.div>

          {/* Main statement */}
          <div className="overflow-hidden">

            <motion.h2
              initial={{
                y: '110%',
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[3.25rem]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[5.5rem]
                font-bold
                tracking-[-0.055em]
                leading-[0.9]
                text-white
              "
            >
              LET&apos;S BUILD{' '}
              <span className="text-silver-shine italic">
                SOMETHING.
              </span>
            </motion.h2>

          </div>

          {/* Moving scanner */}
          <div
            className="
              relative
              mt-5
              h-px
              w-full
              overflow-hidden
              bg-white/5
            "
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                top-0
                left-0
                h-px
                w-1/4
                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent
              "
            />
          </div>

          {/* Supporting text */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mt-3
              max-w-lg
              text-xs
              md:text-sm
              text-white/30
              leading-relaxed
            "
          >
            Software, design, and creative technology shaped into
            experiences that solve real problems.
          </motion.p>
        </div>

        {/* =================================================
            ORBITAL DETAIL
        ================================================= */}

        <div
          className="
            relative
            h-16
            md:h-20
            mt-6
            overflow-hidden
            pointer-events-none
          "
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[180px]
              h-[50px]
              border
              border-white/10
              rounded-[50%]
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[120px]
              h-[32px]
              border
              border-dashed
              border-white/10
              rounded-[50%]
            "
          />

          <motion.div
            animate={{
              x: [-80, 80, -80],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              w-1.5
              h-1.5
              rounded-full
              bg-white
              shadow-[0_0_12px_rgba(255,255,255,0.8)]
            "
          />
        </div>

        {/* =================================================
            LOWER CONTENT
        ================================================= */}

        <div
          className="
            mt-10
            md:mt-14
            pt-8
            border-t
            border-white/10
            grid
            grid-cols-1
            md:grid-cols-12
            gap-10
            md:gap-8
          "
        >

          {/* Identity */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="md:col-span-5"
          >
            <h3
              className="
                text-lg
                md:text-xl
                font-bold
                tracking-tight
                text-white
              "
            >
              ANDITA BILQIS
            </h3>

            <p
              className="
                mt-2
                text-xs
                md:text-sm
                text-white/35
                leading-relaxed
                max-w-sm
              "
            >
              Aspiring Software Engineer · Exploring Full Stack Development & UI/UX Design
            </p>

            <div className="mt-6 flex items-center gap-3">

              <motion.span
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-white
                  shadow-[0_0_8px_rgba(255,255,255,0.7)]
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  font-mono
                  text-white/20
                "
              >
                AVAILABLE FOR OPPORTUNITIES
              </span>

            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="md:col-span-4"
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                font-mono
                text-white/25
              "
            >
              CONNECT
            </span>

            <div className="mt-5 flex flex-col gap-4">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.label === 'Email'
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    social.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="
                    group
                    relative
                    flex
                    items-center
                    justify-between
                    w-full
                    max-w-[220px]
                    pb-2
                    border-b
                    border-white/5
                    text-xs
                    font-mono
                    uppercase
                    tracking-wider
                    text-white/40
                    hover:text-white
                    transition-colors
                  "
                  data-cursor="open"
                >
                  <span>{social.label}</span>

                  <span
                    className="
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:text-white
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>

                  <span
                    className="
                      absolute
                      bottom-[-1px]
                      left-0
                      h-px
                      w-0
                      bg-white/50
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </a>
              ))}

            </div>
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              md:col-span-3
              md:flex
              md:justify-end
            "
          >
            <button
              onClick={scrollToTop}
              className="
                group
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.18em]
                font-mono
                text-white/30
                hover:text-white
                transition-colors
              "
              data-cursor="open"
            >
              <span>
                BACK TO TOP
              </span>

              <span
                className="
                  relative
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  group-hover:border-white/30
                  transition-all
                  duration-300
                "
              >
                <motion.span
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-white/50 group-hover:text-white"
                >
                  ↑
                </motion.span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* =================================================
            COPYRIGHT
        ================================================= */}

        <div
          className="
            mt-8
            border-t
            border-white/10
            py-6
            flex
            flex-col
            sm:flex-row
            justify-between
            items-start
            sm:items-center
            gap-3
          "
        >
          <p
            className="
              text-[9px]
              md:text-[10px]
              font-mono
              tracking-[0.12em]
              text-white/20
            "
          >
            © 2026 ANDITA BILQIS AULIA RAHMA
          </p>

          <p
            className="
              text-[9px]
              md:text-[10px]
              font-mono
              tracking-[0.12em]
              text-white/20
            "
          >
            BUILT WITH CODE &amp; CREATIVITY
          </p>
        </div>
      </div>
    </footer>
  );
}