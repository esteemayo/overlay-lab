'use client';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

import { useGlobalRadialGlow } from '@/hooks/useGlobalRadialGlow';
import { TransferProvider } from '@/context/transferContext/transferContext';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  useGlobalRadialGlow();

  return (
    <TransferProvider>
      <Navbar />
      <main className='main-container'>{children}</main>
      <Footer />
    </TransferProvider>
  );
};

export default SharedLayout;
