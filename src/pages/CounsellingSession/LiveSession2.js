/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerifyOtpModal from "../../components/Modals/VerifyOtpModal";
import { TouristImage } from "../../components/HelpingComponents";

const Item = [
  {
    day: "MON",
    date: "09",
    month: "May 2024",
    status: "active",
  },
  {
    day: "TUE",
    date: "10",
    month: "May 2024",
  },
  {
    day: "WED",
    date: "11",
    month: "May 2024",
  },
  {
    day: "THU",
    date: "12",
    month: "May 2024",
  },
  {
    day: "FRI",
    date: "13",
    month: "May 2024",
  },
  {
    day: "SAT",
    date: "14",
    month: "May 2024",
  },
  {
    day: "SUN",
    date: "15",
    month: "May 2024",
  },
];

const Item2 = [
  {
    time: "12:30",
    title: "Available",
    status: "active",
  },
  {
    time: "1:00",
    title: "Not Available",
  },
  {
    time: "1:30",
    title: "Available",
  },
  {
    time: "2:00",
    title: "Available",
  },

  {
    time: "2:30",
    title: "Available",
  },
  {
    time: "3:00",
    title: "Available",
  },
  {
    time: "3:30",
    title: "Available",
  },
  {
    time: "4:00",
    title: "Available",
  },
];

const LiveSession2 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <VerifyOtpModal show={open} onHide={() => setOpen(false)} link={"/"} />
      <section className="choose-destination-page">
        <div className="page-head">
          <button
            className="skipBtns"
            type="button"
            onClick={() => navigate(-1)}
          >
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

        <div className="live-session-date-selector">
          {Item.map((i, index) => (
            <div
              className={`Item ${i.status === "active" ? "active" : ""} `}
              key={index}
            >
              <p> {i.day} </p>
              <p> {i.date} </p>
              <p> {i.month} </p>
            </div>
          ))}
        </div>

        <div className="live-session-select-timing">
          <h4 className="title">Select Timing </h4>

          <div className="grid-container">
            {Item2.map((i, index) => (
              <div
                className={`item ${i.status === "active" ? "active" : ""}`}
                key={`Time${index}`}
              >
                <p className="time"> {i.time} </p>
                <p
                  className={`status ${
                    i.title === "Not Available" ? "red" : ""
                  } `}
                >
                  {" "}
                  {i.title}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="choose-from-options-page mt-0">
          <button className="continue mt-4" onClick={() => setOpen(true)}>
            Confirm Slot
          </button>
        </div>
        <TouristImage />
      </section>
    </>
  );
};

export default LiveSession2;
