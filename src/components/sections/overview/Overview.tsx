import './Overview.scss';

const Overview = () => {
  return (
    <section className='overview' aria-labelledby='overview-heading'>
      <div className='overview__container'>
        <h2 id='overview-heading' className='overview__heading'>
          Headless Popup System
        </h2>

        <p className='overview__desc'>
          OverlayLab provides a scalable way to manage modals, drawers, and
          overlays using a stack-based architecture.
        </p>

        <ul className='overview__list'>
          <li className='overview__list--item'>
            Supports modals, drawers, and overlays
          </li>

          <li className='overview__list--item'>Stack-based state management</li>

          <li className='overview__list--item'>
            Focus trapping and accessiblity support
          </li>

          <li className='overview__list--item'>
            Composable API with compound components
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;
