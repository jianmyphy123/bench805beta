import React, { Component } from 'react';

class Header extends Component {

  render() {

    return (

      <header className="main_header">
        <div className="resolution">
          <div className="logo"><a href="/" title="bench805.com"></a></div>
          <div className="header_right_tool">

            <div className="btn_user_tool_vis"></div>
            <div className="usertool align_c">
              <div className="h_login_box">
                <div className="login_btn"><a href="/users/login">Log In</a></div>
                <div className="sign_up_btn"><a href="/users/signup">Sign Up</a></div>
              </div>
            </div>
            <div className="btn_menu_vis"></div>
            <nav className="header_menu">
              <div><a href="/about" title="bench805.com | About">About</a></div>
              <div><a href="mailto:info@bench805.com?subject=Feedback" target="_blank" title="bench805.com | Get in Touch">Get in Touch</a></div>
            </nav>
          </div>
        </div>
      </header>
    );

  }

}

export default Header;
