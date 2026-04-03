import Xmark from '@/components/icons/Xmark';
import Popup from '@/components/popup';
import SidebarNav from './sidebarNav/SidebarNav';

const Sidebar = () => {
  return (
    <Popup.Content variant='drawer-right'>
      <Popup.Header>
        &nbsp;
        <Popup.Close>
          <Xmark />
        </Popup.Close>
      </Popup.Header>

      <Popup.Body>
        <SidebarNav />
      </Popup.Body>
    </Popup.Content>
  );
};

export default Sidebar;
