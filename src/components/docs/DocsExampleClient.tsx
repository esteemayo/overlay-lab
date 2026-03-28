'use client';

import { useState } from 'react';

import CodePreview from '../codePreview/CodePreview';
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

  return (
    <div className='docs-example'>
      <h4 className='docs-example__title'>{title}</h4>

      <div className='docs-example__tabs'>
        <button
          type='button'
          onClick={() => setTab('preview')}
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
          onClick={() => setTab('code')}
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
            <div className='docs-example__file-tabs'>
              {files.map((file, index) => (
                <button
                  key={file.filename}
                  type='button'
                  onClick={() => setActiveFile(index)}
                  className={activeFile === index ? 'active' : ''}
                >
                  {file.filename}
                </button>
              ))}
            </div>

            {active.filename.endsWith('.md') ? (
              <MarkdownPreview content={active.code} />
            ) : (
              <CodePreview
                code={active.code}
                filename={active.filename}
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
