/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoImg, userRounded } from "../../../assest/index";
import {
  bangaloreColleges,
  chennaiColleges,
  mumbaiColleges,
  topDelhiUniversities,
} from "../../../constant/constant";
import "./CollegeNav.css";

const collegeNavConst = [
  {
    title: "Top Universities",
    modal: true,
    modalData: {
      title: "Top University",
      lists: [
        {
          title: "Delhi",
          arr: topDelhiUniversities.map((i) => i),
        },
        {
          title: "Mumbai",
          arr: mumbaiColleges.map((i) => i),
        },
        {
          title: "Chennai",
          arr: chennaiColleges.map((i) => i),
        },
        {
          title: "Bangalore",
          arr: bangaloreColleges.map((i) => i),
        },
      ],
    },
  },
  {
    title: "Top Courses",
    modal: true,
    modalData: {
      title: "Top Courses",
      lists: [
        {
          title: "Management",
          arr: [
            "Business analytics",
            "Business tools ",
            "Communication",
            "CSR",
            "Business analytics ",
            "Business analytics",
            "Business tools ",
            "Communication",
            "CSR",
            "Business analytics",
            "Business tools ",
            "Communication",
            "CSR",
          ],
        },
        {
          title: "Finance",
          arr: ["Accounting", "Banking", "Investing", "Law", "Insurance"],
        },
        {
          title: "Design",
          arr: [
            "UX UI Design",
            "Graphic Design",
            "Interaction Design",
            "Universal Design",
            "Architect Design ",
          ],
        },
        {
          title: "Health Care",
          arr: [
            "Fitness & Nutrition",
            "Health Care Research",
            "Health Care Management",
          ],
        },
      ],
    },
  },
  {
    title: "Top Exams",
    modal: true,
    modalData: {
      title: "Top Exams",
      lists: [
        {
          arr: [
            "CAT",
            "UGC NET",
            "IES Exams",
            "NEET-UG",
            "IBPS RRB",
            "CAT",
            "UGC NET",
            "IES Exams",
            "NEET-UG",
            "IBPS RRB",
            "CAT",
            "UGC NET",
            "IES Exams",
            "NEET-UG",
            "IBPS RRB",
          ],
        },
        {
          arr: ["NDA", "CA", "NID", "IIT-JEE", "UPSC"],
        },
        {
          arr: [
            "CAT",
            "UGC NET",
            "IES Exams",
            "NEET-UG",
            "IBPS RRB",
            "CAT",
            "UGC NET",
            "IES Exams",
            "NEET-UG",
            "IBPS RRB",
            "CAT",
            "UGC NET",
            "IES Exams",
            "NEET-UG",
            "IBPS RRB",
          ],
        },
        {
          arr: ["NDA", "CA", "NID", "IIT-JEE", "UPSC"],
        },
      ],
    },
  },
  {
    title: "Scholarships",
    modal: false,
    link: "/college/scholarship",
  },
  {
    title: "Loan",
    modal: false,
    link: "/college/subscription",
  },
  {
    title: "Common Application",
    modal: false,
    link: "/college/subscription",
  },
  {
    title: "Scholarship Test",
    modal: false,
    link: "/college/scholarship-test",
  },
  {
    title: "More",
    modal: false,
    link: "/college/scholarship-test",
  },
];

const CollegeNavbar = ({ Children }) => {
  const navigate = useNavigate();

  function limitText(text) {
    if (text.length > 15) {
      return text.substring(0, 15) + "...";
    } else {
      return text;
    }
  }

  return (
    <div className="college-navbar-section">
      <div className="college-nav">
        <Link to={"/"}>
          <img src={logoImg} alt="" className="logo" />
        </Link>

        <ul>
          {collegeNavConst.map((i, index) => (
            <li
              className="above-links"
              onClick={() => navigate(i.link)}
              key={`link${index}`}
            >
              {i.title}
              {i.modal === true && (
                <>
                  <div class="triangle"></div>
                  <div className="custom-dropdown">
                    <h4 className="title"> {i.modalData.title} </h4>
                    <div className="flex-container">
                      {i.modalData.lists.map((item, index) => (
                        <div className="Item" key={`lisss${index}`}>
                          <h4 className="title"> {item.title} </h4>
                          <ul>
                            {item.arr.map((i, index) => (
                              <li key={`${item.title}${index}`}>
                                {limitText(i)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="nav-cover"></div>
                </>
              )}
            </li>
          ))}
        </ul>
        <Link to={"/user-dashboard/home"}>
          <img src={userRounded} alt="" className="user-rounded" />
        </Link>
      </div>

      {Children && <Children />}
    </div>
  );
};

export default CollegeNavbar;
