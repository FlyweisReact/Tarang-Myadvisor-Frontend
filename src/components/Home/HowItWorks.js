/** @format */

import React from "react";
import {
  howItWorkImg1,
  howItWorkImg2,
  howItWorkImg3,
} from "../../assest/index";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h4 className="normal-heading">How It Works</h4>

      <div className="steps-container">
        <svg
          className="curved-line"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 100 Q 250 0 500 100 T 1000 100"
            fill="transparent"
            stroke="#333"
            stroke-width="2"
            stroke-dasharray="5,5"
          />
        </svg>
        <div className="step-card">
          <img src={howItWorkImg1} alt="" />
          <h3>Find Your Counsellor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio
            non magna vulputate at. Et lectus vulputate nisl.
          </p>
        </div>
        <div className="step-card">
          <img src={howItWorkImg2} alt="" />
          <h3> Make An Appointment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio
            non magna vulputate at. Et lectus vulputate nisl.
          </p>
        </div>
        <div className="step-card">
          <img src={howItWorkImg3} alt="" />
          <h3>Get Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio
            non magna vulputate at. Et lectus vulputate nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
