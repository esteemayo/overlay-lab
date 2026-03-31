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
  const [activeFile, setActiveFile] = useState(0);
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  const active = files[activeFile];

  const getLabel = (filename: string) => {
    if (filename.endsWith('.tsx')) return 'tsx';
    if (filename.endsWith('.scss')) return 'scss';
    if (filename.endsWith('.md')) return 'md';
  };

  const handlePreviewBtn = () => {
    setTab('preview');
    if (tab === 'code') setActiveFile(0);
  };

  const handleCodeBtn = () => {
    setTab('code');
  };

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
          <div className='docs-example__code'>
            <Tabs
              tabs={files}
              activeIndex={activeFile}
              setActiveIndex={setActiveFile}
            />

            {active.filename.endsWith('.md') ? (
              <MarkdownPreview
                content={active.code}
                label={getLabel(active.filename)}
              />
            ) : (
              <CodePreview
                code={active.code}
                label={getLabel(active.filename)}
                highlighted={active.highlighted}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsExampleClient;
