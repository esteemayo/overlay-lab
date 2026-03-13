'use client';

import { createContext, useContext, useId } from 'react';

import PopupFooter from './PopupFooter';
import PopupBody from './PopupBody';
import PopupContent from './PopupContent';
import PopupClose from './PopupClose';
import PopupTrigger from './PopupTrigger';
import PopupTitle from './PopupTitle';
import PopupDescription from './PopupDescription';
import PopupHeader from './PopupHeader';

import './Popup.scss';

type PopupProps = {
  children: React.ReactNode;
};

type PopupCompound = React.FC<PopupProps> & {
  Footer: typeof PopupFooter;
  Body: typeof PopupBody;
  Content: typeof PopupContent;
  Close: typeof PopupClose;
  Trigger: typeof PopupTrigger;
  Title: typeof PopupTitle;
  Description: typeof PopupDescription;
  Header: typeof PopupHeader;
};

const PopupInstanceContext = createContext<string | null>(null);

export const usePopupInstance = () => {
  const ctx = useContext(PopupInstanceContext);

  if (!ctx) {
    throw new Error('Popup components must be used inside Popup');
  }

  return ctx;
};

const Popup: PopupCompound = ({ children }) => {
  const id = useId();

  return (
    <PopupInstanceContext.Provider value={id}>
      {children}
    </PopupInstanceContext.Provider>
  );
};

Popup.Footer = PopupFooter;
Popup.Body = PopupBody;
Popup.Content = PopupContent;
Popup.Close = PopupClose;
Popup.Trigger = PopupTrigger;
Popup.Title = PopupTitle;
Popup.Description = PopupDescription;
Popup.Header = PopupHeader;

export default Popup;
