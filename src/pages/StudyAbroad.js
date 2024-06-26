/** @format */

import React from "react";
import { Banner, CustomeDropdown } from "../components/HelpingComponents";
import WithLayout from "../Layout/WithLayout";
import { collegeImg, studyAbroadBanner, ukSquare } from "../assest";
import { ExploreCountrySlider } from "../components/Sliders/Sliders";
import {
  durationArr,
  inTakes,
  prefferedSubjectArr,
  tutionFees,
} from "../constant/constant";
import { filterImg, usaSquare } from "../assest";
import {
  CollegeFilters,
  CollegeResults,
} from "../components/Study/CollegeSection";

// options
const optionsMenu = [
  {
    title: "Subject",
    items: prefferedSubjectArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-book"></i>,
    caretIcon: true,
  },
  {
    title: "Tution Fee (USD)",
    items: tutionFees?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-money-bill-wave"></i>,
    caretIcon: true,
  },
  {
    title: "In Takes",
    items: inTakes?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-calendar-days"></i>,
    caretIcon: true,
  },
  {
    title: "Duration",
    items: durationArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-clock"></i>,
    caretIcon: true,
  },
];

const colleges = [
  {
    img: usaSquare,
    title: "Harvard University , Cambridge , USA",
    collegeImg: collegeImg,
  },
  {
    img: usaSquare,
    title: "University of New Heaven , USA",
    collegeImg: collegeImg,
  },
  {
    img: ukSquare,
    title: "Ucla University , UK",
    collegeImg: collegeImg,
  },
  {
    img: ukSquare,
    title: "Stanford University , UK",
    collegeImg: collegeImg,
  },
  {
    img: ukSquare,
    title: "Pride University , UK",
    collegeImg: collegeImg,
  },
  {
    img: ukSquare,
    title: "Yale , UK",
    collegeImg: collegeImg,
  },
];

const StudyAbroad = () => {
  return (
    <>
      <Banner img={studyAbroadBanner} />
      <ExploreCountrySlider />

      <section className="filter-college-section margin-div">
        <CollegeFilters />
        <div className="result-div">
          <div className="search-div">
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
            <img src={filterImg} alt="" className="filter-img" />
          </div>

          <div className="results">
            <CollegeResults colleges={colleges} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WithLayout(StudyAbroad);
