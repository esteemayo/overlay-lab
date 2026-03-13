'use client';

import { createPortal } from 'react-dom';

import { usePopupInstance } from './Popup';

import { usePopup } from '@/hooks/usePopup';
import { usePortal } from '@/hooks/usePortal';

const PopupRoot = ({ children }: { children: React.ReactNode }) => {
  const id = usePopupInstance();
  const { stack } = usePopup();
  const { portalId } = usePortal('overlay-root');

  const isOpen = stack.some((item) => item.id === id);

  if (!isOpen || !portalId) return null;

  return createPortal(children, portalId);
};

export default PopupRoot;
