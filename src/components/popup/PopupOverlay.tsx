import { PopupOverlayProps } from '@/types/popupOverlayType';

const PopupOverlay = ({ isOpen, onClose, children }: PopupOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className='popup__overlay'>
      {children}
    </div>
  );
};

export default PopupOverlay;
