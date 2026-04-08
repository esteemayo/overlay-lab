'use client';

import React from 'react';

import { PopupCloseProps } from '@/types/popupClose';
import { usePopup } from '@/hooks/usePopup';
import { usePopupInstance } from '@/context/PopupInstanceContext';

const PopupClose = ({ asChild = false, children }: PopupCloseProps) => {
  const popupId = usePopupInstance();
  const { triggerRef, closePopup } = usePopup();

  const handleClose = () => {
    closePopup(popupId);

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
