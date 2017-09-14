import axios from 'axios';

export const upload = (form) => {

  let formData = new FormData(form);

  return dipatch => {
    return axios.post('/admin/upload', formData);
  }
}
