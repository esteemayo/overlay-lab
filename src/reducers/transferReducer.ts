import { generateTransactionId } from '@/utils/generate.transaction.id.util';
import {
  TransferAction,
  TransferState,
} from '@/context/transferContext/transferTypes';

export const initialTransferState: TransferState = {
  status: 'idle',
  data: null,
  transactionId: null,
  error: null,
};

export const transferReducer = (
  state: TransferState,
  action: TransferAction,
) => {
  switch (action.type) {
    case 'TRANSFER_START':
      return {
        ...state,
        status: 'loading',
        error: null,
      };

    case 'TRANSFER_SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.payload,
        transactionId: generateTransactionId(),
        error: null,
      };

    case 'TRANSFER_RECEIPT':
      return {
        ...state,
        status: 'receipt',
      };

    case 'TRANSFER_ERROR':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };

    case 'TRANSFER_RESET':
      return initialTransferState;

    default:
      return state;
  }
};
