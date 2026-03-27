import { features } from '@/data';
import Feature from '../feature/Feature';

import './Features.scss';

const Features = () => {
  return (
    <section className='features'>
      <div className='features__container'>
        <h2 className='features__heading'>Features</h2>

        <ul className='features__grid' role='list'>
          {features.map((feature) => (
            <li
              key={feature.id}
              className='features__item'
              role='listitem'
              tabIndex={1}
            >
              <Feature {...feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
