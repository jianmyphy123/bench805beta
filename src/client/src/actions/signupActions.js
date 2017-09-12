import axios from 'axios';

export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/users', userData);
  }
}

export const isUserExists = (identifier) => {
  return dispatch => {
    return axios.post(`/users/${identifier}`);
  }
}

export const activateAccount = (token) => {
  return dispatch => {
    return axios.post(`/users/activate/${token}`);
  }
}
