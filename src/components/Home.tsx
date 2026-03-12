import Docs from './sections/docs/Docs';
import Popup from './popup';
import TransferFlow from './TransferFlow';
import Hero from './hero/Hero';

const Home = () => {
  return (
    <div>
      <Popup>
        <Hero />

        <Popup.Content>
          <TransferFlow />
        </Popup.Content>
      </Popup>

      <Docs />
    </div>
  );
};

export default Home;
