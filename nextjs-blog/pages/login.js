import { useState } from "react";
import { getUsers } from "../api/users";
import styles from "../styles/LoginForm.module.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    getUsers()
      .then((users) => {
        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (user) {
          setIsLoggedIn(true);
          setLoggedInUser(user);
          console.log("Login successful:", user);
        } else {
          setError("Invalid email or password.");
        }
      })
      .catch((error) => {
        setError("Failed to fetch users or process login.");
        console.error("Login error:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign in or create an account</h1>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
      {isLoggedIn && (
        <div className={styles.welcomeMessage}>
          <p>Welcome, {loggedInUser.name}!</p>{" "}
          {/* Display logged-in user's name */}
        </div>
      )}
    </div>
  );
};

export default Login;
