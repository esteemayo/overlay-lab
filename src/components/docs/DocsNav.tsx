'use client';

import { usePopupInstance } from '../popup/Popup';

import { usePopup } from '@/hooks/usePopup';
import { sections } from '@/data';
import { useActiveSection } from '@/hooks/useActiveSection';

const DocsNav = () => {
  const sectionIds = sections.map((item) => item.id);
  const { isActiveId } = useActiveSection(sectionIds);

  const { closePopup } = usePopup();
  const popupId = usePopupInstance();

  const handleClick = () => {
    closePopup(popupId);
  };

  return (
    <div className='docs-nav'>
      <h3 className='docs-nav__heading'>Documentation</h3>

      <nav className='docs-nav__nav'>
        <ul className='docs-nav__list'>
          {sections.map(({ id, label }) => (
            <li key={id} onClick={handleClick} className='docs-nav__item'>
              <a
                href={`#${id}`}
                className={`docs-nav__item--link ${isActiveId === id ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DocsNav;
