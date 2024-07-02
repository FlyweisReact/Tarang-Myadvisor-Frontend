/** @format */

import React, { useState, useEffect } from "react";
import WithLayout from "../Layout/WithLayout";
import { findAdwizorBanner } from "../assest/index";
import {
  citiesArr,
  countryArr,
  prefferedSubjectArr,
} from "../constant/constant";
import {
  AdwizorCards,
  Banner,
  CustomeDropdown,
} from "../components/HelpingComponents";
import {
  verifiedAdwizor,
  verifiedAdwizor1,
  verifiedAdwizor2,
  verifiedAdwizor3,
  verifiedAdwizor4,
  verifiedAdwizor5,
} from "../assest/index";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

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

const adwizors = [
  {
    img: verifiedAdwizor,
    title: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor1,
    title: "Bessie Cooper",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor2,
    title: "Robert Fox",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor3,
    title: "Kristin Watson",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor4,
    title: "Ralph Edwards ",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
  {
    img: verifiedAdwizor5,
    title: "Floyd Miles",
    rating: "9.5/10",
    description: [
      "3+ Years (Accounts).",
      "Gujrat , India.",
      "8211 Students Placed",
    ],
  },
];

const FindAdwizor = () => {
  const [banner, setBanner] = useState({});

  const fetchBanner = () => {
    getApi(endPoints.adwizorBanner, {
      setResponse: setBanner,
    });
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <Banner img={banner?.data?.image} />
      <div className="find-an-adwizor-filter">
        {optionsMenu.map((i, index) => (
          <CustomeDropdown
            items={i.items}
            className={"base-btn"}
            title={i.title}
            titleIcon={i.titleIcon}
            caretIcon={i.caretIcon}
            key={index}
          />
        ))}
      </div>
      <AdwizorCards allAdwizors={adwizors} topAdwizor={false} />
      <button className="view-more-btn mb-5">View More</button>
    </>
  );
};

export default WithLayout(FindAdwizor);
