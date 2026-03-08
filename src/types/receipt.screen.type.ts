import { ReceiptDataType } from './index.type';

export interface ReceiptScreenProps {
  data: ReceiptDataType | null;
  transactionId: string | null;
}
