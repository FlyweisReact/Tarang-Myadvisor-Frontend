/** @format */

import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="appointment-card boxShadow-container">
      <div className="profile-container">
        <img src={item?.advisorId?.image} alt="" />
        <div className="info">
          <p className="title"> {item?.advisorId?.fullname} </p>
          <p className="desc">
            {" "}
            <i
              className="fa-solid fa-location-dot"
              style={{ marginRight: "2px" }}
            />{" "}
            {item?.advisorId?.state} , {item?.advisorId?.city}
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
      <div className="flex-container">
        <div className="item">
          <span>Status</span>{" "}
        </div>
        <div className="item">
          <span>
            {" "}
            {item?.appointmentStatus === "APPOINTMENTBOOKED"
              ? "Booked"
              : "Pending"}{" "}
          </span>
        </div>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Book new appointment
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              navigate(`/counselling-session/live-2/${item?.advisorId?._id}`)
            }
          >
            Existed adwizors
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/find-an-adwizor")}>
            New adwizors
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const UserAppointments = () => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    getApi(endPoints.user.userAppointments, {
      setResponse: setData,
    });
  }, []);

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">My Appointments</p>
      </div>

      <div className="grid-container-for-3 appointment-card-box">
        {data.data.map((i, index) => (
          <Card item={i} key={`card${index}`} />
        ))}
      </div>
    </section>
  );
};

export default DashboardLayout(UserAppointments);
