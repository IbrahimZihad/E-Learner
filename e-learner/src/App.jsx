import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/router"; // Make sure this file uses generateRoutes()

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
