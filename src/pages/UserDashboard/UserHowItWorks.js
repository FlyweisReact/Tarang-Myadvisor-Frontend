/** @format */

import React from "react";
import { howItWorkImg1, howItWorkImg2, howItWorkImg3 } from "../../assest";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const Cards = ({ item }) => {
  return (
    <div className="main">
      <img src={item.img} alt="" />
      <p className="title"> {item.title} </p>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio non
        magna vulputate at. Et lectus vulputate nisl.
      </p>
    </div>
  );
};

const UserHowItWorks = () => {
  const data = [
    {
      img: howItWorkImg1,
      title: "Find Your Counsellor",
    },
    {
      img: howItWorkImg2,
      title: "Make An Appointment",
    },
    {
      img: howItWorkImg3,
      title: "Get Services",
    },
  ];
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>How It Works</p>
      </div>

      <div className="user-how-it-works mb-3 mt-3">
        {data.map((i, index) => (
          <Cards item={i} key={index} />
        ))}
      </div>
    </section>
  );
};

export default DashboardLayout(UserHowItWorks);
