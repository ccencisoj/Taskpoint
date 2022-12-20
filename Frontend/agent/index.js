import axiosCreator from 'axios';

const axios = axiosCreator.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL
})

const http = {
  get: async (url, config)=> {
    return await axios.get(url, config);
  },

  post: async (url, data, config)=> {
    return await axios.post(url, data, config);
  },

  put: async (url, data, config)=> {
    return await axios.put(url, data, config);
  },

  delete: async (url, config)=> {
    return await axios.delete(url, config);
  }
}

const Task = {
  create: async (task)=> {
    return (await http.post("/tasks", task)).data.task;
  },
  update: async (task)=> {
    return (await http.put(`/tasks/${task.id}`, task)).data;
  },
  delete: async (task)=> {
    return (await http.delete(`/tasks/${task.id}`)).data;
  },
  get: async (id)=> {
    return (await http.get(`/tasks/${id}`)).data.task;
  },
  getAll: async (searchValue, skip, limit)=> { 
    
    const arrQuery = [];

    if(searchValue) query.push(`search=${searchValue}`);
    if(skip) query.push(`skip=${skip}`);
    if(limit) query.push(`limit=${limit}`);
    
    const query = arrQuery.join("&&");

    return (await http.get(`/tasks?${query}`));
  }
}

const TaskState = {
  create: async (taskState)=> {
    return (await http.post("/tasks/states", taskState)).data.state;
  },
  update: async (taskState)=> {
    return (await http.put(`/tasks/states/${taskState.id}`, taskState)).data;
  },
  delete: async (taskState)=> {
    return (await http.delete(`/tasks/states/${taskState.id}`)).data;
  },
  get: async (id)=> {
    return (await http.get(`/tasks/states/${id}`)).data.state;
  },
  getAll: async (searchValue, skip, limit)=> { 
    
    const arrQuery = [];

    if(searchValue) query.push(`search=${searchValue}`);
    if(skip) query.push(`skip=${skip}`);
    if(limit) query.push(`limit=${limit}`);
    
    const query = arrQuery.join("&&");

    return (await http.get(`/tasks/states?${query}`));
  }
}

const User = {
  register: async (user)=> {
    return (await http.post("/users/register", user)).data.user;
  },
  login: async ({email, password})=> {
    return (await http.post("/users/login", {email, password})).data.user;    
  },
  current: async (cookie)=> {
    return (await http.get(`/users/current`, {
      headers: {
        Cookie: cookie
      }
    })).data.user;
  }
}

export const agent = {
  Task,
  TaskState,
  User
}
