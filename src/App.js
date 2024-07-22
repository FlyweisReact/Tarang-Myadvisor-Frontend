/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import allRoutes from "./Routes/Route";
import { ScrollToTop } from "./utils/utils";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ReactNotifications />
      <Routes>
        {allRoutes.map((routeConfig, index) => (
          <Route
            path={routeConfig.route}
            element={routeConfig.component}
            key={`routeConfig${index}`}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
