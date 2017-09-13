import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  UserLogin, UserSignup, UserSignupConfirmation, UserSignupCongratulation, ActivateAccount,
  About, TermsOfService, PrivacyPolicy,
  Dashboard, Admin,
  UserResetPassword, UserResetPasswordEmailSent, UserResetPasswordSet, UserResetPasswordCongratulation
} from './pages';
import requireAuth from './utils/requireAuth';
import requireAdmin from './utils/requireAdmin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={UserLogin} />
            <Route exact path='/signup' component={UserSignup} />
            <Route path='/signup/confirmation' component={UserSignupConfirmation} />
            <Route path='/signup/congratulation' component={UserSignupCongratulation} />
            <Route path='/activate/:token' component={ActivateAccount} />
            <Route path='/about' component={About} />
            <Route path='/termsofservice' component={TermsOfService} />
            <Route path='/privacypolicy' component={PrivacyPolicy} />
            <Route path='/dashboard' component={requireAuth(Dashboard)} />
            <Route path='/admin' component={requireAdmin(Admin)} />
            <Route exact path='/resetpassword' component={UserResetPassword} />
            <Route exact path='/resetpassword/emailsent' component={UserResetPasswordEmailSent} />
            <Route exact path='/resetpassword/congratulation' component={UserResetPasswordCongratulation} />
            <Route path='/resetpassword/:token' component={UserResetPasswordSet} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
