import ArrowLeft from '@/components/icons/ArrowLeft';
import Popup from './popup';
import ConfirmTransfer from './confirmTransfer/ConfirmTransfer';

import { ConfirmTransferModalProps } from '@/types/confirmTransferModalType';

const ConfirmTransferModal = ({
  data,
  status,
  onConfirm,
}: ConfirmTransferModalProps) => {
  return (
    <Popup.Content>
      <Popup.Header>
        <Popup.Title>Confirm Transfer</Popup.Title>
        <Popup.Close>
          <ArrowLeft />
        </Popup.Close>
      </Popup.Header>

      <Popup.Description>
        Please review the details before proceeding.
      </Popup.Description>

      <Popup.Body>
        <ConfirmTransfer data={data} status={status} onConfirm={onConfirm} />
      </Popup.Body>
    </Popup.Content>
  );
};

export default ConfirmTransferModal;
