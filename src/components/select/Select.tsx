import './Select.scss';

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return <select {...props} className='select' />;
};

export default Select;
