import Modal from './modal/Modal';
import Docs from './docs/Docs';
import TransferFlow from './TransferFlow';
import Hero from './hero/Hero';
import ModalContent from './modal/ModalContent';

const Home = () => {
  return (
    <div>
      <Modal>
        <Hero />

        <ModalContent>
          <TransferFlow />
        </ModalContent>
      </Modal>

      <Docs />
    </div>
  );
};

export default Home;
