/** @format */

import React, { useEffect, useState } from "react";
import { Slider } from "../../components/Sliders/Sliders";
import {
  topCitiesArr,
  nearCollegeArr,
  topProgrammsArr,
  collegeDetails,
} from "../../constant/constant";
import { RenderTopCityCard } from "../../components/Sliders/SwiperComponents";
import {
  nearCollegeSwiperConfig,
  topCitiesSwiperConfig,
} from "../../components/Sliders/SwiperConfig";
import {
  NearCollegeCard,
  TopProgramCard,
} from "../../components/Cards/AllCards";
import TableLayout from "../../components/TableLayout";
import { CollegeImg38 } from "../../assest";
import CollegePageLayout from "../../Layout/CollegeLayout/Layout/CollegePageLayout";
import { BlinkingHeading } from "../../components/HelpingComponents";
import endPoints from "../../Repository/apiConfig";
import { getApi } from "../../Repository/Api";

const NavigationComponent = () => {
  return (
    <>
      <div className="prev-nav-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="next-nav-btn">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </>
  );
};

const CollegeHomepage = () => {
  const [topColleges, setTopColleges] = useState({ data: [] });
  const page = 1;
  const limit = 200;

  useEffect(() => {
    getApi(endPoints.filterUniversities("", page, limit), {
      setResponse: setTopColleges,
    });
  }, []);

  const universityArr = topColleges?.data?.map((i) => ({
    id: i?._id,
    img: i?.ImageUrl?.[0],
    collegeName: i?.UniversityName,
  }));

  return (
    <section>
      <BlinkingHeading
        text={
          "Admissions Open for O P Jindal Global University. Click to Apply Now!"
        }
      />

      <section className="top-cities-slider margin-div">
        <h4 className="normal-heading text-start">Top Cities</h4>

        <div className="slides">
          <Slider
            data={topCitiesArr}
            swiperConfig={topCitiesSwiperConfig}
            RenderSlide={RenderTopCityCard}
            ExtraComponent={NavigationComponent}
          />
        </div>
      </section>

      <section className="college-near-me margin-div">
        <h4 className="normal-heading text-start">Top Colleges Near Me</h4>
        <div className="custom-slider">
          <Slider
            data={universityArr}
            swiperConfig={nearCollegeSwiperConfig}
            RenderSlide={NearCollegeCard}
            ExtraComponent={NavigationComponent}
          />
        </div>
      </section>

      <section className="future-programs margin-div">
        <h4 className="normal-heading text-start">Explore your future</h4>
        <p className="fade-desc">Select your college</p>

        <ul className="tab mt-4">
          <li className="active">Colleges</li>
          <li>Exams</li>
        </ul>

        <div className="mt-5 mb-5 top-programm-container">
          <div className="grid-container-for-3 boxShadow-container mt-4">
            {topProgrammsArr.map((item, index) => (
              <TopProgramCard {...item} key={`programm${index}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="college-near-me margin-div">
        <h4 className="normal-heading text-start">Top Universities</h4>
        <div className="custom-slider">
          <Slider
            data={universityArr}
            swiperConfig={nearCollegeSwiperConfig}
            RenderSlide={NearCollegeCard}
            ExtraComponent={NavigationComponent}
          />
        </div>
      </section>

      <section className="college-table">
        <div className="head">
          <h4 className="normal-heading">Top Featured Colleges</h4>
          <a href="/">View All</a>
        </div>
        <div className="destination">
          <ul>
            <li className="active">
              <i className="fa-solid fa-bars-staggered"></i>City Name
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>MBA / PGDM</li>
            <li>BE / B.Tech</li>
            <li>BBA / BBM</li>
            <li>BCA</li>
            <li>B.Pharm</li>
            <li>D.Pharm</li>
          </ul>
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
      </section>

      <div className="about-us-doubt margin-div boxShadow-container p-0">
        <img src={CollegeImg38} alt="" />
        <div className="detail">
          <h1>
            Have Any Doubt? <br />
            Connect With Us{" "}
          </h1>
          <button>Connect Now</button>
        </div>
      </div>
    </section>
  );
};

export default CollegePageLayout({ WrappedComponent: CollegeHomepage });
