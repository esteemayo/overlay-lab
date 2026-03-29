'use client';

import ReactMarkdown from 'react-markdown';

import CopyButton from '../copyButton/CopyButton';
import FileLabel from '../fileLabel/FileLabel';
import CodePreviewDots from '../codePreviewDots/CodePreviewDots';

import { MarkdownPreviewProps } from '@/types/markdownPreviewType';

import './MarkdownPreview.scss';

const MarkdownPreview = ({ content, label }: MarkdownPreviewProps) => {
  return (
    <div className='markdown-preview'>
      <div className='markdown-preview__header'>
        <CodePreviewDots />
        {label && <FileLabel label={label} />}
        <CopyButton code={content} />
      </div>

      <div className='markdown-preview__wrapper'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
