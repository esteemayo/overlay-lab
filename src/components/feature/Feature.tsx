import { FeatureProps } from '@/types/featureType';
import './Feature.scss';

const Feature = ({ title, desc }: FeatureProps) => {
  return (
    <article className='feature'>
      <h3 className='feature__title'>{title}</h3>
      <p className='features__desc'>{desc}</p>
    </article>
  );
};

export default Feature;
