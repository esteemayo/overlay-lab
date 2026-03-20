import Popup from '@/components/popup';
import Xmark from '@/components/icons/Xmark';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <Popup.Content variant='drawer-right'>
      <Popup.Header>
        <Popup.Title>Menu</Popup.Title>

        <Popup.Close>
          <Xmark />
        </Popup.Close>
      </Popup.Header>

      <Popup.Body>
        <nav>
          <ul className='' role='menubar'>
            <li className='' role='menuitem'>
              <a href='#docs'>Docs</a>
            </li>

            <li className='' role='menuitem'>
              <a
                href='https://github.com/esteemayo/overlay-lab.git'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </Popup.Body>
    </Popup.Content>
  );
};

export default Sidebar;
