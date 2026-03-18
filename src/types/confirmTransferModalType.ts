import { FormState } from '.';

export interface ConfirmTransferModalProps {
  data: FormState;
  onConfirm(): void;
}
