/** @format */

import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { uploadSvg } from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const mainStyle = {
  backgroundColor: "transparent",
  boxShadow: "none",
  maxHeight: "100%",
  overflowY: "auto",
  padding: 0,
  paddingTop: "20px",
};

const UserDocuments = () => {
  const [documents, setDocuments] = useState({
    documentClassX: "",
    intermediate: "",
    btechOrAnyDegree: "",
    aptitudeTestGRE_GMAT_IELTS: "",
    professionalExperience: "",
    panCard: "",
    aadharCard: "",
    bankStatementOrAffidavit: "",
    passport: "",
    statementOfPurpose: "",
    letterOfRecommendation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prev) => ({ ...prev, [name]: files[0] }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(documents).forEach((key) => {
      fd.append(key, documents[key]);
    });

    postApi(endPoints.uploadUserDocument, fd, {
      successMsg: "Uploaded",
      setLoading,
    });
  };

  const uploadDocument = (name) => {
    const target = document.getElementById(name);
    target.click();
  };

  const mandatoryDocuments = [
    { key: "documentClassX", title: "Class X" },
    { key: "intermediate", title: "Intermediate" },
    { key: "btechOrAnyDegree", title: "B.Tech or Any Degree" },
    {
      key: "aptitudeTestGRE_GMAT_IELTS",
      title: "Aptitude Test (GRE/GMAT/IELTS)",
    },
    { key: "professionalExperience", title: "Professional Experience" },
    { key: "panCard", title: "PAN Card" },
    { key: "aadharCard", title: "Aadhar Card" },
    { key: "bankStatementOrAffidavit", title: "Bank Statement or Affidavit" },
    { key: "passport", title: "Passport" },
  ];

  const addtitionalFields = [
    { key: "statementOfPurpose", title: "Statement of Purpose" },
    { key: "letterOfRecommendation", title: "Letter of Recommendation" },
  ];

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="user-dashboard-profile">
        <div className="tab">
          <ul>
            <li className="active">Documents</li>
          </ul>
        </div>

        <form onSubmit={submitHandler}>
          <div className="document-tab" style={mainStyle}>
            <h4>Mandatory Documents</h4>
            <div className="document-tracker">
              {mandatoryDocuments.map((doc) => (
                <div className="item" key={doc.key}>
                  <p>{doc.title}</p>
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={() => uploadDocument(doc.key)}
                  >
                    <img src={uploadSvg} alt="" />
                    Upload Document
                  </button>
                  <input
                    type="file"
                    id={doc.key}
                    name={doc.key}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              ))}
            </div>
            <h4>Additional Documents</h4>
            <div className="document-tracker">
              {addtitionalFields.map((doc) => (
                <div className="item" key={doc.key}>
                  <p>{doc.title}</p>
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={() => uploadDocument(doc.key)}
                  >
                    <img src={uploadSvg} alt="" />
                    Upload Document
                  </button>
                  <input
                    type="file"
                    id={doc.key}
                    name={doc.key}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              ))}
            </div>

            <button type="submit" className="submit-btn">
              {loading ? <ClipLoader color="#fff" /> : "Save"}
            </button>
          </div>
        </form>
      </div>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserDocuments);
