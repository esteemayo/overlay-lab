import './UseCaseItem.scss';

const UseCaseItem = ({ text }: { text: string }) => {
  return <li className='use-case-item'>{text}</li>;
};

export default UseCaseItem;
