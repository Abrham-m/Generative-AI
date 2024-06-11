import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import LoginForm from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import User from "./Components/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
