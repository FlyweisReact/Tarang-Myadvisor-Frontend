/** @format */

import React from "react";
import { logoImg } from "../../assest/index";

const Navbar = () => {
  return (
    <div className="header">
      <img src={logoImg} alt="" className="logo" />
      <div className="links">
        <ul>
          <li>FInd an Adwizor</li>
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
