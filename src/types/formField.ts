import { ReactElement } from 'react';

type InputLikeElement =
  | ReactElement<React.InputHTMLAttributes<HTMLInputElement>>
  | ReactElement<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
  | ReactElement<React.SelectHTMLAttributes<HTMLSelectElement>>;

export interface FormFieldProps {
  id?: string;
  label: string;
  error?: string;
  required?: boolean;
  children: InputLikeElement;
}
