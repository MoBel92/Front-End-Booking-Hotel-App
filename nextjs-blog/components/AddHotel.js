import { useState } from "react";
import { createHotel } from "../api/hotels"; // Ensure this API is handling the files on the backend
import styles from "../styles/AddHotel.module.css";

const AddHotel = () => {
  const [hotel, setHotel] = useState({
    hotelName: "",
    hotelDescription: "",
    hotelStars: 1,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    images: [], // Images array
  });

  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(null); // To handle success messages
  const [imageFiles, setImageFiles] = useState([]); // Store the actual file objects

  // This is the handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prevHotel) => ({
      ...prevHotel,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Get selected files
    setImageFiles(files); // Store file objects for later submission
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success messages

    // Create FormData to send hotel data along with files
    const formData = new FormData();
    formData.append("hotelName", hotel.hotelName);
    formData.append("hotelDescription", hotel.hotelDescription);
    formData.append("hotelStars", hotel.hotelStars);
    formData.append("street", hotel.street);
    formData.append("city", hotel.city);
    formData.append("state", hotel.state);
    formData.append("zipCode", hotel.zipCode);
    formData.append("country", hotel.country);

    // Append all images to the form data
    imageFiles.forEach((file) => {
      formData.append("images", file); // Ensure backend expects `images[]` array
    });

    createHotel(formData) // Call the API to create a new hotel
      .then((response) => {
        setSuccess("Hotel added successfully!");
        setHotel({
          hotelName: "",
          hotelDescription: "",
          hotelStars: 1,
          street: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
          images: [], // Reset images
        });
        setImageFiles([]); // Reset image files
      })
      .catch((error) => {
        setError(error.message || "Failed to add hotel.");
      });
  };

  return (
    <div className={styles.container}>
      <h1>Add a New Hotel</h1>
      {error && <p className={styles["error-message"]}>{error}</p>}
      {success && <p className={styles["success-message"]}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label>Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            value={hotel.hotelName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Hotel Description</label>
          <textarea
            name="hotelDescription"
            value={hotel.hotelDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Hotel Stars</label>
          <input
            type="number"
            name="hotelStars"
            value={hotel.hotelStars}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={hotel.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={hotel.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={hotel.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={hotel.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={hotel.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Images</label>
          <input type="file" multiple onChange={handleImageChange} />
          {imageFiles.length > 0 && (
            <div className={styles["image-preview"]}>
              {imageFiles.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles["button-container"]}>
          <button type="submit">Add Hotel</button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;
