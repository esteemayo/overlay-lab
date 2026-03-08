import ModalClose from '../modal/ModalClose';
import { ReceiptScreenProps } from '@/types/receipt.screen.type';

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

        <p>
          <strong>Status:</strong> Successful
        </p>
      </div>

      <ModalClose asChild>
        <button type='button' className=''>
          Done
        </button>
      </ModalClose>
    </div>
  );
};

export default ReceiptScreen;
