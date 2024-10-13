// pages/_app.js
import { useState } from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Layout isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout}>
      <Component
        {...pageProps}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
    </Layout>
  );
}

export default MyApp;
