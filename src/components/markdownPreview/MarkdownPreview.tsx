'use client';

import ReactMarkdown from 'react-markdown';

import CopyButton from '../copyButton/CopyButton';
import FileLabel from '../fileLabel/FileLabel';
import CodePreviewDots from '../codePreviewDots/CodePreviewDots';

import { MarkdownPreviewProps } from '@/types/markdownPreviewType';

import './MarkdownPreview.scss';

const MarkdownPreview = ({ content, label }: MarkdownPreviewProps) => {
  const titleId = 'markdown-preview-title'

  return (
    <div
      className='markdown-preview'
      role='region'
      aria-labelledby={titleId}
    >
      <div
        className='markdown-preview__header'
        role='group'
        aria-label='Markdown preview controls'
      >
        <CodePreviewDots />
        {label ?
          <FileLabel titleId={titleId} label={label} /> : (
            <span id={titleId} className='visually-hidden'>
              Markdown preview
            </span>
          )
        }


        <CopyButton code={content} />
      </div>

      <article
        className='markdown-preview__wrapper'
        aria-label='Rendered markdown content'
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default MarkdownPreview;
