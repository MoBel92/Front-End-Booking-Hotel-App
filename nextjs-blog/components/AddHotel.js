import { useState } from "react";
import { createHotel } from "../api/hotels";
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
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createHotel(hotel);
      setSuccessMessage("Hotel added successfully!");
      setHotel({
        hotelName: "",
        hotelDescription: "",
        hotelStars: 1,
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add New Hotel</h2>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Input fields for hotel details */}
        <div className={styles.formGroup}>
          <label htmlFor="hotelName">Hotel Name</label>
          <input
            type="text"
            id="hotelName"
            name="hotelName"
            placeholder="Hotel Name"
            value={hotel.hotelName}
            onChange={handleChange}
            required
            autoComplete="organization"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="hotelDescription">Hotel Description</label>
          <textarea
            id="hotelDescription"
            name="hotelDescription"
            placeholder="Hotel Description"
            value={hotel.hotelDescription}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="hotelStars">Hotel Stars</label>
          <input
            type="number"
            id="hotelStars"
            name="hotelStars"
            placeholder="Hotel Stars"
            value={hotel.hotelStars}
            onChange={handleChange}
            min="1"
            max="5"
            required
            autoComplete="off"
          />
        </div>
        {/* Address Fields */}
        <div className={styles.formGroup}>
          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Street Address"
            value={hotel.street}
            onChange={handleChange}
            required
            autoComplete="street-address"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={hotel.city}
            onChange={handleChange}
            required
            autoComplete="address-level2"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            value={hotel.state}
            onChange={handleChange}
            required
            autoComplete="address-level1"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="Zip Code"
            value={hotel.zipCode}
            onChange={handleChange}
            required
            autoComplete="postal-code"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            value={hotel.country}
            onChange={handleChange}
            required
            autoComplete="country"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Add Hotel</button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;
