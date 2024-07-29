/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './css/style.css'
import './css/media.css'
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import 'react-notifications-component/dist/theme.css'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
