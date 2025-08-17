import axios from 'axios';

export const api = axios.create({
  baseURL: `/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export const Tasks = {
  getAll: () => api.get('/tasks').then(r => r.data),
  get: (id) => api.get(`/tasks/${id}`).then(r => r.data),
  add: (payload) => api.post('/tasks', payload).then(r => r.data),
  update: (id, payload) => api.patch(`/tasks/${id}`, payload).then(r => r.data),
  remove: (id) => api.delete(`/tasks/${id}`).then(r => r.data),
  deleteAll: () => api.delete('/tasks').then(r => r.data),
};
