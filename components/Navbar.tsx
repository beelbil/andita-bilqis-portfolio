'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Intersection Observer for active sections
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = NAV_LINKS.map((link) => link.href.substring(1));
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        sectionObserver.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? 'bg-secondary/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#top"
            onClick={(e) => handleSmoothScroll(e, '#top')}
            className="text-text-primary font-bold text-xl tracking-tight z-50"
            data-cursor="view"
          >
            BILQIS'S PORTFOLIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative text-sm uppercase tracking-wider font-medium text-text-secondary hover:text-text-primary transition-colors"
                data-cursor="explore"
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      -translate-x-1/2
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-white
                      shadow-[0_0_6px_rgba(255,255,255,0.9),0_0_14px_rgba(255,255,255,0.45)]
                    "
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

                    {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hidden md:inline-flex items-center justify-center border border-white/50 text-white px-5 py-2 text-sm uppercase tracking-wider font-medium hover:border-white hover:bg-white/10 transition-all rounded-sm"
              data-cursor="open"
            >
              LET'S TALK ↗
            </Link>

            <button
              className="lg:hidden text-text-primary p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span
                  className={`w-full h-[2px] bg-current transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'rotate-45 absolute top-1/2 -translate-y-1/2'
                      : ''
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current transition-all duration-300 ${
                    mobileMenuOpen
                      ? '-rotate-45 absolute top-1/2 -translate-y-1/2'
                      : ''
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-main flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`text-3xl font-bold uppercase tracking-widest ${
                      activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * NAV_LINKS.length + 0.2, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="border border-accent text-accent px-8 py-3 text-lg uppercase tracking-wider font-medium inline-block"
                >
                  LET'S TALK ↗
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
