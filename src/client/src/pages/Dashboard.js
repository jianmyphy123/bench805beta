import React, { Component } from 'react';
import { Header, Footer } from '../components';

class Dashboard extends Component {


  componentDidMount() {
    document.title = "bench805.com | Result";
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />



        <div className="page_body padding_top_header">
          <section className="privacy_policy_section mwidth_680">
            <div className="resolution padding_lr">
              <div className="hn2 ta_c">
                <h1>Dashboard</h1>
              </div>
            </div>
          </section>
        </div>



      </div>

    );

  }

}

export default Dashboard;
