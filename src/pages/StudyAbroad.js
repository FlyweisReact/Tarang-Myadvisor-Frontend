/** @format */

import React from "react";
import { Banner } from "../components/HelpingComponents";
import WithLayout from "../Layout/WithLayout";
import { studyAbroadBanner, filterSlash } from "../assest";
import { ExploreCountrySlider } from "../components/Sliders/Sliders";

const StudyAbroad = () => {
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

  return (
    <>
      <Banner img={studyAbroadBanner} />
      <ExploreCountrySlider />

      <section className="filter-college-section margin-div">
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
      </section>
    </>
  );
};

export default WithLayout(StudyAbroad);
