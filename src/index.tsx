import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";

import NotFoundPage from "./components/pages/notfoundpage";
import Regstart from "./components/pages/regstart";
import Regmain from "./components/pages/regmain";
import Login from "./components/pages/login";
import Register1 from "./components/pages/register1";
import Register2 from "./components/pages/register2";
import Register3 from "./components/pages/register3";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormProvider } from "./components/pages/FormContext";

const router = createBrowserRouter([
  { path: "/", element: <Regmain /> },
  { path: "/regstart", element: <Regstart /> },
  { path: "/login", element: <Login /> },
  { path: "/register1", element: <Register1 /> },
  { path: "/register2", element: <Register2 /> },
  { path: "/register3", element: <Register3 /> },
  { path: "*", element: <NotFoundPage /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);

reportWebVitals();
