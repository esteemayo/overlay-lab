'use client';

import { useEffect } from 'react';

import ModalClose from './modal/ModalClose';
import ModalBody from './modal/ModalBody';
import ModalHeader from './modal/ModalHeader';
import ModalTitle from './modal/ModalTitle';

import ReceiptScreen from './receiptScreen/ReceiptScreen';
import TransferForm from './transferForm/TransferForm';
import TransferSuccess from './successScreen/SuccessScreen';

import Xmark from '@/icons/Xmark';
import { useTransfer } from '@/hooks/useTransfer';

const TransferFlow = () => {
  const { data, dispatch, status, transactionId, handleSuccess } =
    useTransfer();

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        dispatch({ type: 'TRANSFER_RECEIPT' });
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [dispatch, status]);

  return (
    <>
      <ModalHeader>
        <ModalTitle>
          {status === 'idle' && 'Simulate Transfer'}
          {status === 'loading' && 'Processing Transfer'}
          {status === 'success' && 'Transfer Successful'}
          {status === 'receipt' && 'Transfer Receipt'}
        </ModalTitle>

        <ModalClose>
          <Xmark />
        </ModalClose>
      </ModalHeader>

      <ModalBody>
        {status === 'idle' || status === 'loading' ? (
          <TransferForm status={status} onSuccess={handleSuccess!} />
        ) : status === 'success' ? (
          <TransferSuccess />
        ) : (
          <ReceiptScreen data={data} transactionId={transactionId} />
        )}
      </ModalBody>
    </>
  );
};

export default TransferFlow;
