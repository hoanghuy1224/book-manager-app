import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'http://localhost:8080/api';

// Author APIs
export const fetchAuthors = () => axios.get(`${API_BASE_URL}/authors`);
export const createAuthor = (author) => axios.post(`${API_BASE_URL}/authors`, author);
export const updateAuthor = (id, author) => axios.put(`${API_BASE_URL}/authors/${id}`, author);
export const deleteAuthor = (id) => axios.delete(`${API_BASE_URL}/authors/${id}`);

// Book APIs
export const fetchBooks = () => axios.get(`${API_BASE_URL}/books`);
export const createBook = (book) => axios.post(`${API_BASE_URL}/books`, book);
export const updateBook = (id, book) => axios.put(`${API_BASE_URL}/books/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_BASE_URL}/books/${id}`);
