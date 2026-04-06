type VariantType =
  | 'cancel'
  | 'main'
  | 'secondary'
  | 'submit'
  | 'outlined'
  | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant: VariantType;
  onClick?(): void;
}
