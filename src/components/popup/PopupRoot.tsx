'use client';

import { createPortal } from 'react-dom';

import { usePortal } from '@/hooks/usePortal';
import { usePopup } from '@/hooks/usePopup';
import { usePopupInstance } from '@/context/PopupInstanceContext';

const PopupRoot = ({ children }: { children: React.ReactNode }) => {
  const { isPopupOpen } = usePopup();
  const id = usePopupInstance();
  const { portalId } = usePortal('overlay-root');

  const isOpen = isPopupOpen(id);

  if (!isOpen || !portalId) return null;

  return createPortal(children, portalId);
};

export default PopupRoot;
