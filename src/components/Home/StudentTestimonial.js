/** @format */

import React from "react";
import {
  studentEllipse,
  studentEllipse1,
  studentEllipse2,
} from "../../assest/index";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    img: studentEllipse,
    title: "Hannah Schmitt",
    position: "Lead designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesqu  Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesqu",
  },
  {
    img: studentEllipse1,
    title: "Hannah Schmitt",
    position: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesqu Consequat duis diam lacus arcu. Faucibus venenatis ",
  },
  {
    img: studentEllipse2,
    title: "Hannah Schmitt",
    position: "Nursing Assistant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesqu Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesqu",
  },
];

const StudentTestimonial = () => {
  const swiperConfig = {
    spaceBetween: 20,
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next-nav-btn",
      prevEl: ".prev-nav-btn",
    },
  };

  return (
    <section className="student-testimonial-slider">
      <Swiper
        {...swiperConfig}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {data.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div className="content">
                <div className="img-container">
                  <img src={i.img} alt="" />
                </div>
                <p className="title"> {i.title} </p>
                <p className="position"> {i.position} </p>
                <p className="description">{i.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="prev-nav-btn">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="next-nav-btn">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default StudentTestimonial;
