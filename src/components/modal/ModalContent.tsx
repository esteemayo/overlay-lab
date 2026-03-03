'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import { usePortal } from '@/hooks/usePortal';
import { useModalContext } from '@/hooks/useModalContext';

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, titleId, descriptionId } = useModalContext();
  const { portalId } = usePortal('overlay-root');

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  if (!isMounted || !isOpen) return null;

  const modalContents = (
    <div className='modal'>
      <div className='modal__overlay'>
        <div
          className='modal__container'
          role='dialog'
          aria-modal='true'
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div className='modal__wrapper'>{children}</div>
        </div>
      </div>
    </div>
  );

  return portalId ? createPortal(modalContents, portalId) : null;
};

export default ModalContent;
