'use client';

import { createPortal } from 'react-dom';

import { usePopupInstance } from './Popup';

import { usePopup } from '@/hooks/usePopup';
import { usePortal } from '@/hooks/usePortal';

const PopupRoot = ({ children }: { children: React.ReactNode }) => {
  const { isPopupOpen } = usePopup();
  const id = usePopupInstance();
  const { portalId } = usePortal('overlay-root');

  const isOpen = isPopupOpen(id);

  if (!isOpen || !portalId) return null;

  return createPortal(children, portalId);
};

export default PopupRoot;
