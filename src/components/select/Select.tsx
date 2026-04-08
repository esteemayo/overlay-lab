import './Select.scss';

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      {...props}
      className='select'
      aria-invalid={props['aria-invalid']}
    />
  );
};

export default Select;
