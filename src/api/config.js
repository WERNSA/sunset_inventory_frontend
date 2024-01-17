import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.URL_BASE,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default instance;
