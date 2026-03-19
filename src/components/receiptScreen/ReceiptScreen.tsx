import Popup from '../popup';
import Button from '../button/Button';

import { ReceiptScreenProps } from '@/types/receiptScreen';
import './ReceiptScreen.scss';

const ReceiptScreen = ({ data, transactionId }: ReceiptScreenProps) => {
  return (
    <div className='receipt-screen fade-in'>
      <div className='receipt-screen__wrapper'>
        <p>
          <strong>Transaction ID:</strong> {transactionId}
        </p>

        <p>
          <strong>Amount:</strong> ₦{Number(data?.amount).toLocaleString()}
        </p>

        <p>
          <strong>Recipient:</strong> {data?.accountNumber}
        </p>

        <p className='bank'>
          <strong>Bank:</strong> {data?.bank}
        </p>

        <p>
          <strong>Status:</strong> Successful
        </p>
      </div>

      <div className='receipt-screen__action'>
        <Popup.Close asChild>
          <Button label='Done' variant='submit' />
        </Popup.Close>
      </div>
    </div>
  );
};

export default ReceiptScreen;
