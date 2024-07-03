/** @format */

import React, { useState, useEffect } from "react";
import Testimonial from "../components/Home/Testimonial";
import AdwizorBanner from "../components/Home/AdwizorBanner";
import HowItWorks from "../components/Home/HowItWorks";
import TableLayout from "../components/TableLayout";
import StudentTestimonial from "../components/Home/StudentTestimonial";
import AdwizorBlogs from "../components/Home/AdwizorBlogs";
import OurSuccess from "../components/Home/OurSuccess";
import WithLayout from "../Layout/WithLayout";
import { AdwizorCards } from "../components/HelpingComponents";
import { Slider } from "../components/Sliders/Sliders";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import {
  featureConfig,
  sypnosisConfig,
} from "../components/Sliders/SwiperConfig";
import {
  renderFeatureItems,
  renderSypnosisItem,
} from "../components/Sliders/SwiperComponents";
import { collegeDetails, sypnosisData } from "../constant/constant";

const HomePage = () => {
  const [features, setFeatures] = useState({});
  const [adwizors, setAdwizors] = useState({});

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
    getApi(endPoints.getVerifiedAdwizors, {
      setResponse: setAdwizors,
    });
  }, []);

  const adwizorsData =
    adwizors?.data?.length > 0
      ? adwizors?.data?.slice(0, 6)?.map((i) => ({
          img: i?.image,
          name: i?.fullname,
          rating: i?.averageRating,
          description: [i?.experiance, i?.state, i?.helpedStudent],
        }))
      : [];

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
        <StudentTestimonial />
      </section>

      <section className="margin-div">
        <h4 className="normal-heading">Our Adwizors blogs </h4>
        <AdwizorBlogs />
        <button className="view-more-btn mt-4">View More</button>
      </section>

      <section className="margin-div">
        <OurSuccess />
      </section>
    </>
  );
};

export default WithLayout(HomePage);
