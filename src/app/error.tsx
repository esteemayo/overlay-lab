'use client';

import { useEffect } from 'react';

import { ErrorProps } from '@/types/errorType';
import ErrorView from '@/components/errorView/ErrorView';

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorView
      code='Error'
      title='Something broke in this layer'
      description='An unexpected issue occurred while rendering this part of the interface.'
      primaryAction={{
        label: 'Try Again',
        onClick: reset,
      }}
      secondaryAction={{
        label: 'Reload Page',
        onClick: () => window.location.reload(),
      }}
      meta={error?.digest ? `Ref: ${error.digest}` : undefined}
    />
  );
};

export default Error;
