import './SuccessScreen.scss';

const SuccessScreen = () => {
  return (
    <div className='success-screen fade-in'>
      <div className='success-screen__wrapper'>
        <h3 className='success-screen__wrapper--heading'>
          Transfer Successful 🎉
        </h3>

        <p className='success-screen__wrapper--desc'>
          Your transaction was processed successfully.
        </p>
      </div>
    </div>
  );
};

export default SuccessScreen;
