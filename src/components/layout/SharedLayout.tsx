'use client';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

import { TransferProvider } from '@/context/transferContext/transferContext';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransferProvider>
      <Navbar />
      <main className='main-container'>{children}</main>
      <Footer />
    </TransferProvider>
  );
};

export default SharedLayout;
