/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { adwizorSidebarArr } from "../../../constant/constant";
import { LogoutHandler } from "../../../utils/utils";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="user-sidebar">
      <ul>
        {adwizorSidebarArr.map((i, index) => (
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

        <li onClick={() => LogoutHandler(dispatch, navigate)}>
          <i class="fa-solid fa-right-from-bracket"></i>
          <span> Log Out </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
