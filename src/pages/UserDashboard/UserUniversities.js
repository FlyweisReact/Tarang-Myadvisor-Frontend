/** @format */

import React, { useState } from "react";
import { collegeImg, ukSquare, usaSquare } from "../../assest";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";
import { CollegeResults } from "../../components/Study/CollegeSection";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const nav = ["All", "Engaged", "Applied", "Visa", "Rejected"];

const colleges = [
  {
    img: usaSquare,
    title: "Harvard University , Cambridge , USA",
    collegeImg: collegeImg,
    btn1: "Applied",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "recived",
  },
  {
    img: usaSquare,
    title: "University of New Heaven , USA",
    collegeImg: collegeImg,
    btn1: "Visa Arrived",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "approved",
  },
  {
    img: ukSquare,
    title: "Ucla University , UK",
    collegeImg: collegeImg,
    btn1: "Offer Recieved",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "pending",
  },
  {
    img: ukSquare,
    title: "Stanford University , UK",
    collegeImg: collegeImg,
    btn1: "Rejected",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "decline",
  },
];

const EngagedColleges = [
  {
    img: usaSquare,
    title: "University of New Heaven , USA",
    collegeImg: collegeImg,
    btn1: "Engaged",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "applied",
  },
  {
    img: usaSquare,
    title: "Harvard University , Cambridge , USA",
    collegeImg: collegeImg,
    btn1: "Engaged",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "applied",
  },
];

const appliedColleges = [
  {
    img: usaSquare,
    title: "Ucla University , UK",
    collegeImg: collegeImg,
    btn1: "Applied",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "recived",
  },
  {
    img: usaSquare,
    title: "Harvard University , Cambridge , USA",
    collegeImg: collegeImg,
    btn1: "Applied",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "recived",
  },
  {
    img: usaSquare,
    title: "Harvard University , Cambridge , USA",
    collegeImg: collegeImg,
    btn1: "Applied",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "recived",
  },
];

const visaColleges = [
  {
    img: usaSquare,
    title: "New Heaven  University , USA",
    collegeImg: collegeImg,
    btn1: "Visa Arrived",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "approved",
  },
  {
    img: usaSquare,
    title: "University of New Heaven , USA",
    collegeImg: collegeImg,
    btn1: "Visa Arrived",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "approved",
  },
];

const rejectedColleges = [
  {
    img: usaSquare,
    title: "Ucla University , UK",
    collegeImg: collegeImg,
    btn1: "Rejected",
    btn2: "View Status",
    isFav: true,
    isSaved: true,
    status: "decline",
  },
];

const UserUniversities = () => {
  const [type, setType] = useState("All");

  const renderSwitchComponent = () => {
    switch (type) {
      case "All":
        return <CollegeResults colleges={colleges} />;
      case "Engaged":
        return <CollegeResults colleges={EngagedColleges} />;
      case "Applied":
        return <CollegeResults colleges={appliedColleges} />;
      case "Visa":
        return <CollegeResults colleges={visaColleges} />;
      case "Rejected":
        return <CollegeResults colleges={rejectedColleges} />;
      default:
        return <CollegeResults colleges={colleges} />;
    }
  };

  return (
    <section className="user-homePage mt-3 with-bg-img">
      <div className="heading">
        <p>My Universities</p>
      </div>
      <div className="user-dashboard-profile mt-4">
        <div className="tab">
          <ul>
            {nav.map((i, index) => (
              <li
                key={index}
                className={`${type === i ? "active" : ""}`}
                onClick={() => setType(i)}
              >
                {" "}
                {i}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="filter-college-section mt-3 user-universities">
        <div className="result-div">
          <div className="results">{renderSwitchComponent()}</div>
        </div>
      </section>

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserUniversities);
