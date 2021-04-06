const e = React.createElement;


const ReferralCodes = {'26pfz': "Since you've been referred by @WolfOfCovid19, you get 50% off your buy-in!"}

const Main = () => {

  let referralString = null;
  let email = null;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('referralCode')) {
    const code = urlParams.get('referralCode')
    referralString = ReferralCodes[code];
  }
  if (urlParams.has('signedUp')) {
    email = window.localStorage.getItem('email');
  }

  

  const MailchimpSignup = () => {
    console.log('<style type="text/css"> #mc_embed_signup { clear: left; } .flex-top { flex: 1; display: flex; flex-direction: column; } @media (min-width: 480px) { .flex-top { flex: 1; display: flex; flex-direction: row; } } .flex-email { flex: 1; } @media (min-width: 480px) { .flex-email { flex: 2; align-self: flex-end; justify-self: flex-end; text-align: right; margin-right: 5px; } } .flex-btn { flex: 1; } @media (min-width: 480px) { .flex-btn { flex: 1; align-self: flex-start; justify-self: flex-start; text-align: left; } } /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style> <div id="mc_embed_signup" style="text-align: center;display: flex;flex:1; align-items: center; justify-content: center;"> <form onsubmit="localStorage.setItem("email", document.getElementById("email").value)" action="https://joinrisq.us1.list-manage.com/subscribe/post?u=be618d1ea001a1907f39dc157&amp;id=b91a092361&LOCATION=' + window.location.href + '" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate> <div id="mc_embed_signup_scroll"> <div class="flex-top" style="text-align: center;"> <div class="flex-email"> <input s id="email" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required> </div> <div class="flex-btn"> <div style="position: absolute; left: -5000px; color: #C200FB" aria-hidden="true"><input type="text" name="b_be618d1ea001a1907f39dc157_b91a092361" tabindex="-1" value=""></div> <div><input type="submit" onclick="localStorage.setItem("email", document.getElementById("email").value)" style="background:linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor:pointer;font-family:Karla;text-align:center;margin:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </div> </div> </form> </div>');
    return (
    <div dangerouslySetInnerHTML={{__html: '<style type="text/css"> #mc_embed_signup { clear: left; } .flex-top { flex: 1; display: flex; flex-direction: column; } @media (min-width: 480px) { .flex-top { flex: 1; display: flex; flex-direction: row; } } .flex-email { flex: 1; } @media (min-width: 480px) { .flex-email { flex: 2; align-self: flex-end; justify-self: flex-end; text-align: right; margin-right: 5px; } } .flex-btn { flex: 1; } @media (min-width: 480px) { .flex-btn { flex: 1; align-self: flex-start; justify-self: flex-start; text-align: left; } } /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style> <div id="mc_embed_signup" style="text-align: center;display: flex;flex:1; align-items: center; justify-content: center;"> <form  action="https://joinrisq.us1.list-manage.com/subscribe/post?u=be618d1ea001a1907f39dc157&amp;id=b91a092361&LOCATION=' + window.location.href + '"  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate> <div id="mc_embed_signup_scroll"> <div class="flex-top" style="text-align: center;"> <div class="flex-email"> <input s id="email" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required> </div> <div class="flex-btn"> <div style="position: absolute; left: -5000px; color: #C200FB" aria-hidden="true"><input type="text" name="b_be618d1ea001a1907f39dc157_b91a092361" tabindex="-1" value=""></div> <div><input type="submit" onclick="window.localStorage.setItem(' + "'email', document.getElementById('email').value" + ');console.log(' + "'email', document.getElementById('email').value" + ')" style="background:linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor:pointer;font-family:Karla;text-align:center;margin:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </div> </div> </form> </div>'}} />
    )
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
      
      {email ? <div style={{flex: 1, textAlign: 'center', width: '60%'}}><p>
          Thanks for signing up! <strong>If you refer a friend, you get $2.50 of in-game credit. </strong> Here's your unique referral link: <a>https://joinrisq.com/index.html?ref={email}  </a>
        </p> </div>: <div>
        <div style={{marginTop: 20}}></div>
        <MailchimpSignup/>
      </div>}


      
    </div>
    </div>
  );
};

const domContainer = document.querySelector('#main');
ReactDOM.render(e(Main), domContainer);

'<style type="text/css"> #mc_embed_signup { clear: left; } .flex-top { flex: 1; display: flex; flex-direction: column; } @media (min-width: 480px) { .flex-top { flex: 1; display: flex; flex-direction: row; } } .flex-email { flex: 1; } @media (min-width: 480px) { .flex-email { flex: 2; align-self: flex-end; justify-self: flex-end; text-align: right; margin-right: 5px; } } .flex-btn { flex: 1; } @media (min-width: 480px) { .flex-btn { flex: 1; align-self: flex-start; justify-self: flex-start; text-align: left; } } /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */ </style> <div id="mc_embed_signup" style="text-align: center;display: flex;flex:1; align-items: center; justify-content: center;"> <form action="https://joinrisq.us1.list-manage.com/subscribe/post?u=be618d1ea001a1907f39dc157&amp;id=b91a092361" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate> <div id="mc_embed_signup_scroll"> <div class="flex-top" style="text-align: center;"> <div class="flex-email"> <input s type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required> </div> <div class="flex-btn"> <div style="position: absolute; left: -5000px; color: #C200FB" aria-hidden="true"><input type="text" name="b_be618d1ea001a1907f39dc157_b91a092361" tabindex="-1" value=""></div> <div><input type="submit" style="background:linear-gradient(80.39deg, #C200FB -1.98%, #FF6F59 95.31%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor:pointer;font-family:Karla;text-align:center;margin:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </div> </div> </form> </div>'
