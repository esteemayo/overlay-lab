import Button from '../button/Button';
import { ErrorViewProps } from '@/types/errorViewType';

import './ErrorView.scss';

const ErrorView = ({
  code,
  title,
  description,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  meta,
}: ErrorViewProps) => {
  return (
    <section className='error-view'>
      <div className='error-view__container'>
        {code && <span className='error-view__code'>{code}</span>}

        <h1 className='error-view__title'>{title}</h1>

        <p className='error-view__desc'>{description}</p>

        <div className='error-view__actions'>
          {primaryAction && (
            <Button
              label={primaryAction.label}
              variant='secondary'
              onClick={primaryAction.onClick}
            />
          )}

          {secondaryAction && (
            <Button
              label={secondaryAction.label}
              variant='outlined'
              onClick={secondaryAction.onClick}
            />
          )}

          {tertiaryAction && (
            <Button
              label={tertiaryAction.label}
              variant='ghost'
              onClick={tertiaryAction.onClick}
            />
          )}
        </div>

        {meta && <span className='error-view__meta'>{meta}</span>}
      </div>
    </section>
  );
};

export default ErrorView;
