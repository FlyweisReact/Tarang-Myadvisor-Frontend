/** @format */

import React, { useState, useEffect } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const StudentTestimonial = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    getApi(endPoints.getAllStudentOpinions, {
      setResponse,
    });
  }, []);

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
        {response?.data?.map((i, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div className="content">
                <div className="img-container">
                  <img src={i.image} alt="" />
                </div>
                <p className="title"> {i.name} </p>
                <p className="position"> {i.title} </p>
                <p className="description">{i.desc}</p>
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
