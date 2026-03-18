export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant: 'cancel' | 'hero' | 'submit';
  onClick?(): void;
}
