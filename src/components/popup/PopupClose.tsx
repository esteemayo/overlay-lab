'use client';

import React from 'react';

import { usePopup } from '@/hooks/usePopup';
import { PopupCloseProps } from '@/types/popupClose';

const PopupClose = ({ asChild = false, children }: PopupCloseProps) => {
  const { triggerRef, setIsOpen } = usePopup();

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
      className='popup__close'
      aria-label='Close popup'
    >
      {children}
    </button>
  );
};

export default PopupClose;
