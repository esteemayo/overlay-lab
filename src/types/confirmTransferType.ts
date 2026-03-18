import { FormState } from '.';

export interface ConfirmTransferProps {
  data: FormState;
  onConfirm(): void;
}
