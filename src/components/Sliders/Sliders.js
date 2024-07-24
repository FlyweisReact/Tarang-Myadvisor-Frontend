/** @format */

import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = ({ data, swiperConfig, RenderSlide, ExtraComponent  ,onClickEvent}) => {
  return (
    <section className="generic-slider">
      <Swiper {...swiperConfig}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <RenderSlide {...item} onClickEvent={onClickEvent} />
          </SwiperSlide>
        ))}
        {ExtraComponent && <ExtraComponent />}
      </Swiper>
    </section>
  );
};
