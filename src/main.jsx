import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId="65ae821431e4404680383ee12df70d8e"
      domain="https://mwise707.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <RouterProvider router={router} />
    </KindeProvider>
  </React.StrictMode>
);
