'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './SidebarNav.scss';

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav className='sidebar-nav' aria-label='Sidebar navigation'>
      <ul className='sidebar-nav__list'>
        <li className='sidebar-nav__item'>
          {pathname === '/' ? (
            <Link href='/#docs' className='sidebar-nav__item--link'>
              Docs
            </Link>
          ) : (
            <Link
              href='/docs'
              className='sidebar-nav__item--link'
              aria-current={pathname.startsWith('/docs') ? 'page' : undefined}
            >
              Docs
            </Link>
          )}
        </li>

        <li className='sidebar-nav__item'>
          <a
            href='https://github.com/esteemayo/overlay-lab.git'
            target='_blank'
            rel='noopener noreferrer'
            className='sidebar-nav__item--link'
            aria-label='View OverlayLab on GitHub (opens in a new tab)'
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
