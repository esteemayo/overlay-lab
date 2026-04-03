'use client';

import Footer from './footer/Footer';
import Popup from '../popup';
import Sidebar from './Sidebar';
import Navbar from './navbar/Navbar';

import CursorGlow from '../ui/cursorGlow/CursorGlow';
import PopupProvider from '@/context/PopupContext';
import { TransferProvider } from '@/context/transferContext/transferContext';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PopupProvider>
      <TransferProvider>
        <CursorGlow />

        <Popup>
          <Navbar />
          <Sidebar />
        </Popup>

        <main className='main-container'>{children}</main>

        <Footer />
      </TransferProvider>
    </PopupProvider>
  );
};

export default SharedLayout;
