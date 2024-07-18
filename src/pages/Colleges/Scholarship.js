/** @format */

import React, { useState } from "react";
import { BlinkingHeading } from "../../components/HelpingComponents";
import { CollegeFilters } from "../../components/Study/CollegeSection";
import CollegePageLayout from "../../Layout/CollegeLayout/Layout/CollegePageLayout";
import { collegeRnd } from "../../assest";
import { Link } from "react-router-dom";
import { AlertModal } from "../../components/Modals/Modals";

const boxStyle = {
  backgroundColor: "#D9D9D9",
  height: "155px",
  boxShadow: "none",
};

const filterationData = {
  heading: "Filter",
  foundCount: "Found 550 Scholarships",
  options: [
    {
      title: "Courses",
      placeholder: "Find Courses",
      list: ["MBA / PGDMA", "B.E / B.Tech", "B.SC", "BA", "BBA / MBA"],
    },
    {
      title: "Merit Basis",
      placeholder: "Merit Basis",
      list: [
        "Entrance Exam",
        "Graduation Scores",
        "12th Examination",
        "10th Examination",
        "Brand Name  Scholarship Test ",
      ],
    },
    {
      title: "City",
      placeholder: "Find City",
      list: ["New Delhi", "Chennai", "Kolkata", "Tamil Nadu", "Noida"],
    },
    {
      title: "College Offered",
      placeholder: "Search College",
      list: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Income Based",
      placeholder: "Income Based",
      list: ["EWS Scholarship", "BPL Scholarship", "State Sponsored"],
    },
    {
      title: "Gender Based",
      placeholder: "Gender Based",
      list: ["Girls Scholarship", "Boy’s Scholarship", "Third Gender"],
    },
    {
      title: "Other Scholarships",
      placeholder: "Scholarships",
      list: [
        "Defense Scholarship",
        "Sports Scholarship",
        "SAARC Scholarship",
        "Approved Refugees ",
      ],
    },
  ],
};

const Scholarship = () => {
  const [open, setOpen] = useState(false);
  const myArr = new Array(9).fill(",");

  const ApplicationCard = () => {
    return (
      <div className="college-appliation-card-div">
        {[1, 1, 1, 1].map((_, index) => (
          <div className="college-appliation-card" key={index}>
            <div className="detail">
              <p className="title">Shree Ram College- Delhi Uni...</p>
              <div className="border-line" />
              <ul>
                <li>International Student eligible : Yes</li>
                <li>Amount : Variable Amount</li>
                <li>Type : Full-Ride-Scholarship</li>
                <li>Level of Study : Bachelor</li>
                <li>No. of Scholarship : 20</li>
              </ul>
              <Link to={"/college/read-more"} className="read-more">
                Read More
              </Link>
            </div>
            <div className="button-container">
              <button className="filled" onClick={() => setOpen(true)}>
                Apply Now
              </button>
              <button onClick={() => setOpen(true)}>Get Alert</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <AlertModal show={open} onHide={() => setOpen(false)} />
      <BlinkingHeading
        text={
          "Admissions Open for O P Jindal Global University. Click to Apply Now!"
        }
      />

      <section className="filter-college-section margin-div">
        <CollegeFilters data={filterationData} />
        <div className="result-div">
          <ApplicationCard />
          <div
            className="blank-div margin-div boxShadow-container"
            style={boxStyle}
          ></div>
          <ApplicationCard />

          <div className="popular-applied-links mt-5 mb-5">
            <ul className="Item">
              <li className="active">Most Popular Links</li>
              <li>Study in Delhi College</li>
              <li>Study in Chandigarh College</li>
              <li>Study in Delhi College</li>
              <li>Study in Chandigarh College</li>
              <li>Study in Delhi College</li>
              <li>Study in Chandigarh College</li>
              <li>Study in Delhi College</li>
              <li>Study in Delhi College</li>
            </ul>
            <ul className="Item college-desc">
              <li className="active">Most Applied Colleges</li>
              {myArr.map((_, index) => (
                <li className="details" key={`list${index}`}>
                  <span>
                    <img src={collegeRnd} alt="" />
                  </span>
                  <span>
                    <p className="title">College Name</p>
                    <p className="desc">College City</p>
                  </span>
                  <button className="apply">Apply</button>
                </li>
              ))}
            </ul>
            <ul className="Item college-desc">
              <li className="active">Top Rated Scholarships</li>
              {myArr.map((_, index) => (
                <li className="details" key={`list${index}`}>
                  <span>
                    <img src={collegeRnd} alt="" />
                  </span>
                  <span>
                    <p className="title">Scholarship Name</p>
                    <p className="desc">Amount</p>
                  </span>
                  <button className="apply">Apply</button>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="blank-div margin-div boxShadow-container"
            style={boxStyle}
          ></div>
          <ApplicationCard />

          <button className="load-more boxShadow-container">
            Load More...
          </button>
        </div>
      </section>
    </section>
  );
};

export default CollegePageLayout({ WrappedComponent: Scholarship });
