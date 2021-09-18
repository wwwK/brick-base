import axios from 'axios';
const api = {
  get(url, params) {
    return axios.get(url, {
      params,
    })
  },
  post(url, data) {
    return axios.post(url, {
      ...data
    })
  },
  put(url, data) {
    return axios.get(url, {
      ...data
    })
  }
};

export default api;