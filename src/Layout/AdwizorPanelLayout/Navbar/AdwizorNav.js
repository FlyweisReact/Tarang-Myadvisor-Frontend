/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { logoImg, userRounded, bellIcon } from "../../../assest";
import "./AdwizorNav.css";

const AdwizorNav = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src={logoImg} alt="" className="logo" />
        </Link>

        <div>
          <img src={bellIcon} alt="" />
          <img src={userRounded} alt="" />
        </div>
      </div>
    </>
  );
};

export default AdwizorNav;
