import { FormState } from '.';
import { TransferStatus } from '@/context/transferContext/transferTypes';

export interface ConfirmTransferModalProps {
  data: FormState;
  status: TransferStatus;
  onConfirm(): void;
}
