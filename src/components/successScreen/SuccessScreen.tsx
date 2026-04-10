import './SuccessScreen.scss';

const SuccessScreen = () => {
  return (
    <section
      className='success-screen fade-in'
      aria-labelledby='success-screen-heading'
      aria-describedby='success-screen-desc'
    >
      <div className='success-screen__wrapper'>
        <h3
          id='success-screen-heading'
          className='success-screen__wrapper--heading'
        >
          Transfer Successful 🎉
        </h3>

        <p
          id='success-screen-desc'
          className='success-screen__wrapper--desc'
        >
          Your transaction was processed successfully.
        </p>
      </div>
    </section>
  );
};

export default SuccessScreen;
