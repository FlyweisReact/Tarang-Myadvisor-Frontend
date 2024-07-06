/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  userDashboardSidebar,
  userDashboardSidebar2,
} from "../../../constant/constant";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const newArr =
    location.pathname === "/user-dashboard/write-a-review"
      ? userDashboardSidebar2
      : userDashboardSidebar;

  return (
    <div className="user-sidebar">
      <ul>
        {newArr.map((i, index) => (
          <li
            key={index}
            className={`${location.pathname === i.link ? "active" : ""}`}
            onClick={() => navigate(i.link)}
          >
            {i.img && <img src={i.img} alt="" />}
            {i.icon}
            <span> {i.title} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
