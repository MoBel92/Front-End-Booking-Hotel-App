// components/Layout.js
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, isLoggedIn, user, handleLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} user={user} handleLogout={handleLogout} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
