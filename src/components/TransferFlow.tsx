'use client';

import { useEffect, useState } from 'react';

import ModalClose from './modal/ModalClose';
import ModalBody from './modal/ModalBody';
import ModalHeader from './modal/ModalHeader';
import ModalTitle from './modal/ModalTitle';

import ReceiptScreen from './receiptScreen/ReceiptScreen';
import TransferForm from './transferForm/TransferForm';
import TransferSuccess from './successScreen/SuccessScreen';

import Xmark from '@/icons/Xmark';
import { ReceiptDataType, StatusType } from '@/types/index.type';

const TransferFlow = () => {
  const [status, setStatus] = useState<StatusType>('idle');
  const [receiptData, setReceiptData] = useState<ReceiptDataType | null>(null);

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('receipt');
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSuccess = (data: ReceiptDataType) => {
    setReceiptData(data);
    setStatus('success');
  };

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
          <TransferForm
            status={status}
            setStatus={setStatus}
            onSuccess={handleSuccess}
          />
        ) : status === 'success' ? (
          <TransferSuccess />
        ) : (
          <ReceiptScreen data={receiptData} />
        )}
      </ModalBody>
    </>
  );
};

export default TransferFlow;
