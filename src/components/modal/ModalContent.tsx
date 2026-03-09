'use client';

import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import { usePortal } from '@/hooks/usePortal';
import { useModalContext } from '@/hooks/useModalContext';

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  const { portalId } = usePortal('overlay-root');
  const { isOpen, titleId, descriptionId, setIsOpen } = useModalContext();

  const modalRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = modalRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    modalRef.current?.style.setProperty('--x', `${x}px`);
    modalRef.current?.style.setProperty('--y', `${y}px`);
  };

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape' || e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current as HTMLElement;
    if (!container) return;

    const getFocusable = () => {
      return Array.from(
        container.querySelectorAll<HTMLElement>(
          `a, button, input, textarea, select, [tabIndex]:not([tabIndex="1"])`,
        ),
      ).filter((el) => !el.hasAttribute('disabled'));
    };

    const focusableElements = getFocusable();
    if (focusableElements.length < 0) return;

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
  }, [isOpen]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  if (!isMounted || !isOpen) return null;

  const modalContent = (
    <div className='modal'>
      <div onClick={handleClose} className='modal__overlay'>
        <div
          ref={containerRef}
          className='modal__container'
          role='dialog'
          aria-modal='true'
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div
            ref={modalRef}
            onMouseMove={handleMouseMove}
            className='modal__wrapper'
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return portalId ? createPortal(modalContent, portalId) : null;
};

export default ModalContent;
