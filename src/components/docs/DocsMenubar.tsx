'use client';

import Popup from '../popup';
import Bars from '../icons/Bars';

const DocsMenubar = () => {
  return (
    <div className='docs-menubar'>
      <div className='docs-menubar__container'>
        <Popup.Trigger asChild>
          <button type='button' className='docs-menubar__toggle'>
            <Bars />
            <span>Menu</span>
          </button>
        </Popup.Trigger>
      </div>

      <h3 className='docs-menubar__header'>Documentation</h3>
    </div>
  );
};

export default DocsMenubar;
