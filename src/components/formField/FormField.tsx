import { cloneElement } from 'react';
import { FormFieldProps } from '@/types/formField';

import './FormField.scss';

const FormField = ({ id, label, error, required, children }: FormFieldProps) => {
  const errorId = `${id}-error`;
  const descriptionId = error ? `${id}-help ${errorId}` : undefined;

  const child = cloneElement(children as React.ReactElement, {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': descriptionId,
    ...(required ? { required: true } : {}),
  });

  return (
    <div className='form-field'>
      <label htmlFor={id} className='form-field__label'>
        {label}
        {required && (
          <span className="visually-hidden"> (required)</span>
        )}
      </label>

      {child}

      {error && <span
        id={errorId}
        className='form-field__error'
        role='alert'
      >
        {error}
      </span>}
    </div>
  );
};

export default FormField;
