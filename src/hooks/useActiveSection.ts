'use client';

import { useEffect, useState } from 'react';

export const useActiveSection = (ids: string[]) => {
  const [isActiveId, setIsActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return { isActiveId };
};
