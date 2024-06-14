/** @format */

import React from "react";
import {
  adwizorblog1,
  adwizorblog2,
  adwizorblog3,
  adwizorblog4,
  adwizorblog5,
  adwizorblog6,
  adwizorblog7,
  adwizorblog8,
} from "../../assest/index";

const data = [
  {
    img: adwizorblog1,
    title: "Jerome Bell",
    desc: "100k+ Followers , Canada",
  },
  {
    img: adwizorblog2,
    title: "Kathryn Murphy",
    desc: "101k+ Followers , Australia",
  },
  {
    img: adwizorblog3,
    title: "Albert Flores",
    desc: "200k+ Followers , Australia",
  },
  {
    img: adwizorblog4,
    title: "Bessie Cooper",
    desc: "300k+ Followers , Australia",
  },
  {
    img: adwizorblog5,
    title: "Jerome Bell",
    desc: "100k+ Followers , Canada",
  },
  {
    img: adwizorblog6,
    title: "Kathryn Murphy",
    desc: "101k+ Followers , Australia",
  },
  {
    img: adwizorblog7,
    title: "Albert Flores",
    desc: "200k+ Followers , Australia",
  },
  {
    img: adwizorblog8,
    title: "Bessie Cooper",
    desc: "300k+ Followers , Australia",
  },
];

const AdwizorBlogs = () => {
  return (
    <div className="adwizor-blog-container">
      {data.map((i, index) => (
        <div
          className="adwizor-blogs"
          key={`blog${index}`}
          style={{ backgroundImage: `url(${i.img})` }}
        >
          <p className="title"> {i.title} </p>
          <p className="desc"> {i.desc} </p>
        </div>
      ))}
    </div>
  );
};

export default AdwizorBlogs;
