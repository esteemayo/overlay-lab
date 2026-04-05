'use client';

import { useState } from 'react';

import Clipboard from '../icons/Clipboard';
import ClipboardOutlined from '../icons/ClipboardOutlined';

import './CopyButton.scss';

const CopyButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API not supported');
      }

      await navigator.clipboard.writeText(code);

      setIsCopied(true);
      setStatus('success');

      setTimeout(() => {
        setStatus('idle');
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.log('Copy failed:', err);

      setStatus('error');
      fallBackCopy(code);
    }
  };

  const fallBackCopy = (text: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;

      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand('copy');
        setStatus('success');
      } catch (err) {
        setStatus('error');
      }

      document.removeChild(textarea);

      setIsCopied(true);
      setStatus('success');

      setTimeout(() => {
        setStatus('idle');
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.log('Fallback copy failed:', err);
      setStatus('error');
    }
  };

  return (
    <div className='copy-button'>
      {isCopied && (
        <span className='copy-button__alert' role='status' aria-live='polite'>
          {status === 'success' && 'Copied'}
          {status === 'error' && 'Failed to copy'}
        </span>
      )}

      <button
        type='button'
        onClick={handleCopy}
        className='copy-button__btn'
        title={!isCopied ? 'Copy Code' : ''}
        aria-label={
          status === 'success'
            ? 'Code copied'
            : status === 'error'
              ? 'Copy failed'
              : 'Copy code to clipboard'
        }
      >
        <span aria-hidden='true'>
          {isCopied ? <Clipboard /> : <ClipboardOutlined />}
        </span>
      </button>
    </div>
  );
};

export default CopyButton;
