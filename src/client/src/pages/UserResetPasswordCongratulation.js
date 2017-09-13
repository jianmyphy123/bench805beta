import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

class UserResetPasswordCongratulation extends Component {


  componentDidMount() {
    document.title = "bench805.com | Reset password. Congratulation";
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
                Your password has been sent successfully.
              </div><br/>
              <div className="mwidth_320">
                <div className="btn_color_fill"><Link to="/login" title="go to main page bench805.com">Ok</Link></div>
              </div>
            </div>
          </section>
        </div>

      </div>

    );

  }

}

export default UserResetPasswordCongratulation;
