import './CodeBlock.scss';

const CodeBlock = ({ highlighted }: { highlighted: string }) => {
  return (
    <div className='code-block'>
      <div
        className='code-block__dark'
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
};

export default CodeBlock;
