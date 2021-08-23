import axios from 'axios';
import { SERVER_URL } from '../utils/constants';

const url = `${SERVER_URL}/todo`;

export const getAllTodos = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/`, { headers: { username } }).then((res) => {
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

export const addTodo = ({ username, todo }) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/create`, { todo, username }).then((res) => {
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
