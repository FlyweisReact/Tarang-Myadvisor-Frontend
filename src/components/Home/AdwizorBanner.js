/** @format */

import React from "react";
import { Dropdown } from "react-bootstrap";
import { homepageImg } from "../../assest/index";

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
            <Dropdown>
              <Dropdown.Toggle variant="none">
                <i className="fa-solid fa-location-dot"></i>
                City
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Mumbai</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Banglore</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Hyderabad</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Gujrat</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="none">
                <i className="fa-solid fa-earth-americas"></i>
                Study Destination
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                <Dropdown.Item href="#/action-1">USA</Dropdown.Item>
                <Dropdown.Item href="#/action-1">UK</Dropdown.Item>
                <Dropdown.Item href="#/action-1">German</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="none">
                <i className="fa-solid fa-book"></i>
                Subject
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">MS</Dropdown.Item>
                <Dropdown.Item href="#/action-1">MBA</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Engineering</Dropdown.Item>
                <Dropdown.Item href="#/action-1">MBBS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
