import DocsLayout from './DocsLayout';
import Popup from '../popup';
import DocsMenubar from './DocsMenubar';

const DocsClient = () => {
  return (
    <div className='docs'>
      <Popup>
        <DocsMenubar />

        <Popup.Content variant='drawer-left'>docs sidebar</Popup.Content>
      </Popup>
      <DocsLayout />
    </div>
  );
};

export default DocsClient;
