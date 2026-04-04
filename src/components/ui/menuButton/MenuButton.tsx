'use client';

import { forwardRef } from 'react';
import { usePathname } from 'next/navigation';

import Bars from '@/components/icons/Bars';

import './MenuButton.scss';

const MenuButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>((props, ref) => {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith('/docs');

  return (
    <div className={isDocsPage ? 'menu-button docs' : 'menu-button'}>
      <button {...props} ref={ref} type='button' className='menu-button__btn'>
        <Bars />
        {isDocsPage && <span>Menu</span>}
      </button>
    </div>
  );
});

MenuButton.displayName = 'MenuButton';

export default MenuButton;
