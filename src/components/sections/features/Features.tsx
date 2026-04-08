import { features } from '@/data';
import Feature from '../../feature/Feature';

import './Features.scss';

const Features = () => {
  return (
    <section className='features' aria-describedby='features-heading'>
      <div className='features__container'>
        <h2 id='features-heading' className='features__heading'>
          Features
        </h2>

        <ul className='features__grid'>
          {features.map((feature) => (
            <li key={feature.id} className='features__item'>
              <Feature {...feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
