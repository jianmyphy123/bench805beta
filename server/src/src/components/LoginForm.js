import React, { Component } from 'react';

class LoginForm extends Component {

  render() {

    return (

      <div className="page_body padding_top_header">
        <section className="sign_up_section mwidth_680">
          <div className="resolution padding_lr">
            <div className="hn2 ta_c">
              <h1>Log In</h1>
            </div><br/>
            <div className="mwidth_320">
              <form action="/users/login" noValidate="novalidate" method="post" className="form_login form_style_1">
                <div>
                  <input type="email" placeholder="Email" name="email" required="" aria-required="true"/>
                </div>
                <div>
                  <input type="password" placeholder="Password" name="password" required="" aria-required="true"/>
                </div>
                <div className="form_footer">
                  <div className="form_footer_btns">
                    <div className="btn_color_fill">
                      <button type="submit">Log In</button>
                    </div>
                  </div>
                  <div><a href="/users/resetpassword">Forgot password?</a></div>
                  <div style={{float: 'right'}}>
                    <input type="checkbox" value="remember-me" id="rememberMeCheckbox" style={{background: '#f39b12'}}/>
                    <label htmlFor="rememberMeCheckbox" style={{color: '#f39b12', top:-20}}>Remember me</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

    );

  }

}

export default LoginForm;
