import axios from 'axios';

export const api = axios.create({
  // Utiliza a variável de ambiente, garantindo que o TypeScript conheça através do vite-env.d.ts
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // Lógica Sênior para injetar token de autenticação:
    // Exemplo: const token = localStorage.getItem('auth-token') ou recuperar do Zustand
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Lógica Sênior para tratamento global de erros HTTP
    // Exemplo: Se receber 401 (Unauthorized), forçar o deslogue do usuário
    // if (error.response?.status === 401) {
    //   logoutUser();
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);
