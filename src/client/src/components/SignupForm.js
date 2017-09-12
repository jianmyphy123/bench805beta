import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import TextFieldGroup from './common/TextFieldGroup';
import _ from 'lodash';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../actions/signupActions';



function validateInput(data) {

  var errors = {};

  if(Validator.isEmpty(data.firstname))
    errors.firstname = 'This field is required';

  if(Validator.isEmpty(data.lastname))
    errors.lastname = 'This field is required';

  if(Validator.isEmpty(data.email))
    errors.email = 'This field is required';

  if(!Validator.isEmail(data.email))
    errors.email = 'Email is invalid';

  if(Validator.isEmpty(data.jobfunction))
    errors.jobfunction = 'Select one of the items';

  if(Validator.isEmpty(data.password))
    errors.password = 'This field is required';

  if(Validator.isEmpty(data.password2))
    errors.password2 = 'This field is required';

  if(!Validator.equals(data.password, data.password2))
    errors.password2 = 'Password must match';

  return {
    errors,
    isValid: _.isEmpty(errors)
  }

}

class SignupForm extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      firstname: '',
      lastname: '',
      email: '',
      company: '',
      jobfunction: '',
      password: '',
      password2: '',
      errors: {},
      isLoading: false,
      invalid: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid)
      this.setState({ errors });

    return isValid;
  }

  checkUserExists(e) {
    const name = e.target.name;
    const val = e.target.value;

    if(!_.isEmpty(val)) {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;

        if(res.data.user) {
          errors[name] = 'There is user with such ' + name;
          invalid = true;
        } else {
          errors[name] = '';
          invalid = false;
        }

        this.setState({errors, invalid});
      });
    }
  }

  onSignup(e) {
    e.preventDefault();


    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        (res) => {
          console.log(res.data);
          this.setState({ isLoading: false });
          this.props.history.push('/signup/confirmation');
        },
        (err) => {
          this.setState({ errors: err.response.data, isLoading: false });
        }
      );
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  gotoTermsOfService(e) {
    e.preventDefault();
    this.props.history.push('/termsofservice');
  }

  gotoLogin(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  render() {

    const { errors } = this.state;

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
              <form action="/users" noValidate="novalidate" method="post" className="form_signup form_style_1">

                <TextFieldGroup  type="text" placeholder="First name*" name="firstname" onChange={this.onChange} error={errors.firstname} />
                <TextFieldGroup  type="text" placeholder="Last name*" name="lastname" onChange={this.onChange} error={errors.lastname} />
                <TextFieldGroup  type="text" placeholder="Email*" name="email" onChange={this.onChange} error={errors.email} onBlur={this.checkUserExists} />
                <TextFieldGroup  type="text" placeholder="Company" name="company" onChange={this.onChange}/>
                <div className="custom_select_container">
                  <select name="jobfunction" onChange={this.onChange}>
                    <option value="">Job function*</option>
                    <option value="job_1">Valuation Specialist</option>
                    <option value="job_2">Auditor</option>
                    <option value="job_3">Finance Executive</option>
                    <option value="job_4">Press</option>
                    <option value="job_5">Government</option>
                    <option value="job_6">Other</option>
                  </select>
                  {errors.jobfunction && <span className='err_info' style={{display: 'block'}}>{errors.jobfunction}</span>}
                </div>
                <TextFieldGroup  type="password" placeholder="Password*" name="password" onChange={this.onChange} error={errors.password} />
                <TextFieldGroup  type="password" placeholder="Confirm password*" name="password2" onChange={this.onChange} error={errors.password2} />
                <div className="form_footer">
                  <div className="form_footer_info ta_c">By clicking &ldquo;Sign up&rdquo; I agree to<br/><a onClick={this.gotoTermsOfService.bind(this)}>Terms of Service</a></div>
                  <div className="form_footer_btns two_buttons clrfx">
                    <div className="btn_color_space"><a onClick={this.gotoLogin.bind(this)}>Log In</a></div>
                    <div className="btn_color_fill">
                      <button disabled={this.state.isLoading || this.state.invalid} type="submit" onClick={this.onSignup.bind(this)}>Sign Up</button>
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

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(null, {userSignupRequest, isUserExists})(SignupForm);
