import axios from 'axios';

export default axios.create({
  baseURL: 'https://seer-be.herokuapp.com/'
});