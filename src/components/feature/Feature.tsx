import { FeatureProps } from '@/types/featureType';
import './Feature.scss';

const Feature = ({ title, desc }: FeatureProps) => {
  return (
    <article className='feature' aria-labelledby={`feature-${title}`}>
      <h3 id={`feature-${title}`} className='feature__title'>
        {title}
      </h3>

      <p className='features__desc'>{desc}</p>
    </article>
  );
};

export default Feature;
