/** @format */

import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { uploadSvg } from "../../assest";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const AdwizorStudentProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({ data: {} });
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [preferredIntake, setPrefferedIntake] = useState("");
  const [preferredDegree, setPreferrefDegree] = useState("");
  const [yourHighestLevelOfEducation, setYourHighestLevelOfEducation] =
    useState("");
  const [yourHighestLevelOfEducationYear, setYourHighestLevelOfEducationYear] =
    useState("");
  const [gradesORpercentage, setGradesORPercentage] = useState("");
  const [validPassport, setValidPassport] = useState("");
  const [duolingoStatus, setduolingoStatus] = useState("");
  const [alreadyUniversityAdmit, setAlreadyUniversityAdmin] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState("");
  const [givenGRE, setGivenGRE] = useState("");
  const [image, setImage] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    getApi(endPoints.adwizor.getUserProfile(id), {
      setResponse: setProfile,
    });
  }, [id]);

  const uploadDocument = (name) => {
    const target = document.getElementById(name);
    target.click();
  };

  return (
    <section className="adwizor-panel">
      <div className="section-heading">
        <p className="title">Student Profile</p>
      </div>

      <div className="user-dashboard-profile">
        <div className="basic-details margin-div">
          <div className="main-container" style={{ alignItems: "flex-start" }}>
            <img src={profile?.data?.image} alt="" className="user-img" />
            <div className="content">
              <h4>{profile?.data?.fullname}</h4>
              <div className="item">
                <p>
                  {" "}
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ marginRight: "2px" }}
                  />{" "}
                  {profile?.data?.city} , {profile?.data?.state}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="update-profile">
        <div className="section-sub-heading">
          <p className="title">Basic Details</p>
        </div>

        <div className="grid-container-for-3 mt-3">
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullname}
            />
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="date"
              placeholder="D.O.B"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="Martial Status"
              onChange={(e) => setMartialStatus(e.target.value)}
              value={martialStatus}
            />
          </div>
        </div>

        <input
          type={"file"}
          onChange={(e) => setImage(e.target.files[0])}
          style={{ display: "none" }}
          id="profileIMg"
        />
        <button
          className="upload-document-btn mt-3"
          type="button"
          onClick={() => uploadDocument("profileIMg")}
        >
          <img src={uploadSvg} alt="" />
          <span>Upload profile photo </span>
        </button>

        <div className="section-sub-heading mt-3">
          <p className="title">Contact Details</p>
        </div>

        <div className="grid-container-for-3 mt-3">
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="tel"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>
        </div>

        <div className="section-heading mt-3">
          <p className="title">Education Details</p>
        </div>

        <div className="grid-container-for-3 mt-3">
          <div className="item" style={{ maxWidth: "100%" }}>
            <select
              onChange={(e) => setYourHighestLevelOfEducation(e.target.value)}
              value={yourHighestLevelOfEducation}
            >
              <option value="">Highest level of education ?</option>
              <option value="10th Standard">10th Standard</option>
              <option value="12th Standard">12th Standard</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="MBBS/MD">MBBS/MD</option>
            </select>
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <select
              onChange={(e) =>
                setYourHighestLevelOfEducationYear(e.target.value)
              }
              value={yourHighestLevelOfEducationYear}
            >
              <option value="">Highest level of education ?</option>
              <option value="Year of Graduation">Year of Graduation</option>
              <option value="2025 or later">2025 or later</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <input
              type="text"
              placeholder="Expected or Gained Percentage"
              onChange={(e) => setGradesORPercentage(e.target.value)}
              value={gradesORpercentage}
            />
          </div>
        </div>

        <div className="section-sub-heading mt-3 mb-2">
          <p className="title">Do you have a valid Passport ? </p>
        </div>
        <select
          onChange={(e) => setValidPassport(e.target.value)}
          value={validPassport}
        >
          <option value="">Select your prefrence</option>
          <option value="YES">YES</option>
          <option value="APPLIED">APPLIED</option>
          <option value="NO">NO</option>
        </select>

        <div className="section-sub-heading mt-3">
          <p className="title">Preferences</p>
        </div>

        <div className="grid-container-for-3 mt-3">
          <div className="item" style={{ maxWidth: "100%" }}>
            <select
              onChange={(e) => setDestinationCountry(e.target.value)}
              value={destinationCountry}
            >
              <option value="">Choose Your Destination</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <select
              onChange={(e) => setPrefferedIntake(e.target.value)}
              value={preferredIntake}
            >
              <option value="">Choose Your preferred Intake</option>
              <option value="September 2024">September 2024</option>
              <option value="Jan 2025">Jan 2025</option>
              <option value="May/Sept 2025">May/Sept 2025</option>
            </select>
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <select
              onChange={(e) => setPreferrefDegree(e.target.value)}
              value={preferredDegree}
            >
              <option value="">Choose Your preferred degree</option>
              <option value="PG Diploma">PG Diploma</option>
              <option value="Master's">Master's</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="MBA">MBA</option>
              <option value="PHD">PHD</option>
              <option value="Not decided">Not decided</option>
            </select>
          </div>
          <div className="item" style={{ maxWidth: "100%" }}>
            <select
              value={duolingoStatus}
              onChange={(e) => setduolingoStatus(e.target.value)}
            >
              <option value=""> IELTS/TOEFL/PTE/Duolingo status</option>
              <option value="Not decided">Not decided</option>
              <option value="Booked my exam">Booked my exam</option>
              <option value="Already gave the exam">
                Already gave the exam
              </option>
              <option value="Planning to give in next 2 months">
                Planning to give in next 2 months
              </option>
            </select>
          </div>
          <div className="item" style={{maxWidth : '100%'}} >
            <select
              value={alreadyUniversityAdmit}
              onChange={(e) => setAlreadyUniversityAdmin(e.target.value)}
            >
              <option value="">Do you already have a university admit</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>

          <div className="item" style={{maxWidth : '100%'}}>
            <select
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
            >
              <option value="">What are you looking for?</option>
              <option value="I want University Shortlist">I want University Shortlist</option>
              <option value="I want Admission Help">I want Admission Help</option>
              <option value="I want PR/Job only">I want PR/Job only</option>
              <option value="I want to check Admit Eligibility">I want to check Admit Eligibility</option>
              <option value="I want Visa Assistance">I want Visa Assistance</option>
              <option value="I want IELTS Preparation">I want IELTS Preparation</option>
            </select>
          </div>
          <div className="item" style={{maxWidth : '100%'}}>
            <select
              value={bookingConfirmation}
              onChange={(e) => setBookingConfirmation(e.target.value)}
            >
              <option value="">Do you have an exam booking confirmation?</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div className="item" style={{maxWidth : '100%'}}>
            <select
              value={givenGRE}
              onChange={(e) => setGivenGRE(e.target.value)}
            >
              <option value="">How You Given GRE</option>
              <option value="Already Given">Already Given</option>
          <option value="Taken date in next 2 months">
            Taken date in next 2 months
          </option>
          <option value="Plannig to give in next 2 months">
            Plannig to give in next 2 months
          </option>
          <option value="No plan for GRE as of now">
            No plan for GRE as of now
          </option>
            </select>
          </div>

      
        </div>

        <button className="upload-document-btn mt-3" type="button">
          <span>Next </span>
        </button>
      </form>
    </section>
  );
};

export default AdwizorLayout(AdwizorStudentProfile);
