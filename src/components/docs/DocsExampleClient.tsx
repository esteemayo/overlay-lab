'use client';

import { useState } from 'react';

import CodePreview from '../codePreview/CodePreview';
import Tabs from '../ui/tabs/Tabs';
import MarkdownPreview from '../markdownPreview/MarkdownPreview';

import { DocsExampleClientProps } from '@/types/docsExampleClientType';

const DocsExampleClient = ({
  title,
  files,
  children,
}: DocsExampleClientProps) => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  const getLabel = (filename: string) => {
    if (filename.endsWith('.tsx')) return 'tsx';
    if (filename.endsWith('.scss')) return 'scss';
    if (filename.endsWith('.md')) return 'md';
  };

  const handlePreviewBtn = () => {
    setTab('preview');
  };

  const handleCodeBtn = () => {
    setTab('code');
  };

  const fileTabs = files.map((file) => ({
    label: file.filename,
    content: file.filename.endsWith('.md') ? (
      <MarkdownPreview content={file.code} label={getLabel(file.filename)} />
    ) : (
      <CodePreview
        code={file.code}
        label={getLabel(file.filename)}
        highlighted={file.highlighted}
      />
    ),
  }));

  return (
    <div className='docs-example'>
      <h4 className='docs-example__title'>{title}</h4>

      <div className='docs-example__tabs'>
        <button
          type='button'
          onClick={handlePreviewBtn}
          className={
            tab === 'preview'
              ? 'docs-example__tabs--btn active'
              : 'docs-example__tabs--btn'
          }
        >
          Preview
        </button>

        <button
          type='button'
          onClick={handleCodeBtn}
          className={
            tab === 'code'
              ? 'docs-example__tabs--btn active'
              : 'docs-example__tabs--btn'
          }
        >
          Code
        </button>
      </div>

      <div className='docs-example__content'>
        {tab === 'preview' ? (
          <div className='docs-example__preview'>{children}</div>
        ) : (
          <Tabs tabs={fileTabs} />
        )}
      </div>
    </div>
  );
};

export default DocsExampleClient;
