import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import _ from 'lodash';

import TextFieldGroup from './common/TextFieldGroup';

function validateInput(data) {
  let errors = {};

  if(Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

class ResetPasswordForm extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({errors: {}, isLoading: true});


    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    const { errors, isLoading } = this.state;

    return (

      <div className="page_body padding_top_header">

        <section className="sign_up_section mwidth_680">
          <div className="resolution padding_lr">
            <div className="hn2 ta_c">
              <h1>Reset password</h1>
            </div>
            <div className="ta_c">Please enter your email address and<br/> press button Send to reset your password</div><br/>
            <div className="mwidth_320">
              <form className="form_reset_password_email form_style_1">
                <TextFieldGroup type="email" placeholder="Email" name="email" onChange={this.onChange} error={errors.email}/>
                <div className="form_footer">
                  <div className="form_footer_btns">
                    <div className="btn_color_fill">
                      <button type="submit" onClick={this.onSubmit} disabled={isLoading}>Send</button>
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

ResetPasswordForm.propTypes = {
  history: PropTypes.object.isRequired
}

export default ResetPasswordForm;
