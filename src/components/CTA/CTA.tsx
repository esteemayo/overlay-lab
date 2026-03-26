import Link from 'next/link';
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

const CTA = () => {
  return (
    <section className='cta'>
      <div className='cta__container'>
        <h2 className='cta__heading'>
          Understand How OverlayLab Works Under the Hood
        </h2>

        <p className='cta__desc'>
          Explore the architecture, stack system, and accessibility patterns
          used to build a scalable popup system from scratch.
        </p>

        <CodePreview code={code} />

        <div className='cta__actions'>
          <Link href='/docs' className='cta__btn cta__btn--primary'>
            Read documentation
          </Link>

          <a
            href='https://github.com/esteemayo/overlay-lab'
            target='_blank'
            rel='noopener noreferrer'
            className='cta__btn cta__btn--secondary'
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
