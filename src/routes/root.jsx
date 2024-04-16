import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Root = () => (
  <KindeProvider
    clientId="51eb58ed911241848e7a2c34ed8d6dc6"
    domain="https://mwise707.kinde.com"
    redirectUri="http://localhost:5173"
    logoutUri="http://localhost:5173"
  >
    const {(login, register)} = useKindeAuth();
    <Routes />
    return{" "}
    <>

    </>
    ;
  </KindeProvider>
);

export default Root;