export interface PopupOverlayProps {
  isOpen: boolean;
  onClose(e: React.MouseEvent<HTMLDivElement>): void;
  children: React.ReactNode;
}
