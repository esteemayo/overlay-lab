import { ReceiptDataType } from '.';

export interface ReceiptScreenProps {
  data: ReceiptDataType | null;
  transactionId: string | null;
}
