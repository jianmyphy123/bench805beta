import React, { Component } from 'react';
import { Header, Footer } from '../components';

class UserSignupConfirmation extends Component {

  render() {
    return (

      <div id="main_container">
        <Header />
        <Footer />



        <div className="page_body padding_top_header">

          <section className="sign_up_section mwidth_680">
            <div className="resolution padding_lr">
              <div className="hn2 ta_c">
                <h1>Sign Up confirmation</h1>
              </div>
              <div className="ta_c mwidth_320">
                <div className="massage_icn icon-icon_main_07"></div>
                For your security and privacy confirmation email sent to your mailbox.
              </div>
            </div>
          </section>
        </div>

      </div>


    );
  }

}

export default UserSignupConfirmation;
