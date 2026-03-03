'use client';

import { ModalProps } from '@/types/modal.type';
import ModalProvider from '@/context/modal-context';

import './Modal.scss';

const Modal = ({ children }: ModalProps) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Modal;
