'use client';

import { createPortal } from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useOverlay } from '@/hooks/useOverlay';
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

  useOverlay(containerRef, { isOpen, onClose });

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
