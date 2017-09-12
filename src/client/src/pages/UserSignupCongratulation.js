import React, { Component } from 'react';
import { Header, Footer } from '../components';

class UserSignupCongratulation extends Component {

  gotoLogin(e) {
    e.preventDefault();

    this.props.history.push('/login');
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
                <h1>CONGRATULATIONS!</h1>
              </div>
              <div className="ta_c mwidth_320">
                <div className="massage_icn icon-icon_main_07"></div>
                Your account has been activated.
              </div><br/>
              <div className="mwidth_320">
                <div className="btn_color_fill"><a onClick={this.gotoLogin.bind(this)} title="go to login page">Login</a></div>
              </div>
            </div>
          </section>
        </div>

      </div>



    );
  }

}

export default UserSignupCongratulation;
