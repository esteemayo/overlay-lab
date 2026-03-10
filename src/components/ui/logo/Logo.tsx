import Link from 'next/link';
import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/'>OverlayLab</Link>
    </div>
  );
};

export default Logo;
