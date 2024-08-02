import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
