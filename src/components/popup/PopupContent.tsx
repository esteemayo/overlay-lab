'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import PopupRoot from './PopupRoot';
import PopupOverlay from './PopupOverlay';

import { usePopup } from '@/hooks/usePopup';
import { useOverlay } from '@/hooks/useOverlay';

import { PopupContentProps } from '@/types/popupContentType';
import { usePopupInstance } from '@/context/PopupInstanceContext';

const PopupContent = ({ variant = 'modal', children }: PopupContentProps) => {
  const popupId = usePopupInstance();
  const { stack, closePopup, isTopPopup, isPopupOpen, titleId, descriptionId } =
    usePopup();

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPresent, setIsPresent] = useState(false);
  const [state, setState] = useState<'open' | 'closed'>('closed');

  const isOpen = isPopupOpen(popupId);

  const index = stack.findIndex((item) => item.id === popupId);
  const zIndex = 5000 + index * 10;

  const onClose = useCallback(() => {
    closePopup(popupId);
  }, [closePopup, popupId]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isOpen) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      wrapperRef.current?.style.setProperty('--x', `${x}px`);
      wrapperRef.current?.style.setProperty('--y', `${y}px`);
    });
  };

  useOverlay(containerRef, {
    isOpen: isPresent,
    onClose,
  });

  useEffect(() => {
    if (isOpen) {
      setIsPresent(true);

      const frame = requestAnimationFrame(() => {
        setState('open');
      });

      return () => cancelAnimationFrame(frame);
    } else {
      setState('closed');

      const timeout = setTimeout(() => {
        setIsPresent(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && wrapperRef.current) {
      wrapperRef.current.style.removeProperty('--x');
      wrapperRef.current.style.removeProperty('--y');
    }
  }, [isOpen]);

  if (!isPresent) return null;

  return (
    <PopupRoot>
      <div
        className='popup'
        data-variant={variant}
        data-state={state}
        style={{ zIndex }}
      >
        <PopupOverlay isOpen={isOpen} onClose={handleClose}>
          <div
            ref={containerRef}
            className='popup__container'
            role='dialog'
            aria-modal='true'
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <div
              ref={wrapperRef}
              onMouseMove={handleMouseMove}
              className='popup__wrapper'
            >
              {children}
            </div>
          </div>
        </PopupOverlay>
      </div>
    </PopupRoot>
  );
};

export default PopupContent;
