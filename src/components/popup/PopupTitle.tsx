'use client';

import { useEffect, useId } from 'react';
import { usePopup } from '@/hooks/usePopup';

const PopupTitle = ({ children }: { children: React.ReactNode }) => {
  const id = useId();
  const { setTitleId } = usePopup();

  useEffect(() => {
    setTitleId(id);
  }, [id, setTitleId]);

  return (
    <h2 id={id} className='popup__title'>
      {children}
    </h2>
  );
};

export default PopupTitle;
