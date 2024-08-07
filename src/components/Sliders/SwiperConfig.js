/** @format */

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

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
    pauseOnMouseEnter : true
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

const userProgramConfig = {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 2,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  resistance: false,
  resistanceRatio: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
     
    },
    900: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  },
  modules: [Autoplay],

};

const customerReviewConfig = {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  speed: 1500,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  modules: [Navigation],
};

const studentTestimonialConfig = {
  spaceBetween: 20,
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".next-nav-btn",
    prevEl: ".prev-nav-btn",
  },
  modules: [Autoplay, Navigation, Pagination],
  pagination: {
    dynamicBullets: true,
  },
};

const callExpertConfig = {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    dynamicBullets: true,
    clickable: true,
  },
  modules: [Autoplay, EffectFade, Pagination],
};

const topCitiesSwiperConfig = {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".next-nav-btn",
    prevEl: ".prev-nav-btn",
  },
  modules: [Navigation],
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 7,
    },
    1024: {
      slidesPerView: 9,
    },
  },
};

const nearCollegeSwiperConfig = {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".next-nav-btn",
    prevEl: ".prev-nav-btn",
  },
  modules: [Navigation],
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

export {
  userProgramConfig,
  topAdwizorsConfig,
  abroadCollegeConfig,
  featureConfig,
  sypnosisConfig,
  customerReviewConfig,
  studentTestimonialConfig,
  callExpertConfig,
  topCitiesSwiperConfig,
  nearCollegeSwiperConfig
};
