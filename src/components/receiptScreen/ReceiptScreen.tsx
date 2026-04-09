'use client';

import { useEffect, useRef } from 'react';

import Popup from '../popup';
import Button from '../button/Button';

import { ReceiptScreenProps } from '@/types/receiptScreen';
import './ReceiptScreen.scss';

const ReceiptScreen = ({ data, transactionId }: ReceiptScreenProps) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <section
      className='receipt-screen fade-in'
      aria-labelledby='receipt-heading'
      aria-live='polite'
    >
      <h2
        ref={headingRef}
        id='receipt-heading'
        className='visually-hidden'
        tabIndex={-1}
      >
        Transfer Successful Receipt
      </h2>

      <dl className='receipt-screen__wrapper'>
        <div>
          <dt>Transaction ID</dt>
          <dd>{transactionId}</dd>
        </div>

        <div>
          <dt>Amount</dt>
          <dd>₦{Number(data?.amount).toLocaleString()}</dd>
        </div>

        <p>
          <dt>Recipient</dt>
          <dd>{data?.accountNumber}</dd>
        </p>

        <div className='bank'>
          <dt>Bank</dt>
          <dd>{data?.bank}</dd>
        </div>

        <div>
          <dt>Status</dt>
          <dd>Successful</dd>
        </div>
      </dl>

      <div
        className='receipt-screen__action'
        role='group'
        aria-label='Receipt actions'
      >
        <Popup.Close asChild>
          <Button label='Done' variant='submit' />
        </Popup.Close>
      </div>
    </section>
  );
};

export default ReceiptScreen;
