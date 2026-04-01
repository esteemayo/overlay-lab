import Popup from '../popup';
import Bars from '../icons/Bars';

const DocsMenubar = () => {
  return (
    <div className='docs-menubar'>
      <div className='docs-menubar__container'>
        <Popup.Trigger asChild>
          <div className='docs-menubar__toggle'>
            <button type='button' className='docs-menubar__toggle--btn'>
              <Bars />
            </button>

            <span className='docs-menubar__menubar__toggle--text'>Menu</span>
          </div>
        </Popup.Trigger>
      </div>

      <h3 className='docs-menubar__header'>Documentation</h3>
    </div>
  );
};

export default DocsMenubar;
