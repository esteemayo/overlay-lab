import Logo from '@/components/ui/logo/Logo';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='Main navigation'>
      <div
        className='navbar__container'
        role='group'
        aria-label='Navigation items'
      >
        <Logo />

        <ul className='navbar__list' role='menubar'>
          <li className='navbar__list--item' role='menuitem'>
            <a href='#docs'>Docs</a>
          </li>

          <li className='navbar__list--item' role='menuitem'>
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
