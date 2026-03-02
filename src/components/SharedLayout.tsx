'use client';

import Footer from './footer/Footer';
import Modal from './modal/Modal';
import Navbar from './navbar/Navbar';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Modal />
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  );
};

export default SharedLayout;
