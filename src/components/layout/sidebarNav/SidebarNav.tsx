'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './SidebarNav.scss';

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav className='sidebar-nav'>
      <ul className='sidebar-nav__list' role='menubar'>
        <li className='sidebar-nav__item' role='menuitem'>
          {pathname === '/' ? (
            <a href='#docs' className='sidebar-nav__item--link'>
              Docs
            </a>
          ) : (
            <Link href='/docs' className='sidebar-nav__item--link'>
              Docs
            </Link>
          )}
        </li>

        <li className='sidebar-nav__item' role='menuitem'>
          <a
            href='https://github.com/esteemayo/overlay-lab.git'
            target='_blank'
            rel='noopener noreferrer'
            className='sidebar-nav__item--link'
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
