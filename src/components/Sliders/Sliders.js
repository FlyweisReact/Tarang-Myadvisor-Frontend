/** @format */

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  exploreCtry1,
  exploreCtry2,
  exploreCtry3,
  exploreCtry4,
  exploreCtry5,
  exploreCtry6,
  exploreCtry7,
  exploreCtry8,
} from "../../assest";

export const ExploreCountrySlider = () => {
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
        slidesPerView: 4,
      },
    },
  };

  const data = [
    {
      img: exploreCtry1,
      title: "Study In Mumbai",
    },
    {
      img: exploreCtry2,
      title: "Study In Delhi",
    },
    {
      img: exploreCtry3,
      title: "Study In Bangalore",
    },
    {
      img: exploreCtry4,
      title: "Study In Kerala",
    },
    {
      img: exploreCtry5,
      title: "Study In Canada",
    },
    {
      img: exploreCtry6,
      title: "Study In Australia",
    },
    {
      img: exploreCtry7,
      title: "Study In Uk",
    },
    {
      img: exploreCtry8,
      title: "Study In USA",
    },
  ];

  return (
    <section className="explore-country-slider">
      <Swiper {...swiperConfig} modules={[Autoplay]}>
        {data.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="Item">
              <img src={i.img} alt="" />
              <div className="content">
                <p className="title"> {i.title} </p>
                <button>Explore Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export const Slider = ({ data, swiperConfig, renderSlide ,extraComponent }) => {
  return (
    <section className="generic-slider">
      <Swiper {...swiperConfig}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item)}</SwiperSlide>
        ))}
        {extraComponent}
      </Swiper>
    </section>
  );
};
