/** @format */

import React, { useState } from "react";
import { pauseIcon, closeIcon } from "../../assest";

const Testimonial = ({ data }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  return (
    <section className="testimonial-section">
      <h4 className="normal-heading">Testimonials Videos</h4>

      <div className="Main">
        {data.map((i, index) => (
          <div
            className="item"
            key={`testimonial${index}`}
            style={{ backgroundImage: `url(${i.image})` }}
          >
            {show === true && id === i.id ? (
              <React.Fragment>
                <video className="video-container" controls autoPlay>
                  <source src={i.video} type="video/mp4" />
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
                  <p className="desc"> {i.description} </p>
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
