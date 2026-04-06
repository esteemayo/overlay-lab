import Link from 'next/link';
import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/' aria-label='Go to OverlayLab homepage'>
        OverlayLab
      </Link>
    </div>
  );
};

export default Logo;
