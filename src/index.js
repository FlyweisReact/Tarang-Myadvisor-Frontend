/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import "./css/style.css";
import "./css/media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import "react-notifications-component/dist/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
