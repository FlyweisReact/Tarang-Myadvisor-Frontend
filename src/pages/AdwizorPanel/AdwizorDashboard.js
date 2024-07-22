/** @format */

import React, { useEffect, useState } from "react";
import { Img11, Img12, Img13, Img14, Img15, Img16, Img17 } from "../../assest";
import TableLayout from "../../components/TableLayout";
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
  {
    img: Img17,
    title: "Student Current Year",
  },
];

const tableBody = [
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>Harvard University , Cambridge , USA</span>,
    <button className="status-pending">
      7 days left <br /> 13-05-2024
    </button>,
  ],
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>
      Ucla University , Cambridge , <br />
      USA
    </span>,
    <button className="status-orange">
      2 weeks left <br />
      13-05-2024
    </button>,
  ],
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>
      Stanford University , Cambridge , <br />
      USA
    </span>,
    <button className="status-orange">
      2 weeks left <br />
      13-05-2024
    </button>,
  ],
  [
    <a href={"#doc"} className="visit-link">
      Documents & Acknowledgement
    </a>,
    "#4254371",
    <span>
      Pride University , Cambridge , <br />
      USA
    </span>,
    <button className="status-success">
      3 months <br />
      13-07-2024
    </button>,
  ],
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

      <div className="section-heading mt-5">
        <p className="title">Task Management</p>
      </div>

      <div className="task-table boxShadow-container mt-3">
        <p className="sub-title">Showing : 06 / 120 Tasks</p>
        <TableLayout
          thead={[
            "Task Title",
            "Application ID",
            "School / University",
            "Due Date",
          ]}
          tbody={tableBody}
        />
        <button className="show-all"> Show all applications</button>
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorDashboard);
