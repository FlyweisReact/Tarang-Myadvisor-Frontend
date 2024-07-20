/** @format */

import React from "react";
import { collegeIcon, CollegeImg38, rankingIcon } from "../assest";
import { CollegeFilters } from "../components/Study/CollegeSection";
import TableLayout from "../components/TableLayout";
import WrappedComponent from "../Layout/CounellingLayout/Layout/WrappedComponent";

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

const collegeDetails = [
  [
    "#1",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#2",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#3",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#4",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#5",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#6",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#7",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#8",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#9",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#10",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#11",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#12",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#13",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#14",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
  [
    "#15",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <hr style={{ width: "60px", display: "block", margin: "auto" }} />,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,

    <div className="button-container">
      <button className="filled">Apply Now</button>
      <button className="outline">Add to Common Application Form</button>
    </div>,
  ],
];

const CollegeLists = () => {
  return (
    <>
      <hr className="m-0" />
      <h4 className="normal-heading mt-5">
        Top Featured Colleges In India based on 2023 Ranking{" "}
      </h4>
      <div className="about-us-doubt margin-div boxShadow-container p-0">
        <img src={CollegeImg38} alt="" />
        <div className="detail">
          <h1>
            Have Any Doubt?
            <br />
            Connect With Us
          </h1>
          <button>Connect Now</button>
        </div>
      </div>

      <section className="filter-college-section margin-div mt-0">
        <CollegeFilters data={filterationData} />
        <div className="result-div ">
          <div>
            <TableLayout
              thead={[
                "CH Rank",
                "College",
                "Ranking",
                "Application Date",
                "Fees",
                "Cutoff",
              ]}
              tbody={collegeDetails}
              className="college-table"
            />
            <div className="about-us-doubt margin-div boxShadow-container p-0">
              <img src={CollegeImg38} alt="" />
              <div className="detail">
                <h1>
                  Have Any Doubt?
                  <br />
                  Connect With Us
                </h1>
                <button>Connect Now</button>
              </div>
            </div>
            <TableLayout
              thead={[
                "CH Rank",
                "College",
                "Ranking",
                "Application Date",
                "Fees",
                "Cutoff",
              ]}
              tbody={collegeDetails}
              className="college-table"
            />
                <button className="load-more boxShadow-container">
            Load More...
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WrappedComponent({ WrappedComponent: CollegeLists });
