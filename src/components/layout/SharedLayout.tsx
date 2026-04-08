'use client';

import { usePathname } from 'next/navigation';

import Footer from './footer/Footer';
import Popup from '../popup/Popup';
import Navbar from './navbar/Navbar';
import Sidebar from './Sidebar';
import DocsMenu from '../docs/DocsMenu';

import CursorGlow from '../ui/cursorGlow/CursorGlow';
import PopupProvider from '@/context/PopupContext';
import { TransferProvider } from '@/context/transferContext/transferContext';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith('/docs');

  return (
    <PopupProvider>
      <TransferProvider>
        <CursorGlow />

        <Popup>
          <Navbar />
          {isDocsPage ? <DocsMenu /> : <Sidebar />}
        </Popup>

        <main className='main-container'>{children}</main>

        <Footer />
      </TransferProvider>
    </PopupProvider>
  );
};

export default SharedLayout;
