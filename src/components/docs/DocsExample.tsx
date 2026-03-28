import DocsExampleClient from './DocsExampleClient';

import { highlightCode } from '@/lib/highlight';
import { DocsExampleProps } from '@/types/docsExampleType';

const DocsExample = async ({ title, files, children }: DocsExampleProps) => {
  const highlightedFiles = await Promise.all(
    files.map(async (file) => ({
      ...file,
      highlighted: await highlightCode(file.code, file.filename),
    })),
  );

  return (
    <DocsExampleClient title={title} files={highlightedFiles}>
      {children}
    </DocsExampleClient>
  );
};

export default DocsExample;
