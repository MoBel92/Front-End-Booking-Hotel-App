import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://hotel-bookings-app.onrender.com/api", // Base URL for API
  timeout: 30000, // Timeout after 10 seconds
});

export default axiosInstance;
