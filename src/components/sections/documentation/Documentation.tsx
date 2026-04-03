import './Documentation.scss';

const Documentation = () => {
  return (
    <section id='docs' className='documentation'>
      <div className='documentation__container'>
        <h2 className='documentation__heading'>Documentation</h2>

        <p className='documentation__desc'>
          Explore the architecture behind OverlayLab, including stack-based
          state management, popup composition, accessibility patterns, and
          overlay behavior.
        </p>
      </div>
    </section>
  );
};

export default Documentation;
