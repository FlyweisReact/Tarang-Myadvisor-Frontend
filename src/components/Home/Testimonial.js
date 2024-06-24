/** @format */

import React, { useState } from "react";
import {
  pauseIcon,
  sampleVideo,
  closeIcon,
  testimonialIcon1,
  testimonialIcon3,
  testimonialIcon2,
  testimonialIcon,
} from "../../assest";

const items = [
  {
    id: 1,
    img: testimonialIcon,
    title: "Sahara Thakur",
    desc: "Alex University , Canada",
  },
  {
    id: 2,
    img: testimonialIcon1,
    title: "Nisha Bansali",
    desc: "Mex University , Australia",
  },
  {
    id: 3,
    img: testimonialIcon2,
    title: "Mishra",
    desc: "Alex University , Canada",
  },

  {
    id: 4,
    img: testimonialIcon3,
    title: "Vishal Joseph",
    desc: "Mex University , Australia",
  },
];

const Testimonial = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  return (
    <section className="testimonial-section">
      <h4 className="normal-heading">Testimonials Videos</h4>

      <div className="Main">
        {items.map((i, index) => (
          <div
            className="item"
            key={`testimonial${index}`}
            style={{ backgroundImage: `url(${i.img})` }}
          >
            {show === true && id === i.id ? (
              <React.Fragment>
                <video className="video-container" controls autoPlay>
                  <source src={sampleVideo} type="video/mp4" />
                </video>

                <img
                  src={closeIcon}
                  alt=""
                  className="close-icon"
                  onClick={() => setShow(false)}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img
                  src={pauseIcon}
                  alt=""
                  className="pauseIcon"
                  onClick={() => {
                    setId(i.id);
                    setShow(true);
                  }}
                />
                <div className="content">
                  <p className="title"> {i.title} </p>
                  <p className="desc"> {i.desc} </p>
                </div>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
