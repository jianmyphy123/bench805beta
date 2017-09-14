import axios from 'axios';

export const upload = (form) => {

  let formData = new FormData(form);

  return dispatch => {
    return axios.post('/admin/upload', formData);
  }
}

export const mainTableData = () => {

  return dispatch => {

    return axios.post('/admin/viewtable');

  }
}
