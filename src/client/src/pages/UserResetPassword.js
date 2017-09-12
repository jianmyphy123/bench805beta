import React, { Component } from 'react';
import { Header, Footer, ResetPasswordForm } from '../components';

class UserResetPassword extends Component {


  componentDidMount() {
    document.title = "bench805.com | Reset Password";
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />


        <ResetPasswordForm history={this.props.history}/>
      </div>

    );

  }

}

export default UserResetPassword;
