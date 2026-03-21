import type { Metadata } from 'next';
import DocsLayout from '@/components/docs/DocsLayout';

export const metadata: Metadata = {
  title: 'Documentation | OverlayLab',
};

const Docs = () => {
  return <DocsLayout />;
};

export default Docs;
