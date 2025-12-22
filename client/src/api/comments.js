import api from './client.js';

export const commentsAPI = {
  create: async (ideaId, content) => {
    const response = await api.post(`/comments/idea/${ideaId}`, { content });
    return response.data;
  },

  delete: async (commentId) => {
    const response = await api.delete(`/comments/${commentId}`);
    return response.data;
  },
};

export default commentsAPI;


