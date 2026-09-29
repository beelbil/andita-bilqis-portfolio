'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    type: string;
    category?: 'implemented' | 'concept';
    link?: string;
    thumbnail: string;
    description: string;
    tech: string[];
    linkType?: 'live' | 'figma' | 'colab' | 'video';
    linkLabel?: string;
    videoDemo?: string;
    screenshots?: string;
  };
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const numStr = index < 10 ? `0${index}` : `${index}`;
  const hasVideo = !!project.videoDemo;

  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className="
        group
        w-full
        bg-white/[0.025]
        border
        border-white/10
        rounded-2xl
        overflow-hidden
        transition-colors
        duration-300
        hover:border-white/25
        hover:bg-white/[0.035]
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          w-full
          aspect-[16/8]
          md:aspect-[16/7]
          lg:aspect-[16/6.5]
          overflow-hidden
          bg-black
        "
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
          loading="lazy"
        />

        {/* Subtle overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-black/10
            pointer-events-none
          "
        />

        {/* Project number */}
        <div
          className="
            absolute
            top-5
            left-5
            md:top-6
            md:left-6
            px-3
            py-1.5
            rounded-full
            bg-black/50
            backdrop-blur-md
            border
            border-white/15
            text-[10px]
            md:text-xs
            font-mono
            tracking-wider
            text-white/70
          "
        >
          {numStr}
        </div>

        {/* Video indicator */}
        {hasVideo && (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            <div
              className="
                w-14
                h-14
                md:w-16
                md:h-16
                flex
                items-center
                justify-center
                rounded-full
                bg-black/50
                backdrop-blur-md
                border
                border-white/20
                text-white
                shadow-[0_0_30px_rgba(0,0,0,0.4)]
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div
        className="
          px-6
          py-7
          md:px-8
          md:py-8
          lg:px-10
          lg:py-9
        "
      >
        {/* Type */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-white/50
              shadow-[0_0_8px_rgba(255,255,255,0.35)]
            "
          />

          <span
            className="
              text-[10px]
              md:text-xs
              uppercase
              tracking-[0.18em]
              font-mono
              text-white/40
            "
          >
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            text-2xl
            md:text-3xl
            lg:text-4xl
            font-bold
            tracking-tight
            text-white
            transition-colors
            duration-300
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-4xl
            text-sm
            md:text-base
            text-white/50
            leading-relaxed
          "
        >
          {project.description}
        </p>

        {/* Bottom */}
        <div
          className="
            mt-7
            pt-6
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >
          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  text-[10px]
                  md:text-xs
                  px-3
                  py-1.5
                  border
                  border-white/10
                  text-white/45
                  rounded-full
                  bg-white/[0.02]
                  transition-colors
                  duration-200
                  group-hover:border-white/15
                  group-hover:text-white/60
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          {(project.link || project.linkLabel) && (
            <div
              className="
                shrink-0
                inline-flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.15em]
                text-white/55
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {project.linkLabel || 'VIEW PROJECT'}

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-0.5
                "
              >
                ↗
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          w-full
          outline-none
          focus-visible:ring-1
          focus-visible:ring-white/40
          rounded-2xl
        "
        data-cursor="view"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="w-full">
      {content}
    </div>
  );
}