/** @format */

import React from "react";
import WithLayout from "../Layout/WithLayout";
import { expert1, expert2, expert3, expert4 } from "../assest/index";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ConnectAdwizor = () => {
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
  };
  return (
    <>
      <div className="book-adwizor margin-div">
        <div className="left">
          <h2>Book your 1-1 call with Experts</h2>
          <p className="desc">
            "Elevate Your Education Journey: Find Your Perfect Fit with
            MyAdwizor”
          </p>
          <Swiper
            {...swiperConfig}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img src={expert1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={expert2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={expert3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={expert4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WithLayout(ConnectAdwizor);
