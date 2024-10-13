import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter to access the current route
import styles from "../styles/Header.module.css";

const Header = ({ isLoggedIn, user, handleLogout }) => {
  const router = useRouter(); // Initialize the router

  // Check if the current route is either '/login', '/register', or '/hotel/AddHotel'
  const isAuthOrAddHotelPage =
    router.pathname === "/login" ||
    router.pathname === "/register" ||
    router.pathname === "/hotel/AddHotel";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Wrap the app name with a Link to make it clickable */}
        <Link href="/">
          <h1 className={styles.title}>Hotel Booking App</h1>
        </Link>

        {!isAuthOrAddHotelPage && ( // Hide buttons on login, register, and AddHotel pages
          <div className={styles.authSection}>
            {isLoggedIn ? (
              <div className={styles.userInfo}>
                <span className={styles.username}>Hello, {user.name}</span>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  Logout
                </button>
                {/* Add Hotel Button */}
                <Link href="/hotel/AddHotel">
                  <button className={styles.addHotelButton}>Add Hotel</button>
                </Link>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link href="/login">
                  <button className={styles.authButton}>Login</button>
                </Link>
                <Link href="/register">
                  <button className={styles.authButton}>Register</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
