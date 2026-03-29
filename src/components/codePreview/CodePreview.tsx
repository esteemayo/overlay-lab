import CopyButton from '../copyButton/CopyButton';
import CodeBlock from '../codeBlock/CodeBlock';
import CodePreviewDots from '../codePreviewDots/CodePreviewDots';
import FileLabel from '../fileLabel/FileLabel';

import { CodePreviewProps } from '@/types/codePreviewType';
import './CodePreview.scss';

const CodePreview = ({ code, label, highlighted }: CodePreviewProps) => {
  return (
    <div className='code-preview'>
      <div className='code-preview__header'>
        <CodePreviewDots />
        {label && <FileLabel label={label} />}
        <CopyButton code={code} />
      </div>

      <CodeBlock highlighted={highlighted} />
    </div>
  );
};

export default CodePreview;
