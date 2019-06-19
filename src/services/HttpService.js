import axios from 'axios';
const SERVER_URL = 'https://cloud-ua1.webitel.com/engine';

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${SERVER_URL}/login`, data)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default {
  login,
}
