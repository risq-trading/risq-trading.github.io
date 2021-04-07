var e = React.createElement;

var ReferralCodes = { '26pfz': "Since you've been referred by @WolfOfCovid19, you get 50% off your buy-in!" };

var Main = function Main() {

  var referralString = null;
  var email = null;
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  if (urlParams.has('referralCode')) {
    var code = urlParams.get('referralCode');
    referralString = ReferralCodes[code];
  }
  if (urlParams.has('signedUp')) {
    email = window.localStorage.getItem('email');
  }

  var MailchimpSignup = function MailchimpSignup() {
    console.log('<style type="text/css"> #mc_embed_signup { clear: left; } .flex-top { flex: 1; display: flex; flex-direction: column; } @media (min-width: 480px) { .flex-top { flex: 1; display: flex; flex-direction: row; } } .flex-email { flex: 1; } @media (min-width: 480px) { .flex-email { flex: 2; align-self: flex-end; justify-self: flex-end; text-align: right; margin-right: 5px; } } .flex-btn { flex: 1; } @media (min-width: 480px) { .flex-btn { flex: 1; align-self: flex-start; justify-self: flex-start; text-align: left; } } /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style> <div id="mc_embed_signup" style="text-align: center;display: flex;flex:1; align-items: center; justify-content: center;"> <form onsubmit="localStorage.setItem("email", document.getElementById("email").value)" action="https://joinrisq.us1.list-manage.com/subscribe/post?u=be618d1ea001a1907f39dc157&amp;id=b91a092361&LOCATION=' + window.location.href + '" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate> <div id="mc_embed_signup_scroll"> <div class="flex-top" style="text-align: center;"> <div class="flex-email"> <input s id="email" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required> </div> <div class="flex-btn"> <div style="position: absolute; left: -5000px; color: #C200FB" aria-hidden="true"><input type="text" name="b_be618d1ea001a1907f39dc157_b91a092361" tabindex="-1" value=""></div> <div><input type="submit" onclick="localStorage.setItem("email", document.getElementById("email").value)" style="background:linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor:pointer;font-family:Karla;text-align:center;margin:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </div> </div> </form> </div>');
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: '<style type="text/css"> #mc_embed_signup { clear: left; } .flex-top { flex: 1; display: flex; flex-direction: column; } @media (min-width: 480px) { .flex-top { flex: 1; display: flex; flex-direction: row; } } .flex-email { flex: 1; } @media (min-width: 480px) { .flex-email { flex: 2; align-self: flex-end; justify-self: flex-end; text-align: right; margin-right: 5px; } } .flex-btn { flex: 1; } @media (min-width: 480px) { .flex-btn { flex: 1; align-self: flex-start; justify-self: flex-start; text-align: left; } } /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style> <div id="mc_embed_signup" style="text-align: center;display: flex;flex:1; align-items: center; justify-content: center;"> <form  action="https://joinrisq.us1.list-manage.com/subscribe/post?u=be618d1ea001a1907f39dc157&amp;id=b91a092361&LOCATION=' + window.location.href + '"  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate> <div id="mc_embed_signup_scroll"> <div class="flex-top" style="text-align: center;"> <div class="flex-email"> <input s id="email" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required> </div> <div class="flex-btn"> <div style="position: absolute; left: -5000px; color: #C200FB" aria-hidden="true"><input type="text" name="b_be618d1ea001a1907f39dc157_b91a092361" tabindex="-1" value=""></div> <div><input type="submit" onclick="window.localStorage.setItem(' + "'email', document.getElementById('email').value" + ');console.log(' + "'email', document.getElementById('email').value" + ')" style="background:linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor:pointer;font-family:Karla;text-align:center;margin:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </div> </div> </form> </div>' } });
  };

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
          'Fantasy Finance  Bracket'
        )
      ),
      React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center', fontSize: '20px' } },
        React.createElement(
          'span',
          null,
          'The  ',
          React.createElement(
            'strong',
            null,
            ' top 50% of players profit.'
          ),
          ' First place ',
          React.createElement(
            'strong',
            null,
            ' triples their buy-in'
          ),
          '.'
        ),
        React.createElement('br', null),
        React.createElement(
          'a',
          { style: { color: '#C200FB' }, href: 'how.html' },
          'how does it work?'
        )
      ),
      React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center', width: '60%', fontSize: '18px', marginTop: '25px', letterSpacing: '-0.02em' } },
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
        { style: { flex: 1, textAlign: 'center', width: '60%', fontWeight: 'bold' } },
        React.createElement(
          'p',
          null,
          referralString
        )
      ),
      email ? React.createElement(
        'div',
        { style: { flex: 1, textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: '65%', fontSize: 20 } },
        React.createElement(
          'p',
          null,
          'Thanks for signing up! ',
          React.createElement(
            'strong',
            null,
            'For each friend you refer, you reserve $2.50 of in-game credit. '
          ),
          ' Your unique referral link is: ',
          React.createElement(
            'a',
            { href: 'https://joinrisq.com/index.html?ref=' + email },
            'https://joinrisq.com/index.html?ref=',
            email,
            ' '
          ),
          ' ',
          React.createElement('br', null),
          React.createElement(
            'a',
            { style: { fontSize: 14 }, href: 'terms.html' },
            'Referral terms'
          )
        ),
        ' '
      ) : React.createElement(
        'div',
        null,
        React.createElement('div', { style: { marginTop: 20 } }),
        React.createElement(MailchimpSignup, null)
      )
    )
  );
};

var domContainer = document.querySelector('#main');
ReactDOM.render(e(Main), domContainer);

'<style type="text/css"> #mc_embed_signup { clear: left; } .flex-top { flex: 1; display: flex; flex-direction: column; } @media (min-width: 480px) { .flex-top { flex: 1; display: flex; flex-direction: row; } } .flex-email { flex: 1; } @media (min-width: 480px) { .flex-email { flex: 2; align-self: flex-end; justify-self: flex-end; text-align: right; margin-right: 5px; } } .flex-btn { flex: 1; } @media (min-width: 480px) { .flex-btn { flex: 1; align-self: flex-start; justify-self: flex-start; text-align: left; } } /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style> <div id="mc_embed_signup" style="text-align: center;display: flex;flex:1; align-items: center; justify-content: center;"> <form action="https://joinrisq.us1.list-manage.com/subscribe/post?u=be618d1ea001a1907f39dc157&amp;id=b91a092361" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate> <div id="mc_embed_signup_scroll"> <div class="flex-top" style="text-align: center;"> <div class="flex-email"> <input s type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required> </div> <div class="flex-btn"> <div style="position: absolute; left: -5000px; color: #C200FB" aria-hidden="true"><input type="text" name="b_be618d1ea001a1907f39dc157_b91a092361" tabindex="-1" value=""></div> <div><input type="submit" style="background:linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor:pointer;font-family:Karla;text-align:center;margin:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </div> </div> </form> </div>';