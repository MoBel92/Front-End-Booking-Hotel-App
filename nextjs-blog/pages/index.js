import { getHotels } from "../api/hotels";

import Navbar from "../components/NavBar";
import HotelCard from "../components/HotelCard";

export function getServerSideProps() {
  return getHotels()
    .then((hotels) => {
      return {
        props: { hotels }, // Pass hotels to the page
      };
    })
    .catch(() => {
      return {
        props: { hotels: [] }, // In case of an error, pass an empty array
      };
    });
}

export default function Home({ hotels }) {
  return (
    <div>
      <Navbar /> {/* Navbar for search, only on the homepage */}
      <main>
        <h2>Available Hotels</h2>
        <div className="hotel-list">
          {hotels.map((hotel, index) => (
            <HotelCard key={`${hotel.HotelID}-${index}`} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
