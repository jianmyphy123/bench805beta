import React, { Component } from 'react';
import { Header, Footer, SignupForm } from '../components';

class UserSignup extends Component {

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />
        <SignupForm history={this.props.history}/>

      </div>

    );

  }

}

export default UserSignup;
