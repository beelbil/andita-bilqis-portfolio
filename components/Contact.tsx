'use client';

import React, { useState, FormEvent, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Atmosphere from '@/components/Atmosphere';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const mailtoUrl =
        `mailto:andita.bilqis19@gmail.com` +
        `?subject=${encodeURIComponent(formData.subject)}` +
        `&body=${encodeURIComponent(
          `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
        )}`;

      window.location.href = mailtoUrl;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="
        relative
        py-24
        md:py-32
        px-6
        md:px-12
        lg:px-20
        overflow-hidden
      "
    >
      {/* ── Unified Ambient Atmosphere (Atmospheric Glows + Grid + Celestial Arc + Stars) ── */}
      <Atmosphere variant="contact" isInView={isInView} />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            className="lg:w-[43%] flex flex-col"
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
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            {/* Section label */}
            <div className="flex items-center gap-4 mb-7">

              <span
                className="
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.22em]
                  font-mono
                  text-white/40
                  whitespace-nowrap
                "
              >
                CONTACT ME
              </span>

              <div className="h-px flex-1 bg-white/10 max-w-[140px]" />
            </div>

            {/* Main heading */}
            <h2
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                xl:text-[6.5rem]
                font-bold
                tracking-[-0.055em]
                leading-[0.88]
                text-white
              "
            >
              LET&apos;S
              <br />

              <span className="text-silver-shine italic">
                TALK.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-base
                md:text-lg
                text-white/45
                leading-relaxed
                max-w-md
              "
            >
              Have an idea, project, or opportunity in mind?
              Let&apos;s turn it into something meaningful.
            </p>

            {/* Contact links */}
            <div className="mt-12 flex flex-col gap-5">

              {/* Email */}
              <a
                href="mailto:andita.bilqis19@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  w-fit
                  text-sm
                  font-mono
                  text-white/50
                  hover:text-white
                  transition-colors
                  duration-300
                "
                data-cursor="open"
              >
                <span
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    bg-white/[0.02]
                    group-hover:border-white/30
                    group-hover:bg-white/[0.05]
                    transition-all
                    duration-300
                  "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>

                <span>
                  andita.bilqis19@gmail.com
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/anditabilqis"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  w-fit
                  text-sm
                  font-mono
                  text-white/50
                  hover:text-white
                  transition-colors
                  duration-300
                "
                data-cursor="open"
              >
                <span
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    bg-white/[0.02]
                    group-hover:border-white/30
                    group-hover:bg-white/[0.05]
                    transition-all
                    duration-300
                  "
                >
                  in
                </span>

                <span>
                  linkedin.com/in/anditabilqis
                </span>

                <span className="text-white/20 group-hover:text-white/60 transition-colors">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/beelbil"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  w-fit
                  text-sm
                  font-mono
                  text-white/50
                  hover:text-white
                  transition-colors
                  duration-300
                "
                data-cursor="open"
              >
                <span
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    bg-white/[0.02]
                    group-hover:border-white/30
                    group-hover:bg-white/[0.05]
                    transition-all
                    duration-300
                  "
                >
                  GH
                </span>

                <span>
                  github.com/beelbil
                </span>

                <span className="text-white/20 group-hover:text-white/60 transition-colors">
                  ↗
                </span>
              </a>
            </div>

            {/* Small status */}
            <div className="mt-14 flex items-center gap-3">

              <motion.span
                animate={{
                  opacity: [0.35, 1, 0.35],
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
                  shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  font-mono
                  text-white/25
                "
              >
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================= */}

          <motion.div
            className="lg:w-[57%] w-full"
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
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div
              className="
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-sm
                p-6
                md:p-8
                lg:p-10
                overflow-hidden
              "
            >

              {/* Form corner glow */}
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
                  pointer-events-none
                "
              />

              {/* Form header */}
              <div className="relative flex items-center justify-between mb-9">

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      font-mono
                      text-white/30
                      mb-2
                    "
                  >
                    START A CONVERSATION
                  </span>

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    Tell me what you&apos;re building.
                  </h3>
                </div>

                <span
                  className="
                    hidden
                    sm:block
                    text-[9px]
                    font-mono
                    tracking-[0.15em]
                    text-white/20
                  "
                >
                  FORM 
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-7"
              >

                {/* NAME */}
                <div className="flex flex-col gap-2">

                  <label
                    htmlFor="name"
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                      font-mono
                    "
                  >
                    NAME
                  </label>

                  <div className="relative">

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="
                        w-full
                        bg-transparent
                        border-0
                        border-b
                        border-white/10
                        text-white
                        px-0
                        py-3
                        text-sm
                        focus:outline-none
                        focus:border-white/50
                        transition-colors
                        placeholder:text-white/20
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-white
                        transition-all
                        duration-500
                        focus-within:w-full
                      "
                    />
                  </div>

                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">

                  <label
                    htmlFor="email"
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                      font-mono
                    "
                  >
                    EMAIL
                  </label>

                  <div className="relative">

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        w-full
                        bg-transparent
                        border-0
                        border-b
                        border-white/10
                        text-white
                        px-0
                        py-3
                        text-sm
                        focus:outline-none
                        focus:border-white/50
                        transition-colors
                        placeholder:text-white/20
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-white
                        transition-all
                        duration-500
                        focus-within:w-full
                      "
                    />
                  </div>

                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* SUBJECT */}
                <div className="flex flex-col gap-2">

                  <label
                    htmlFor="subject"
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                      font-mono
                    "
                  >
                    SUBJECT
                  </label>

                  <div className="relative">

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="
                        w-full
                        bg-transparent
                        border-0
                        border-b
                        border-white/10
                        text-white
                        px-0
                        py-3
                        text-sm
                        focus:outline-none
                        focus:border-white/50
                        transition-colors
                        placeholder:text-white/20
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-white
                        transition-all
                        duration-500
                        focus-within:w-full
                      "
                    />
                  </div>

                  {errors.subject && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-2">

                  <label
                    htmlFor="message"
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                      font-mono
                    "
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="
                      w-full
                      bg-white/[0.015]
                      border
                      border-white/10
                      rounded-xl
                      text-white
                      px-4
                      py-4
                      text-sm
                      focus:outline-none
                      focus:border-white/35
                      focus:bg-white/[0.025]
                      transition-all
                      placeholder:text-white/20
                      resize-none
                    "
                  />

                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    bg-white
                    text-black
                    py-4
                    mt-2
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-white/90
                    hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]
                  "
                  data-cursor="open"
                >

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    SEND AN EMAIL

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </span>

                </button>

                {/* Footer note */}
                <div className="flex items-center justify-between pt-1">

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      font-mono
                      text-white/20
                    "
                  >
                    Direct email connection
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-mono
                      text-white/20
                    "
                  >
                    andita bilqis
                  </span>

                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}