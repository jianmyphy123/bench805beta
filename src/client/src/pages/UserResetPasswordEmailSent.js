import React, { Component } from 'react';
import { Header, Footer } from '../components';

class UserResetPasswordEmailSent extends Component {


  componentDidMount() {
    document.title = "bench805.com | Reset password. Email sent";
  }

  render() {

    return (

      <div id="main_container">
        <Header />
        <Footer />


          <div className="page_body padding_top_header">

            <section className="sign_up_section mwidth_680">
              <div className="resolution padding_lr">
                <div className="hn2 ta_c">
                  <h1>Reset password</h1>
                </div>
                <div className="ta_c mwidth_320">
                  <div className="massage_icn icon-icon_main_07"></div>
                  Instructions to reset your password have been sent to you. Please check your email.
                </div>
              </div>
            </section>
          </div>
      </div>

    );

  }

}

export default UserResetPasswordEmailSent;
