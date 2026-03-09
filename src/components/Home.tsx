import Docs from './sections/docs/Docs';
import Hero from './hero/Hero';
import TransferFlow from './TransferFlow';
import Modal from './modal/Modal';
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
