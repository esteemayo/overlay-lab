import Popup from '../popup';
import Button from '../button/Button';

import { formatCurrency } from '@/utils/formatCurrency';
import { ConfirmTransferProps } from '@/types/confirmTransferType';

import './ConfirmTransfer.scss';

const ConfirmTransfer = ({ data, status, onConfirm }: ConfirmTransferProps) => {
  const isLoading = status === 'loading';

  return (
    <section
      className='confirm-transfer'
      aria-labelledby='confirm-transfer-heading'
    >
      <h2 id='confirm-transfer-heading' className='visually-hidden'>
        Confirm Transfer Details
      </h2>

      <dl className='confirm-transfer__details'>
        <div className='confirm-transfer__summary'>
          <dt>Recipient</dt>
          <dd>{data.accountNumber}</dd>
        </div>

        <div className='confirm-transfer__summary'>
          <dt>Bank</dt>
          <dd className='bank'>{data.bank}</dd>
        </div>

        <div className='confirm-transfer__summary'>
          <dt>Amount</dt>
          <dd>{formatCurrency(data.amount)}</dd>
        </div>

        {data.description && (
          <div className='confirm-transfer__summary'>
            <dt>Note</dt>
            <dd>{data.description}</dd>
          </div>
        )}
      </dl>

      <div
        className='confirm-transfer__actions'
        role='group'
        aria-label='Transfer confirmation actions'
      >
        <Popup.Close asChild>
          <Button label='Cancel' variant='cancel' />
        </Popup.Close>

        <Button
          label={isLoading ? 'Processing...' : 'Send money'}
          variant='submit'
          onClick={onConfirm}
          disabled={isLoading}
          aria-busy={isLoading}
        />

        <span className='visually-hidden' aria-live='polite'>
          {isLoading && 'Transfer processing'}
        </span>
      </div>
    </section>
  );
};

export default ConfirmTransfer;
