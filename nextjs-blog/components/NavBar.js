import styles from "../styles/NavBar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    console.log("Search for:", { location, checkInDate, checkOutDate, guests });
  };

  return (
    <nav className={styles.navbar}>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.input}
      />
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        className={styles.input}
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        className={styles.input}
      />
      <select
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className={styles.input}
      >
        <option value={1}>1 Adult</option>
        <option value={2}>2 Adults</option>
        <option value={3}>3 Adults</option>
        <option value={4}>4 Adults</option>
      </select>
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </nav>
  );
};

export default Navbar;
