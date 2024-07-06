/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { logoImg, userRounded } from "../../assest";

const CollegeHomepage = () => {
  return (
    <section className="homepage p-0">
      <div className="college-navbar-section">
        <div className="college-nav">
          <Link to={"/"}>
            <img src={logoImg} alt="" className="logo" />
          </Link>
          <ul>
            <li>Top Universities</li>
            <li>Top Courses </li>
            <li>Top Exams</li>
            <li>Scholarships</li>
            <li>Loan</li>
            <li>Common Application</li>
            <li>Scholarship Test</li>
            <li>More</li>
          </ul>
          <img src={userRounded} alt='' />
        </div>
      </div>
    </section>
  );
};

export default CollegeHomepage;
