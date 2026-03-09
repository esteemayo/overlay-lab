'use client';

import { useContext } from 'react';
import { TransferContext } from '@/context/transferContext/transferContext';

export const useTransfer = () => {
  const ctx = useContext(TransferContext);

  if (!ctx) {
    throw new Error('useTransfer must be used within TransferProvider');
  }

  return ctx;
};
