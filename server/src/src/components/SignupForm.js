import React, { Component } from 'react';

class SignupForm extends Component {

  render() {

    return (

      <div className="page_body padding_top_header">

        <section className="sign_up_section mwidth_680">
          <div className="resolution padding_lr">
            <div className="hn2 ta_c">
              <h1>Sign Up</h1>
            </div>
            <div className="ta_c">Please sign up to  get access to information</div>
            <ul className="error">
            </ul><br/>
            <div className="mwidth_320">
              <form action="/users/signup" novalidate="novalidate" method="post" className="form_signup form_style_1">
                <div>
                  <input type="text" placeholder="First name*" name="firstname" required="" aria-required="true" value=""/>
                </div>
                <div>
                  <input type="text" placeholder="Last name*" name="lastname" required="" aria-required="true" value=""/>
                </div>
                <div>
                  <input type="email" placeholder="Email*" name="email" required="" aria-required="true" value=""/>
                </div>
                <div>
                  <input type="text" placeholder="Company" name="company" value=""/>
                </div>
                <div className="custom_select_container">
                  <select name="jobfunction" required="" aria-required="true">
                    <option value="">Job function*</option>
                    <option value="job_1">Valuation Specialist</option>
                    <option value="job_2">Auditor</option>
                    <option value="job_3">Finance Executive</option>
                    <option value="job_4">Press</option>
                    <option value="job_5">Government</option>
                    <option value="job_6">Other</option>
                  </select>
                </div>
                <div>
                  <input id="password" type="password" placeholder="Password*" name="password" required="" aria-required="true"/>
                </div>
                <div>
                  <input type="password" placeholder="Confirm password*" name="password2" required="" aria-required="true"/>
                </div>
                <div className="form_footer">
                  <div className="form_footer_info ta_c">By clicking &ldquo;Sign up&rdquo; I agree to<br/><a href="/terms_of_service">Terms of Service</a></div>
                  <div className="form_footer_btns two_buttons clrfx">
                    <div className="btn_color_space"><a href="/users/login">Log In</a></div>
                    <div className="btn_color_fill">
                      <button type="submit">Sign Up</button>
                    </div>
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

export default SignupForm;
