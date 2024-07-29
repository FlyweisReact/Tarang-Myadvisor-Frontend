/** @format */

import React, { useState, useEffect } from "react";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Card = ({ item }) => {
  return (
    <div className="appointment-card boxShadow-container">
      <div className="profile-container">
        <img src={item?.userId?.image} alt="" />
        <div className="info">
          <p className="title"> {item?.userId?.fullname} </p>
          <p className="desc">
            {" "}
            <i
              className="fa-solid fa-location-dot"
              style={{ marginRight: "2px" }}
            />{" "}
            {item?.userId?.state} , {item?.userId?.city}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex-container">
        <div className="item">
          <i className="fa-solid fa-calendar-days"></i>
          <span> {item?.dateofAppoinment} </span>
        </div>
        <div className="item">
          <i className="fa-solid fa-clock"></i>
          <span> {item?.appoinmentTime} </span>
        </div>
      </div>
    </div>
  );
};

const AdwizorApppointments = () => {
  const [tab, setTab] = useState("APPOINTMENTBOOKED");
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.adwizor.getAppointments(tab), {
      setResponse: setData,
    });
  }, [tab]);

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">My Appointments</p>
      </div>

      <section className="user-homePage mt-4 mb-3">
        <div className="user-dashboard-profile">
          <div className="tab">
            <ul>
              <li
                className={`${tab === "APPOINTMENTBOOKED" ? "active" : ""}`}
                onClick={() => setTab("APPOINTMENTBOOKED")}
              >
                Confirmed
              </li>
              <li
                className={`${tab === "PENDING" ? "active" : ""}`}
                onClick={() => setTab("PENDING")}
              >
                Pending
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="grid-container-for-3 appointment-card-box">
        {data.data.map((i, index) => (
          <Card item={i} key={`card${index}`} />
        ))}
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorApppointments);
