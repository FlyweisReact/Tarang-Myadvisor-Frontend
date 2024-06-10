/** @format */

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { degreeImg, IndianRngFlag, dollarIcon } from "../../assest/index";

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
        <SwiperSlide>
          <div className="Item">
            <div className="heading">
              <img src={IndianRngFlag} alt="" />
              <div className="content">
                <p className="title">Study in INDIA</p>
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
            <div className="guides ">
              <p>Why Study in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>SOP for India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>EXAMS for Studing India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>Post Study Opportunities in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Item">
            <div className="heading">
              <img src={IndianRngFlag} alt="" />
              <div className="content">
                <p className="title">Study in INDIA</p>
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
            <div className="guides ">
              <p>Why Study in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>SOP for India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>EXAMS for Studing India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>Post Study Opportunities in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Item">
            <div className="heading">
              <img src={IndianRngFlag} alt="" />
              <div className="content">
                <p className="title">Study in INDIA</p>
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
            <div className="guides ">
              <p>Why Study in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>SOP for India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>EXAMS for Studing India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>Post Study Opportunities in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Item">
            <div className="heading">
              <img src={IndianRngFlag} alt="" />
              <div className="content">
                <p className="title">Study in INDIA</p>
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
            <div className="guides ">
              <p>Why Study in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>SOP for India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>EXAMS for Studing India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>Post Study Opportunities in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Item">
            <div className="heading">
              <img src={IndianRngFlag} alt="" />
              <div className="content">
                <p className="title">Study in INDIA</p>
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
            <div className="guides ">
              <p>Why Study in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>SOP for India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>EXAMS for Studing India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>Post Study Opportunities in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Item">
            <div className="heading">
              <img src={IndianRngFlag} alt="" />
              <div className="content">
                <p className="title">Study in INDIA</p>
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
            <div className="guides ">
              <p>Why Study in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>SOP for India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>EXAMS for Studing India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="guides ">
              <p>Post Study Opportunities in India</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SynopsisSlider;
