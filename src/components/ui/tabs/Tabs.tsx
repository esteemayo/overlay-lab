'use client';

import { useState } from 'react';
import { useRovingFocus } from '@/hooks/useRovingFocus';

import './Tabs.scss';

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
};

const Tabs = ({
  tabs,
  orientation = 'horizontal',
  activationMode = 'automatic',
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { getRovingProps } = useRovingFocus({
    length: tabs.length,
    orientation,
    activationMode,
    onChange: setActiveIndex,
  });

  return (
    <div className='tabs'>
      <div
        className={`tabs__list tabs__list--${orientation}`}
        role='tablist'
        aria-orientation={orientation}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type='button'
            onClick={() => setActiveIndex(index)}
            className={
              activeIndex === index ? 'tabs__item active' : 'tabs__item'
            }
            {...getRovingProps(index, activeIndex)}
            role='tab'
            aria-selected={activeIndex === index}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className='tabs__panel' role='tabpanel'>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
