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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setTab(prev => prev === 'preview' ? 'code' : 'preview');
    }
  };

  return (
    <div className='docs-example' role='region' aria-labelledby='example-title'>
      <h3 id='example-title' className='docs-example__title'>
        {title}
      </h3>

      <div
        className='docs-example__tabs'
        role='tablist'
        aria-label='Example view options'
      >
        <button
          role='tab'
          id='preview-tab'
          type='button'
          onClick={() => setTab('preview')}
          onKeyDown={handleKeyDown}
          className={
            tab === 'preview'
              ? 'docs-example__tabs--btn active'
              : 'docs-example__tabs--btn'
          }
          aria-selected={tab === 'preview'}
          aria-controls='preview-panel'
        >
          Preview
        </button>

        <button
          role='tab'
          id='code-tab'
          type='button'
          onClick={() => setTab('code')}
          onKeyDown={handleKeyDown}
          className={
            tab === 'code'
              ? 'docs-example__tabs--btn active'
              : 'docs-example__tabs--btn'
          }
          aria-selected={tab === 'code'}
          aria-controls='code-panel'
        >
          Code
        </button>
      </div>

      <div className='docs-example__content'>
        {tab === 'preview' ? (
          <div
            id='preview-panel'
            className='docs-example__preview'
            role='tabpanel'
            aria-labelledby='preview-tab'
            tabIndex={0}
          >
            {children}
          </div>
        ) : (
          <div
            id='code-panel'
            role='tabpanel'
            aria-labelledby='code-tab'
            tabIndex={0}
          >
            <Tabs tabs={fileTabs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsExampleClient;
