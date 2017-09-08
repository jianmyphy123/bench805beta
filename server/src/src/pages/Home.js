import React, { Component } from 'react';
import { Header, Landing, Footer } from '../components';

class Home extends Component {

  render() {

    return (

      <div id="main_container">
        <Header />
        <Landing />
        <Footer />
      </div>

    );

  }

}

export default Home;
