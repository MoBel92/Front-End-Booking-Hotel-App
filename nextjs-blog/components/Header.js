import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "John Doe" });
  const router = useRouter(); // Access the router

  // Check if the current route is either '/login' or '/register' or home ('/')
  const isAuthPage =
    router.pathname === "/login" || router.pathname === "/register";
  const isHomePage = router.pathname === "/"; // Check if we are on the Home page

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null); // Reset user info
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hotel Booking App</h1>

        <div className={styles.authSection}>
          {isLoggedIn ? (
            // If logged in, show the user's name and logout button
            <div className={styles.userInfo}>
              <span className={styles.username}>Hello, {user.name}</span>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </div>
          ) : (
            // Only show the Login and Register buttons on the Home page
            isHomePage && (
              <div className={styles.authButtons}>
                <Link href="/login">
                  <button className={styles.authButton}>Login</button>
                </Link>
                <Link href="/register">
                  <button className={styles.authButton}>Register</button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
