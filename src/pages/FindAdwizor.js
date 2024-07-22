/** @format */

import React, { useState, useEffect, useCallback } from "react";
import WithLayout from "../Layout/WithLayout";
import {
  citiesArr,
  countryArr,
  prefferedSubjectArr,
} from "../constant/constant";
import {
  AdwizorCards,
  Banner,
  CustomeDropdown,
  LoaderComponent,
} from "../components/HelpingComponents";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { pushInArr } from "../utils/utils";

const FindAdwizor = () => {
  const [banner, setBanner] = useState({});
  const [allAdwizors, setAllAdwizors] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const [limit, setLimit] = useState(10);
  const [allCities, setAllCities] = useState({ cities: [] });
  const [allCourse, setAllCourse] = useState({ courses: [] });

  const fetchAllAdwizor = useCallback(() => {
    getApi(endPoints.searchAdwizor(search.join(","), 1, limit), {
      setResponse: setAllAdwizors,
      setLoading,
    });
  }, [search, limit]);

  const fetchBanner = () => {
    getApi(endPoints.adwizorBanner, {
      setResponse: setBanner,
    });
  };

  useEffect(() => {
    fetchBanner();
    getApi(endPoints.getAllCourse, {
      setResponse: setAllCourse,
    });
    getApi(endPoints.getAllCities, {
      setResponse: setAllCities,
    });
  }, []);

  useEffect(() => {
    fetchAllAdwizor();
  }, [fetchAllAdwizor]);

  const allCourseArr = allCourse.courses.map((i) => i.courseName);
  const allCitiesArr = allCities.cities.map((i) => i.cityName);

  const adwizorsData = allAdwizors?.data?.map((i) => ({
    img: i?.image,
    title: i?.fullname,
    rating: i?.averageRating,
    description: [i?.experiance, i?.state, i?.helpedStudent],
  }));

  const searchKeyword = (item) => {
    pushInArr(item, setSearch);
  };

  const optionsMenu = [
    {
      title: "Your City",
      items: allCitiesArr?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-location-dot"></i>,
      caretIcon: true,
      setValue: searchKeyword,
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
      setValue: searchKeyword,
    },
    {
      title: "Preferred Subject",
      items: allCourseArr?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-book"></i>,
      caretIcon: true,
      setValue: searchKeyword,
    },
  ];

  const viewMore = () => {
    if (allAdwizors?.totalResults > limit) {
      setLimit(limit + 5);
    } else {
      setLimit(limit - 5);
    }
  };

  const morePages = allAdwizors?.totalResults > limit;

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
            setValue={i.setValue}
          />
        ))}
      </div>
      <LoaderComponent isLoading={loading} />
      <AdwizorCards allAdwizors={adwizorsData} topAdwizor={false} />
      {morePages ? (
        <button className="view-more-btn mb-5" onClick={viewMore}>
          View More
        </button>
      ) : (
        <button className="view-more-btn mb-5" onClick={viewMore}>
          View Less
        </button>
      )}
    </>
  );
};

export default WithLayout(FindAdwizor);
