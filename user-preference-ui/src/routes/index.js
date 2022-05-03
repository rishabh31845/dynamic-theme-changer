import React from "react";
import { useRoutes } from "react-router-dom";
import PreferencePage from "pages/PreferencePage";
import HomePage from 'pages/HomePage';
import LoginPage from "pages/LoginPage";

const Routes = () => {
  const routes = useRoutes([
    { path: "/preference", element: <PreferencePage /> },
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
  ]);
  return routes;
};

export default Routes;
