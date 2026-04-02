import Xmark from '../icons/Xmark';
import Popup from '../popup';
import DocsLayout from './DocsLayout';
import DocsNav from './DocsNav';
import DocsMenubar from './DocsMenubar';

const DocsClient = () => {
  return (
    <div className='docs'>
      <div className='docs-wrapper'>
        <Popup>
          <DocsMenubar />

          <Popup.Content variant='drawer-left'>
            <Popup.Header>
              &nbsp;
              <Popup.Close>
                <Xmark />
              </Popup.Close>
            </Popup.Header>

            <DocsNav />
          </Popup.Content>
        </Popup>

        <DocsLayout />
      </div>
    </div>
  );
};

export default DocsClient;
