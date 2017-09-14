import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class AuthenticateAdmin extends React.Component {

    componentWillMount() {
      if(!this.props.isAuthenticated || !this.props.isAdmin) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if(!nextProps.isAuthenticated || !nextProps.isAdmin) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent { ...this.props }/>
      );
    }
  }

  AuthenticateAdmin.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isAdmin: state.auth.isAdmin
    }
  }

  return connect(mapStateToProps, null)(AuthenticateAdmin);

}
