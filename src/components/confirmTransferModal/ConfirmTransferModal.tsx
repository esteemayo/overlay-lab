import Popup from '../popup';
import './ConfirmTransferModal.scss';

const ConfirmTransferModal = ({ onConfirm }: { onConfirm: () => void }) => {
  return (
    <Popup>
      <Popup.Content>
        <Popup.Header>
          <Popup.Title>Confirm Transfer</Popup.Title>
        </Popup.Header>

        <Popup.Body>
          <div className='confirm-transfer-modal'>
            <div className='confirm-transfer-modal__summary'>
              <span>Recipient</span>
              <strong>Emmanuel Ayodeji Adebayo</strong>
            </div>

            <div className='confirm-transfer-modal__summary'>
              <span>Bank</span>
              <strong>GTBank</strong>
            </div>

            <div className='confirm-transfer-modal__summary'>
              <span>Amount</span>
              <strong>₦10,000,000.00</strong>
            </div>

            <div className='confirm-transfer-modal__summary'>
              <span>Note</span>
              <strong>Monthly salary</strong>
            </div>

            <div className='confirm-transfer-modal__actions'>
              <Popup.Close>Cancel</Popup.Close>

              <button type='button'>Confirm Transfer</button>
            </div>
          </div>
        </Popup.Body>
      </Popup.Content>
    </Popup>
  );
};

export default ConfirmTransferModal;
