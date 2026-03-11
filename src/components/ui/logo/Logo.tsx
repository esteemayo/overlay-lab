import Link from 'next/link';
import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo' role='img' aria-label='OverlayLab Logo'>
      <Link href='/'>OverlayLab</Link>
    </div>
  );
};

export default Logo;
