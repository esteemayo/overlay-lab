'use client';

import { RefObject, useLayoutEffect } from 'react';

export const useFocusTrap = <T extends HTMLElement | HTMLDivElement>(
  containerRef: RefObject<T | null>,
  isActive: boolean,
) => {
  useLayoutEffect(() => {
    if (!isActive) return;

    const container = containerRef.current as HTMLElement | null;
    if (!container) return;

    const getFocusable = () => {
      return Array.from(
        container.querySelectorAll<HTMLElement>(
          ` a,
            button,
            input,
            textarea,
            select,
            [tabIndex]:not([tabIndex="1"])
          `,
        ),
      ).filter((el) => !el.hasAttribute('disabled'));
    };

    const focusableElements = getFocusable();
    if (focusableElements.length === 0) return;

    const first = focusableElements[0];
    const last = focusableElements.at(-1);

    if (!first || !last) return;

    first.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const currentFocus = document.activeElement as HTMLElement;

      if (e.shiftKey) {
        if (currentFocus === first || !container.contains(currentFocus)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (currentFocus === last || !container.contains(currentFocus)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, [containerRef, isActive]);
};
