'use client';

import ReactMarkdown from 'react-markdown';
import './MarkdownPreview.scss';

const MarkdownPreview = ({ content }: { content: string }) => {
  return (
    <div className='markdown-preview'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
