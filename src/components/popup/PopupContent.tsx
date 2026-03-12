'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import PopupRoot from './PopupRoot';
import PopupOverlay from './PopupOverlay';

import { usePopup } from '@/hooks/usePopup';
import { useOverlay } from '@/hooks/useOverlay';

import { PopupContentProps } from '@/types/popupContentType';

const PopupContent = ({ variant = 'modal', children }: PopupContentProps) => {
  const { isOpen, titleId, descriptionId, setIsOpen } = usePopup();

  const modalRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPresent, setIsPresent] = useState(false);
  const [state, setState] = useState<'open' | 'closed'>('closed');

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

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
      const rect = modalRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      modalRef.current?.style.setProperty('--x', `${x}px`);
      modalRef.current?.style.setProperty('--y', `${y}px`);
    });
  };

  useOverlay(containerRef, { isOpen, onClose });

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

  if (!isPresent) return null;

  return (
    <PopupRoot>
      <div className={`popup popup--${variant}`} data-state={state}>
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
              ref={modalRef}
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
