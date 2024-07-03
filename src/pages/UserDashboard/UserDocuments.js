/** @format */

import React from "react";
import {  uploadSvg } from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { documentTabArr, documentTabArr2 } from "../../constant/constant";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const mainStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  maxHeight: "100%",
  overflowY: "auto",
  padding: 0,
  paddingTop: "20px",
};

const UserDocuments = () => {
  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="user-dashboard-profile">
        <div className="tab">
          <ul>
            <li className="active">Documents</li>
          </ul>
        </div>

        <div className="document-tab" style={mainStyle}>
          <h4>Mandatory Documents</h4>
          <div className="document-tracker">
            {documentTabArr.map((i, index) => (
              <div className="item" key={`documents${index}`}>
                <p> {i.title} </p>
                <button className="upload-btn">
                  {" "}
                  <img src={uploadSvg} alt="" />
                  Upload Document{" "}
                </button>
              </div>
            ))}
          </div>
          <h4>Additional Documents</h4>
          <div className="document-tracker">
            {documentTabArr2.map((i, index) => (
              <div className="item" key={`documents1${index}`}>
                <p> {i.title} </p>
                <button className="upload-btn">
                  {" "}
                  <img src={uploadSvg} alt="" />
                  Upload Document{" "}
                </button>
              </div>
            ))}
          </div>

          <button className="submit-btn">Save</button>
        </div>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserDocuments);
