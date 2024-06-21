/** @format */

import React from "react";
import { homepageImg } from "../../assest/index";
import {
  citiesArr,
  countryArr,
  prefferedSubjectArr,
} from "../../constant/constant";
import { CustomeDropdown } from "../HelpingComponents";

const optionsMenu = [
  {
    title: "Your City",
    items: citiesArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-location-dot"></i>,
    caretIcon: true,
  },
  {
    title: "Country",
    items: countryArr?.map((i, index) => ({
      label: (
        <a href={`#${i}`} className="antd-link-a">
          {i}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-earth-americas"></i>,
    caretIcon: true,
  },
  {
    title: "Preferred Subject",
    items: prefferedSubjectArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    titleIcon: <i className="fa-solid fa-book"></i>,
    caretIcon: true,
  },
];

const AdwizorBanner = () => {
  return (
    <section className="adwizor-banner">
      <div className="left">
        <div className="content">
          <h4 className="highlighted">Connect</h4>
          <h3>
            With Top Adwizor for <br /> Specialised & Dedicated guidance
          </h3>
        </div>
        <div className="adwizor-search">
          <h2>Find Adwizor</h2>
          <div className="search-bar">
            {optionsMenu.map((i, index) => (
              <CustomeDropdown
                items={i.items}
                className={"dropdown-button"}
                title={i.title}
                titleIcon={i.titleIcon}
                caretIcon={i.caretIcon}
                key={index}
              />
            ))}
         
            <button className="search-icon-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={homepageImg} alt="" />
      </div>
    </section>
  );
};

export default AdwizorBanner;
