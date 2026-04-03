import Link from 'next/link';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <nav className='footer__nav'>
          <Link href='/docs'>Docs</Link>

          <a
            href='https://github.com/esteemayo/overlay-lab'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </nav>

        <p className='footer__text'>
          &copy; {year} <Link href='/'>OverlayLab.</Link> All rights reserved.
        </p>

        <p className='footer__text'>
          Designed and built by{' '}
          <a href='#' target='_blank' rel='noopener noreferrer'>
            Emmanuel Adebayo.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
