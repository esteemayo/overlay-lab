import Link from 'next/link';
import './Docs.scss';

const Docs = () => {
  return (
    <section id='docs' className='docs'>
      <div className='docs__container'>
        <h2 className='docs__heading'>Documentation</h2>

        <p className='docs__desc'>
          A headless, composable popup system with stacking, variants, and
          accessibility built from first principles.
        </p>

        <Link href='/docs' className='docs__link'>
          Read full documentation →
        </Link>
      </div>
    </section>
  );
};

export default Docs;
