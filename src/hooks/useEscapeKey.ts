'use client';

import { useEffect, useRef } from 'react';

type UseEscapeKeyProps = {
  onEscape(): void;
  isEnabled?: boolean;
};

export const useEscapeKey = ({ isEnabled, onEscape }: UseEscapeKeyProps) => {
  const handlerRef = useRef(onEscape);

  useEffect(() => {
    handlerRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (!isEnabled) return;

      if (e.key === 'Escape' || e.code === 'Escape') {
        e.preventDefault();
        handlerRef.current();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isEnabled, onEscape]);
};
