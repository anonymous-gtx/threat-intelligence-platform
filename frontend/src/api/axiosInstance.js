import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzM5MTAzMjA0LCJleHAiOjE3MzkxNDY0MDR9.sknjqeb2b3i8VhtW9e3WC3h1WsNN_ZlNVaYASIGE7t4`;
  return config;
});

export default axiosInstance;
