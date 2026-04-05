'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/ui/logo/Logo';
import Popup from '@/components/popup';
import MenuButton from '@/components/ui/menuButton/MenuButton';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith('/docs');

  return (
    <nav className='navbar' aria-label='Main navigation'>
      <div className='navbar__container'>
        <Logo />

        <ul
          className={isDocsPage ? 'navbar__list hide' : 'navbar__list'}
          hidden={isDocsPage}
        >
          <li className='navbar__list--item'>
            {pathname === '/' ? (
              <Link href='/#docs'>Docs</Link>
            ) : (
              <Link href='/docs' aria-current={isDocsPage ? 'page' : undefined}>
                Docs
              </Link>
            )}
          </li>

          <li className='navbar__list--item'>
            <a
              href='https://github.com/esteemayo/overlay-lab.git'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View OverlayLab on GitHub (opens in a new tab)'
            >
              GitHub
            </a>
          </li>
        </ul>

        <Popup.Trigger asChild>
          <MenuButton aria-haspopup='menu' aria-controls='mobile-menu' />
        </Popup.Trigger>
      </div>
    </nav>
  );
};

export default Navbar;
