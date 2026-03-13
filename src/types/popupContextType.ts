export type PopupStackItem = {
  id: string;
};

export type PopupContextType = {
  stack: PopupStackItem[];
  openPopup(id: string): void;
  closePopup(id: string): void;
  isTopPopup(id: string): boolean;
  titleId?: string;
  descriptionId?: string;
  setTitleId(id: string): void;
  setDescriptionId(id: string): void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};
