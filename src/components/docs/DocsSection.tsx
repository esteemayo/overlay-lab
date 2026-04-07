import { DocsSectionProps } from '@/types/docsSectionType';

const DocsSection = ({ id, title, children }: DocsSectionProps) => {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      className='docs-section'
      aria-labelledby={headingId}
      tabIndex={-1}
    >
      <h2
        id={headingId}
        className='docs-section__title'
      >
        {title}
      </h2>

      {children}
    </section>
  );
};

export default DocsSection;
