import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://hotel-bookings-app.onrender.com", // Base URL for API
  timeout: 10000, // Timeout after 10 seconds
});

export default axiosInstance;
