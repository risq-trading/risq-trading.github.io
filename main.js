var e = React.createElement;

var Main = function Main() {
  return React.createElement(
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
          flex: 1,
          textAlign: 'center',
          background: 'linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        } },
      React.createElement(
        'h2',
        null,
        'Risq'
      )
    ),
    React.createElement(
      'div',
      { style: { flex: 1, textAlign: 'center' } },
      React.createElement(
        'h1',
        null,
        'fantasy finance bracket'
      )
    ),
    React.createElement(
      'div',
      { style: { flex: 1, textAlign: 'center' } },
      React.createElement(
        'a',
        { style: { color: '#C200FB' }, href: 'google.com' },
        'how does it work?'
      )
    ),
    React.createElement(
      'div',
      { style: { flex: 1, textAlign: 'center', width: '350px' } },
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
    )
  );
};

var domContainer = document.querySelector('#main');
ReactDOM.render(e(Main), domContainer);