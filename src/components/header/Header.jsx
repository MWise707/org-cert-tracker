import "./header.css";
import Navbar from "./Navbar.jsx";

const Header = ({ isLoading, isAuthenticated }) => {
  return (
    <>
      <div className="header-container">
        {isAuthenticated && <Navbar />}
        {!isAuthenticated && <div className="header-text">CertiTrax</div>}
      </div>
    </>
  );
};

export default Header;
