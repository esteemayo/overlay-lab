type PopupVariant = 'modal' | 'drawer-right' | 'drawer-left';

export interface PopupContentProps {
  variant?: PopupVariant;
  children: React.ReactNode;
}
