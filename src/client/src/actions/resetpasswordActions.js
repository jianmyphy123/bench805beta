import axios from 'axios';

export const sendEmail = (data) => {
  return dipatch => {
    return axios.post('/resetpassword', data);
  }
}

export const reset = (data) => {
  return dispatch => {
    return axios.post(`/resetpassword/reset`, data);
  }
}
