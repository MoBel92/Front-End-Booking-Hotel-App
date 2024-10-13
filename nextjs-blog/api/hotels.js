import axiosInstance from "./axiosInstance";

// Function to fetch all hotels (GET)
export const getHotels = () => {
  return axiosInstance
    .get("/api/HotelArticle")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching hotels:", error);
      return []; // Return an empty array in case of error
    });
};

// Function to fetch a hotel by ID (GET)
export const getHotelById = (id) => {
  return axiosInstance
    .get(`/api/HotelArticle/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching hotel with id ${id}:`, error);
      return null; // Return null in case of error
    });
};

// Function to create a new hotel article (POST)
export const createHotel = (hotelData) => {
  return axiosInstance
    .post("/api/HotelArticle", hotelData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating hotel:", error);
      throw new Error("Failed to create hotel");
    });
};

// Function to update a hotel article by ID (PUT)
export const updateHotel = (id, hotelData) => {
  return axiosInstance
    .put(`/api/HotelArticle/${id}`, hotelData)
    .then(() => true)
    .catch((error) => {
      console.error(`Error updating hotel with id ${id}:`, error);
      throw new Error("Failed to update hotel");
    });
};

// Function to delete a hotel article by ID (DELETE)
export const deleteHotel = (id) => {
  return axiosInstance
    .delete(`/api/HotelArticle/${id}`)
    .then(() => true)
    .catch((error) => {
      console.error(`Error deleting hotel with id ${id}:`, error);
      throw new Error("Failed to delete hotel");
    });
};
