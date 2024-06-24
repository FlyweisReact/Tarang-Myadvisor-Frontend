/** @format */

import React, { useState } from "react";
import { logoImg } from "../../assest/index";
import "../../css/navbar.css";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LoginModal show={open} onHide={() => setOpen(false)} />
      <div className="header">
        <Link to={"/"}>
          <img src={logoImg} alt="" className="logo" />
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link to={"/find-an-adwizor"}> FInd an Adwizor</Link>
            </li>
            <li>
              <Link to="/study-abroad">Study Abroad</Link>
            </li>
            <li>Study India</li>
            <li>
              Connect with Adwizor({" "}
              <span style={{ color: "#F50000" }}>Live*</span> )
            </li>
            <li>Explore More</li>
          </ul>
        </div>
        <button className="login-btn" onClick={() => setOpen(true)}>
          Log In
        </button>
      </div>
    </>
  );
};

export default Navbar;
