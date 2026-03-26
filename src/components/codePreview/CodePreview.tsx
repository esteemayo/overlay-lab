import CodeBlock from '../codeBlock/CodeBlock';
import CopyButton from '../copyButton/CopyButton';

import './CodePreview.scss';

const CodePreview = ({ code }: { code: string}) => {
  return (
    <div className='code-preview'>
      <div className='code-preview__header'>
        <div className='code-preview__dots'>
          <span className='code-preview__dot red' />
          <span className='code-preview__dot yellow' />
          <span className='code-preview__dot green' />
        </div>

        <CopyButton code={code} />
      </div>

      <CodeBlock code={code} />
    </div>
  );
};

export default CodePreview;
