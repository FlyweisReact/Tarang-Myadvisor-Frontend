/** @format */

import React from "react";

const data = [
  {
    title: "160+",
    acheivement: "Global Colleges Listed",
    colorCode: "#349DCF",
  },
  {
    title: "3.2 k+",
    acheivement: "Personal Mentors",
    colorCode: "#FD9028",
  },
  {
    title: "04 k+",
    acheivement: "Admissions",
    colorCode: "#9E72FF",
  },
  {
    title: "3 k+",
    acheivement: "Students Placed",
    colorCode: "#2C8A00",
  },
];

const OurSuccess = () => {
  return (
    <div className="our-success">
      <h4 className="normal-heading">Our Success In Numbers</h4>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
        venenatis felis id augue
      </p>
      <div className="cards">
        {data.map((i, index) => (
          <div className="item" key={`success${index}`}>
            <p className="title">{i.title} </p>
            <p className="acheivment" style={{ color: i.colorCode }}>
              {i.acheivement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSuccess;
