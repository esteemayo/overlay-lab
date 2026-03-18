import { ButtonProps } from '@/context/transferContext/buttonType';
import './Button.scss';

const Button = ({ type = 'button', label, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} type={type} className={`button ${variant}`}>
      {label}
    </button>
  );
};

export default Button;
