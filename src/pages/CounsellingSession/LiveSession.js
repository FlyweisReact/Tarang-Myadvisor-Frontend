/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  liveSessionImg1,
  liveSessionImg2,
  liveSessionImg3,
  liveSessionImg4,
} from "../../assest/index";
import TouristImage from "../../components/TouristImg/TouristImage";

const Item = [
  {
    img: liveSessionImg1,
    title: "Free Profile Education",
  },
  {
    img: liveSessionImg2,
    title: "Get a University Shortlist",
  },
  {
    img: liveSessionImg3,
    title: "Live Q&A with an Expert",
  },
];

const LiveSession = () => {
  const navigate = useNavigate();
  return (
    <section className="choose-destination-page">
      <div className="page-head">
        <button className="skipBtns" type="button" onClick={() => navigate(-1)}>
          {" "}
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
        <div>
          <h2 className="bold-text">Live Counselling Sessions</h2>
          <h3>With My Adwizor study abroad expert</h3>
        </div>
        <button className="skipBtns">
          SKIP <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="live-session-cards">
        {Item.map((i, index) => (
          <div className="Item" key={index}>
            <img src={i.img} alt="" />
            <p className="title"> {i.title} </p>
          </div>
        ))}
      </div>

      <button className="join-live-session-btn">
        <p>Join Live Session</p> <img src={liveSessionImg4} alt="" />
      </button>

      <div className="live-session-or">
        <div className="blank"></div>
        <p>OR</p>
        <div className="blank"></div>
      </div>

      <div className="choose-from-options-page mt-0">
        <h4>Book a Session for later today</h4>
        <div className="preferred-btn-container">
          <button className="active">12:30</button>
          <button>1:00PM</button>
          <button>1:30PM</button>
        </div>
        <button
          className="continue mt-4"
          onClick={() => navigate("/counselling-session/live-2")}
        >
          Book Slot
        </button>
        <button
          className="continue bordered"
          onClick={() => navigate("/counselling-session/live-2")}
        >
          Book a Session for later today
        </button>
      </div>
      <TouristImage />
    </section>
  );
};

export default LiveSession;
