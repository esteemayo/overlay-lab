import Popup from '../popup';
import Button from '../button/Button';

import { ConfirmTransferProps } from '@/types/confirmTransferType';
import './ConfirmTransfer.scss';

const ConfirmTransfer = ({ data, onConfirm }: ConfirmTransferProps) => {
  return (
    <div className='confirm-transfer'>
      <div className='confirm-transfer__summary'>
        <span>Recipient</span>
        <strong>{data.accountNumber}</strong>
      </div>

      <div className='confirm-transfer__summary'>
        <span>Bank</span>
        <strong className='bank'>{data.bank}</strong>
      </div>

      <div className='confirm-transfer__summary'>
        <span>Amount</span>
        <strong>{data.amount}</strong>
      </div>

      {data.description && (
        <div className='confirm-transfer__summary'>
          <span>Note</span>
          <strong>{data.description}</strong>
        </div>
      )}

      <div className='confirm-transfer__actions'>
        <Popup.Close asChild>
          <Button label='Cancel' variant='cancel' />
        </Popup.Close>

        <Button label='Send money' variant='submit' onClick={onConfirm} />
      </div>
    </div>
  );
};

export default ConfirmTransfer;
