import type { Metadata } from 'next';
import NotFound from '@/components/NotFound';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'The page you are looking for does not exist. Explore OverlayLab documentation and components for accessibility popup systems built with React and Next.js.',
};

const NofFoundPage = () => {
  return <NotFound />;
};

export default NofFoundPage;
