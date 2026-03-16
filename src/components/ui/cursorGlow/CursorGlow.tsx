'use client';

import { useEffect, useRef } from 'react';
import './CursorGlow.scss';

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    if ('ontouchstart' in window) return;

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    let lastMove = Date.now();

    const speed = 0.08;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = Date.now();

      glow.style.setProperty('--glow-opacity', '1');
    };

    const handleMouseLeave = () => {
      glow.style.setProperty('--glow-opacity', '0');
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      glowX += (mouseX - glowX) * speed;
      glowY += (mouseY - glowY) * speed;

      glow.style.setProperty('--cursor-x', `${glowX}px`);
      glow.style.setProperty('--cursor-y', `${glowY}px`);

      if (Date.now() - lastMove > 120) {
        glow.style.setProperty('--glow-opacity', '0');
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={glowRef} className='cursor-glow' />;
};

export default CursorGlow;
