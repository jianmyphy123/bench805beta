import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  UserLogin, UserSignup, UserSignupConfirmation, UserSignupCongratulation, ActivateAccount,
  About, TermsOfService, PrivacyPolicy
} from './pages';

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
