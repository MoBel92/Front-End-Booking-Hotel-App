import { useState } from "react";
import { createHotel } from "../api/hotelArticle";
import styles from "./AddHotel.module.css"; // Import the CSS module

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
    ownerId: 1, // Default owner ID (replace with actual logic for setting owner)
  });

  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(null); // To handle success messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prevHotel) => ({
      ...prevHotel,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Get selected files
    const imageUrls = files.map((file) => URL.createObjectURL(file)); // Convert files to URLs for display
    setHotel((prevHotel) => ({
      ...prevHotel,
      images: imageUrls, // Set image URLs to the images field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success messages

    createHotel(hotel) // Call the API to create a new hotel
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
          ownerId: 1, // Default owner ID
        });
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
          {hotel.images.length > 0 && (
            <div className={styles["image-preview"]}>
              {hotel.images.map((image, index) => (
                <img key={index} src={image} alt={`Preview ${index}`} />
              ))}
            </div>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Owner ID</label>
          <input
            type="number"
            name="ownerId"
            value={hotel.ownerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["button-container"]}>
          <button type="submit">Add Hotel</button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;
