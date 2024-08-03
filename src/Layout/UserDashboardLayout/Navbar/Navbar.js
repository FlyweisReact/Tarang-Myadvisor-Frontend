/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoImg, userRounded, bellIcon } from "../../../assest";
import { UserPanelBar } from "../../../components/Modals/Modals";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userType = localStorage.getItem("user-type");
  return (
    <>
      <UserPanelBar show={open} handleClose={() => setOpen(false)} />
      <div className="header user-panel-nav">
        <Link to={"/"}>
          <img src={logoImg} alt="" className="logo" />
        </Link>

        <div>
          {userType === "advisor" ? (
            <>
              <Link to="/adwizor-panel/message">
                <img src={bellIcon} alt="" />
              </Link>
              <Link to="/adwizor-panel/my-profile">
                <img src={userRounded} alt="" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/user-dashboard/my-messages">
                <img src={bellIcon} alt="" />
              </Link>
              <Link to="/user-dashboard/profile">
                <img src={userRounded} alt="" />
              </Link>
            </>
          )}

          <i className="fa-solid fa-bars" onClick={() => setOpen(true)} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
