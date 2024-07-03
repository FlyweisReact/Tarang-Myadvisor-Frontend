/** @format */

import React, { useState, useEffect } from "react";
import { Banner, CustomeDropdown } from "../components/HelpingComponents";
import WithLayout from "../Layout/WithLayout";
import {
  iitDelhiLogo,
  iitGuwahitLogo,
  dcseLogo,
  filterImg,
  collegeResult,
  collegeResult1,
  collegeResult2,
  collegeResult3,
  collegeResult4,
} from "../assest";
import { Slider } from "../components/Sliders/Sliders";
import {
  abroadCollegeArr,
  durationArr,
  inTakes,
  prefferedSubjectArr,
  tutionFees,
} from "../constant/constant";

import {
  CollegeFilters,
  CollegeResults,
} from "../components/Study/CollegeSection";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { abroadCollegeConfig } from "./Sliders/SwiperConfig";
import { renderAbroadCollegeItems } from "./Sliders/SwiperComponents";

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
    img: dcseLogo,
    title: "Dhanalakshmi Srinivasan College of Engineering (DSCE), Coimbatore",
    collegeImg: collegeResult,
  },
  {
    img: iitDelhiLogo,
    title: "IIT Madras",
    collegeImg: collegeResult1,
  },
  {
    img: dcseLogo,
    title: "IIT Mumbai",
    collegeImg: collegeResult2,
  },
  {
    img: iitGuwahitLogo,
    title: "IIT Guwahati",
    collegeImg: collegeResult3,
  },
  {
    img: dcseLogo,
    title: "IIT Kanpur",
    collegeImg: collegeResult4,
  },
];
const StudyIndia = () => {
  const [banner, setBanner] = useState({});

  const fetchBanner = () => {
    getApi(endPoints.studyIndiaBanner, {
      setResponse: setBanner,
    });
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <Banner img={banner?.data?.image} />
      <section className="explore-country-slider">
        <Slider
          data={abroadCollegeArr}
          swiperConfig={abroadCollegeConfig}
          renderSlide={renderAbroadCollegeItems}
        />
      </section>
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

export default WithLayout(StudyIndia);
