import { FormFieldProps } from '@/types/form.field.type';
import './FormField.scss';

const FormField = ({ id, label, error, children }: FormFieldProps) => {
  return (
    <div className='form-field'>
      <label htmlFor={id} className='form-field__label'>
        {label}
      </label>
      {children}
      {error && <span className='form-field__error'>{error}</span>}
    </div>
  );
};

export default FormField;
