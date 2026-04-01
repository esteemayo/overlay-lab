'use client';

import { useRef } from 'react';

type Options = {
  length: number;
  loop?: boolean;
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
  onChange?(index: number): void;
};

export const useRovingFocus = ({
  length,
  loop = true,
  orientation = 'horizontal',
  activationMode = 'automatic',
  onChange,
}: Options) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusItem = (index: number) => {
    const el = refs.current[index];
    if (el) el.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    const isHorizontal = orientation === 'horizontal';
    const isVertical = orientation === 'vertical';

    if (
      (isHorizontal && e.key === 'ArrowRight') ||
      (isVertical && e.key === 'ArrowDown')
    ) {
      nextIndex = index + 1;
      if (nextIndex >= length) nextIndex = loop ? 0 : length - 1;
    }

    if (
      (isHorizontal && e.key === 'ArrowLeft') ||
      (isVertical && e.key === 'ArrowUp')
    ) {
      nextIndex = index - 1;
      if (nextIndex < 0) nextIndex = loop ? length - 1 : 0;
    }

    if (e.key === 'Home') nextIndex = 0;
    if (e.key === 'End') nextIndex = length - 1;

    if (nextIndex !== index) {
      e.preventDefault();
      focusItem(nextIndex);

      if (activationMode === 'automatic') {
        onChange?.(nextIndex);
      }
    }

    if (activationMode === 'manual') {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChange?.(index);
      }
    }
  };

  const getRovingProps = (index: number, activeIndex: number) => ({
    ref: (el: HTMLButtonElement | null) => {
      refs.current[index] = el;
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) =>
      handleKeyDown(e, index),
  });

  return {
    getRovingProps,
  };
};
