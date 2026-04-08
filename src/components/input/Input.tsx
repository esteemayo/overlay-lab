import './Input.scss';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className='input'
      aria-invalid={props['aria-invalid']}
    />
  );
};

export default Input;
