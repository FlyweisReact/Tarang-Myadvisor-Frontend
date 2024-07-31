/** @format */

import React, { useEffect, useState } from "react";
import { Img11, Img12, Img13, Img14, Img15, Img16 } from "../../assest";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const data = [
  {
    img: Img11,
    title: "Due Task/ Incomplete",
  },
  {
    img: Img12,
    title: "Upcoming Appointments",
  },
  {
    img: Img13,
    title: "Message  board",
  },
  {
    img: Img14,
    title: "Total Offers (<9 Months)",
  },
  {
    img: Img15,
    title: "Active Application (< 9months)",
  },
  {
    img: Img16,
    title: "Paid(< 9months)",
  },
];

const AdwizorDashboard = () => {
  const [profile, setProfile] = useState({
    data: {
      fullname: "",
    },
  });

  useEffect(() => {
    getApi(endPoints.getAdwizorProfile, {
      setResponse: setProfile,
    });
  }, []);

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Welcome , {profile.data.fullname}</p>
        <button>Add New Student</button>
      </div>

      <div className="grid-container-for-4" style={{ paddingTop: "40px" }}>
        {data.map((i, index) => (
          <div
            className="adwizor-dash-item boxShadow-container"
            key={`dash${index}`}
          >
            <img src={i.img} alt="" />
            <p> {i.title} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorDashboard);
