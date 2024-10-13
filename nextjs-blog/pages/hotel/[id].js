import { getHotels, getHotelById } from "../../api/hotels";

export async function getStaticPaths() {
  try {
    const hotels = await getHotels();
    const paths = hotels.map((hotel) => ({
      params: { id: hotel.HotelID.toString() }, // Use HotelID for the dynamic path
    }));
    return { paths, fallback: false };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const hotelId = params.id;
  try {
    const hotel = await getHotelById(hotelId); // Fetch a single hotel by ID
    return {
      props: { hotel },
    };
  } catch (error) {
    return {
      props: { hotel: null }, // Handle error gracefully
    };
  }
}

const HotelPage = ({ hotel }) => {
  if (!hotel) {
    return <p>Hotel not found.</p>;
  }

  // Construct the location string
  const location = `${hotel.street}, ${hotel.city}, ${hotel.state}, ${hotel.zipCode}, ${hotel.country}`;

  return (
    <div>
      <h1>{hotel.hotelName}</h1>
      <p>Stars: {hotel.hotelStars}</p>
      {hotel.images && hotel.images.length > 0 && (
        <img
          src={hotel.images[0]} // Display the first image
          alt={`Hotel ${hotel.hotelName}`}
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      )}
      <p>{hotel.hotelDescription}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default HotelPage;
