/** @format */

import React from "react";
import {
  filterSlash,
  bookmarkImg,
  heartImg,
  locationHollow,
  flag,
  coin,
  combineUser,
  badgeImg,
  donorImg,
  examImg,
} from "../../assest";

const filteArr = [
  {
    title: "Courses",
    placeholder: "Find Courses",
    list: ["MBA / PGDMA", "B.E / B.Tech", "B.SC", "BA", "BBA / MBA"],
  },
  {
    title: "State",
    placeholder: "Find State",
    list: ["Luci", "Snafro", "Jamesy", "Willion", "Canii"],
  },
  {
    title: "Stream",
    placeholder: "Find Stream",
    list: ["Management", "Science", "Arts", "Computer Science", "Commerce"],
  },
];

const CollegeFilters = () => {
  return (
    <div className="filters-div">
      <p className="title">Private Colleges / Government Colleges</p>
      <h4>Filter</h4>
      <p className="result-text">Found 5503 Colleges</p>

      <div className="content-div">
        <div className="flex-div">
          {filteArr.map((i, index) => (
            <div className="Items" key={`filterArr${index}`}>
              <div className="heading">
                <p className="title">{i.title}</p>
                <img src={filterSlash} alt="" />
              </div>

              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type={"search"} placeholder={i.placeholder} />
              </div>

              <ul>
                {i.list.map((item, index) => (
                  <li key={`${item}/${index}`}>
                    <input type={"checkbox"} />
                    <span> {item} </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CollegeResults = ({ colleges }) => {
  return colleges.map((i, index) => (
    <div className="main" key={`college${index}`}>
      <div className="head">
        <div className="title">
          <img src={i.img} alt="flag" />
          <p> {i.title} </p>
        </div>
        <div className="actions">
          <img src={heartImg} alt="" />
          <div className="blank"></div>
          <img src={bookmarkImg} alt="" />
        </div>
      </div>
      <div className="details">
        <img src={i.collegeImg} alt="" className="college-img" />
        <div className="content">
          <div className="tags">
            <div className="rating">
              <p>4.1</p> <i className="fa-solid fa-star"></i>
            </div>
            <p className="review">(9 Reviews)</p>

            <div className="location">
              <img src={locationHollow} alt="" />
              <p>Cambridge , USA</p>
            </div>
            <div className="location">
              <img src={flag} alt="" />
              <p>Private</p>
            </div>
          </div>

          <div className="package">
            <div className="item">
              <div className="upper">
                <img src={coin} alt="" />
                <p>85 K - 2.4 Lacs</p>
              </div>
              <p className="faded">Fees</p>
            </div>
            <div className="item">
              <div className="upper">
                <img src={donorImg} alt="" />
                <p>4.8 Lacs</p>
              </div>
              <p className="faded">Avg Package</p>
            </div>
            <div className="item">
              <div className="upper">
                <img src={examImg} alt="" />
                <p>TNEA...s</p>
              </div>
              <p className="faded">Exams</p>
            </div>
            <div className="item">
              <div className="upper">
                <img src={badgeImg} alt="" />
                <p>NBA...</p>
              </div>
              <p className="faded">Accredition</p>
            </div>
          </div>

          <div className="shortlisted-container">
            <div className="user-images">
              <img src={combineUser} alt="" className="user-image" />
              <div className="skewDiv"></div>
            </div>
            <p className="shortlisted-text">Shortlisted by 1545+ students</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="brochure">
        <ul>
          <li>
            <i className="fa-solid fa-circle"></i>Fees and Courses (10)
          </li>
          <li>
            <i className="fa-solid fa-circle"></i>Admission
          </li>
          <li>
            <i className="fa-solid fa-circle"></i>Placement
          </li>
        </ul>

        <div>
          <button className="filled">Apply Now</button>
          <button>Download Brochure</button>
        </div>
      </div>
    </div>
  ));
};

export { CollegeFilters, CollegeResults };
