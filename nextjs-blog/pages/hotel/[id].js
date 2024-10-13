import { getHotels } from "../../api/hotels";

export function getStaticPaths() {
  return getHotels()
    .then((hotels) => {
      const paths = hotels.map((hotel) => ({
        params: { id: hotel.id.toString() }, // Dynamic ID path
      }));
      return { paths, fallback: false }; // fallback can be true, false, or 'blocking'
    })
    .catch(() => ({
      paths: [],
      fallback: false,
    }));
}

export function getStaticProps({ params }) {
  const hotelId = params.id;
  return getHotelById(hotelId) // Function to fetch a single hotel by ID
    .then((hotel) => ({
      props: { hotel }, // Pass the hotel data to the component as props
    }))
    .catch(() => ({
      props: { hotel: null }, // Handle error gracefully
    }));
}

const HotelPage = ({ hotel }) => {
  if (!hotel) {
    return <p>Hotel not found.</p>;
  }

  return (
    <div>
      <h1>{hotel.HotelName}</h1>
      <p>{hotel.HotelDescription}</p>
    </div>
  );
};

export default HotelPage;
