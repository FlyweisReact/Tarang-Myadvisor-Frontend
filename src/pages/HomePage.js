/** @format */

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {
  homepageImg,
  adwizorImg1,
  adwizorImg2,
  adwizorImg3,
  adwizorImg4,
  adwizorImg5,
  adwizorImg6,
  howItWorkImg1,
  howItWorkImg2,
  howItWorkImg3,
} from "../assest";
import { Dropdown } from "react-bootstrap";
import TopAdwizors from "../components/TopAdwizors";
import Features from "../components/Features";

const topAdvizors = [
  {
    img: adwizorImg1,
    name: "Subash Mishra",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg2,
    name: "Manisha Roy",
    rating: "9.5/10",
    description: [
      "5+ Years (Civils).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg3,
    name: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg4,
    name: "Subash Mishra",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg5,
    name: "Manisha Roy",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
  {
    img: adwizorImg6,
    name: "Nisha Agarwal",
    rating: "9.5/10",
    description: [
      "3+ Years (Management).",
      "Gujrat , India.",
      "2K+ Students , Helped",
    ],
  },
];

const HomePage = () => {
  return (
    <section className="homepage">
      <Navbar />

      <div className="adwizor-banner">
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
      </div>

      <TopAdwizors data={topAdvizors} />

      <section className="how-it-works">
        <h4 className="heading">How It Works</h4>

        <div className="steps-container">
          <svg
            className="curved-line"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 100 Q 250 0 500 100 T 1000 100"
              fill="transparent"
              stroke="#333"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
          </svg>
          <div className="step-card">
            <img src={howItWorkImg1} alt="" />
            <h3>Find Your Counsellor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis
              odio non magna vulputate at. Et lectus vulputate nisl.
            </p>
          </div>
          <div className="step-card">
            <img src={howItWorkImg2} alt="" />
            <h3> Make An Appointment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis
              odio non magna vulputate at. Et lectus vulputate nisl.
            </p>
          </div>
          <div className="step-card">
            <img src={howItWorkImg3
            } alt="" />
            <h3>Get Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Congue at auctor mattis
              odio non magna vulputate at. Et lectus vulputate nisl.
            </p>
          </div>
        
        </div>
      </section>


      <Features />
    </section>
  );
};

export default HomePage;
