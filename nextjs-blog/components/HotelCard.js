import Link from "next/link"; // For navigation to hotel details
import styles from "../styles/HotelCard.module.css";

const HotelCard = ({ hotel }) => {
  if (!hotel) return null; // Prevent rendering if no hotel data is available

  console.log("Hotel data:", hotel);
  console.log("Image paths:", hotel.imagePaths);

  // Extract just the filename from the full URL
  const getImageFileName = (imagePath) => {
    return imagePath.split("/").pop(); // Get the last segment of the URL
  };

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

  const firstImagePath = `/images/${encodeURIComponent(
    hotel.hotelName
  )}/${getImageFileName(hotel.imagePaths[0])}`;
  console.log("First image path:", firstImagePath); // Log the constructed image path

  return (
    <Link href={`/hotel/${hotel.hotelID}`}>
      <div className={styles.card}>
        {/* Display the first image if available */}
        {hotel.imagePaths?.length > 0 ? (
          <img
            className={styles.hotelImage}
            src={firstImagePath} // Using the constructed path with encoded hotel name
            alt={`Hotel ${hotel.hotelName}`}
          />
        ) : (
          <img
            className={styles.hotelImage}
            src="/default-hotel-image.jpg" // Fallback image if no hotel image
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
