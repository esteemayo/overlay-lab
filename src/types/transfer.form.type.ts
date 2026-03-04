import { FormState } from '@/components/transferForm/TransferForm';
import { StatusType } from './index.type';

export interface TransferFormProps {
  status: StatusType;
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  onSuccess(data: FormState): void;
}
