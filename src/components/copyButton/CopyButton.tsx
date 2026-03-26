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
    <button type='button' onClick={handleCopy} className='copy-button'>
      {isCopied ? <Clipboard /> : <ClipboardOutlined />}
    </button>
  );
};

export default CopyButton;
