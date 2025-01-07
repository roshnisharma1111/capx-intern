import axios from 'axios';

const API_BASE_URL = 'https://your-backend-url.com/api';

export const getStocks = () => axios.get(`${API_BASE_URL}/stocks`);
export const addStock = (stock) => axios.post(`${API_BASE_URL}/stocks`, stock);
export const updateStock = (id, stock) => axios.put(`${API_BASE_URL}/stocks/${id}`, stock);
export const deleteStock = (id) => axios.delete(`${API_BASE_URL}/stocks/${id}`);
