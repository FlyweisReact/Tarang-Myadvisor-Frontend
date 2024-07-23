/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Testimonial from "../components/Home/Testimonial";
import AdwizorBanner from "../components/Home/AdwizorBanner";
import HowItWorks from "../components/Home/HowItWorks";
import TableLayout from "../components/TableLayout";
import OurSuccess from "../components/Home/OurSuccess";
import WithLayout from "../Layout/WithLayout";
import { AdwizorCards, InfluencerCard } from "../components/HelpingComponents";
import { Slider } from "../components/Sliders/Sliders";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import {
  featureConfig,
  studentTestimonialConfig,
  sypnosisConfig,
} from "../components/Sliders/SwiperConfig";
import {
  RenderFeatureItems,
  RenderStudentTestimonialCard,
  RenderSypnosisItem,
} from "../components/Sliders/SwiperComponents";
import { infuluncerCardConstant, sypnosisData } from "../constant/constant";
import { Link } from "react-router-dom";
import { collegeIcon, rankingIcon } from "../assest";

const StudentNavigation = () => {
  return (
    <>
      <div className="prev-nav-btn">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="next-nav-btn">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </>
  );
};

const HomePage = () => {
  const [features, setFeatures] = useState({});
  const [studentThoughts, setStudentThoughts] = useState({ data: [] });
  const [adwizors, setAdwizors] = useState({});
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [countryName, setCountryName] = useState("Us");
  const [topColleges, setTopColleges] = useState({ data: [] });

  const featureData =
    features?.data?.length > 0
      ? features?.data?.map((i) => ({
          img: i?.image,
          title: i?.title,
          detail: i?.content,
        }))
      : [];

  const fetchTopColleges = useCallback(() => {
    getApi(endPoints.getTopTenColleges(countryName, 1, 10), {
      setResponse: setTopColleges,
    });
  }, [countryName]);

  useEffect(() => {
    fetchTopColleges();
  }, [fetchTopColleges]);

  useEffect(() => {
    getApi(endPoints.getAllFeatures, {
      setResponse: setFeatures,
    });
    getApi(endPoints.getAllStudentOpinions, {
      setResponse: setStudentThoughts,
    });
    getApi(endPoints.getVerifiedAdwizors, {
      setResponse: setAdwizors,
    });
    getApi(endPoints.getAllCountries, {
      setResponse: setAllCountries,
    });
  }, []);

  useEffect(() => {
    if (allCountries.data.length > 0) {
      const name = allCountries.data?.[0]?.ContryName;
      setCountryName(name);
    }
  }, [allCountries]);

  const adwizorsData =
    adwizors?.data?.length > 0
      ? adwizors?.data?.slice(0, 6)?.map((i) => ({
          img: i?.image,
          title: i?.fullname,
          rating: i?.averageRating,
          description: [i?.experiance, i?.state, i?.helpedStudent],
          id: i._id,
        }))
      : [];

  const collegeDetails = topColleges.data.map((i, index) => [
    `#${index + 1}`,
    <div className="college-name">
      <img src={i?.ImageUrl?.[0]} alt="" />
      <div className="content">
        <p className="title"> {i.UniversityName} </p>
        <p className="desc">
          {i.location} |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          {i.Star}{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc">{i.Ranked}</p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">{i.ApplicationDate}</p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹{i.Fees} </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">{i.Eligibility}</p>
      </div>
    </div>,
  ]);

  return (
    <>
      <AdwizorBanner />
      <AdwizorCards topAdwizor={true} topAdwizorData={adwizorsData} />
      <HowItWorks />

      <section className="features">
        <h4 className="normal-heading">Why Choose Us</h4>
        <div className="slider-container">
          <Slider
            data={featureData}
            swiperConfig={featureConfig}
            RenderSlide={RenderFeatureItems}
          />
        </div>
      </section>

      <Testimonial />
      <section className="college-table">
        <div className="head">
          <h4 className="normal-heading">Top 10 Featured Colleges</h4>
          <Link to={"/college-list"}>View All</Link>
        </div>
        <div className="destination">
          <ul>
            <li>
              <i className="fa-solid fa-bars-staggered"></i>Destinations
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            {allCountries.data.map((i, index) => (
              <li
                key={`countries${index}`}
                className={`${countryName === i.ContryName ? "active" : ""}`}
                onClick={() => setCountryName(i.ContryName)}
              >
                {" "}
                {i.ContryName}{" "}
              </li>
            ))}
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

      <section className="margin-div">
        <h4 className="normal-heading"> Destination Synopsis / Summary</h4>
        <section className="synopsis-slider">
          <Slider
            data={sypnosisData}
            swiperConfig={sypnosisConfig}
            RenderSlide={RenderSypnosisItem}
          />
        </section>
      </section>

      <section className="margin-div">
        <h4 className="normal-heading">What Students say about us? </h4>
        <section className="student-testimonial-slider">
          <Slider
            data={studentThoughts?.data}
            swiperConfig={studentTestimonialConfig}
            RenderSlide={RenderStudentTestimonialCard}
            ExtraComponent={StudentNavigation}
          />
        </section>
      </section>

      <section className="margin-div">
        <h4 className="normal-heading">Our Adwizors blogs </h4>
        <div className="adwizor-blog-container">
          {infuluncerCardConstant.map((i, index) => (
            <InfluencerCard key={`infulencerCard${index}`} {...i} />
          ))}
        </div>
        <button className="view-more-btn mt-4">View More</button>
      </section>

      <section className="margin-div">
        <OurSuccess />
      </section>
    </>
  );
};

export default WithLayout(HomePage);
