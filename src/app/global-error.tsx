'use client';

import { useEffect } from 'react';

import { ErrorProps } from '@/types/errorType';
import ErrorView from '@/components/errorView/ErrorView';

const GlobalError = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorView
          code='System Error'
          title='Application failed to initialize'
          description='OverlayLab could not complete rendering due to a critical runtime issue.'
          primaryAction={{
            label: 'Restart App',
            onClick: reset,
          }}
          secondaryAction={{
            label: 'Go Home',
            onClick: () => (window.location.href = '/'),
          }}
        />
      </body>
    </html>
  );
};

export default GlobalError;
