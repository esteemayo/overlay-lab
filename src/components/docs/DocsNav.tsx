'use client';

import { sections } from '@/data';
import { usePopupInstance } from '@/context/PopupInstanceContext';

import { usePopup } from '@/hooks/usePopup';
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
      <h2 id='docs-nav-heading' className='docs-nav__heading'>
        Documentation
      </h2>

      <nav className='docs-nav__nav' aria-labelledby='docs-nav-heading'>
        <ul className='docs-nav__list'>
          {sections.map(({ id, label }) => (
            <li key={id} onClick={handleClick} className='docs-nav__item'>
              <a
                href={`#${id}`}
                className={`docs-nav__item--link ${isActiveId === id ? 'active' : ''}`}
                aria-current={isActiveId === id ? 'location' : undefined}
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
