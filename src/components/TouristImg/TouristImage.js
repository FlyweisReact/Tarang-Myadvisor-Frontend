/** @format */

import React from "react";
import { touristImg1, touristImg2 } from "../../assest/index";

const TouristImage = () => {
  return (
    <div className="tourist-img-container">
      <img src={touristImg1} alt="" />
      <img src={touristImg2} alt="" />
    </div>
  );
};

export default TouristImage;
