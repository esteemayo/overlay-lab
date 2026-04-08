'use client';

import { createContext, useContext } from 'react';

export const PopupInstanceContext = createContext<string | null>(null);

export const usePopupInstance = () => {
  const ctx = useContext(PopupInstanceContext);

  if (!ctx) {
    throw new Error('Popup components must be used inside Popup');
  }

  return ctx;
};
