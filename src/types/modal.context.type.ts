import React from 'react';

export type ModalContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  titleId?: string;
  setTitleId(id: string): void;
  descriptionId?: string;
  setDescriptionId(id: string): void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};
