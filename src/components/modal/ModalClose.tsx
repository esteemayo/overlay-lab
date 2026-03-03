'use client';

import { useModalContext } from '@/hooks/useModalContext';

const ModalClose = ({ children }: { children: React.ReactNode }) => {
  const { triggerRef, setIsOpen } = useModalContext();

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <button
      type='button'
      onClick={handleClose}
      className='modal__close'
      aria-label='Close modal'
    >
      {children}
    </button>
  );
};

export default ModalClose;
