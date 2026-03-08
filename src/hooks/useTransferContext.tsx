'use client';

import { useContext } from 'react';
import { TransferContext } from '@/context/transferContext/transferContext';

export const useTransferContext = () => {
  const ctx = useContext(TransferContext);

  if (!ctx) {
    throw new Error('useTransferContext must be used within TransferProvider');
  }

  return ctx;
};
