import DocsContent from './DocsContent';
import DocsSidebar from './DocsSidebar';

import './Docs.scss';

const DocsLayout = () => {
  return (
    <div className='docs-layout'>
      <DocsSidebar />
      <DocsContent />
    </div>
  );
};

export default DocsLayout;
