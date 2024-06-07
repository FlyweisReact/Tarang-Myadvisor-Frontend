/** @format */

import React from "react";

const TopAdwizors = ({ data }) => {
  return (
    <div className="top-adwizors">
      <h3 className="heading">Find Top Adwizors</h3>
      <div className="cards">
        {data.map((i, index) => (
          <div className="item" key={`topadwizor${index}`}>
            <div className="detail">
              <img src={i.img} alt="" className="mainImg" />
              <div className="content">
                <p className="title">{i.name} </p>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <p> {i.rating} </p>
                </div>
                {i.description.map((item, index) => (
                  <p className="faded" key={`desc${index}`}>
                    {" "}
                    {item}{" "}
                  </p>
                ))}
              </div>
            </div>

            <div className="btn-container">
              <button>Book Appointment</button>
              <button>View Profile</button>
            </div>
          </div>
        ))}
      </div>

      <button className="all">See All</button>
    </div>
  );
};

export default TopAdwizors;
