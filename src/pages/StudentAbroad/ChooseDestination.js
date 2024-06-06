/** @format */

import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { autraliaFlag, canadaFlag, ukFlag, usaFlag } from "../../assest/index";
import TouristImage from "../../components/TouristImg/TouristImage";
import LoginModal from "../../components/Modals/LoginModal";
import { useNavigate } from "react-router-dom";

const options = [
  {
    img: autraliaFlag,
    title: "Australia",
  },
  {
    img: canadaFlag,
    title: "Canada",
  },
  {
    img: usaFlag,
    title: "USA",
  },
  {
    img: ukFlag,
    title: "UK",
  },
];

const ChooseDestination = () => {
  const [item, setItem] = useState("Australia");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <LoginModal show={open} onHide={() => setOpen(false)} />
      <section className="choose-destination-page">
        <ProgressBar />
        <div className="page-head">
          <button
            className="skipBtns"
            type="button"
            onClick={() => setOpen(true)}
          >
            {" "}
            <i className="fa-solid fa-arrow-left"></i>Back
          </button>
          <h3>
            We would love to know more about your <br /> study abroad path
          </h3>
          <button className="skipBtns">
            SKIP <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="choose-from-options-page">
          <h4>Chooose Your Destination </h4>
          <div className="cards">
            {options?.map((i, index) => (
              <div
                className={`Item ${i.title === item ? "active" : ""} `}
                key={index}
                onClick={() => setItem(i.title)}
              >
                <img src={i.img} alt="" />
                <p className="title"> {i.title} </p>
              </div>
            ))}
          </div>

          <button
            className="continue"
            onClick={() =>
              navigate("/student-abroad-journery/preffered-intake")
            }
          >
            Continue
          </button>
        </div>
        <TouristImage />
      </section>
    </>
  );
};

export default ChooseDestination;
