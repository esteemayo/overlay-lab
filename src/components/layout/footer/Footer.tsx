import Link from 'next/link';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <nav className='footer__nav' aria-label='Footer navigation'>
          <Link href='/docs' aria-label='Read documentation'>
            Docs
          </Link>

          <a
            href='https://github.com/esteemayo/overlay-lab'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='View OverlayLab on GitHub (opens in a new tab)'
          >
            GitHub
          </a>
        </nav>

        <p className='footer__text'>
          <span>&copy; {year}</span>{' '}
          <Link href='/' aria-label='Go to homepage'>
            OverlayLab
          </Link>
          . All rights reserved.
        </p>

        <p className='footer__text'>
          Designed and built by{' '}
          <a
            href='https://my-portfolio-link.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit Emmanuel Adebayo portfolio (opens in a new tab)'
          >
            Emmanuel Adebayo.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
