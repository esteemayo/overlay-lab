'use client';

import { useState } from 'react';

import CodePreview from '../codePreview/CodePreview';
import { DocsExampleClientProps } from '@/types/docsExampleClientType';

const DocsExampleClient = ({
  title,
  code,
  highlighted,
  children,
}: DocsExampleClientProps) => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

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
          <CodePreview code={code} highlighted={highlighted} />
        )}
      </div>
    </div>
  );
};

export default DocsExampleClient;
