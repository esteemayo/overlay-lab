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
  const titleId = 'error-view-title';
  const descId = 'error-view-description';

  return (
    <section
      className='error-view'
      aria-labelledby={titleId}
      aria-describedby={descId}
      role='alert'
    >
      <div className='error-view__container'>
        {code && (
          <span
            className='error-view__code'
            aria-label={`Error code ${code}`}
          >
            {code}
          </span>
        )}

        <h1 id={titleId} className='error-view__title'>
          {title}
        </h1>

        <p id={descId} className='error-view__desc'>{description}</p>

        {(primaryAction || secondaryAction || tertiaryAction) && (
          <div className='error-view__actions' role='group' aria-label='Error actions'>
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
        )}

        {meta && <span className='error-view__meta'>{meta}</span>}
      </div>
    </section>
  );
};

export default ErrorView;
