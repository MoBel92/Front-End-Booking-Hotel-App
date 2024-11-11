import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://fallback-url.com/api",
  timeout: 30000,
});

export default axiosInstance;
