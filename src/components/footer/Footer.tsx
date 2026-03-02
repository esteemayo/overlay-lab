import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          &copy; {year} Emmanuel Adebayo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
