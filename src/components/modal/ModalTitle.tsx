'use client';

import { useEffect, useId } from 'react';
import { useModalContext } from '@/hooks/useModalContext';

const ModalTitle = ({ children }: { children: React.ReactNode }) => {
  const id = useId();
  const { setTitleId } = useModalContext();

  useEffect(() => {
    setTitleId(id);
  }, [id, setTitleId]);

  return (
    <h2 id={id} className='modal__title'>
      {children}
    </h2>
  );
};

export default ModalTitle;
