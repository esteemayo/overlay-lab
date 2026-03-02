'use client';

import { useEffect, useState } from 'react';

export const usePortal = (id: string) => {
  const [portalId, setPortalId] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      setPortalId(el);
    });

    return () => cancelAnimationFrame(raf);
  }, [id]);

  return {
    portalId,
  };
};
