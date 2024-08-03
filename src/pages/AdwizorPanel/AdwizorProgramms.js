/** @format */

import { Dropdown, Menu } from "antd";
import React, { useState, useCallback, useEffect } from "react";
import { filterSvg } from "../../assest";
import { NearCollegecard } from "../../components/Cards/AllCards";
import { LoaderComponent } from "../../components/HelpingComponents";
import { StudentElegibility } from "../../components/Modals/Modals";
import { Slider } from "../../components/Sliders/Sliders";
import { RenderFilterItems } from "../../components/Sliders/SwiperComponents";
import { userProgramConfig } from "../../components/Sliders/SwiperConfig";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { debouncedSetQuery, pushInArr } from "../../utils/utils";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { programmLevel } from "../../constant/constant";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const AdwizorProgramms = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(200);
  const [visible, setVisible] = useState(false);
  const [showIELTS, setShowIELTS] = useState(false);
  const [showGPA, setShowGPA] = useState(false);
  const [courses, setCourses] = useState({ courses: [] });
  const [allStreams, setAllStreams] = useState({ streams: [] });
  const [allCountries, setAllCountries] = useState({ data: [] });
  const [keyword, setKeyword] = useState([]);
  const [userId, setUserId] = useState("");
  const page = 1;

  const fetchHandler = useCallback(() => {
    getApi(
      endPoints.filterUniversities(keyword.join(","), page, limit, query),
      {
        setResponse: setData,
        setLoading,
      }
    );
  }, [keyword, limit, query]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  useEffect(() => {
    getApi(endPoints.getAllCourse, {
      setResponse: setCourses,
    });
    getApi(endPoints.getAllStreams, {
      setResponse: setAllStreams,
    });
    getApi(endPoints.getAllCountries, {
      setResponse: setAllCountries,
    });
  }, []);

  const universityArr = data.data.map((i) => ({
    id: i?._id,
    img: i?.ImageUrl?.[0],
    collegeName: i?.UniversityName,
    subject: i?.CourseTitle,
    location: i?.location,
    rating: i?.Star,
    description: [
      {
        title: "Campus city",
        desc: i?.campusName,
      },
      {
        title: "Gross tuition fee",
        desc: i?.grossTuition,
      },
      {
        title: "Application fee",
        desc: i?.applicationFee,
      },
      {
        title: "Duration",
        desc: i?.programLength,
      },
      showGPA && {
        title: "GPA Score",
        desc: i?.minGPA,
      },
      ,
      showIELTS && {
        title: "IELTS Score",
        desc: i?.IELTS,
      },
    ],
  }));

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
    if (limit === data?.totalResults || limit < data?.totalResults) {
      setLimit(limit + 100);
    }
  }, 500);

  const hasMore = data?.totalResults > limit;
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    disabled: loading,
  });

  const handleMenuClick = ({ key }) => {
    if (key === "3") {
      setVisible(false);
    }
  };

  const items = [
    {
      label: (
        <div className="user-homepage-filter-heading">
          <p>Filters</p>
          <i
            className="fa-regular fa-circle-xmark"
            onClick={() => setVisible(false)}
          ></i>
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className="user-homepage-filter-input-container">
          <input type="checkbox" onChange={() => setShowGPA(!showGPA)} />
          <p>Show GPA Score</p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="user-homepage-filter-input-container">
          <input type="checkbox" onChange={() => setShowIELTS(!showIELTS)} />
          <p>Show IELTS Score</p>
        </div>
      ),
      key: "2",
    },
  ];

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const searchKeyword = (item) => {
    pushInArr(item, setKeyword);
  };

  // ---
  const optionsMenu = [
    {
      title: "Destination",
      items: allCountries.data.map((city, index) => ({
        label: (
          <a href={`#${city.ContryName}`} className="antd-link-a">
            {city.ContryName}
          </a>
        ),
        key: index.toString(),
      })),
      setValue: searchKeyword,
      caretIcon: true,
    },
    {
      title: "Program Level",
      items: programmLevel?.map((city, index) => ({
        label: (
          <a href={`#${city}`} className="antd-link-a">
            {city}
          </a>
        ),
        key: index.toString(),
      })),
      caretIcon: true,
      setValue: searchKeyword,
    },
    {
      title: "Course",
      items: courses?.courses?.map((city, index) => ({
        label: (
          <a href={`#${city.courseName}`} className="antd-link-a">
            {city?.courseName}
          </a>
        ),
        key: index.toString(),
      })),
      caretIcon: true,
      setValue: searchKeyword,
    },
    {
      title: "Streams",
      items: allStreams?.streams?.map((city, index) => ({
        label: (
          <a href={`#${city.streamName}`} className="antd-link-a">
            {city?.streamName}
          </a>
        ),
        key: index.toString(),
      })),
      caretIcon: true,
      setValue: searchKeyword,
    },
  ];

  return (
    <section className="adwizor-panel">
      <StudentElegibility
        show={show}
        onHide={() => setShow(false)}
        setUserId={setUserId}
      />
      <section className="user-homePage mt-2  with-bg-img">
        <div className="heading">
          <p>Program & School</p>
        </div>

        <div className="filter-div-container">
          <div className="filteration-div">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type={"search"}
                placeholder="Search for Program , School & Other Keywords"
                onChange={(e) => debouncedSetQuery(e.target.value, setQuery)}
              />
            </div>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              visible={visible}
              onVisibleChange={(flag) => setVisible(flag)}
            >
              <button>
                Filters
                <img src={filterSvg} alt="" />
              </button>
            </Dropdown>
          </div>

          <div className="select-student-container">
            <p className="result"> {data?.data?.length}+ Results & Programs</p>
            <button onClick={() => setShow(true)}>Select Student</button>
          </div>
          <hr />
        </div>

        <div>
          <Slider
            RenderSlide={RenderFilterItems}
            data={optionsMenu}
            swiperConfig={userProgramConfig}
          />
        </div>

        <div className="top-colleges p-4">
          <div className="grid-container-for-4">
            {universityArr.map((i, index) => (
              <NearCollegecard
                key={`college${index}`}
                item={i}
                isUser={false}
                userId={userId}
              />
            ))}
          </div>
        </div>
        {loading && <LoaderComponent />}
        <div ref={sentryRef}></div>
      </section>
    </section>
  );
};

export default DashboardLayout(AdwizorProgramms);
