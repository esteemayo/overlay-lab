'use client';

import { usePopupInstance } from './Popup';
import { usePopup } from '@/hooks/usePopup';

const PopupTrigger = ({ children }: { children: React.ReactNode }) => {
  const popupId = usePopupInstance();
  const { triggerRef, openPopup } = usePopup();

  const handleOpen = () => {
    openPopup(popupId);
  };

  return (
    <button
      ref={triggerRef}
      type='button'
      className='popup__trigger'
      onClick={handleOpen}
    >
      {children}
    </button>
  );
};

export default PopupTrigger;
