import Docs from './sections/docs/Docs';
import Popup from './popup';
import TransferFlow from './TransferFlow';
import Hero from './hero/Hero';
import PopupProvider from '@/context/PopupContext';

const Home = () => {
  return (
    <div>
      <PopupProvider>
        <Popup>
          <Hero />
          <Popup.Content>
            <TransferFlow />
          </Popup.Content>
        </Popup>
      </PopupProvider>

      <Docs />
    </div>
  );
};

export default Home;
