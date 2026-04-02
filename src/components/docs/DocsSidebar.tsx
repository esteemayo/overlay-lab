'use client';

import { sections } from '@/data';
import { useActiveSection } from '@/hooks/useActiveSection';

const DocsSidebar = () => {
  const sectionIds = sections.map((item) => item.id);
  const { isActiveId } = useActiveSection(sectionIds);

  return (
    <aside className='docs-sidebar'>
      <h3 className='docs-sidebar__heading'>Docs</h3>

      <nav>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={isActiveId === id ? 'active' : ''}>
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
