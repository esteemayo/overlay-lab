import type { Metadata } from 'next';
import DocsClient from '@/components/docs/DocsClient';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Learn how OverlayLab works: architecture, stack system, accessibility, and usage.',
};

const Docs = () => {
  return <DocsClient />;
};

export default Docs;
