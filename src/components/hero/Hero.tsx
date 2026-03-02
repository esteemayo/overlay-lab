import './Hero.scss';

const Hero = () => {
  return (
    <header className='hero'>
      <div className='hero__container'>
        <h1 className='hero__heading'>OverlayLab</h1>

        <div className='hero__wrapper'>
          <p className='hero__wrapper--desc'>
            Accessible, production grade modal architecture built with{' '}
            <a href='#' target='_blank'>
              React
            </a>{' '}
            and{' '}
            <a href='#' rel='noopener noreferrer'>
              Next.js
            </a>
          </p>

          <p className='hero__wrapper--subdesc'>
            Engineered from first principles with focus trapping, scroll
            locking, and ARIA-compliant dialog semantics.
          </p>
        </div>

        <button type='button' className='hero__btn'>
          Simulate transfer
        </button>
      </div>
    </header>
  );
};

export default Hero;
