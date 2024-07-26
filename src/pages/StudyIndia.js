/** @format */

import React, { useState, useEffect, useCallback } from "react";
import {
  Banner,
  CustomeDropdown,
  LoaderComponent,
} from "../components/HelpingComponents";
import WithLayout from "../Layout/WithLayout";
import { filterImg } from "../assest";
import { durationArr, inTakes, tutionFees } from "../constant/constant";
import { CollegeFilters } from "../components/Study/CollegeSection";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { pushInArr } from "../utils/utils";
import { ShortlistedUniversities } from "../components/Cards/AllCards";
import { topCitiesSwiperConfig } from "../components/Sliders/SwiperConfig";
import { RenderTopCityCard } from "../components/Sliders/SwiperComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import useInfiniteScroll from "react-infinite-scroll-hook";

const NavigationComponent = () => {
  return (
    <>
      <div className="prev-nav-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="next-nav-btn">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </>
  );
};

const StudyIndia = () => {
  const [banner, setBanner] = useState({});
  const [universities, setUniversities] = useState({ data: [] });
  const [courses, setCourses] = useState({ data: [] });
  const [allStates, setAllStates] = useState({ data: [] });
  const [allStreams, setAllStreams] = useState({ data: [] });
  const [keyword, setKeyword] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allCities, setAllCities] = useState({ cities: [] });
  const [limit, setLimit] = useState(100);
  const [courseQuery, setCourseQuery] = useState("");
  const [stateQuery, setStateQuery] = useState("");
  const [streamQuery, setStreamQuery] = useState("");

  const fetchUniversities = useCallback(() => {
    getApi(endPoints.filterIndianUniversitites(keyword.join(","), 1, limit), {
      setResponse: setUniversities,
      setLoading,
    });
  }, [keyword, limit]);

  useEffect(() => {
    getApi(endPoints.user.searchCourses(courseQuery), {
      setResponse: setCourses,
    });
  }, [courseQuery]);

  useEffect(() => {
    getApi(endPoints.user.filterStates(stateQuery), {
      setResponse: setAllStates,
    });
  }, [stateQuery]);

  useEffect(() => {
    getApi(endPoints.user.filterStreams(streamQuery), {
      setResponse: setAllStreams,
    });
  }, [streamQuery]);

  useEffect(() => {
    getApi(endPoints.studyIndiaBanner, {
      setResponse: setBanner,
    });
    getApi(endPoints.getAllCities, {
      setResponse: setAllCities,
    });
  }, []);

  const allCitiesArr = allCities.cities.map((i) => ({
    img: i.cityImage,
    title: i.cityName,
  }));

  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  const universityArr = universities?.data?.map((i) => ({
    flagImg: i?.ImageUrl?.[0],
    title: `${i?.UniversityName} `,
    courseTitle: i?.CourseTitle,
    collegeImg: i?.ImageUrl?.[0],
    isFav: false,
    status: "Apply Now",
    location: i?.location,
    id: i._id,
    reviews: i?.Review,
    fees: i?.Fees,
    star: i?.Star,
    avgPackage: i?.AveragePackageOffered,
    elegibility: i?.Eligibility,
    approvedBy: i?.ApprovedBy,
    shortlistedCount: i?.TotalNoOfStudentsRegistered,
    institueType: i?.InstituteType,
  }));

  const filterationData = {
    title: "Private Colleges / Government Colleges",
    heading: "Filter",
    foundCount: `Found ${universities?.data?.length} Colleges`,
    options: [
      {
        title: "Courses",
        placeholder: "Find Courses",
        list: courses?.data?.map((i) => i?.courseName),
        setValue: setKeyword,
        value: keyword,
        inputValue: setCourseQuery,
      },
      {
        title: "State",
        placeholder: "Find State",
        list: allStates?.data?.map((i) => i?.stateName),
        setValue: setKeyword,
        value: keyword,
        inputValue: setStateQuery,
      },
      {
        title: "Stream",
        placeholder: "Find Stream",
        list: allStreams?.data?.map((i) => i?.streamName),
        setValue: setKeyword,
        value: keyword,
        inputValue: setStreamQuery,
      },
    ],
  };

  const searchKeyword = (item) => {
    pushInArr(item, setKeyword);
  };

  const optionsMenu = [
    {
      title: "Subject",
      items: courses?.data?.map((city, index) => ({
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

  const customDebounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const loadMore = customDebounce(() => {
    if (
      limit === universities?.totalResults ||
      limit < universities?.totalResults
    ) {
      setLimit(limit + 100);
    }
  }, 500);

  const hasMore = universities?.totalResults > limit;
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    disabled: loading,
  });
  return (
    <>
      <Banner img={banner?.data?.image} />

      <section className="top-cities-slider margin-div">
        <h4 className="normal-heading text-start">Top Cities</h4>

        <section className="generic-slider">
          <Swiper {...topCitiesSwiperConfig}>
            {allCitiesArr.map((item, index) => (
              <SwiperSlide key={index}>
                <RenderTopCityCard item={item} onClickEvent={searchKeyword} />
              </SwiperSlide>
            ))}
            <NavigationComponent />
          </Swiper>
        </section>
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
            {universityArr.map((i, index) => (
              <ShortlistedUniversities key={index} {...i} />
            ))}
            {loading && <LoaderComponent />}
            <div ref={sentryRef}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithLayout(StudyIndia);
