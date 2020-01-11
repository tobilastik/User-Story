import axios from 'axios';

const api = axios.create ({
  baseURL: 'https://test-archimides.free.beeceptor.com/',
});

export default api;
