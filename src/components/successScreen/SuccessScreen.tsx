import './SuccessScreen.scss';

const SuccessScreen = () => {
  return (
    <div className='success fade-in'>
      <div className='success-screen__wrapper'>
        <h3>Transfer Successful 🎉</h3>
        <p>Your transaction was processed successfully.</p>
      </div>
    </div>
  );
};

export default SuccessScreen;
