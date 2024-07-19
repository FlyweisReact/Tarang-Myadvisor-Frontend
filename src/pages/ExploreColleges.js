/** @format */

import React, { useState } from "react";
import { CollegeFilters } from "../components/Study/CollegeSection";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";
import { CustomeDropdown } from "../components/HelpingComponents";
import { CollegeImg38, NearlyCollege1 } from "../assest";
import { AlertModal } from "../components/Modals/Modals";
import { useNavigate } from "react-router-dom";

const filterationData = {
  title: "Private Colleges / Government Colleges",
  heading: "Filter",
  foundCount: "Found 5503 Colleges",
  options: [
    {
      title: "Courses",
      placeholder: "Find Courses",
      list: ["MBA / PGDMA", "B.E / B.Tech", "B.SC", "BA", "BBA / MBA"],
    },
    {
      title: "State",
      placeholder: "Find State",
      list: [
        "Delhi NCR",
        "Maharashtra",
        "Uttar Pradesh",
        "Jaipur",
        "Bangalore",
      ],
    },
    {
      title: "City",
      placeholder: "Find City",
      list: ["New Delhi", "Chennai", "Kolkata", "Tamil Nadu", "Noida"],
    },
    {
      title: "Stream",
      placeholder: "Find Stream",
      list: ["Management", "Science", "Arts", "Computer Science", "Commerce"],
    },
    {
      title: "Program Type",
      placeholder: "Program Type",
      list: ["Full time", "Part time", "Distance"],
    },
    {
      title: "Entrance Exam   Accepted",
      placeholder: "Entrance Exam",
      list: ["GATE", "CAT", "MAT", "JEE MAIN", "CMAT", "XAT"],
    },
    {
      title: "Avg. Fee Per Year ",
      placeholder: "Average Fee",
      list: ["0- 25k", "0- 35k", "0- 50k", "0- 100k", "0- 200k", "0- 500k"],
    },
    {
      title: "Course Type",
      placeholder: "Course Type",
      list: ["Diploma", "Degree", "Certificate"],
    },
    {
      title: "Agency",
      placeholder: "Agency",
      list: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Affiliation",
      placeholder: "Affiliation",
      list: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      title: "Course Duration ",
      placeholder: "Duration ",
      list: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
    {
      title: "Institute Grade",
      placeholder: "Institute Grade",
      list: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
    },
  ],
};

const optionsMenu = [
  {
    title: "Popularity",
    items: [],
    titleIcon: <i className="fa-solid fa-bars"></i>,
    caretIcon: true,
  },
];

const boxStyle = {
  backgroundColor: "#fff",
  height: "200px",
};

const ExploreColleges = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const navigate = useNavigate();

  const ApplicationCard = () => {
    return (
      <div className="near-college-card">
        <div className="img-container">
          <img
            src={NearlyCollege1}
            alt=""
            className="college-img"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/college-micro-info")}
          />
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <p>9.5/10</p>
          </div>
        </div>

        <div className="description">
          <div className="college-title">
            <p className="name">Asia Pacific Institute of... </p>
            <span className="location">
              <i class="fa-solid fa-location-dot"></i>
              Kochi, Kerala | MCI Accredited
            </span>
          </div>

          <ul className="points">
            <li>
              {" "}
              <i className="fa-solid fa-circle"></i>
              <p>MBBS</p>
            </li>
            <li>
              <i className="fa-solid fa-circle"></i>
              <p>Admission Open</p>
            </li>
            <li>
              <i className="fa-solid fa-circle"></i>
              <p>M.Ch</p>
            </li>
            <li>
              <i className="fa-solid fa-circle"></i>
              <p>Course Fee</p>
            </li>
          </ul>

          <div className="btn-container">
            <button className="apply-btn" onClick={() => setOpen(true)}>
              Apply Now{" "}
            </button>
            <button className="outlined-btn" onClick={() => setOpen1(true)}>
              Brochure
            </button>
          </div>
          <div className="btn-container">
            <button className="apply-btn" onClick={() => setOpen(true)}>
              Expert Talk{" "}
            </button>
            <button className="outlined-btn">Compare</button>
          </div>
          <button className="outlined-btn">
            Add to common Application Form
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <AlertModal show={open} onHide={() => setOpen(false)} />
      <AlertModal
        show={open1}
        onHide={() => setOpen1(false)}
        title={"Register Now To Download Brochure"}
      />

      <section className="filter-college-section margin-div mt-0">
        <CollegeFilters data={filterationData} />
        <div className="result-div ">
          <div className="top-colleges">
            <div className="top-heading mb-2">
              <p>List of Top Colleges In India based on 2023 Ranking</p>
              {optionsMenu.map((i, index) => (
                <CustomeDropdown
                  items={i.items}
                  className={"dropdown-button"}
                  title={i.title}
                  titleIcon={i.titleIcon}
                  caretIcon={i.caretIcon}
                  key={index}
                />
              ))}
            </div>
            <div className="grid-container-for-4">
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
            </div>
            <div
              className="blank-div margin-div boxShadow-container"
              style={boxStyle}
            ></div>
            <div className="grid-container-for-4">
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
              <ApplicationCard />
            </div>

            <div className="about-us-doubt margin-div boxShadow-container p-0">
              <img src={CollegeImg38} alt="" />
              <div className="detail">
                <h1>
                  Upto 100% Scholarships
                  <br />
                  Available
                </h1>
                <button>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WrappedComponent({ WrappedComponent: ExploreColleges });
