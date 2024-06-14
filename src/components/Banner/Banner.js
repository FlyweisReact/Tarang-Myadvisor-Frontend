/** @format */

import React from "react";

const Banner = ({ img, className }) => {
  return (
    <section className={`general-banner margin-div ${className}`}>
      <img src={img} alt="" />
    </section>
  );
};

export default Banner;
