import FileLabel from '../fileLabel/FileLabel';
import CopyButton from '../copyButton/CopyButton';

import CodeBlock from '../codeBlock/CodeBlock';
import CodePreviewDots from '../codePreviewDots/CodePreviewDots';

import { CodePreviewProps } from '@/types/codePreviewType';
import './CodePreview.scss';

const CodePreview = ({ code, label, highlighted }: CodePreviewProps) => {
  const titleId = 'code-preview-title';

  return (
    <div className='code-preview' role='region' aria-labelledby={titleId}>
      <div
        className='code-preview__header'
        role='group'
        aria-label='Code preview controls'
      >
        <CodePreviewDots />

        {label ? (
          <FileLabel label={label} titleId={titleId} />
        ) : (
          <span id={titleId} className='visually-hidden'>
            Code example
          </span>
        )}

        <CopyButton code={code} />
      </div>

      <CodeBlock label={label} highlighted={highlighted} />
    </div>
  );
};

export default CodePreview;
