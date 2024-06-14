/** @format */
import React from "react";
import { cashIcon, chooseUs1, chooseUs2, chooseUs3 } from "../../assest";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const item = [
  {
    img: cashIcon,
    title: "Competitive Prices",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: chooseUs1,
    title: "Best Adwizors",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: chooseUs2,
    title: "Long Term Parternship",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: chooseUs3,
    title: "Around World",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: chooseUs3,
    title: "Easy Access",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: chooseUs3,
    title: "Quick Learning",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: chooseUs3,
    title: "Multiple Mentors",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
];

const Features = () => {
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
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 3.5,
      },
    },
  };

  return (
    <section className="features">
      <h4 className="normal-heading">Why Choose Us</h4>

      <div className="slider-container">
        <Swiper {...swiperConfig} pagination={true} modules={[Autoplay]}>
          {item.map((i, index) => (
            <SwiperSlide>
              <div className="slide" key={`featued${index}`}>
                <img src={i.img} alt="" />
                <h5> {i.title} </h5>
                <p>{i.detail}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
