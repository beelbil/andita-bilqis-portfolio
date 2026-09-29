'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [data-cursor]');
      
      if (clickable) {
        setIsHovered(true);
        const cursorType = clickable.getAttribute('data-cursor');
        if (cursorType) {
          setCursorText(cursorType);
        } else {
          setCursorText('');
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor]')) {
        setIsHovered(false);
        setCursorText('');
      }
    };

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isDesktop, reducedMotion, mouseX, mouseY]);

  if (!isMounted || !isDesktop || reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full border border-text-muted bg-transparent backdrop-blur-sm"
      style={{
        x: smoothMouseX,
        y: smoothMouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isHovered ? 60 : 20,
        height: isHovered ? 60 : 20,
        backgroundColor: isHovered ? 'var(--color-surface)' : 'transparent',
        borderColor: isHovered
          ? 'rgba(255,255,255,0.9)'
          : 'var(--color-text-muted)',
        boxShadow: isHovered
          ? '0 0 8px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.35)'
          : 'none',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <motion.span
        className="uppercase font-mono text-[10px] tracking-widest text-text-primary text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && cursorText ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
}
