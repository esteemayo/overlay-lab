'use client';

import { useEffect } from 'react';

import Popup from './popup';
import Xmark from '@/components/icons/Xmark';

import ReceiptScreen from './receiptScreen/ReceiptScreen';
import TransferForm from './transferForm/TransferForm';
import TransferSuccess from './successScreen/SuccessScreen';

import { useTransfer } from '@/hooks/useTransfer';

const TransferFlow = () => {
  const { state, dispatch, handleSuccess } =
    useTransfer();

  const { data, status, transactionId } = state;

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        dispatch({ type: 'TRANSFER_RECEIPT' });
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [dispatch, status]);

  useEffect(() => {
    dispatch({ type: 'TRANSFER_RESET' });
  }, [dispatch]);

  return (
    <>
      <Popup.Header>
        <Popup.Title>
          {status === 'idle' && 'Transfer Money'}
          {status === 'loading' && 'Processing Transfer'}
          {status === 'success' && 'Transfer Successful'}
          {status === 'receipt' && 'Transfer Receipt'}
        </Popup.Title>

        <Popup.Close>
          <Xmark />
        </Popup.Close>
      </Popup.Header>

      <Popup.Description>
        {(status === 'idle' || status === 'loading') &&
          'Enter transfer details.'}
      </Popup.Description>

      <Popup.Body>
        {status === 'idle' || status === 'loading' ? (
          <TransferForm status={status} onSuccess={handleSuccess!} />
        ) : status === 'success' ? (
          <TransferSuccess />
        ) : (
          <ReceiptScreen data={data} transactionId={transactionId} />
        )}
      </Popup.Body>
    </>
  );
};

export default TransferFlow;
