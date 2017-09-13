import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Validator from 'validator';
import _ from 'lodash';

import { reset } from '../actions/resetpasswordActions';
import TextFieldGroup from './common/TextFieldGroup';
import FlashMessages from './FlashMessages';

function validateInput(data) {
  let errors = {};

  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if(Validator.isEmpty(data.password2))
    errors.password2 = 'This field is required';

  if(!Validator.equals(data.password, data.password2))
    errors.password2 = 'Password must match';

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

class ResetPasswordSetForm extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      password: '',
      password2: '',
      token: this.props.token,
      errors: {},
      serverErrors: [],
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

      this.props.reset(this.state).then(
        res => {
          if(res.data.success === true) {
            this.setState({isLoading: false});
            this.props.history.push('/resetpassword/congratulation');
          }
        },
        err => {
          this.setState({serverErrors: err.response.data.errors, isLoading: false});
        }
      );

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
              <h1>Reset Your password</h1>
            </div>
            <br/>
            <FlashMessages messages={this.state.serverErrors}/>
            <div className="mwidth_320">
              <form className="form_reset_password form_style_1">
                <TextFieldGroup type="password" placeholder="Password" name="password" onChange={this.onChange} error={errors.password}/>
                <TextFieldGroup type="password" placeholder="Confirm Password" name="password2" onChange={this.onChange} error={errors.password2}/>
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

ResetPasswordSetForm.propTypes = {
  reset: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired
}

export default connect(null, { reset })(ResetPasswordSetForm);
