import { ButtonProps } from '@/types/buttonType';
import './Button.scss';

const Button = ({ type = 'button', label, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} type={type} className={`button ${variant}`}>
      {label}
    </button>
  );
};

export default Button;
