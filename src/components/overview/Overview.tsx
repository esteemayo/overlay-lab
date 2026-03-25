import './Overview.scss';

const Overview = () => {
  return (
    <section className='overview'>
      <div className='overview__container'>
        <h2 className='overview__heading'>
          Headless Popup System for React and Next.js
        </h2>

        <p className='overview__desc'>
          OverlayLab is a headless popup system built with React and Next.js. It
          provides a scalable way to manage modals, drawers, and overlays using
          a stack-based architecture.
        </p>

        <p className='overview__subdesc'>
          Unlike traditional modal implementations, OverlayLab supports multiple
          overlays, built-in accessibility features like focus trapping, and a
          composable API using compound components.
        </p>
      </div>
    </section>
  );
};

export default Overview;
