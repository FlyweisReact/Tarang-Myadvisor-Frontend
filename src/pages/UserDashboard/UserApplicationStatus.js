/** @format */

import React from "react";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { uploadSvg, verifiedSvg } from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { useNavigate } from "react-router-dom";

const TimelineItem = ({ label, className }) => {
  return (
    <div className={`timeline-item ${className}`}>
      <div className={`timeline-icon`}>
        <img src={verifiedSvg} alt="" />
      </div>
      <div className="timeline-text">{label}</div>
    </div>
  );
};

const UserApplicationStatus = () => {
  const navigate = useNavigate();
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>Application Status</p>
        <button className="outlined" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="application-status mt-3 mb-3">
        <div className="timeline">
          <TimelineItem
            label="Applied"
            icon={<i className="fa-solid fa-check"></i>}
            className="applied"
          />
          <TimelineItem
            label="Offer Received"
            icon={<i className="fa-solid fa-check"></i>}
            className="offer-received"
          />
          <TimelineItem
            label="Accepted"
            icon={<i className="fa-solid fa-check"></i>}
            className="accepted"
          />
          <TimelineItem
            label="Visa Arrived"
            icon={<i className="fa-solid fa-check"></i>}
            className="visa-arrived"
          />
        </div>
      </div>

      <div className="heading">
        <p>Reason of Rejection</p>
      </div>

      <div className="upload-document application-status mt-3 mb-3">
        <p className="title">
          Note : University Rejected Documents , Upload again documents ( 10th ,
          Intermediate , UG)
        </p>
        <button className="upload-doc">
          <img src={uploadSvg} alt="" />
          Upload
        </button>
        <p className="requires">(PDF , PNG , JPEG)</p>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserApplicationStatus);
