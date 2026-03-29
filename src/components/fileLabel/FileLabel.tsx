import './FileLabel.scss';

const FileLabel = ({ label }: { label?: string }) => {
  return <span className='file-label'>{label}</span>;
};

export default FileLabel;
