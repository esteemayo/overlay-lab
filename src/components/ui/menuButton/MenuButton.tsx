import { forwardRef } from 'react';
import Bars from '@/components/icons/Bars';

import './MenuButton.scss';

const MenuButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>((props, ref) => {
  return (
    <div className='menu-button'>
      <button {...props} ref={ref} type='button' className='menu-button__btn'>
        <Bars />
      </button>
    </div>
  );
});

MenuButton.displayName = 'MenuButton';

export default MenuButton;
