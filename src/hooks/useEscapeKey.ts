'use client';

import { useEffect, useRef } from 'react';

type UseEscapeKeyOptions = {
  enabled?: boolean;
};

export const useEscapeKey = (
  handler: () => void,
  options: UseEscapeKeyOptions = {},
) => {
  const handlerRef = useRef(handler);
  const { enabled = true } = options;

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (!enabled) return;

      if (e.key === 'Escape' || e.code === 'Escape') {
        e.preventDefault();
        handlerRef.current();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [enabled, handler]);
};
