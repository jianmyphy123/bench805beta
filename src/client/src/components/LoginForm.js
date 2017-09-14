import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Validator from 'validator';
import _ from 'lodash';
import { connect } from 'react-redux';

import { login } from '../actions/authActions';
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
  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

class LoginForm extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      email: '',
      password: '',
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

      this.props.login(this.state).then(
        res => {
          this.setState({isLoading: false});

          const { isAdmin } = this.props.auth;

          if(isAdmin)
            this.props.history.push('/admin');
          else
            this.props.history.push('/dashboard');
        },
        err => {
          this.setState({serverErrors: err.response.data.errors, isLoading: false});
          setTimeout(() => { this.setState({serverErrors: []}) }, 10000);
        }
      )
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
              <h1>Log In</h1>
            </div>
            <br/>
            <FlashMessages messages={this.state.serverErrors} />
            <div className="mwidth_320">
              <form onSubmit={this.onSubmit} className="form_login form_style_1" noValidate='novalidate'>

                <TextFieldGroup type="email" placeholder="Email" name="email" onChange={this.onChange} error={errors.email}/>
                <TextFieldGroup type="password" placeholder="Password" name="password" onChange={this.onChange} error={errors.password}/>
                <div className="form_footer">
                  <div className="form_footer_btns">
                    <div className="btn_color_fill">
                      <button type="submit" disabled={isLoading}>Log In</button>
                    </div>
                  </div>
                  <div><Link to="/resetpassword">Forgot password?</Link></div>
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

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {login})(LoginForm);
