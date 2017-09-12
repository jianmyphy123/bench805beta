import React, { Component } from 'react';
import { Header, Landing, Footer } from '../components';

class Home extends Component {


  componentDidMount() {
    document.title = "bench805.com | Purchase Price Allocations Visualized Through Benchmarking";

  }

  render() {

    return (

      <div id="main_container">
        <Header headerClass="main_header"/>
        <Landing />
        <Footer />
      </div>

    );

  }

}

export default Home;
