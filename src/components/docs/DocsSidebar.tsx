'use client';

import { sections } from '@/data';
import { useActiveSection } from '@/hooks/useActiveSection';

const DocsSidebar = () => {
  const sectionIds = sections.map((item) => item.id);
  const { isActiveId } = useActiveSection(sectionIds);

  return (
    <aside className='docs-sidebar'>
      <h3 className='docs-sidebar__heading'>Docs</h3>

      <nav className='docs-sidebar__nav'>
        <ul className='docs-sidebar__list'>
          {sections.map(({ id, label }) => (
            <li key={id} className='docs-sidebar__item'>
              <a
                href={`#${id}`}
                className={
                  isActiveId === id ? 'docs-sidebar__item--link active' : 'docs-sidebar__item--link'
                }
              >
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
