'use client';

import { useRef, useState } from 'react';
import './Tabs.scss';

const Tabs = ({ tabs, activeIndex, setActiveIndex }) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let newIndex = index;
    const lastIndex = tabs.length - 1;

    if (e.key === 'ArrowRight') {
      newIndex = index === lastIndex ? 0 : index + 1;
    } else if (e.key === 'ArrowLeft') {
      newIndex = index === 0 ? lastIndex : index - 1;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = lastIndex;
    } else {
      return;
    }

    e.preventDefault();

    setActiveIndex(newIndex);

    if (newIndex >= 0 && newIndex < tabRefs.current.length) {
      const nextEl = tabRefs.current[newIndex];
      if (nextEl) nextEl.focus();
    }
  };

  return (
    <div className='tabs' role='tablist'>
      {tabs.map((tab, index) => (
        <button
          key={tab.filename}
          ref={(el) => {
            tabRefs.current[index] = el;
          }}
          type='button'
          onClick={() => setActiveIndex(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={activeIndex === index ? 'active' : ''}
          role='tab'
          tabIndex={activeIndex === index ? 0 : -1}
        >
          {tab.filename}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
