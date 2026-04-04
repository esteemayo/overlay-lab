import DocsNav from './DocsNav';
import Popup from '../popup';
import Xmark from '../icons/Xmark';

const DocsMenu = () => {
  return (
    <Popup.Content variant='drawer-left'>
      <Popup.Header>
        &nbsp;
        <Popup.Close>
          <Xmark />
        </Popup.Close>
      </Popup.Header>

      <Popup.Body>
        <DocsNav />
      </Popup.Body>
    </Popup.Content>
  );
};

export default DocsMenu;
