import logo from './logo.svg';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {router} from "./routes";

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
