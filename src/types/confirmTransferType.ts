import { FormState } from '.';
import { TransferStatus } from '@/context/transferContext/transferTypes';

export interface ConfirmTransferProps {
  data: FormState;
  status: TransferStatus;
  onConfirm(): void;
}
