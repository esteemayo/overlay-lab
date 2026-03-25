import './UseCases.scss';

const USE_CASES = [
  { id: 1, text: 'Financial applications (transfer confirmations, receipts)' },
  { id: 2, text: 'Dashboard interfaces (sidebars, filters, drawers)' },
  { id: 3, text: 'Authentication flows (login, signup, OTP modals)' },
  { id: 4, text: 'E-commerce interactions (cart, checkout, quick views)' },
  { id: 5, text: 'Complex multi-step forms and workflows' },
];

const UseCases = () => {
  return (
    <section className='use-cases'>
      <div className='use-cases__container'>
        <h2 className='use-cases__heading'>Use Cases</h2>

        <p className='use-cases__desc'>
          OverlayLab can be used to power real-world UI interactions across
          different types of applications.
        </p>

        <ul className='use-cases__list' role='list'>
          {USE_CASES.map(({ id, text }) => (
            <li key={id} className='use-cases__item' role='listitem'>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UseCases;
