import axios from 'axios';

export const http = {
  get: async (url: string, config: any)=> {
    return await axios.get(url, config);
  },

  post: async (url: string, data: any, config: any)=> {
    return await axios.post(url, data, config);
  },

  put: async (url: string, data: any, config: any)=> {
    return await axios.put(url, data, config);
  },

  delete: async (url: string, config: any)=> {
    return await axios.delete(url, config);
  }
}
