/** @format */

import React, { useState, useCallback, useEffect } from "react";
import { filterSvg } from "../../assest";
import { Dropdown } from "antd";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import {
  countryArr,
  courseArr,
  englishScore,
  programmLevel,
  tutionFess,
} from "../../constant/constant";
import { Slider } from "../../components/Sliders/Sliders";
import {
  topAdwizorsConfig,
  userProgramConfig,
} from "../../components/Sliders/SwiperConfig";
import {
  RenderFilterItems,
  RenderUniversityCards,
} from "../../components/Sliders/SwiperComponents";
import {
  AppointmentFloatingBtn,
  LoaderComponent,
} from "../../components/HelpingComponents";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { debouncedSetQuery } from "../../utils/utils";

const items = [
  {
    label: (
      <>
        <div className="user-homepage-filter-heading">
          <p>Filters</p>
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
      </>
    ),
    key: "4",
  },
  {
    label: (
      <>
        <div className="user-homepage-filter-input-container">
          <input type={"checkbox"} />
          <p>Show Commisions</p>
        </div>
      </>
    ),
    key: "0",
  },
  {
    label: (
      <>
        <div className="user-homepage-filter-input-container">
          <input type={"checkbox"} />
          <p>Show GPA Score</p>
        </div>
      </>
    ),
    key: "1",
  },
  {
    label: (
      <>
        <div className="user-homepage-filter-input-container">
          <input type={"checkbox"} />
          <p>Show IELTS Score</p>
        </div>
      </>
    ),
    key: "2",
  },
  {
    label: (
      <button className="user-homepage-filter-apply-btn mt-1 mb-1">
        Apply Filters
      </button>
    ),
    key: "3",
  },
];

const optionsMenu = [
  {
    title: "Destination",
    items: countryArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),

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
  },
  {
    title: "Course",
    items: courseArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    caretIcon: true,
  },
  {
    title: "English Score",
    items: englishScore?.map((city, index) => ({
      label: (
        <>
          <div className="antd-english-score" key={`english${index}`}>
            <p> {city} </p>
            <input type="text" />
          </div>
        </>
      ),
      key: index.toString(),
    })),
    caretIcon: true,
  },
  {
    title: "Tution Fees",
    items: tutionFess?.map((city, index) => ({
      label: (
        <>
          <div className="user-homepage-filter-input-container">
            <input type={"checkbox"} />
            <p> {city} </p>
          </div>
        </>
      ),
      key: index.toString(),
    })),
    caretIcon: true,
  },
  {
    title: "Destination",
    items: countryArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),

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
  },
  {
    title: "Course",
    items: courseArr?.map((city, index) => ({
      label: (
        <a href={`#${city}`} className="antd-link-a">
          {city}
        </a>
      ),
      key: index.toString(),
    })),
    caretIcon: true,
  },
  {
    title: "English Score",
    items: englishScore?.map((city, index) => ({
      label: (
        <>
          <div className="antd-english-score" key={`english${index}`}>
            <p> {city} </p>
            <input type="text" />
          </div>
        </>
      ),
      key: index.toString(),
    })),
    caretIcon: true,
  },
  {
    title: "Tution Fees",
    items: tutionFess?.map((city, index) => ({
      label: (
        <>
          <div className="user-homepage-filter-input-container">
            <input type={"checkbox"} />
            <p> {city} </p>
          </div>
        </>
      ),
      key: index.toString(),
    })),
    caretIcon: true,
  },
];

const UserProgramms = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const page = 1;
  const limit = 200;

  const fetchHandler = useCallback(() => {
    getApi(endPoints.filterUniversities(query, page, limit), {
      setResponse: setData,
      setLoading,
    });
  }, [query]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const universityArr =
    data?.data?.length > 0
      ? data?.data?.map((i) => ({
          id: i?._id,
          img: i?.ImageUrl?.[0],
          collegeName: i?.UniversityName,
          subject: i?.CourseTitle,
          description: [
            {
              title: "Location",
              desc: i?.location,
            },
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
              desc: `$${i?.applicationFee}`,
            },
            {
              title: "Duration",
              desc: i?.programLength,
            },
          ],
        }))
      : [];

  return (
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
          <Dropdown menu={{ items }} trigger={["click"]}>
            <button>
              Filters
              <img src={filterSvg} alt="" />
            </button>
          </Dropdown>
        </div>

        <p className="result"> {data?.data?.length}+ Results & Programs</p>
        <hr />
      </div>

      <div>
        <Slider
          RenderSlide={RenderFilterItems}
          data={optionsMenu}
          swiperConfig={userProgramConfig}
        />
      </div>
      {loading === true ? (
        <LoaderComponent />
      ) : (
        <div className="university-slider">
          <Slider
            RenderSlide={RenderUniversityCards}
            data={universityArr}
            swiperConfig={topAdwizorsConfig}
          />
        </div>
      )}

      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserProgramms);
