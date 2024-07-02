/** @format */

import React, { useState, useEffect } from "react";
import {
  adwizorImg1,
  adwizorImg2,
  adwizorImg3,
  adwizorImg4,
  adwizorImg5,
  adwizorImg6,
  collegeIcon,
  rankingIcon,
  degreeImg,
  IndianRngFlag,
  dollarIcon,
  ukEllipse,
  usaEllipse,
  canadaEllipse,
} from "../assest";
import Testimonial from "../components/Home/Testimonial";
import AdwizorBanner from "../components/Home/AdwizorBanner";
import HowItWorks from "../components/Home/HowItWorks";
import TableLayout from "../components/TableLayout";
import StudentTestimonial from "../components/Home/StudentTestimonial";
import AdwizorBlogs from "../components/Home/AdwizorBlogs";
import OurSuccess from "../components/Home/OurSuccess";
import WithLayout from "../Layout/WithLayout";
import { AdwizorCards } from "../components/HelpingComponents";
import { Autoplay } from "swiper/modules";
import { Slider } from "../components/Sliders/Sliders";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

const thead = [
  "CH Rank",
  "College",
  "Ranking",
  "Application Date",
  "Fees",
  "Cutoff",
];
const tbody = [
  [
    "#1",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#2",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#3",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#4",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
  [
    "#5",
    <div className="college-name">
      <img src={collegeIcon} alt="" />
      <div className="content">
        <p className="title">India institute of Management [ IIM ]</p>
        <p className="desc">
          Indore, Madhya Pradesh |{" "}
          <i style={{ color: "#F9B300" }} className="fa-solid fa-star"></i>{" "}
          8.7/10{" "}
        </p>
      </div>
    </div>,
    <div className="college-name">
      <img src={rankingIcon} alt="" />
      <div className="content">
        <p className="desc">
          <span className="fw-bold">#7 </span>
          out of 281 in india 2022
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          12-07-2024
          <br />
          <span className="fw-bold"> to </span>
          <br />
          07-02-2025
        </p>
      </div>
    </div>,
    <div className="college-name">
      <div className="content">
        <p className="desc text-center">
          <span className="fw-bold"> ₹ 1000 </span>
          <br />
          Application Fee
        </p>
      </div>
    </div>,
    <div className="college-name ">
      <div className="content">
        <p className="desc text-center">
          CAT 2023 Cut off
          <br />
          <span className="fw-bold"> 85 </span>
        </p>
      </div>
    </div>,
  ],
];
const topAdvizors = [
  {
    img: adwizorImg1,
    name: "Subash Mishra",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg2,
    name: "Manisha Roy",
    rating: "9.5/10",
    description: [
      "5+ Years (Civils).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg3,
    name: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg4,
    name: "Subash Mishra",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg5,
    name: "Manisha Roy",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg6,
    name: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
];

// Features ----

const featureConfig = {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  resistance: false,
  resistanceRatio: 0,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
  },
  modules: [Autoplay],
};

const renderFeatureItems = (item) => {
  return (
    <div className="slide">
      <img src={item.img} alt="" />
      <h5> {item.title} </h5>
      <p>{item.detail}</p>
    </div>
  );
};

// Sypnosis Slider
const sypnosisData = [
  {
    flag: IndianRngFlag,
    title: "Study in INDIA",
    accordion: [
      "Why Study in India",
      "SOP for India",
      "EXAMS for Studing India",
      "Post Study Opportunities in India",
    ],
  },
  {
    flag: usaEllipse,
    title: "Study in USA",
    accordion: [
      "Why Study in USA",
      "SOP for USA",
      "EXAMS for Studing USA",
      "Post Study Opportunities in USA",
    ],
  },
  {
    flag: ukEllipse,
    title: "Study in Uk",
    accordion: [
      "Why Study in UK",
      "SOP for UK",
      "EXAMS for Studing UK",
      "Post Study Opportunities in UK",
    ],
  },
  {
    flag: canadaEllipse,
    title: "Study in CANADA",
    accordion: [
      "Why Study in Canada",
      "SOP for Canada",
      "EXAMS for Studing Canada",
      "Post Study Opportunities in Canada",
    ],
  },
];

const sypnosisConfig = {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  resistance: false,
  resistanceRatio: 0,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  modules: [Autoplay],
};

const renderSypnosisItem = (item) => {
  return (
    <div className="Item">
      <div className="heading">
        <img src={item.flag} alt="" />
        <div className="content">
          <p className="title"> {item.title} </p>
          <p className="desc">Check 170 colleges {">"}</p>
        </div>
      </div>

      <div className="cost">
        <div className="item">
          <img src={degreeImg} alt="" />
          <div className="content">
            <p className="title">1008</p>
            <p className="dash">No.of Colleges</p>
          </div>
        </div>
        <div className="item">
          <img src={dollarIcon} alt="" />
          <div className="content">
            <p className="title">32.68 k USD/Year</p>
            <p className="dash">Avg. Study Cost</p>
          </div>
        </div>
      </div>

      <div className="guides ">
        <p className="fw-bold">Guides</p>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      {item.accordion.map((item, index) => (
        <div
          className="guides"
          style={{ cursor: "pointer" }}
          key={`accordion${index}`}
        >
          <p> {item} </p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [features, setFeatures] = useState({});

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
  }, []);

  return (
    <>
      <AdwizorBanner />
      <AdwizorCards topAdwizor={true} topAdwizorData={topAdvizors} />
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
        <TableLayout thead={thead} tbody={tbody} className="college-table" />
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
