import './UseCaseItem.scss';

const UseCaseItem = ({ text }: { text: string }) => {
  return (
    <li className='use-case-item' role='listitem'>
      {text}
    </li>
  );
};

export default UseCaseItem;
