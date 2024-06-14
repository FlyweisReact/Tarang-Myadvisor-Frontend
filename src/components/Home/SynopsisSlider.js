/** @format */

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  degreeImg,
  IndianRngFlag,
  dollarIcon,
  ukEllipse,
  usaEllipse,
  canadaEllipse,
} from "../../assest/index";

const data = [
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

const SynopsisSlider = () => {
  const swiperConfig = {
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
  };

  return (
    <section className="synopsis-slider">
      <Swiper {...swiperConfig} pagination={true} modules={[Autoplay]}>
        {data.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="Item">
              <div className="heading">
                <img src={i.flag} alt="" />
                <div className="content">
                  <p className="title"> {i.title} </p>
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
              {i.accordion.map((item, index) => (
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SynopsisSlider;
