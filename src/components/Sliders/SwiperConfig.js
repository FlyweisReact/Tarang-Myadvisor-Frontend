/** @format */

import { Autoplay } from "swiper/modules";

//Slider Configurations
const abroadCollegeConfig = {
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
  modules: [Autoplay],
};

const topAdwizorsConfig = {
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
  modules: [Autoplay],
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
  },
};

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
export {
  topAdwizorsConfig,
  abroadCollegeConfig,
  featureConfig,
  sypnosisConfig,
};
