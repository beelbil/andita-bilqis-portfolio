'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/portfolio';
import Atmosphere from '@/components/Atmosphere';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px',
  });

  const isEditorialInView = useInView(editorialRef, {
    once: true,
    margin: '-10% 0px',
  });

  const implementedProjects = projectsData.filter(
    (project) => project.category === 'implemented'
  );

  const conceptProjects = projectsData.filter(
    (project) => project.category === 'concept'
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="
        relative
        py-24
        md:py-32
        overflow-hidden
      "
    >

      {/* ── Unified Ambient Atmosphere (Grid + Distant Orbit + Glows + Stars) ── */}
      <Atmosphere variant="projects" isInView={isInView} />

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
            SELECTED WORK
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
          Projects
        </h2>

        <p
          className="
            mt-4
            max-w-2xl
            text-sm
            md:text-base
            leading-relaxed
            text-white/45
          "
        >
          Projects where code, design, and problem-solving meet.
        </p>
      </div>

        {/* ─────────────────────────────────────
            IMPLEMENTED PROJECTS
        ───────────────────────────────────── */}

        <div className="mt-16 md:mt-24">

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-4 mb-8"
          >
            <span
              className="
                text-[10px]
                md:text-xs
                font-mono
                uppercase
                tracking-[0.2em]
                text-white/40
                whitespace-nowrap
              "
            >
              IMPLEMENTED WORK
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: 'left' }}
              className="h-px flex-1 bg-white/10"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:gap-14">
            {implementedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 40,
                      }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.25 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProjectCard
                  project={project}
                  index={index + 1}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────
            EDITORIAL STATEMENT
        ───────────────────────────────────── */}

        <motion.div
          ref={editorialRef}
          initial={{
            opacity: 0,
          }}
          animate={
            isEditorialInView
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 1,
          }}
          className="
            relative
            py-28
            md:py-40
            flex
            justify-center
            text-center
            overflow-hidden
          "
        >

          {/* Decorative star */}

          <motion.div
            className="
              absolute
              top-[18%]
              right-[15%]
              w-2
              h-2
            "
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-white"
              fill="currentColor"
            >
              <path d="M12 0L13.8 9.5L24 12L13.8 14.5L12 24L10.2 14.5L0 12L10.2 9.5L12 0Z" />
            </svg>
          </motion.div>

          <motion.div
            initial={{
              y: '100%',
            }}
            animate={
              isEditorialInView
                ? {
                    y: 0,
                  }
                : {
                    y: '100%',
                  }
            }
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span
              className="
                block
                mb-6
                text-[10px]
                md:text-xs
                font-mono
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              CONCEPT &amp; INTERFACE
            </span>

            <h2
              className="
                text-4xl
                md:text-6xl
                lg:text-8xl
                font-bold
                text-text-primary
                uppercase
                tracking-tighter
                leading-[0.9]
              "
            >
              FROM IDEA
              <br />
              <span className="text-text-muted">
                TO INTERFACE.
              </span>
            </h2>

            {/* Decorative line */}

            <motion.div
              initial={{ width: 0 }}
              animate={
                isEditorialInView
                  ? { width: 90 }
                  : { width: 0 }
              }
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: 'easeOut',
              }}
              className="
                h-px
                bg-white/30
                mx-auto
                mt-8
              "
            />
          </motion.div>
        </motion.div>

        {/* ─────────────────────────────────────
            CONCEPT PROJECTS
        ───────────────────────────────────── */}

        <div>

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
              margin: '-10% 0px',
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-4 mb-8"
          >
            <span
              className="
                text-[10px]
                md:text-xs
                font-mono
                uppercase
                tracking-[0.2em]
                text-white/40
                whitespace-nowrap
              "
            >
              DESIGN &amp; PROTOTYPING
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: 'left' }}
              className="h-px flex-1 bg-white/10"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:gap-14">
            {conceptProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-10% 0px',
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProjectCard
                  project={project}
                  index={implementedProjects.length + index + 1}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}