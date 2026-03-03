'use client';

import { useContext } from 'react';
import { ModalContext } from '@/context/modal-context';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal components must be used within <Modal>');
  }

  return { ...context };
};
