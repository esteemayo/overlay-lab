export interface ErrorViewProps {
  code?: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick(): void;
  };
  secondaryAction?: {
    label: string;
    onClick(): void;
  };
  tertiaryAction?: {
    label: string;
    onClick(): void;
  };
  meta?: string;
}
