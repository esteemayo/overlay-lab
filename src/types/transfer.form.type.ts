import {
  TransferData,
  TransferStatus,
} from '@/context/transferContext/transferTypes';

export interface TransferFormProps {
  status: TransferStatus;
  onSuccess(data: TransferData): void;
}
