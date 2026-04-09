export type StatusType = 'idle' | 'loading' | 'success' | 'receipt';

export type FormState = {
  amount: string;
  accountNumber: string;
  bank: string;
  description?: string;
};

export type ReceiptDataType = FormState;

export type SectionType = {
  id: string;
  label: string;
};

export type FeatureType = {
  id: string;
  title: string;
  desc: string;
};

export type UseCaseType = {
  id: number;
  text: string;
};

// export type TransferState = {
//   status: StatusType;
//   data: ReceiptDataType | null;
//   transactionId: string | null;
// };

// export type TransferActionType = {
//   dispatch?: React.ActionDispatch<[TransferAction]>;
//   handleSuccess?(payload: ReceiptDataType): void;
// };

// export type TransferAction =
//   | { type: 'SUBMIT' }
//   | { type: 'SUCCESS'; payload: FormState }
//   | { type: 'SHOW_RECEIPT' }
//   | { type: 'RESET' };
