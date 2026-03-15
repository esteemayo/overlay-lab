'use client';

import { useEffect } from 'react';

export const useGlobalRadialGlow = () => {
  useEffect(() => {
    const el = document.documentElement;
    // console.log(el);

    if ('ontouchstart' in window) return;

    let frame: number | null;

    const handleMove = (e: MouseEvent) => {
      // if (!frame) return;

      const x = e.clientX;
      const y = e.clientY;

      console.log(x);
      console.log(y);

      // frame = requestAnimationFrame(() => {

      //   frame = null;
      // });
      el.style.setProperty('--xAxis', `${x}px`);
      el.style.setProperty('--yAxis', `${y}px`);
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      // if (frame) cancelAnimationFrame(frame);
    };
  }, []);
};
