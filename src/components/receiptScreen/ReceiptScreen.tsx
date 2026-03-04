import { FormState } from '../transferForm/TransferForm';
import './ReceiptScreen.scss';

const ReceiptScreen = ({ data }: { data: FormState | null }) => {
  return (
    <div className='receipt-screen'>
      <div className='receipt-screen__wrapper'>
        <p>
          <strong>Amount:</strong> ₦ {Number(data?.amount).toLocaleString()}
        </p>

        <p>
          <strong>Recipient:</strong> {data?.accountNumber}
        </p>

        <p>
          <strong>Status:</strong> Successful
        </p>
      </div>
    </div>
  );
};

export default ReceiptScreen;
