export type TransferStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'receipt'
  | 'error';

export interface TransferData {
  amount: string | number;
  accountNumber: string;
  bank: string;
  description?: string;
}

export interface TransferState {
  status: TransferStatus;
  data: TransferData | null;
  transactionId: string | null;
  error: string | null;
}

export type TransferAction =
  | { type: 'TRANSFER_START' }
  | { type: 'TRANSFER_SUCCESS'; payload: TransferData }
  | { type: 'TRANSFER_RECEIPT' }
  | { type: 'TRANSFER_ERROR'; payload: string }
  | { type: 'TRANSFER_RESET' };
