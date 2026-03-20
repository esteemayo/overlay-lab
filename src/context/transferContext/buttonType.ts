export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant: 'cancel' | 'main' | 'submit';
  onClick?(): void;
}
