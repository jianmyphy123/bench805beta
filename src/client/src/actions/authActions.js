import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../constants';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/auth', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
