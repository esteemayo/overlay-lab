import { highlightCode } from '@/lib/highlight';
import './CodeBlock.scss';

const CodeBlock = async ({ code }: { code: string }) => {
  const { dark, light } = await highlightCode(code);

  return (
    <div className='code-block'>
      <div
        className='code-block__dark'
        dangerouslySetInnerHTML={{ __html: dark }}
      />

      <div
        className='code-block__light'
        dangerouslySetInnerHTML={{ __html: light }}
      />
    </div>
  );
};

export default CodeBlock;
