/** @format */

import React, { useState, useEffect } from "react";
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
  renderFeatureItems,
  renderStudentTestimonialCard,
  renderSypnosisItem,
} from "../components/Sliders/SwiperComponents";
import {
  allAdwiozordsArr,
  collegeDetails,
  infuluncerCardConstant,
  sypnosisData,
} from "../constant/constant";

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
  // const [adwizors, setAdwizors] = useState({});

  const featureData =
    features?.data?.length > 0
      ? features?.data?.map((i) => ({
          img: i?.image,
          title: i?.title,
          detail: i?.content,
        }))
      : [];

  useEffect(() => {
    getApi(endPoints.getAllFeatures, {
      setResponse: setFeatures,
    });
    getApi(endPoints.getAllStudentOpinions, {
      setResponse: setStudentThoughts,
    });
    // getApi(endPoints.getVerifiedAdwizors, {
    //   setResponse: setAdwizors,
    // });
  }, []);

  // const adwizorsData =
  //   adwizors?.data?.length > 0
  //     ? adwizors?.data?.slice(0, 6)?.map((i) => ({
  //         img: i?.image,
  //         name: i?.fullname,
  //         rating: i?.averageRating,
  //         description: [i?.experiance, i?.state, i?.helpedStudent],
  //       }))
  //     : [];

  return (
    <>
      <AdwizorBanner />
      <AdwizorCards topAdwizor={true} topAdwizorData={allAdwiozordsArr} />
      <HowItWorks />

      <section className="features">
        <h4 className="normal-heading">Why Choose Us</h4>
        <div className="slider-container">
          <Slider
            data={featureData}
            swiperConfig={featureConfig}
            renderSlide={renderFeatureItems}
          />
        </div>
      </section>

      <Testimonial />
      <section className="college-table">
        <div className="head">
          <h4 className="normal-heading">Top 10 Featured Colleges</h4>
          <a href="/">View All</a>
        </div>
        <div className="destination">
          <ul>
            <li className="active">
              <i className="fa-solid fa-bars-staggered"></i>Destinations
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>India</li>
            <li>Australia</li>
            <li>Uk</li>
            <li>Us</li>
            <li>Australia</li>
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
            renderSlide={renderSypnosisItem}
          />
        </section>
      </section>

      <section className="margin-div">
        <h4 className="normal-heading">What Students say about us? </h4>
        <section className="student-testimonial-slider">
          <Slider
            data={studentThoughts?.data}
            swiperConfig={studentTestimonialConfig}
            renderSlide={renderStudentTestimonialCard}
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
