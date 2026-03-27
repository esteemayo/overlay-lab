import CopyButton from '../copyButton/CopyButton';
import CodeBlock from '../codeBlock/CodeBlock';
import CodePreviewDots from '../codePreviewDots/CodePreviewDots';

import { CodePreviewProps } from '@/types/codePreviewType';
import './CodePreview.scss';

const CodePreview = ({ code, highlighted }: CodePreviewProps) => {
  return (
    <div className='code-preview'>
      <div className='code-preview__header'>
        <CodePreviewDots />
        <CopyButton code={code} />
      </div>

      <CodeBlock highlighted={highlighted} />
    </div>
  );
};

export default CodePreview;
