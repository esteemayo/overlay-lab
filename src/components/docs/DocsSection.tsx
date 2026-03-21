import { DocsSectionProps } from '@/types/docsSectionType';

const DocsSection = ({ id, title, children }: DocsSectionProps) => {
  return (
    <section id={id} className='docs-section'>
      <h2 className='docs-section__title'>{title}</h2>
      {children}
    </section>
  );
};

export default DocsSection;
