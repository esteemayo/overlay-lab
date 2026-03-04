'use client';

import ModalProvider from '@/context/modal-context';
import './Modal.scss';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Modal;
