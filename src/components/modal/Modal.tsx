'use client';

import { createPortal } from 'react-dom';
import { usePortal } from '@/hooks/usePortal';

import './Modal.scss';

const Modal = () => {
  const { portalId } = usePortal('overlay-root');

  const modalContent = (
    <div className='modal' role='dialog'>
      <div className='modal__container'>
        <div className='modal__wrapper'>
          <h1 className='modal__heading'>heading</h1>

          <div className='modal__body'>Modal body contents</div>
          <hr aria-hidden='true' />

          <footer className='modal__footer'>
            <div className='modal__btn'>
              <button type='button' className='modal__btn--secondary'>
                secondary
              </button>

              <button type='button' className='modal__btn--primary'>
                action
              </button>
            </div>
          </footer>
        </div>
      </div>

      <div className='modal__close'>
        <button type='button' className='modal__close--btn'>
          X
        </button>
      </div>
    </div>
  );

  return portalId ? createPortal(modalContent, portalId) : null;
};

export default Modal;
