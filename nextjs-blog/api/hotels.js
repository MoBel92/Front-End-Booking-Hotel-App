import axiosInstance from "./axiosInstance";

// Function to fetch all hotels (GET)
export const getHotels = () => {
  return axiosInstance
    .get("/HotelArticle")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching hotels:", error);
      return []; // Return an empty array in case of error
    });
};

// Function to fetch a hotel by ID (GET)
export const getHotelById = (id) => {
  return axiosInstance
    .get(`/HotelArticle/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching hotel with id ${id}:`, error);
      return null; // Return null in case of error
    });
};

// Function to create a new hotel article (POST)
export const createHotel = (hotelData) => {
  return axiosInstance
    .post("/HotelArticle", hotelData, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure correct content-type for file uploads
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating hotel:", error);
      if (error.response) {
        // Server-side error
        throw new Error(
          error.response.data.message || "Failed to create hotel"
        );
      } else {
        // Client-side or network error
        throw new Error("Failed to create hotel due to network issues");
      }
    });
};

// Function to update a hotel article by ID (PUT)
export const updateHotel = (id, hotelData) => {
  return axiosInstance
    .put(`/HotelArticle/${id}`, hotelData)
    .then(() => true)
    .catch((error) => {
      console.error(`Error updating hotel with id ${id}:`, error);
      throw new Error("Failed to update hotel");
    });
};

// Function to delete a hotel article by ID (DELETE)
export const deleteHotel = (id) => {
  return axiosInstance
    .delete(`/HotelArticle/${id}`)
    .then(() => true)
    .catch((error) => {
      console.error(`Error deleting hotel with id ${id}:`, error);
      throw new Error("Failed to delete hotel");
    });
};
