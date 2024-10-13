// components/HotelCard.js

import styles from "../styles/HotelCard.module.css";

const HotelCard = ({ hotel }) => {
  return (
    <div className={styles.card}>
      <h2>{hotel.HotelName}</h2>
      <p>{hotel.HotelDescription}</p>
      <p>Location: {hotel.HotelLocation}</p>
      <p>Stars: {hotel.HotelStars}</p>
    </div>
  );
};

export default HotelCard;
