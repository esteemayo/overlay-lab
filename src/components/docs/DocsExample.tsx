import DocsExampleClient from './DocsExampleClient';

import { highlightCode } from '@/lib/highlight';
import { DocsExampleProps } from '@/types/docsExampleType';

const DocsExample = async ({ title, code, children }: DocsExampleProps) => {
  const highlighted = await highlightCode(code);

  return (
    <DocsExampleClient title={title} code={code} highlighted={highlighted}>
      {children}
    </DocsExampleClient>
  );
};

export default DocsExample;
