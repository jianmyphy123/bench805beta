import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Validator from 'validator';
import _ from 'lodash';

import { isUserExists } from '../actions/userActions';
import { sendEmail } from '../actions/resetpasswordActions';
import TextFieldGroup from './common/TextFieldGroup';
import FlashMessages from './FlashMessages';

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
      serverErrors: [],
      isLoading: false,
      invalid: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
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

      this.props.sendEmail(this.state).then(
        res => {
          if(res.data.success === true) {
            this.props.history.push('/resetpassword/emailsent');
          }
        },
        err => {
          this.setState({serverErrors: err.response.data.errors, isLoading: false});
          setTimeout(() => { this.setState({serverErrors: []}) }, 10000);
        }
      );

    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkUserExists(e) {
    const name = e.target.name;
    const val = e.target.value;

    if(!this.isValid())
      return;

    if(!_.isEmpty(val)) {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;

        if(res.data.user) {
          errors[name] = '';
          invalid = false;
        } else {
          errors[name] = 'There is no user with such ' + name;
          invalid = true;
        }

        this.setState({errors, invalid});
      });
    }
  }

  render() {

    const { errors, isLoading, invalid } = this.state;

    return (

      <div className="page_body padding_top_header">

        <section className="sign_up_section mwidth_680">
          <div className="resolution padding_lr">
            <div className="hn2 ta_c">
              <h1>Reset password</h1>
            </div>
            <FlashMessages messages={this.state.serverErrors}/>
            <div className="ta_c">Please enter your email address and<br/> press button Send to reset your password</div><br/>
            <div className="mwidth_320">
              <form className="form_reset_password_email form_style_1">
                <TextFieldGroup type="email" placeholder="Email" name="email" onChange={this.onChange} error={errors.email} onBlur={this.checkUserExists}/>
                <div className="form_footer">
                  <div className="form_footer_btns">
                    <div className="btn_color_fill">
                      <button type="submit" onClick={this.onSubmit} disabled={isLoading || invalid}>Send</button>
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
  isUserExists: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(null, { isUserExists, sendEmail })(ResetPasswordForm);
