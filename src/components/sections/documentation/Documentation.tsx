import './Documentation.scss';

const Documentation = () => {
  return (
    <section
      id='docs'
      className='documentation'
      aria-labelledby='documentation-heading'
      aria-describedby='documentation-desc'
    >
      <div className='documentation__container'>
        <h2 id='documentation-heading' className='documentation__heading'>
          Documentation
        </h2>

        <p id='documentation-desc' className='documentation__desc'>
          Learn how OverlayLab works.
        </p>

        <ul className='documentation__list'>
          <li className='documentation__list--item'>
            Stack-based state management
          </li>

          <li className='documentation__list--item'>
            Popup composition patterns
          </li>

          <li className='documentation__list--item'>Accessibility handling</li>

          <li className='documentation__list--item'>Overlay behavior</li>
        </ul>
      </div>
    </section>
  );
};

export default Documentation;
