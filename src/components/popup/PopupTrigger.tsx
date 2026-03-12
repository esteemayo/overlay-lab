'use client';

import { usePopup } from '@/hooks/usePopup';

const PopupTrigger = ({ children }: { children: React.ReactNode }) => {
  const { triggerRef, setIsOpen } = usePopup();

  return (
    <button
      ref={triggerRef}
      type='button'
      className='popup__trigger'
      onClick={() => setIsOpen?.(true)}
    >
      {children}
    </button>
  );
};

export default PopupTrigger;
