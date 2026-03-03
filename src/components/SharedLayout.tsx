'use client';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  );
};

export default SharedLayout;
