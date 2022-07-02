import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://mern-backend-tiktok-clone.herokuapp.com/',
});

export default instance;