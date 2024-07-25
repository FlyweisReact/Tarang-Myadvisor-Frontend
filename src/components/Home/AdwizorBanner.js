/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { homepageImg } from "../../assest/index";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { CustomeDropdown } from "../HelpingComponents";

const AdwizorBanner = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState({ courses: [] });
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [allCities, setAllCities] = useState({ cities: [] });

  useEffect(() => {
    getApi(endPoints.getAllCountries, {
      setResponse: setAllCountries,
    });
    getApi(endPoints.getAllCourse, {
      setResponse: setCourses,
    });
    getApi(endPoints.getAllCities, {
      setResponse: setAllCities,
    });
  }, []);

  const optionsMenu = [
    {
      title: "City",
      items: allCities.cities.map((city, index) => ({
        label: (
          <a href={`#${city?.cityName}`} className="antd-link-a">
            {city?.cityName}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-location-dot"></i>,
      caretIcon: true,
    },
    {
      title: "Study Destination",
      items: allCountries.data.map((i, index) => ({
        label: (
          <a href={`#${i?.ContryName}`} className="antd-link-a">
            {i?.ContryName}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-earth-americas"></i>,
      caretIcon: true,
    },
    {
      title: "Subject",
      items: courses?.courses?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city?.courseName}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-book"></i>,
      caretIcon: true,
    },
  ];
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

            <button
              className="search-icon-button"
              onClick={() => navigate("/find-an-adwizor")}
            >
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
