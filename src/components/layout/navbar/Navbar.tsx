'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/ui/logo/Logo';
import Popup from '@/components/popup';
import MenuButton from '@/components/ui/menuButton/MenuButton';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='navbar' role='navigation' aria-label='Main navigation'>
      <div
        className='navbar__container'
        role='group'
        aria-label='Navigation items'
      >
        <Logo />

        <ul className='navbar__list' role='menubar'>
          <li className='navbar__list--item' role='menuitem'>
            {pathname === '/' ? (
              <a href='#docs'>Docs</a>
            ) : (
              <Link href='/docs'>Docs</Link>
            )}
          </li>

          <li className='navbar__list--item' role='menuitem'>
            <a
              href='https://github.com/esteemayo/overlay-lab.git'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
        </ul>

        <Popup.Trigger asChild>
          <MenuButton />
        </Popup.Trigger>
      </div>
    </nav>
  );
};

export default Navbar;
