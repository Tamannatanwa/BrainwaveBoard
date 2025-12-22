import api from './client.js';

export const ideasAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.userId) params.append('userId', filters.userId);
    if (filters.category) params.append('category', filters.category);
    if (filters.search) params.append('search', filters.search);
    
    const response = await api.get(`/ideas?${params.toString()}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/ideas/${id}`);
    return response.data;
  },

  create: async (ideaData) => {
    const response = await api.post('/ideas', ideaData);
    return response.data;
  },

  update: async (id, ideaData) => {
    const response = await api.put(`/ideas/${id}`, ideaData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/ideas/${id}`);
    return response.data;
  },
};

export default ideasAPI;


