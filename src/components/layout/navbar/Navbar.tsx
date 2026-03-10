import Logo from '@/components/ui/logo/Logo';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Logo />

        <ul className='navbar__list'>
          <li className='navbar__list--item'>
            <a href='#docs'>Docs</a>
          </li>

          <li className='navbar__list--item'>
            <a
              href='https://github.com/esteemayo/overlay-lab.git'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
