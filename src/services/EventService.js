import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  method: ['get', 'post'],
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default instance
