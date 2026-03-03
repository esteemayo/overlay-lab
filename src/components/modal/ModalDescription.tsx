'use client';

import { useEffect, useId } from 'react';
import { useModalContext } from '@/hooks/useModalContext';

const ModalDescription = ({ children }: { children: React.ReactNode }) => {
  const id = useId();
  const { setDescriptionId } = useModalContext();

  useEffect(() => {
    setDescriptionId(id);
  }, [id, setDescriptionId]);

  return (
    <p id={id} className='modal__description'>
      {children}
    </p>
  );
};

export default ModalDescription;
