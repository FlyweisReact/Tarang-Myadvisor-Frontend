/** @format */

import React, { useState } from "react";
import { logoImg } from "../../assest/index";
import "../../css/navbar.css";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";
import { userRounded } from "../../assest/index";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("user-token") ? true : false;
  const userType = localStorage.getItem("user-type");
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
            <li>
              <Link to="/study-india">Study India</Link>
            </li>
            <li>
              <Link to="/connect-with-adwizor">
                Connect with Adwizor ({" "}
                <span style={{ color: "#F50000" }}>Live*</span> )
              </Link>
            </li>
            <li>Explore More</li>
          </ul>
        </div>
        {isLoggedIn ? (
          userType === "advisor" ? (
            <Link to="/adwizor-panel/my-profile">
              <img src={userRounded} alt="" className="user-img" />
            </Link>
          ) : (
            <Link to="/user-dashboard/home">
              <img src={userRounded} alt="" className="user-img" />
            </Link>
          )
        ) : (
          <button className="login-btn" onClick={() => setOpen(true)}>
            Log In
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
