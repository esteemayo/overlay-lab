import './Input.scss';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className='input' />;
};

export default Input;
