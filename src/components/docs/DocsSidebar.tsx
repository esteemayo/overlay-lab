'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'why', label: 'Why This Exists' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'decisions', label: 'Design Decisions' },
  { id: 'stack', label: 'Stack System' },
  { id: 'variants', label: 'Variants' },
  { id: 'overlay', label: 'Overlay Behavior' },
  { id: 'api', label: 'API' },
  { id: 'keyboard', label: 'Keyboard' },
  { id: 'examples', label: 'Examples' },
];

const DocsSidebar = () => {
  const [isActive, setIsActive] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className='docs-sidebar'>
      <h3>Docs</h3>

      <nav>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={isActive === id ? 'active' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DocsSidebar;
