import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "./home.css";
import Header from "../components/header/Header.jsx";
import About from "../components/about/About.jsx";

const Home = () => {
  const { login, register, isLoading, isAuthenticated, logout, user } =
    useKindeAuth();
  return (
    <>
      <Header />
      {isLoading && <div>Loading...</div>}
      {!isAuthenticated && (
        <div className="home-container">
          <About />
          <div className="login-button-container">
            <button onClick={register} type="button">
              Register
            </button>
            <button onClick={login} type="button">
              Log In
            </button>
          </div>
        </div>
      )}
      <div className="logout-button-container">
        {isAuthenticated && (
          <button onClick={logout} type="button">
            Log Out
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
