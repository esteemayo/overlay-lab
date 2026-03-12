'use client';

import { createContext, useRef, useState } from 'react';
import { PopupContextType } from '@/types/popupContextType';

export const PopupContext = createContext<PopupContextType | null>(null);

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [titleId, setTitleId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  return (
    <PopupContext.Provider
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
    </PopupContext.Provider>
  );
};

export default PopupProvider;
