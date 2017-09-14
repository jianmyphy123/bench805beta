import React, { Component } from 'react';
import { Header, Footer, SignupForm } from '../components';

class UserSignup extends Component {

  componentDidMount() {
    document.title = 'bench805.com | Sign Up';
  }

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
