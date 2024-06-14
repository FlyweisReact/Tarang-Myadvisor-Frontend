/** @format */

import React from "react";
import Banner from "../components/Banner/Banner";
import WithLayout from "../Layout/WithLayout";
import { findAdwizorBanner } from "../assest/index";
import { Dropdown } from "antd";

const items = [
  {
    label: (
      <a href="#is" className="antd-link-a">
        Mumbai
      </a>
    ),
    key: "0",
  },

  {
    label: (
      <a href="#is" className="antd-link-a">
        Banglore
      </a>
    ),
    key: "1",
  },

  {
    label: (
      <a href="#is" className="antd-link-a">
        Hyderabad
      </a>
    ),
    key: "2",
  },

  {
    label: (
      <a href="#is" className="antd-link-a">
        Gujrat
      </a>
    ),
    key: "3",
  },
];
const FindAdwizor = () => {
  return (
    <>
      <Banner img={findAdwizorBanner} />
      <div className="find-an-adwizor-filter">
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <button className="base-btn">
            <span>
              <i className="fa-solid fa-location-dot"></i>
              Your City
            </span>
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </Dropdown>
      </div>
    </>
  );
};

export default WithLayout(FindAdwizor);
