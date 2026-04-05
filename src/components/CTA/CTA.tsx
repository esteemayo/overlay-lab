import Link from 'next/link';

import { highlightCode } from '@/lib/highlight';
import CodePreview from '../codePreview/CodePreview';

import './CTA.scss';

const code = `<Popup>
  <Popup.Trigger>Open</Popup.Trigger>

  <Popup.Content>
    <Popup.Header>
      <Popup.Title>Transfer</Popup.Title>
    </Popup.Header>
  </Popup.Content>
</Popup>`;

const CTA = async () => {
  const highlighted = await highlightCode(code);

  return (
    <section
      className='cta'
      aria-labelledby='cta-heading'
      aria-describedby='cta-desc'
    >
      <div className='cta__container'>
        <h2 id='cta-heading' className='cta__heading'>
          Understand How OverlayLab Works Under the Hood
        </h2>

        <p id='cta-desc' className='cta__desc'>
          Explore the architecture, stack system, and accessibility patterns
          used to build a scalable popup system from scratch.
        </p>

        <div
          className='cta__code'
          role='region'
          aria-labelledby='code-example-heading'
        >
          <h3 id='code-example-heading' className='visually-hidden'>
            Popup usage example
          </h3>

          <CodePreview code={code} highlighted={highlighted} />
        </div>

        <div className='cta__actions'>
          <Link
            href='/docs'
            className='cta__btn cta__btn--primary'
            aria-label='Read OverlayLab documentation'
          >
            Read documentation
          </Link>

          <a
            href='https://github.com/esteemayo/overlay-lab'
            target='_blank'
            rel='noopener noreferrer'
            className='cta__btn cta__btn--secondary'
            aria-label='View OverlayLab source code on GitHub (opens in a new tab)'
          >
            View source code
          </a>
        </div>

        <p className='cta__meta'>
          Built from first principles using React, Next.js, and TypeScript
        </p>
      </div>
    </section>
  );
};

export default CTA;
