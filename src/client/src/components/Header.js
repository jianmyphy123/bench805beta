import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loadjs from 'loadjs';
import { logout } from '../actions/authActions';

class Header extends Component {


  componentWillMount() {
    loadjs('/js/scripts.js');
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    const { isAuthenticated, isAdmin, user } = this.props.auth;
    const { isResultPage } = this.props;

    return (

      <header className={this.props.headerClass}>
        <div className="resolution">
          <div className="logo"><Link to='/' title="bench805.com"></Link></div>
          <div className={isAuthenticated ? 'header_right_tool logged' : 'header_right_tool'}>
            {isResultPage ? <div className='btn_filters_vis'></div> : ''}
            <div className="btn_user_tool_vis"></div>
            <div className="usertool align_c">
              {
                isAuthenticated ?
                  <div className="h_logged_box">
                    <div className="h_username">{user.firstname}</div>
                    <div className="btn_logout"><a onClick={this.logout.bind(this)}> </a></div>
                  </div>
                : <div className="h_login_box">
                    <div className="login_btn"><Link to="/login">Log In</Link></div>
                    <div className="sign_up_btn"><Link to="/signup">Sign Up</Link></div>
                  </div>
              }

            </div>
            <div className="btn_menu_vis"></div>
            {
              isAuthenticated ?

              isAdmin ?
                <nav className="header_menu">
                  <div><Link to="/admin" title="bench805.com | Admin">Admin</Link></div>
                  <div><Link to="/dashboard" title="bench805.com | Benchmarking">Benchmarking</Link></div>
                  <div><Link to="/admin/viewtable" title="bench805.com | View Table">View Table</Link></div>
                  <div><Link to="/admin/users" title="bench805.com | Manage Users">Manage Users</Link></div>
                  <div><Link to="/admin/trackusers" title="bench805.com | Track Users">Track Users</Link></div>
                </nav>
              : <nav className="header_menu">
                  <div><Link to="/about" title="bench805.com | About">About</Link></div>
                  <div><Link to="/dashboard" title="bench805.com | Benchmarking">Benchmarking</Link></div>
                  <div><a href="mailto:info@bench805.com?subject=Feedback" target="_blank" title="bench805.com | Get in Touch" rel="noopener noreferrer">Get in Touch</a></div>
                </nav>
              : <nav className="header_menu">
                  <div><Link to="/about" title="bench805.com | About">About</Link></div>
                  <div><a href="mailto:info@bench805.com?subject=Feedback" target="_blank" title="bench805.com | Get in Touch" rel="noopener noreferrer">Get in Touch</a></div>
                </nav>
            }

          </div>
        </div>
      </header>
    );

  }

}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  headerClass: PropTypes.string,
  isResultPage: PropTypes.bool
}

Header.defaultProps = {
  headerClass: 'main_header header_bg',
  isResultPage: false
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout})(Header);
