'use client';

import { useEffect } from 'react';

export const useGlobalRadialGlow = () => {
  useEffect(() => {
    const el = document.body;

    if ('ontouchstart' in window) return;

    let frame: number | null = null;

    const handleMove = (e: MouseEvent) => {
      if (frame) return;

      const x = e.clientX;
      const y = e.clientY;

      frame = requestAnimationFrame(() => {
        el.style.setProperty('--cursor-x', `${x}px`);
        el.style.setProperty('--cursor-y', `${y}px`);

        frame = null;
      });
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
};
