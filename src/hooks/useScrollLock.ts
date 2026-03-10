'use client';

import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const originalPaddingRight = document.body.style.paddingRight;
    const supportsScrollbarGutter = CSS.supports('scrollbar-gutter', 'stable');

    if (!supportsScrollbarGutter) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    document.body.classList.add('no-interaction');

    return () => {
      document.body.classList.remove('no-interaction');
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
};
