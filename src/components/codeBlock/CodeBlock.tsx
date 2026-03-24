'use client';

import { useState } from 'react';

import Clipboard from '../icons/Clipboard';
import ClipboardOutlined from '../icons/ClipboardOutlined';

import './CodeBlock.scss';

const CodeBlock = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className='code-block'>
      <button
        type='button'
        onClick={handleCopy}
        className={isCopied ? 'code-block__btn active' : 'code-block__btn'}
      >
        {isCopied ? <Clipboard /> : <ClipboardOutlined />}
      </button>

      <pre>{code}</pre>
    </div>
  );
};

export default CodeBlock;
