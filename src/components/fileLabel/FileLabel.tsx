import { FileLabelProps } from '@/types/fileLabelType';
import './FileLabel.scss';

const FileLabel = ({ label, titleId }: FileLabelProps) => {
  if (!label) return null;

  return (
    <span id={titleId ?? 'code-file-label'} className='file-label'>
      File: {label}
    </span>
  );
};

export default FileLabel;
