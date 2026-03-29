'use client';

import { useState } from 'react';

import Clipboard from '../icons/Clipboard';
import ClipboardOutlined from '../icons/ClipboardOutlined';

import './CopyButton.scss';

const CopyButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className='copy-button'>
      {isCopied && <span className='copy-button__alert'>Copied</span>}

      <button
        type='button'
        onClick={handleCopy}
        className='copy-button__btn'
        title={!isCopied ? 'Copy Code' : ''}
      >
        {isCopied ? <Clipboard /> : <ClipboardOutlined />}
      </button>
    </div>
  );
};

export default CopyButton;
