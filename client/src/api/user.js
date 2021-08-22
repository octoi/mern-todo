import axios from 'axios';
import { SERVER_URL } from '../utils/constants';

const url = `${SERVER_URL}/user`;

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/login`, { username, password }).then((res) => {
      const data = res.data;

      if (data?.status === 404) {
        reject(data.message);
      } else {
        resolve(data?.message);
      }
    }).catch(err => {
      console.log(err)
      reject();
    })
  });
}