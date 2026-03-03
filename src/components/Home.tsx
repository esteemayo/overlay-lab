import ModalBody from './modal/ModalBody';
import Docs from './docs/Docs';
import ModalClose from './modal/ModalClose';
import Hero from './hero/Hero';
import ModalFooter from './modal/ModalFooter';
import Modal from './modal/Modal';
import ModalHeader from './modal/ModalHeader';
import ModalTitle from './modal/ModalTitle';
import ModalContent from './modal/ModalContent';

const Home = () => {
  return (
    <div>
      <Modal>
        <Hero />

        <ModalContent>
          <ModalHeader>
            <ModalTitle>Confirm Transfer</ModalTitle>
            <ModalClose>X</ModalClose>
          </ModalHeader>

          <ModalBody>This simulates a fintech transfer confirmation.</ModalBody>

          <ModalFooter>
            <ModalClose>Cancel</ModalClose>
            <button type='button'>Confirm</button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Docs />
    </div>
  );
};

export default Home;
