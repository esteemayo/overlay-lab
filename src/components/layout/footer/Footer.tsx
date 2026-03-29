import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer' role='contentinfo' aria-label='Footer'>
      <div
        className='footer__container'
        role='group'
        aria-label='Footer content'
      >
        <p className='footer__text'>
          Built and designed by{' '}
          <a href='#' target='_blank' rel='noopener noreferrer'>
            Emmanuel Adebayo.
          </a>
        </p>

        <p className='footer__text'>
          &copy; {year}{' '}
          <a href='#' target='_blank' rel='noopener noreferrer'>
            OverlayLab.
          </a>{' '}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
