import React, { Component } from 'react';
import { Header, Footer, LoginForm } from '../components';

class UserLogin extends Component {

  componentDidMount() {
    document.title = 'bench805.com | Log In';
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />
        <LoginForm history={this.props.history}/>

      </div>

    );

  }

}

export default UserLogin;
