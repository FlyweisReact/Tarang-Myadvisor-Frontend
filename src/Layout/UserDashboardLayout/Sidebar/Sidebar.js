/** @format */

import React from "react";
import {
  IcRoundChat,
  MdiAbout,
  MdiShare,
  solarCalendarBold,
  universitySvg,
  adwizorSvg,
  HomeSvg,
  healthIconBook
} from "../../../assest";

const data = [
  {
    img: HomeSvg,
    title: "Home",
  },
  {
    icon: <i className="fa-solid fa-user"></i>,
    title: "My Profile",
  },
  {
    icon: <i className="fa-solid fa-file"></i>,
    title: "My Documents",
  },
  {
    icon: <i className="fa-solid fa-school"></i>,
    title: "Program & School",
  },
  {
    img: adwizorSvg,
    title: "My Adwizor",
  },
  {
    img: universitySvg,
    title: "My Universities",
  },
  {
    img: IcRoundChat,
    title: "My Messages",
  },
  {
    img: solarCalendarBold,
    title: "Events",
  },
  {
    img: MdiShare,
    title: "Refer a friend",
  },
  {
    img: healthIconBook,
    title: "Connect with Adwizor",
  },
  {
    img: MdiAbout,
    title: "How It Works",
  },
];

const Sidebar = () => {
  return (
    <div className="user-sidebar">
      <ul>
        {data.map((i, index) => (
          <li key={index}>
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
