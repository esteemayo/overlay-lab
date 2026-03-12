'use client';

import { createPortal } from 'react-dom';

import { usePopup } from '@/hooks/usePopup';
import { usePortal } from '@/hooks/usePortal';

const PopupRoot = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = usePopup();
  const { portalId } = usePortal('overlay-root');

  if (!isOpen || !portalId) return null;

  return createPortal(children, portalId);
};

export default PopupRoot;
