import './CodePreviewDots.scss';

const CodePreviewDots = () => {
  return (
    <div className='code-preview-dots' aria-hidden='true'>
      <span className='code-preview-dots__dot red' />
      <span className='code-preview-dots__dot yellow' />
      <span className='code-preview-dots__dot green' />
    </div>
  );
};

export default CodePreviewDots;
