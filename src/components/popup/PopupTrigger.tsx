'use client';

import React from 'react';

import { usePopupInstance } from './Popup';
import { usePopup } from '@/hooks/usePopup';

const PopupTrigger = ({
  asChild = true,
  children,
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) => {
  const popupId = usePopupInstance();
  const { triggerRef, openPopup } = usePopup();

  const handleOpen = () => {
    openPopup(popupId);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<
        React.ButtonHTMLAttributes<HTMLButtonElement>
      >,
      {
        onClick: handleOpen,
      },
    );
  }

  return (
    <button
      ref={triggerRef}
      type='button'
      className='popup__trigger'
      onClick={handleOpen}
    >
      {children}
    </button>
  );
};

export default PopupTrigger;
