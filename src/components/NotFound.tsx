'use client';

import { useRouter } from 'next/navigation';
import ErrorView from './errorView/ErrorView';

const NotFound = () => {
  const router = useRouter();

  return (
    <ErrorView
      code='404'
      title='Overlay not found'
      description="The layer you're trying to access doesn't exist or has
          been removed."
      primaryAction={{
        label: 'Go Home',
        onClick: () => (window.location.href = '/'),
      }}
      secondaryAction={{
        label: 'View Docs',
        onClick: () => (window.location.href = '/docs'),
      }}
      tertiaryAction={{
        label: 'Go Back',
        onClick: router.back,
      }}
    />
  );
};

export default NotFound;
