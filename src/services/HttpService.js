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

export const logout = () => {
  return new Promise((resolve, reject) => {
    axios.post(`${SERVER_URL}/logout`, null, {
      headers: {
        'X-Access-Token': localStorage.userToken,
        'X-Key': localStorage.userKey,
      }
    })
      .then(response => {
        localStorage.clear();
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const getAccounts = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${SERVER_URL}/api/v2/accounts`, {
      headers: {
        'X-Access-Token': localStorage.userToken,
        'X-Key': localStorage.userKey,
      }
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const isUserLogged = () => {
  const token = localStorage.userToken;
  const key = localStorage.userKey;
  return Boolean(token && key);
}



export default {
  login,
  logout,
  getAccounts,
  isUserLogged,
}
