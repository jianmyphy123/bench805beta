import React, { Component } from 'react';
import { Header, Footer, ResetPasswordSetForm } from '../components';

class UserResetPasswordSet extends Component {


  componentDidMount() {
    document.title = "bench805.com | Reset password. Fields";
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />


        <ResetPasswordSetForm token={this.props.match.params.token} history={this.props.history}/>
      </div>

    );

  }

}

export default UserResetPasswordSet;
