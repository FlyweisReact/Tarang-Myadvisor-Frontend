/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Testimonial from "../components/Home/Testimonial";
import AdwizorBanner from "../components/Home/AdwizorBanner";
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
import { Link } from "react-router-dom";
import { HowItWorkCard } from "../components/Cards/AllCards";

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
  const [adwizors, setAdwizors] = useState({ data: [] });
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [countryName, setCountryName] = useState("Us");
  const [topColleges, setTopColleges] = useState({ data: [] });
  const [blogs, setBlogs] = useState({ data: [] });
  const [howItWorks, setHowItWorks] = useState({ data: [] });
  const [sypnosisSummary, setSypnosisSummary] = useState({ data: [] });
  const [testimonials, setTestimonials] = useState({ data: [] });

  const howItWorksList = howItWorks.data.map((i) => ({
    img: i?.image,
    title: i?.title,
    description: i?.description,
  }));

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
    getApi(endPoints.getAdwizorsBlogs, {
      setResponse: setBlogs,
    });
    getApi(endPoints.getHowItWorks, {
      setResponse: setHowItWorks,
    });
    getApi(endPoints.user.getAllSypnosis, {
      setResponse: setSypnosisSummary,
    });
    getApi(endPoints.user.getAllTestimonial, {
      setResponse: setTestimonials,
    });
  }, []);

  useEffect(() => {
    if (allCountries.data.length > 0) {
      const name = allCountries.data?.[0]?.ContryName;
      setCountryName(name);
    }
  }, [allCountries]);

  const adwizorsData = adwizors.data.slice(0, 6)?.map((i) => ({
    img: i?.image,
    title: i?.fullname,
    rating: i?.averageRating,
    description: [i?.experiance, i?.state, i?.helpedStudent],
    id: i._id,
  }));

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

  const blogsList = blogs.data.map((i) => ({
    img: i?.imagePath,
    title: i?.title,
    desc: i?.content,
  }));

  let url;
  if (countryName?.toLocaleLowerCase() === "india") {
    url = "/study-india";
  } else {
    url = "/study-abroad";
  }

  const sypnosisList = sypnosisSummary.data.map((i) => ({
    flag: i?.countryImage,
    title: i?.countryName,
    checkColleges: i?.checkColleges,
    numberOfColleges: i?.noOfColleges,
    studyCost: i?.avgStudyCost,
    accordion: [
      i?.whyStudyInCountry,
      i?.SOPForCountry,
      i?.examsForStudyingCountry,
      i?.postStudyOpportunitiesInCountry,
    ],
  }));

  const testimonialList = testimonials.data.map((i, index) => ({
    id: index,
    title: i.title,
    description: i?.description,
    image: i?.imagePath,
    video: i?.videoPath,
  }));

  return (
    <>
      <AdwizorBanner />
      {adwizorsData?.length > 0 && (
        <AdwizorCards topAdwizor={true} topAdwizorData={adwizorsData} />
      )}

      {howItWorksList?.length > 0 && (
        <section className="how-it-works">
          <h4 className="normal-heading">How It Works</h4>
          <div className="steps-container">
            <svg
              className="curved-line"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 100 Q 250 0 500 100 T 1000 100"
                fill="transparent"
                stroke="#333"
                stroke-width="2"
                stroke-dasharray="5,5"
              />
            </svg>
            {howItWorksList.map((i, index) => (
              <HowItWorkCard {...i} key={`work${index}`} />
            ))}
          </div>
        </section>
      )}

      {featureData?.length > 0 && (
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
      )}

      {testimonialList?.length > 0 && <Testimonial data={testimonialList} />}

      {collegeDetails?.length > 0 && (
        <section className="college-table">
          <div className="head">
            <h4 className="normal-heading">Top 10 Featured Colleges</h4>
            <Link to={url}>View All</Link>
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
              "Application Date",
              "Fees",
              "Cutoff",
            ]}
            tbody={collegeDetails}
            className="college-table"
          />
        </section>
      )}

      {sypnosisList?.length > 0 && (
        <section className="margin-div">
          <h4 className="normal-heading"> Destination Synopsis / Summary</h4>
          <section className="synopsis-slider">
            <Slider
              data={sypnosisList}
              swiperConfig={sypnosisConfig}
              RenderSlide={RenderSypnosisItem}
            />
          </section>
        </section>
      )}

      {studentThoughts?.data?.length > 0 && (
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
      )}

      {blogsList?.length > 0 && (
        <section className="margin-div">
          <h4 className="normal-heading">Our Adwizors blogs </h4>
          <div className="adwizor-blog-container">
            {blogsList.map((i, index) => (
              <InfluencerCard key={`infulencerCard${index}`} {...i} />
            ))}
          </div>
        </section>
      )}

      <section className="margin-div">
        <OurSuccess />
      </section>
    </>
  );
};

export default WithLayout(HomePage);
