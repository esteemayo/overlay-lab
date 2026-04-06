import { CodeBlockProps } from '@/types/codeBlockType';
import './CodeBlock.scss';

const CodeBlock = ({ label, highlighted }: CodeBlockProps) => {
  const language =
    label === 'tsx' ? 'TypeScript' : label === 'scss' ? 'SCSS' : 'Markdown';

  return (
    <div
      className='code-block'
      aria-label={`${language} code example`}
      tabIndex={0}
    >
      <code
        className='code-block__container'
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
};

export default CodeBlock;
