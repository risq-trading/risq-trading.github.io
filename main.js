var e = React.createElement;

var ReferralCodes = { '26pfz': "Since you've been referred by @WolfOfCovid19, you get 50% off your buy-in!" };

var Main = function Main() {

  var referralString = null;
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  if (urlParams.has('referralCode')) {
    var code = urlParams.get('referralCode');
    referralString = ReferralCodes[code];
  }

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'column'
        } },
      React.createElement(
        'div',
        {
          style: {
            textAlign: 'center',
            flex: 1,
            background: 'linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%)',
            WebkitMaskImage: 'linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 20,
            width: 80
          } },
        React.createElement(
          'h4',
          { style: { display: 'inline', marginBottom: 100 } },
          React.createElement(
            'span',
            null,
            'Risq'
          )
        )
      ),
      React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center', fontWeight: 'bold' } },
        React.createElement(
          'h2',
          { style: { fontWeight: 'bold', letterSpacing: '-0.04em' } },
          'Fantasy finance  bracket'
        )
      ),
      React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center' } },
        React.createElement(
          'a',
          { style: { color: '#C200FB' }, href: 'how.html' },
          'how does it work?'
        )
      ),
      React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center', width: '60%', fontSize: '18px', marginTop: '30px', letterSpacing: '-0.02em' } },
        React.createElement(
          'p',
          null,
          'We\'re working hard to open up to everyone, but anyone can sign up for Risq with an invite.',
          ' ',
          React.createElement(
            'strong',
            null,
            'Enter your email for a chance at an invite.'
          )
        )
      ),
      referralString && React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center', width: '60%' } },
        React.createElement(
          'p',
          null,
          referralString
        )
      )
    )
  );
};

var domContainer = document.querySelector('#main');
ReactDOM.render(e(Main), domContainer);