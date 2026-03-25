import './Docs.scss';

const Docs = () => {
  return (
    <section id='docs' className='docs'>
      <div className='docs__container'>
        <h2 className='docs__heading'>Documentation</h2>

        <p className='docs__desc'>
          Explore the architecture behind OverlayLab, including stack-based
          state management, popup composition, accessibility patterns, and
          overlay behavior.
        </p>
      </div>
    </section>
  );
};

export default Docs;
