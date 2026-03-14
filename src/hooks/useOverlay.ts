'use client';

import { RefObject, useEffect, useRef } from 'react';

import { useEscapeKey } from './useEscapeKey';
import { useFocusTrap } from './useFocusTrap';
import { useScrollLock } from './useScrollLock';

import { usePopup } from './usePopup';
import { usePopupInstance } from '@/components/popup/Popup';

interface UseOverlayOptions {
  isOpen: boolean;
  restoreFocus?: boolean;
  onClose(): void;
}

export const useOverlay = <T extends HTMLElement | HTMLDivElement>(
  ref: RefObject<T | null>,
  { isOpen, onClose, restoreFocus = true }: UseOverlayOptions,
) => {
  const { isTopPopup } = usePopup();
  const popupId = usePopupInstance();

  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  useEscapeKey({
    isEnabled: isOpen && isTopPopup(popupId),
    onEscape: onClose,
  });
  useScrollLock(isOpen);
  useFocusTrap(ref, isOpen);

  useEffect(() => {
    if (!isOpen && restoreFocus && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, restoreFocus]);
};
