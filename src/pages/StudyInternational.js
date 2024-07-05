/** @format */

import React from "react";
import WithLayout from "../Layout/WithLayout";
import { Banner } from "../components/HelpingComponents";
import {
  BannerInternational,
  counrtyVecotr,
  countryCardImg,
  countryCardImg1,
  countryCardImg2,
  countryCardImg3,
  countryCardImg4,
  countryCardImg5,
  countryCardImg6,
} from "../assest";

const btns = [
  "FunFacts",
  "Top Universities",
  "Admissions",
  "Visa",
  "Cost Of Living",
  "Work Opportunities",
  "FAQ’s",
];

const cards = [
  {
    img: counrtyVecotr,
    title: "Captial",
    desc: "Canberra",
  },
  {
    img: countryCardImg,
    title: "Population",
    desc: "26 Mn",
  },
  {
    img: countryCardImg1,
    title: "Language",
    desc: "English",
  },
  {
    img: countryCardImg2,
    title: "Students",
    desc: "87,909",
  },
  {
    img: countryCardImg3,
    title: "GDP",
    desc: "$ 1.37 Trillion",
  },
  {
    img: countryCardImg4,
    title: "Dailing Code",
    desc: "+61",
  },
  {
    img: countryCardImg5,
    title: "Currency",
    desc: "Australian Dollar",
  },
  {
    img: countryCardImg6,
    title: "Universities",
    desc: "43",
  },
];

const StudyInternational = () => {
  return (
    <section className="international-section mb-3">
      <Banner img={BannerInternational} />

      <div className="btn-internation-list mb-3">
        {btns.map((i, index) => (
          <button key={`index${index}`}> {i} </button>
        ))}
      </div>

      <div className="box-shadow-container mb-3">
        <div className="grid-container-for-3">
          {cards.map((i, index) => (
            <div className="country-card" key={`countryCard${index}`}>
              <img src={i.img} alt="" />
              <div className="content">
                <p className="title"> {i.title} </p>
                <p className="title-bold"> {i.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-study-international mt-5 mb-5">
        <h4 className="title">Why Study In Australia ?</h4>
        <p className="description">
          Australia's dedication to providing high-quality education, fostering
          cultural diversity, offering work opportunities, showcasing natural
          beauty, and ensuring a high quality of life with numerous outdoor
          activities makes it a compelling destination for international
          students seeking a comprehensive and enriching educational experience.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </section>
  );
};

export default WithLayout(StudyInternational);
