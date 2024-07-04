/** @format */

import React from "react";
import { filterSvg } from "../../assest";
import { Dropdown } from "antd";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";
import {
  countryArr,
  courseArr,
  englishScore,
  programmLevel,
  tutionFess,
  universityCardArr,
} from "../../constant/constant";
import { Slider } from "../../components/Sliders/Sliders";
import {
  topAdwizorsConfig,
  userProgramConfig,
} from "../../components/Sliders/SwiperConfig";
import {
  renderFilterItems,
  renderUniversityCards,
} from "../../components/Sliders/SwiperComponents";
import { AppointmentFloatingBtn } from "../../components/HelpingComponents";

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
            />
          </div>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <button>
              Filters
              <img src={filterSvg} alt="" />
            </button>
          </Dropdown>
        </div>

        <p className="result">2000+ Results & Programs</p>
        <hr />
      </div>

      <div>
        <Slider
          renderSlide={renderFilterItems}
          data={optionsMenu}
          swiperConfig={userProgramConfig}
        />
      </div>
      <div className="university-slider">
        <Slider
          renderSlide={renderUniversityCards}
          data={universityCardArr}
          swiperConfig={topAdwizorsConfig}
        />
      </div>
      <AppointmentFloatingBtn />
    </section>
  );
};

export default DashboardLayout(UserProgramms);
