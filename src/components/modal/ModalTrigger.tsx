'use client';

import { useModalContext } from '@/hooks/useModalContext';

const ModalTrigger = ({ children }: { children: React.ReactNode }) => {
  const { triggerRef, setIsOpen } = useModalContext();

  return (
    <button
      ref={triggerRef}
      type='button'
      className='modal__trigger'
      onClick={() => setIsOpen(true)}
    >
      {children}
    </button>
  );
};

export default ModalTrigger;
