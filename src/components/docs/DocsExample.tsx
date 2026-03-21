import { DocsExampleProps } from '@/types/docsExampleType';

const DocsExample = ({ title, children }: DocsExampleProps) => {
  return (
    <div className='docs-example'>
      <h4 className='docs-example__title'>{title}</h4>

      <div className='docs-example__preview'>{children}</div>
    </div>
  );
};

export default DocsExample;
