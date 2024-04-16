import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "./home.css";
import Header from "../components/header/Header.jsx";

const Home = () => {
  const { login, register, isAuthenticated } = useKindeAuth();
  return (
    <>
      <Header />
      {!isAuthenticated && (
        <div className="login-button-containers">
          <button onClick={register} type="button">
            Register
          </button>
          <button onClick={login} type="button">
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
