import DocsContent from './DocsContent';
import DocsSidebar from './DocsSidebar';

import './Docs.scss';

const DocsLayout = () => {
  return (
    <div className='docs-layout'>
      <div className='docs-container'>
        <DocsSidebar />
        <DocsContent />
      </div>
    </div>
  );
};

export default DocsLayout;
