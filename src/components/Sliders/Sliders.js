/** @format */

import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = ({ data, swiperConfig, renderSlide, extraComponent }) => {
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
