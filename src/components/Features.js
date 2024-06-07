/** @format */

import React from "react";
import { cashIcon } from "../assest";
import { motion } from "framer-motion";

const item = [
  {
    img: cashIcon,
    title: "Competitive Prices",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: cashIcon,
    title: "Competitive Prices",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: cashIcon,
    title: "Competitive Prices",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },
  {
    img: cashIcon,
    title: "Competitive Prices",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis odio   non magna vulputate at. Et lectus vulputate nisl.",
  },

];

const Features = () => {
  return (
    <section className="features">
      <h4 className="heading">Why Choose Us</h4>

      <div className="slider-container">
        {item.map((i, index) => (
          <div className="slide" key={index}>
            <img src={i.img} alt="" />
            <h5> {i.title} </h5>
            <p>{i.detail}</p>
          </div>
        ))}
      </div>

      <div className="slider-container">
        <motion.div
          style={{
            width: `${item.length * 100}%`,
          }}
        >
          {item.map((item, index) => (
            <motion.div
              className="slide"
              key={index}
              style={{ width: `${100 / item.length}%` }}
            >
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
              <p>{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
