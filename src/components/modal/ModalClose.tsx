'use client';

import React from 'react';

import { useModalContext } from '@/hooks/useModalContext';
import { ModalCloseProps } from '@/types/modal.close.type';

const ModalClose = ({ asChild = false, children }: ModalCloseProps) => {
  const { triggerRef, setIsOpen } = useModalContext();

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<
        React.ButtonHTMLAttributes<HTMLButtonElement>
      >,
      {
        onClick: handleClose,
      },
    );
  }

  return (
    <button
      type='button'
      onClick={handleClose}
      className='modal__close'
      aria-label='Close modal'
    >
      {children}
    </button>
  );
};

export default ModalClose;
