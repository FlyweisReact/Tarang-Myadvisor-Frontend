/** @format */

import React from "react";
import { logoImg } from "../../assest/index";

import "../../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to={"/home"}>
        <img src={logoImg} alt="" className="logo" />
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link to={"/find-an-adwizor"}> FInd an Adwizor</Link>
          </li>
          <li>Study Abroad</li>
          <li>Study India</li>
          <li>
            Connect with Adwizor({" "}
            <span style={{ color: "#F50000" }}>Live*</span> )
          </li>
          <li>Explore More</li>
        </ul>
      </div>
      <button className="login-btn">Log In</button>
    </div>
  );
};

export default Navbar;
