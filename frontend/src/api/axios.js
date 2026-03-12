// src/api/axios.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend API URL
});

// Attach JWT token automatically if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // stored after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;