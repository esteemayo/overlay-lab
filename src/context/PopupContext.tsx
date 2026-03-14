'use client';

import { createContext, useRef, useState } from 'react';
import { PopupContextType, PopupStackItem } from '@/types/popupContextType';

export const PopupContext = createContext<PopupContextType | null>(null);

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [titleId, setTitleId] = useState<string | undefined>();
  const [stack, setStack] = useState<PopupStackItem[]>([]);
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const openPopup = (id: string) => {
    setStack((prev) => [...prev, { id }]);
  };

  const closePopup = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const isTopPopup = (id: string) => {
    if (!stack.length) return false;
    return stack[stack.length - 1].id === id;
  };

  const isPopupOpen = (id: string) => stack.some((item) => item.id === id);

  return (
    <PopupContext.Provider
      value={{
        stack,
        openPopup,
        closePopup,
        isTopPopup,
        isPopupOpen,
        titleId,
        descriptionId,
        setTitleId,
        setDescriptionId,
        triggerRef,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
