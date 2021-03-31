const e = React.createElement;

const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
      }}>
      <div
        style={{
          flex: 1,
          textAlign: 'center',
          background:
            'linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        <h2>Risq</h2>
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        <h1>fantasy finance bracket</h1>
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        <a style={{color: '#C200FB'}} href="google.com">
          how does it work?
        </a>
      </div>
      <div style={{flex: 1, textAlign: 'center', width: '350px'}}>
        <p>
          We're working hard to open up to everyone, but anyone can sign up for
          Risq with an invite.{' '}
          <strong>Enter your email for a chance at an invite.</strong>
        </p>
      </div>
    </div>
  );
};

const domContainer = document.querySelector('#main');
ReactDOM.render(e(Main), domContainer);
