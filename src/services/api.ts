import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// Injeta o token Bearer em todas as requisições autenticadas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('empreende_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Trata erros globais (401 = redireciona para login)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('empreende_token');
      localStorage.removeItem('empreende_user');
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

export default api;
