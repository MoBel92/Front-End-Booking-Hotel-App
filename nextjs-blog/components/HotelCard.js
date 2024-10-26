import Link from "next/link"; // Add Link for navigation to hotel details
import styles from "../styles/HotelCard.module.css";

const HotelCard = ({ hotel }) => {
  console.log(hotel);
  console.log("Image paths: ", hotel.imagePaths);
  // Construct the location string, skipping empty fields
  const location = [
    hotel.street,
    hotel.city,
    hotel.state,
    hotel.zipCode,
    hotel.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <Link href={`/hotel/${hotel.hotelID}`}>
      <div className={styles.card}>
        {/* Display the first image if available */}
        {hotel.imagePaths && hotel.imagePaths.length > 0 ? (
          <img
            className={styles.hotelImage}
            src={`${hotel.imagePaths[0]}`}
            alt={`Hotel ${hotel.hotelName}`}
          />
        ) : (
          <img
            className={styles.hotelImage}
            src="/default-hotel-image.jpg" // Fallback if no image
            alt="Default hotel"
          />
        )}
        <div className={styles.cardContent}>
          <h2 className={styles.hotelName}>{hotel.hotelName}</h2>
          <p className={styles.hotelDescription}>
            {hotel.hotelDescription.length > 100
              ? `${hotel.hotelDescription.substring(0, 100)}...`
              : hotel.hotelDescription}
          </p>
          <p className={styles.hotelLocation}>Location: {location}</p>
          <p className={styles.hotelStars}>Stars: {hotel.hotelStars}</p>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
