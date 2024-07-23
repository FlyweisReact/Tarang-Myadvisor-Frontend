/** @format */

import React, { useState, useEffect, useCallback } from "react";
import {
  Banner,
  CustomeDropdown,
  LoaderComponent,
} from "../components/HelpingComponents";
import WithLayout from "../Layout/WithLayout";
import { filterImg, usaSquare } from "../assest";
import { Slider } from "../components/Sliders/Sliders";
import { durationArr, inTakes, tutionFees } from "../constant/constant";
import { CollegeFilters } from "../components/Study/CollegeSection";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { abroadCollegeConfig } from "../components/Sliders/SwiperConfig";
import { RenderAbroadCollegeItems } from "../components/Sliders/SwiperComponents";
import { pushInArr } from "../utils/utils";
import { ShortlistedUniversities } from "../components/Cards/AllCards";

const StudyIndia = () => {
  const [banner, setBanner] = useState({});
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [universities, setUniversities] = useState({ data: [] });
  const [courses, setCourses] = useState({ courses: [] });
  const [allStates, setAllStates] = useState({ states: [] });
  const [allStreams, setAllStreams] = useState({ streams: [] });
  const [keyword, setKeyword] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUniversities = useCallback(() => {
    getApi(endPoints.filterIndianUniversitites(keyword.join(","), 1, 200), {
      setResponse: setUniversities,
      setLoading,
    });
  }, [keyword]);

  useEffect(() => {
    getApi(endPoints.studyIndiaBanner, {
      setResponse: setBanner,
    });

    getApi(endPoints.getAllCountries, {
      setResponse: setAllCountries,
    });
    getApi(endPoints.getAllCourse, {
      setResponse: setCourses,
    });
    getApi(endPoints.getAllStates, {
      setResponse: setAllStates,
    });
    getApi(endPoints.getAllStreams, {
      setResponse: setAllStreams,
    });
  }, []);

  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  const countriesArr = allCountries.data.map((i) => ({
    img: i?.image,
    title: i?.ContryName,
  }));

  const universityArr =
    universities?.data?.length > 0
      ? universities?.data?.map((i) => ({
          flagImg: i?.ImageUrl?.[0],
          title: i?.UniversityName,
          collegeImg: i?.ImageUrl?.[0],
          isFav: false,
          status: "Apply Now",
          location: i?.location,
          btn2: "Download Brochure",
          id: i._id,
          reviews: i?.Review,
          fees: i?.Fees,
          star: i?.Star,
          avgPackage: i?.AveragePackageOffered,
          elegibility: i?.Eligibility,
          approvedBy: i?.ApprovedBy,
        }))
      : [];

  const filterationData = {
    title: "Private Colleges / Government Colleges",
    heading: "Filter",
    foundCount: `Found ${universities?.data?.length} Colleges`,
    options: [
      {
        title: "Courses",
        placeholder: "Find Courses",
        list: courses?.courses?.map((i) => i?.courseName),
        setValue: setKeyword,
        value: keyword,
      },
      {
        title: "State",
        placeholder: "Find State",
        list: allStates?.states?.map((i) => i?.stateName),
        setValue: setKeyword,
        value: keyword,
      },
      {
        title: "Stream",
        placeholder: "Find Stream",
        list: allStreams?.streams?.map((i) => i?.streamName),
        setValue: setKeyword,
        value: keyword,
      },
    ],
  };

  const searchKeyword = (item) => {
    pushInArr(item, setKeyword);
  };

  const optionsMenu = [
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
      setValue: searchKeyword,
    },
    {
      title: "Tution Fee (USD)",
      items: tutionFees?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-money-bill-wave"></i>,
      caretIcon: true,
      setValue: searchKeyword,
    },
    {
      title: "In Takes",
      items: inTakes?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-calendar-days"></i>,
      caretIcon: true,
      setValue: searchKeyword,
    },
    {
      title: "Duration",
      items: durationArr?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city}
          </a>
        ),
        key: index.toString(),
      })),
      titleIcon: <i className="fa-solid fa-clock"></i>,
      caretIcon: true,
      setValue: searchKeyword,
    },
  ];

  return (
    <>
      <Banner img={banner?.data?.image} />
      <section className="explore-country-slider">
        <Slider
          data={countriesArr}
          swiperConfig={abroadCollegeConfig}
          RenderSlide={RenderAbroadCollegeItems}
        />
      </section>
      <section className="filter-college-section margin-div">
        <CollegeFilters data={filterationData} />
        <div className="result-div">
          <div className="search-div">
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
            <img src={filterImg} alt="" className="filter-img" />
          </div>

          <div className="results">
            {loading && <LoaderComponent />}

            {universityArr.map((i, index) => (
              <ShortlistedUniversities key={index} {...i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WithLayout(StudyIndia);
