/** @format */

import React, { useState, useEffect } from "react";
import { Banner, CustomeDropdown } from "../components/HelpingComponents";
import WithLayout from "../Layout/WithLayout";
import { collegeImg, ukSquare } from "../assest";
import { Slider } from "../components/Sliders/Sliders";
import {
  abroadCollegeArr,
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
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { abroadCollegeConfig } from "../components/Sliders/SwiperConfig";
import { RenderAbroadCollegeItems } from "../components/Sliders/SwiperComponents";

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
    btn1: "Apply Now",
    btn2: "Download Brochure",
    status: "applied",
  },
  {
    img: usaSquare,
    title: "University of New Heaven , USA",
    collegeImg: collegeImg,
    btn1: "Apply Now",
    btn2: "Download Brochure",
    status: "applied",
  },
  {
    img: ukSquare,
    title: "Ucla University , UK",
    collegeImg: collegeImg,
    btn1: "Apply Now",
    btn2: "Download Brochure",
    status: "applied",
  },
  {
    img: ukSquare,
    title: "Stanford University , UK",
    collegeImg: collegeImg,
    btn1: "Apply Now",
    btn2: "Download Brochure",
    status: "applied",
  },
  {
    img: ukSquare,
    title: "Pride University , UK",
    collegeImg: collegeImg,
    btn1: "Apply Now",
    btn2: "Download Brochure",
    status: "applied",
  },
  {
    img: ukSquare,
    title: "Yale , UK",
    collegeImg: collegeImg,
    btn1: "Apply Now",
    btn2: "Download Brochure",
    status: "applied",
  },
];

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
      list: ["Luci", "Snafro", "Jamesy", "Willion", "Canii"],
    },
    {
      title: "Stream",
      placeholder: "Find Stream",
      list: ["Management", "Science", "Arts", "Computer Science", "Commerce"],
    },
  ],
};

const StudyAbroad = () => {
  const [banner, setBanner] = useState({});

  const fetchBanner = () => {
    getApi(endPoints.studyAbroadBanner, {
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
          RenderSlide={RenderAbroadCollegeItems}
        />
      </section>

      <section className="filter-college-section margin-div">
        <CollegeFilters data={filterationData} />
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
