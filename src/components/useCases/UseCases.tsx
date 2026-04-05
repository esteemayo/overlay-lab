import { USE_CASES } from '@/data';
import UseCaseItem from '../useCaseItem/UseCaseItem';

import './UseCases.scss';

const UseCases = () => {
  return (
    <section
      className='use-cases'
      aria-labelledby='use-cases-heading'
      aria-describedby='use-cases-desc'
    >
      <div className='use-cases__container'>
        <h2 id='use-cases-heading' className='use-cases__heading'>
          Use Cases
        </h2>

        <p id='use-cases-desc' className='use-cases__desc'>
          OverlayLab can be used to power real-world UI interactions across
          different types of applications.
        </p>

        <ul className='use-cases__list'>
          {USE_CASES.map(({ id, text }) => (
            <UseCaseItem key={id} text={text} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UseCases;
