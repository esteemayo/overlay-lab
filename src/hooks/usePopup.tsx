'use client';

import { useContext } from 'react';
import { PopupContext } from '@/context/PopupContext';

export const usePopup = () => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('Popup components must be used within Popup');
  }

  return { ...context };
};
