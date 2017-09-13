import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { activateAccount } from '../actions/userActions';
import { Header, Footer } from '../components';

class ActivateAccount extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      errors: ''
    };
  }

  componentDidMount() {

    document.title = 'bench805.com | Activate Account'

    let token = this.props.match.params.token;

    this.props.activateAccount(token).then(
      res => {
        if(res.data.confirmation === 'success') {
          this.props.history.push('/signup/congratulation');
        }
      },
      err => {
        this.setState({errors: err.response.data.errors});
      }
    );


  }

  render() {
    return (
      <div id="main_container">
        <Header />
        <Footer />

        <div className="page_body padding_top_header">

          <section className="sign_up_section mwidth_680">
            <div className="resolution padding_lr">
              <div>{this.state.errors}</div>
            </div>

          </section>
        </div>

      </div>
    );
  }

}

ActivateAccount.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  activateAccount: PropTypes.func.isRequired
}

export default connect(null, { activateAccount })(ActivateAccount);
