'use client';

import { useEffect, useId } from 'react';
import { usePopup } from '@/hooks/usePopup';

const PopupDescription = ({ children }: { children: React.ReactNode }) => {
  const id = useId();
  const { setDescriptionId } = usePopup();

  useEffect(() => {
    setDescriptionId(id);
  }, [id, setDescriptionId]);

  return (
    <p id={id} className='popup__description'>
      {children}
    </p>
  );
};

export default PopupDescription;
