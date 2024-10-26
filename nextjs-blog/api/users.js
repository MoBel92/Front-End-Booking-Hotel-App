import axiosInstance from "./axiosInstance";

// Function to fetch all users
export const getUsers = () => {
  return axiosInstance
    .get("/User")
    .then((response) => {
      console.log(response.data); // Log the response data
      return response.data; // Return the data for further use
    })
    .catch((error) => {
      throw error.response
        ? error.response.data // If the error has a response, throw the response data
        : new Error("Failed to fetch users"); // If there's no response, throw a generic error
    });
};

// Function to fetch a user by ID
export const getUserById = (id) => {
  return axiosInstance
    .get(`/User/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response
        ? error.response.data
        : new Error(`Failed to fetch user with id ${id}`);
    });
};

// Function to add a new user (register)
export const addUser = (user) => {
  return axiosInstance
    .post("/User", user)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response
        ? error.response.data
        : new Error("Failed to add user");
    });
};

// Function to update a user by ID
export const updateUser = (id, user) => {
  return axiosInstance
    .put(`/User/${id}`, user)
    .then(() => true)
    .catch((error) => {
      throw error.response
        ? error.response.data
        : new Error("Failed to update user");
    });
};

// Function to delete a user by ID
export const deleteUser = (id) => {
  return axiosInstance
    .delete(`/User/${id}`)
    .then(() => true)
    .catch((error) => {
      throw error.response
        ? error.response.data
        : new Error("Failed to delete user");
    });
};
