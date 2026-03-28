import CopyButton from '../copyButton/CopyButton';
import CodeBlock from '../codeBlock/CodeBlock';
import CodePreviewDots from '../codePreviewDots/CodePreviewDots';

import { CodePreviewProps } from '@/types/codePreviewType';
import './CodePreview.scss';

const CodePreview = ({ code, filename, highlighted }: CodePreviewProps) => {
  return (
    <div
      className={`code-preview ${filename?.endsWith('.md') ? 'is-markdown' : ''}`}
    >
      <div className='code-preview__header'>
        <CodePreviewDots />
        <CopyButton code={code} />
      </div>

      <CodeBlock highlighted={highlighted} />
    </div>
  );
};

export default CodePreview;
