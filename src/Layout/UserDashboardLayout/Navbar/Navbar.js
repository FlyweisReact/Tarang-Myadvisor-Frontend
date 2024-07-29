/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { logoImg, userRounded, bellIcon } from "../../../assest";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src={logoImg} alt="" className="logo" />
        </Link>

        <div>
          <Link to="/user-dashboard/my-messages">
            <img src={bellIcon} alt="" />
          </Link>
          <Link to="/user-dashboard/home">
            <img src={userRounded} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
