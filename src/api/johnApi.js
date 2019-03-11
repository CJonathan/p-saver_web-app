import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.2.116:3200/api/v1',
})