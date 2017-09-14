import React, { Component } from 'react';
import { Header, Footer } from '../components';

class AdminViewTable extends Component {


  componentDidMount() {
    document.title = "bench805.com | Amin. View Table";
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />


      </div>

    );

  }

}

export default AdminViewTable;
