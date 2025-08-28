import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

apiAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiAxios;
