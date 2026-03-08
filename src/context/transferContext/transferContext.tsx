'use client';

import { createContext, Dispatch, useReducer } from 'react';

import { transferReducer } from '@/reducers/transferReducer';
import { TransferAction, TransferData, TransferState } from './transferTypes';

interface TransferContextType {
  state: TransferState;
  dispatch: Dispatch<TransferAction>;
  handleSuccess(data: TransferData): void;
}

const INITIAL_STATE: TransferState = {
  status: 'idle',
  data: null,
  transactionId: null,
  error: null,
};

export const TransferContext = createContext<TransferContextType | undefined>(
  undefined,
);

export const TransferProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(transferReducer, INITIAL_STATE);

  const handleSuccess = (payload: TransferData) => {
    dispatch({
      type: 'TRANSFER_SUCCESS',
      payload,
    });
  };

  return (
    <TransferContext.Provider value={{ ...state, dispatch, handleSuccess }}>
      {children}
    </TransferContext.Provider>
  );
};
