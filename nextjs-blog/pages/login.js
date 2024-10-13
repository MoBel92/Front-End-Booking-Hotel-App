import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for redirection
import { getUsers } from "../api/users";
import styles from "../styles/LoginForm.module.css";

const Login = ({ setIsLoggedIn, setUser }) => {
  // Passed down setIsLoggedIn and setUser from a higher level component
  const [credentials, setCredentials] = useState({
    email: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter for redirection

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
        const user = users.find((user) => user.email === credentials.email);

        if (user) {
          // Update the global state to reflect that the user is logged in
          setIsLoggedIn(true);
          setUser(user);

          console.log("Login successful:", user);
          // Redirect to the home page after login
          setTimeout(() => {
            router.push("/"); // Redirect to the home page
          }, 1000); // Delay of 1 second to show the welcome message
        } else {
          setError("Email not found.");
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
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
