import api from './client.js';

export const likesAPI = {
  toggle: async (ideaId) => {
    const response = await api.post(`/likes/idea/${ideaId}`);
    return response.data;
  },
};

export default likesAPI;


