/** @format */

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoImg, userRounded, bellIcon } from "../../../assest";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src={logoImg} alt="" className="logo" />
        </Link>

        <div>
          <select>
            <option>Study Abroad</option>
          </select>

          <select>
            <option>Study India</option>
          </select>

          <button
            className={
              location.pathname === "/user-dashboard/write-a-review"
                ? "filled"
                : ""
            }
            onClick={() => navigate("/user-dashboard/write-a-review")}
          >
            Write Review
          </button>
          <button
            className="filled"
            onClick={() => navigate("/user-dashboard/home")}
          >
            Dashboard
          </button>
          <img src={bellIcon} alt="" />
          <img src={userRounded} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
