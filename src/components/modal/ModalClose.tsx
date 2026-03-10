'use client';

import React from 'react';

import { ModalCloseProps } from '@/types/modalClose';
import { useModalContext } from '@/hooks/useModalContext';

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
