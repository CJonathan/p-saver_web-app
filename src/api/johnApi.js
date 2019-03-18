import axios from 'axios';
import { baseURL } from '../env/api';

export default axios.create({
  baseURL: `${baseURL}/api/v1`,
})