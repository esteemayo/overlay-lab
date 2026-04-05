import Popup from '../popup';
import Button from '../button/Button';

import './Hero.scss';

const Hero = () => {
  return (
    <header className='hero' aria-labelledby='hero-heading'>
      <div className='hero__container'>
        <h1 id='hero-heading' className='hero__heading'>
          OverlayLab - Headless Popup System for React and Next.js
        </h1>

        <div className='hero__wrapper'>
          <p className='hero__wrapper--desc'>
            Accessible, production-grade popup architecture built with{' '}
            <a
              href='https://react.dev'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='React website (opens in a new tab)'
            >
              React
            </a>{' '}
            and{' '}
            <a
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Next.js website (opens in a new tab)'
            >
              Next.js
            </a>
          </p>

          <p className='hero__wrapper--subdesc'>
            A scalable overlay system supporting modals, drawers, and sidebars
            using stack-based state, focus trapping, scroll locking, and
            ARIA-compliant dialog semantics.
          </p>
        </div>

        <Popup.Trigger asChild>
          <Button
            label='Simulate transfer'
            variant='main'
            aria-haspopup='dialog'
            aria-expanded={false}
            aria-controls='transfer-dialog'
          />
        </Popup.Trigger>
      </div>
    </header>
  );
};

export default Hero;
