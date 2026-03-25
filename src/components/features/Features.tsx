import './Features.scss';

const features = [
  {
    id: 'stack-based-state-management',
    title: 'Stack-Based State Management',
    desc: 'Manage multiple popups using a centralized stack instead of scattered boolean states.',
  },
  {
    id: 'headless-architecture',
    title: 'Headless Architecture',
    desc: 'Fully customizable UI with no enforced styles, giving you complete design control',
  },
  {
    id: 'accessible-by-default',
    title: 'Accessible by Default',
    desc: 'Built-in focus trapping, keyboard navigation, and ARIA-compliant dialog semantics.',
  },
  {
    id: 'composable-api',
    title: 'Composable API',
    desc: 'Clean and scalable API using compound components for better developer experience.',
  },
  {
    id: 'overlay-scroll-handling',
    title: 'Overlay & Scroll Handling',
    desc: 'Handles outside clicks, escape key, and scroll locking automatically.',
  },
  {
    id: 'multiple-variants',
    title: 'Multiple Variants',
    desc: 'Supports modals, drawers, and responsive sidebars with shared logic.',
  },
];

const Features = () => {
  return (
    <section className='features'>
      <div className='features__container'>
        <h2 className='features__heading'>Features</h2>

        <ul className='features__grid' role='list'>
          {features.map((feature) => {
            const { id, desc, title } = feature;

            return (
              <li
                key={id}
                className='features__item'
                role='listitem'
                tabIndex={1}
              >
                <article className='features__wrapper'>
                  <h3 className='features__wrapper--title'>{title}</h3>
                  <p className='features__wrapper--desc'>{desc}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
