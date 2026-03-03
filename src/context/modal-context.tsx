'use client';

import { createContext, useRef, useState } from 'react';
import { ModalContextType } from '@/types/modal.context.type';

export const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [titleId, setTitleId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        titleId,
        setTitleId,
        descriptionId,
        setDescriptionId,
        triggerRef,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
