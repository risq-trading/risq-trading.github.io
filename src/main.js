const e = React.createElement;

const ReferralCodes = {'26pfz': "Since you've been referred by @WolfOfCovid19, you get 50% off your buy-in!"}

const Main = () => {

  let referralString = null;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('referralCode')) {
    const code = urlParams.get('referralCode')
    referralString = ReferralCodes[code];
  }


  return (
    <div>
   
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
          textAlign: 'center',
          flex: 1,
          background:
            'linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%)',
          WebkitMaskImage: 'linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',     
          marginBottom: 20,
          width: 80,
        }}>
        <h4 style={{display: 'inline', marginBottom: 100}}><span>Risq</span></h4>
      </div>
      <div style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>
        <h2 style={{fontWeight: 'bold', letterSpacing:'-0.04em'}}>Fantasy Finance  Bracket</h2>
      </div>
      <div style={{flex: 1, textAlign: 'center', fontSize: '20px'}}>
        <span>
          The  <strong> top 50% of players profit.</strong> First place <strong> triples their buy-in</strong>.
        </span>
        <br></br>
        <a style={{color: '#C200FB',}} href="how.html">
          how does it work?
        </a>
      </div>
      <div style={{flex: 1, textAlign: 'center', width: '60%', fontSize: '18px', marginTop: '25px', letterSpacing:'-0.02em'}}>
        <p>
          We're working hard to open up to everyone, but anyone can sign up for
          Risq with an invite.{' '}
          <strong>Enter your email for a chance at an invite.</strong>
        </p>
      </div>
      {referralString && <div style={{flex: 1, textAlign: 'center', width: '60%', fontWeight: 'bold'}}>
        <p>
          {referralString}
        </p>
      </div>}
    </div>
    </div>
  );
};

const domContainer = document.querySelector('#main');
ReactDOM.render(e(Main), domContainer);
