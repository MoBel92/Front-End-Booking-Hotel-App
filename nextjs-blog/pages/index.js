import { getHotels } from "../api/hotels";
import Navbar from "../components/NavBar";
import HotelCard from "../components/HotelCard";

export async function getServerSideProps() {
  try {
    const hotels = await getHotels(); // Await the hotel data
    return {
      props: { hotels }, // Pass hotels to the page
    };
  } catch (error) {
    console.error("Error fetching hotels in getServerSideProps:", error);
    return {
      props: { hotels: [] }, // In case of an error, pass an empty array
    };
  }
}

export default function Home({ hotels }) {
  return (
    <div>
      <Navbar /> {/* Navbar for search, only on the homepage */}
      <main>
        <h2>Available Hotels</h2>
        <div className="hotel-list">
          {hotels.length > 0 ? (
            hotels.map((hotel, index) => (
              <HotelCard key={`${hotel.hotelID}-${index}`} hotel={hotel} />
            ))
          ) : (
            <p>No hotels available at the moment.</p>
          )}
        </div>
      </main>
      <style jsx>{`
        .hotel-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        h2 {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
