import type { Metadata } from 'next';
import DocsLayout from '@/components/docs/DocsLayout';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Learn how OverlayLab works: architecture, stack system, accessibility, and usage.',
};

const Docs = () => {
  return <DocsLayout />;
};

export default Docs;
